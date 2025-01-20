import ConanProgress from "../system/ConanProgress.mjs";

export default class CharacterUpgrade extends FormApplication {
	constructor(object={}, options={}) {
		super(object, options);
		this.actor = object;
	}


	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "character-upgrade"],
			template: "systems/conan2d20/templates/apps/character-upgrade.hbs",
			width: 580,
			height: "auto",
			resizable: true,
			submitOnChange: false,
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-content",
					initial: "attributes",
				},
			],
		});
	}


	get actorData() {
		return this.actor.system;
	}


	get availableXp() {
		return this.actor.system.resources.xp.available;
	}


	get title() {
		return `${game.i18n.localize("CONAN.CharacterUpgrade.title")} [${this.actor.name}]`;
	}


	/** @inheritdoc */
	activateListeners(html) {
		html.find(".purchase-talent-link").click(event => this._onPurchaseTalent(event));
		html.find(".upgrade-attribute-link").click(event => this._onUpgradeAttribute(event));
		html.find(".upgrade-skill-link").click(event => this._onUpgradeSkill(event));

		return super.activateListeners(html);
	}


	async getData(options) {
		const progress = new ConanProgress(8);
		const data = super.getData(options);
		progress.advance();

		data.availableTalents = await this.actor.talentManager.getPurchasableTalents();
		progress.advance();

		data.attributes = await this.getAttributeUpgradeData();
		progress.advance();
		data.skills = await this.getSkillUpgradeData();
		progress.advance();
		data.skillLabels = CONFIG.CONAN.skills;
		progress.advance();
		data.availableXp = this.availableXp;
		progress.advance();
		data.talentsAvailable = data.availableTalents.size > 0;
		progress.advance();
		data.logEntries = await this._parseLogEntries();
		progress.finished();

		return data;
	}


	async getAttributeUpgradeData() {
		const attributes = [];
		for (const id in this.actor.system.attributes) {
			const value = this.actor.system.attributes[id].value;

			const attribute = {
				id: id,
				label: CONFIG.CONAN.attributeLabels[id],
				value,
				newValue: value + 1,
				cost: (value + 1) * 100,
				canUpgrade: true,
				atMaximum: false,
			};

			if (attribute.cost > this.availableXp) attribute.canUpgrade = false;

			if (value >= 14) {
				attribute.canUpgrade = false;
				attribute.atMaximum = true;
			}

			attributes.push(attribute);
		}

		attributes.sort((a, b) => a.label.localeCompare(b.label));

		return attributes;
	}


	async getSkillUpgradeData() {
		const skills = [];
		for (const id in this.actor.system.skills) {
			const skill = foundry.utils.duplicate(this.actor.system.skills[id]);

			skill.id = id;
			skill.label = CONFIG.CONAN.skills[id];

			for (const valueType of ["expertise", "focus"]) {
				const value = skill[valueType].value;
				const cost = (value + 1) * 200;

				skill[valueType].newValue = value + 1;
				skill[valueType].cost = cost;
				skill[valueType].canUpgrade = value < 5 && cost <= this.availableXp;
				skill[valueType].atMaximum = value === 5;
			}

			skills.push(skill);
		}

		skills.sort((a, b) => a.label.localeCompare(b.label));

		return skills;
	}


	async _confirmXpPurchase(message, callback) {
		new Dialog({
			title: `${game.i18n.localize("CONAN.CharacterUpgrade.ConfirmXpSpend.label")}`,
			content: message,
			buttons: {
				Yes: {
					icon: "<i class=\"fa fa-check\"></i>",
					label: `${game.i18n.localize("CONAN.popupAcceptButton")}`,
					callback,
				},
				Cancel: {
					icon: "<i class=\"fa fa-times\"></i>",
					label: `${game.i18n.localize("CONAN.popupDeclineButton")}`,
				},
			},
			default: "Yes",
		}).render(true);
	}


	_createLogMessage(type, cost, data) {
		const date = new Date().toISOString();
		return `${date}|${type}|${cost}|${data}`;
	}


	async _onPurchaseTalent(event) {
		event.preventDefault();

		const talentIdentifier = event.currentTarget.dataset.id;
		const newRank = event.currentTarget.dataset.rank;

		const isFortuneTalent = talentIdentifier.startsWith("fortune::");
		const isSkillTalent = talentIdentifier.startsWith("skill_");

		const currentTalent = this.actor.items.filter(
			i => i.type === "talent"
		).find(
			t => t.system.talentIdentifier === talentIdentifier
		);

		let talent;
		if (isFortuneTalent) {
			talent = (await conan.compendiums.fortuneTalents()).find(
				t => t.system.talentIdentifier === talentIdentifier
			);
		}
		else {
			talent = (await conan.compendiums.skillTalents()).find(
				t => t.system.talentIdentifier === talentIdentifier
			);
		}

		const talentName = talent.system.multiRank
			? `${talent.name} (Rank ${newRank})`
			: talent.name;

		const actorSkill = isSkillTalent
			? this.actor.system.skills[talent.system.linkedSkill]
			: "";

		const discount = isSkillTalent
			? Number(actorSkill.focus.value) * 25
			: 0;

		const cost = Number(talent.system.cost) - discount;

		if (cost <= this.availableXp) {
			const newSpent = this.actor.system.resources.xp.spent + cost;

			const updateData = {
				"system.resources.xp.spent": newSpent,
			};

			const message = game.i18n.format(
				"CONAN.CharacterUpgrade.ConfirmXpSpend.talent",
				{
					cost,
					name: talentName,
				}
			);

			const me = this;

			return this._confirmXpPurchase(`<p>${message}</p>`, async () => {
				let logMessage;

				if (currentTalent) {
					await me.actor.updateEmbeddedDocuments("Item", [
						{
							_id: currentTalent._id,
							"system.rank.value": Number(newRank),
						},
					]);

					logMessage = this._createLogMessage(
						"talentRank",
						cost,
						`${currentTalent.link}|${newRank - 1}|${newRank}`
					);
				}
				else {
					const newTalent = (await fromUuid(talent.uuid)).toObject();

					newTalent["system.rank.value"] = Number(newRank);

					const [newTalentItem] =
						await me.actor.createEmbeddedDocuments("Item", [newTalent]);

					logMessage = this._createLogMessage(
						"talent",
						cost,
						newTalentItem.link
					);
				}


				await me._updateActor(updateData, logMessage);
			});
		}
		else {
			return ui.notifications.warn(game.i18n.localize("CONAN.CharacterUpgrade.Error.NotEnoughExperience"));
		}
	}


	async _onUpgradeAttribute(event) {
		event.preventDefault();

		const attribute = event.currentTarget.dataset.id;
		const newValue = event.currentTarget.dataset.value;

		const cost = newValue * 100;

		if (cost <= this.availableXp) {
			const newSpent = this.actor.system.resources.xp.spent + cost;

			const updateData = {
				"system.resources.xp.spent": newSpent,
			};

			updateData[`system.attributes.${attribute}.value`] = Number(newValue);

			const attributeName = CONFIG.CONAN.attributeLabels[attribute];
			const message = game.i18n.format(
				"CONAN.CharacterUpgrade.ConfirmXpSpend.attribute",
				{
					cost,
					name: attributeName,
					value: newValue,
				}
			);

			const me = this;

			return this._confirmXpPurchase(`<p>${message}</p>`, async () => {
				const logMessage = this._createLogMessage(
					"attribute",
					cost,
					`${attributeName}|${newValue - 1}|${newValue}`
				);

				await me._updateActor(updateData, logMessage);
			});
		}
		else {
			return ui.notifications.warn(game.i18n.localize("CONAN.CharacterUpgrade.Error.NotEnoughExperience"));
		}
	}


	async _updateActor(updateData, logMessage) {
		const logMessages = this.actorData?.resources?.xp?.log ?? [];
		logMessages.push(logMessage);

		updateData["system.resources.xp.log"] = logMessages;

		await this.actor.update(updateData);
	}


	async _onUpgradeSkill(event) {
		event.preventDefault();

		const skill = event.currentTarget.dataset.id;
		const newValue = event.currentTarget.dataset.value;
		const type = event.currentTarget.dataset.type;

		const cost = newValue * 200;

		if (cost <= this.availableXp) {
			const newSpent = this.actor.system.resources.xp.spent + cost;

			const updateData = {
				"system.resources.xp.spent": newSpent,
			};

			updateData[`system.skills.${skill}.${type}.value`] = Number(newValue);

			const skillName = CONFIG.CONAN.skills[skill];

			const message = game.i18n.format(
				`CONAN.CharacterUpgrade.ConfirmXpSpend.${type}`,
				{
					cost,
					name: skillName,
					value: newValue,
				}
			);

			const me = this;

			return this._confirmXpPurchase(`<p>${message}</p>`, async () => {
				const logMessage = this._createLogMessage(
					type,
					cost,
					`${skillName}|${newValue - 1}|${newValue}`
				);

				await me._updateActor(updateData, logMessage);
			});
		}
		else {
			return ui.notifications.warn(game.i18n.localize("CONAN.CharacterUpgrade.Error.NotEnoughExperience"));
		}
	}


	async _parseLogEntries() {
		const parsedLogEntries = [];

		let index = -1;
		for (const entry of (this.actorData.resources?.xp?.log ?? [])) {
			index++;
			const fields = entry.split("|");

			const date = new Date(fields.shift());
			const type = fields.shift();
			const spend = Number(fields.shift());

			const parsedEntry = {
				canDelete: false,
				date,
				dateString: date.toLocaleString(),
				index,
				spend,
				type,
			};

			let message;
			switch (parsedEntry.type) {
				case "talent":
					message = game.i18n.format(
						"CONAN.CharacterUpgrade.LogEntry.talent",
						{ talent: fields.shift() }
					);
					break;
				case "talentRank":
					message = game.i18n.format(
						"CONAN.CharacterUpgrade.LogEntry.talentRank",
						{
							talent: fields.shift(),
							from: fields.shift(),
							to: fields.shift(),
						}
					);
					break;
				case "attribute":
				case "expertise":
				case "focus":
					message = game.i18n.format(
						`CONAN.CharacterUpgrade.LogEntry.IncreaseValue.${parsedEntry.type}`,
						{
							name: fields.shift(),
							from: fields.shift(),
							to: fields.shift(),
						}
					);
					break;
			}

			parsedEntry.message = await TextEditor.enrichHTML(
				message,
				{
					async: true,
				}
			);

			parsedLogEntries.push(parsedEntry);
		}

		if (parsedLogEntries.length > 0) {
			parsedLogEntries.sort((a, b) => b.date.getTime() - a.date.getTime());
			parsedLogEntries[0].canDelete = true;
		}

		return parsedLogEntries;
	}

}
