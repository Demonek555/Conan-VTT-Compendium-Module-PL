export default class ConanBaseItemSheet extends ItemSheet {

	/** @inheritdoc */
	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: options.classes.concat(["conan2d20", "item", "sheet"]),
			width: 700,
			height: 505,
			template: "systems/conan2d20/templates/items/item-sheet.hbs",
			resizable: false,
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-body",
					initial: "description",
				},
			],
			scrollY: [
				".requirement-table",
			],
		});
		return options;
	}

	/** @inheritdoc */
	get title() {
		return `[${this.item.type}] ${this.item.name}`;
	}

	/**
	 * Deletes an Item/Skill choice from this item, using the data stored
	 * on the target element
	 *
	 * @param {event} Event The triggered event
	 */
	_deleteChoiceItem(event) {
		if (!this.isEditable) return;

		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");
		const choicesKey = $(event.currentTarget).data("choices-key");

		const currentChoices = this.item.system[choicesKey].choices ?? [];

		const newChoices = [];
		for (const itemUuid of currentChoices) {
			if (itemUuid === deleteUuid) continue;
			newChoices.push(itemUuid);
		}

		const dataKey = `system.${choicesKey}.choices`;
		this.item.update({[dataKey]: newChoices});
	}

	/** @inheritdoc */
	_getHeaderButtons() {
		let buttons = super._getHeaderButtons();

		// Add "Post to chat" button
		buttons = [
			{
				label: "Post",
				class: "post",
				icon: "fas fa-comment",
				onclick: ev => this.item.postItem(ev),
			},
		].concat(buttons);

		return buttons;
	}

	_onAddTalentRequirement(event) {
		if (!this.isEditable) return;

		event.preventDefault();
		event.stopPropagation();

		new conan.apps.TalentRequirementEditor(this.item).render(true);
	}

	/** @inheritdoc */
	async _onChangeInput(event) {
		const choicesKey = $(event.currentTarget).data("choices-key");
		const isItem = $(event.currentTarget).data("is-item") === "true";

		// We only have to do something special if we're handling a multi-choice
		// datalist
		//
		if (event.target.list && choicesKey) {
			const options = event.target.list.options;
			const value = event.target.value;

			let uuid = null;
			for (const option of options) {
				if (option.value === value) {
					uuid = option.getAttribute("data-uuid");
					break;
				}
			}

			if (uuid === null) return;

			const currentChoices = this.item.system[choicesKey].choices ?? [];

			if (currentChoices.includes(uuid)) return; // No duplicates

			currentChoices.push(uuid);

			const choiceItems = [];
			for (const itemUuid of currentChoices) {
				if (isItem) {
					choiceItems.push(await fromUuid(itemUuid));
				}
				else {
					choiceItems.push(itemUuid);
				}
			}

			if (isItem) {
				choiceItems.sort((a, b) => a.name.localeCompare(b.name));
			}
			else {
				choiceItems.sort((a, b) => a.localeCompare(b));
			}

			const sortedChoiceUuids = isItem
				? choiceItems.map(item => item.uuid)
				: choiceItems;

			return this.item.update({[event.target.name]: sortedChoiceUuids});
		}

		return this._onSubmit(event);
	}

	async _onDeleteTalentRequirement(event) {
		if (this.item.type !== "talent") return;

		event.preventDefault();
		event.stopPropagation();

		const requirementIndex = Number(
			event.currentTarget.getAttribute("data-requirement-index")
		);

		if (Number.isInteger(requirementIndex)) {
			const requirements = this.item?.system?.requirements ?? [];
			const newRequirements = [];
			for (let i = 0; i < requirements.length; i++) {
				if (i === requirementIndex) continue;
				newRequirements.push(requirements[i]);
			}

			this.item.update({"system.requirements": newRequirements});
		}
	}

	async _onEditTalentRequirement(event) {
		if (this.item.type !== "talent") return;

		event.preventDefault();
		event.stopPropagation();

		const editIndex = Number(
			event.currentTarget.getAttribute("data-requirement-index")
		);

		if (Number.isInteger(editIndex)) {
			new conan.apps.TalentRequirementEditor(this.item, {editIndex}).render(true);
		}
	}

	/** @inheritdoc */
	_onSubmit(event) {
		switch (this.item.type) {
			case "archetype": {
				const updateData = this._getSubmitData();

				delete updateData["system.careerSkill.choices"];
				delete updateData["system.electiveSkill.choices"];
				delete updateData["system.mandatorySkill.choices"];
				delete updateData["system.careerTalent.choices"];

				this.item.update(updateData);
				break;
			}
			case "aspect": {
				const updateData = this._getSubmitData();

				delete updateData["system.mandatoryAttribute.choices"];
				delete updateData["system.optionalAttribute.choices"];

				this.item.update(updateData);
				break;
			}
			case "caste": {
				const updateData = this._getSubmitData();

				delete updateData["system.story.choices"];
				delete updateData["system.talent.choices"];

				this.item.update(updateData);
				break;
			}
			case "education": {
				const updateData = this._getSubmitData();

				delete updateData["system.electiveSkill.choices"];
				delete updateData["system.mandatorySkill.choices"];

				this.item.update(updateData);
				break;
			}
			case "homeland": {
				const updateData = this._getSubmitData();

				delete updateData["system.language.choices"];
				delete updateData["system.talent.choices"];

				this.item.update(updateData);
				break;
			}
			case "nature": {
				const updateData = this._getSubmitData();

				delete updateData["system.electiveSkill.choices"];
				delete updateData["system.mandatorySkill.choices"];

				this.item.update(updateData);
				break;
			}
			case "npcattack": {
				const updateData = this._getSubmitData();

				if (updateData["system.attackType"] === "threaten") {
					updateData["system.damage.type"] = "mental";
				}
				else {
					updateData["system.damage.type"] = "physical";
				}

				this.item.update(updateData);
				break;
			}
			case "warstory": {
				const updateData = this._getSubmitData();

				delete updateData["system.skills.choices"];

				this.item.update(updateData);
				break;
			}
			default:
				super._onSubmit(event);
		}
	}

	/** @inheritdoc */
	activateListeners(html) {
		// add row to spell alternate effects
		html.find(".alt-row-add").click(event => this.insertAltRow(event));

		// delete row from spell alternate effects
		html.find(".alt-row-delete").click(event => this.deleteAltRow(event));

		html.find(".delete-choice").click(event => this._deleteChoiceItem(event));

		// save checkbox changes
		html.find("input[type=\"checkbox\"]").change(event => this._onSubmit(event));

		// activate trait selector
		html.find(".trait-selector").click(event => this.onTraitSelector(event));

		// add row to spell momentum spends
		html.find(".spend-row-add").click(event => this.insertSpendRow(event));

		// delete row from spell momentum spends
		html.find(".spend-row-delete").click(event => this.deleteSpendRow(event));

		html.find(".add-talent-requirement").click(event => this._onAddTalentRequirement(event));
		html.find(".item-delete-requirement").click(event => this._onDeleteTalentRequirement(event));
		html.find(".item-edit-requirement").click(event => this._onEditTalentRequirement(event));

		super.activateListeners(html);
	}

	deleteAltRow(_event) {
		try {
			const table = document.getElementById("altEffects");
			const toDelete = table.rows.length - 1;
			const key = `system.effects.alternative.-=${[toDelete]}`;
			this.item.update({[key]: null});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	deleteSpendRow(_event) {
		try {
			const table = document.getElementById("spellSpends");
			const toDelete = table.rows.length - 1;
			const key = `system.effects.momentum.-=${[toDelete]}`;
			this.item.update({[key]: null});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	/** @inheritdoc */
	async getData(options) {
		const data = await super.getData(options);

		const {type} = this.item;

		foundry.utils.mergeObject(data, {
			CONFIG: CONFIG.CONAN,
			detailsTemplate: () => `items/${type}-details`,
			requirementsTemplate: () => `items/${type}-requirements`,
			sidebarTemplate: () => `items/${type}-sidebar`,
			hasNoDetails: [
				"language",
				"miscellaneous",
			].includes(type),
			hasRequirements: type === "talent",
			hasSidebar: [
				"armor",
				"kit",
				"miscellaneous",
				"transportation",
				"weapon",
			].includes(type),
		});

		data.descriptionHTML = await TextEditor.enrichHTML(
			this.item.system.description.value,
			{
				async: true,
			}
		);

		switch (type) {
			case "archetype": await this.getArchetypeConfigs(data); break;
			case "aspect": await this.getBackgroundAttributeConfigs(data); break;
			case "caste": await this.getCasteData(data); break;
			case "education": await this.getBackgroundSkillConfigs(data); break;
			case "homeland": await this.getHomelandData(data); break;
			case "nature": await this.getBackgroundSkillConfigs(data); break;
			case "talent": await this.getTalentData(data); break;
			case "warstory": await this.getSkillsConfig(data); break;
		}

		return data;
	}

	/**
	 * Creates the configurations required for some classes of items which
	 * have both Mandatory Skills and Elective Skill choices
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getArchetypeConfigs(data) {
		await this.getBackgroundSkillConfigs(data);

		// Elective Skills
		//
		const [selectedCareerSkills, availableCareerSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.careerSkill.choices ?? []
			);

		data.careerSkillsConfig = {
			availableItems: availableCareerSkills,
			choicesKey: "careerSkill",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.CareerSkill.label"),
			name: "system.careerSkill.choices",
			prompt: game.i18n.localize("CONAN.Item.CareerSkill.prompt"),
			selectedItems: selectedCareerSkills,
		};

		const [selectedTalents, availableTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.skillTalents(false),
				this.item.system.careerTalent.choices ?? []
			);

		data.careerTalentConfig = {
			availableItems: availableTalents,
			choicesKey: "careerTalent",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Archetype.CareerTalent.label"),
			name: "system.careerTalent.choices",
			prompt: game.i18n.localize("CONAN.Item.Archetype.CareerTalent.prompt"),
			selectedItems: selectedTalents,
		};
	}

	/**
	 * Creates configurations data required for caste item sheets
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getCasteData(data) {
		// Caste Talents
		const [selectedTalents, availableTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.casteTalents(false),
				this.item.system.talent.choices ?? []
			);

		data.casteTalentConfig = {
			availableItems: availableTalents,
			choicesKey: "talent",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Caste.Talents.label"),
			name: "system.talent.choices",
			prompt: game.i18n.localize("CONAN.Item.Caste.Talents.prompt"),
			selectedItems: selectedTalents,
		};

		// Caste Stories
		const [selectedStories, availableStories] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.stories(false),
				this.item.system.story.choices ?? []
			);

		data.casteStoriesConfig = {
			availableItems: availableStories,
			choicesKey: "story",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Caste.Stories.label"),
			name: "system.story.choices",
			prompt: game.i18n.localize("CONAN.Item.Caste.Stories.prompt"),
			selectedItems: selectedStories,
		};
	}

	/**
	 * Creates configurations data required for homeland item sheets
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getHomelandData(data) {
		// Homeland Talents
		const [selectedTalents, availableTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.homelandTalents(false),
				this.item.system.talent.choices ?? []
			);

		data.homelandTalentConfig = {
			availableItems: availableTalents,
			choicesKey: "talent",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Homeland.Talents.label"),
			name: "system.talent.choices",
			prompt: game.i18n.localize("CONAN.Item.Homeland.Talents.prompt"),
			selectedItems: selectedTalents,
		};

		// Homeland Languages
		const [selectedLanguages, availableLanguages] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.languages(false),
				this.item.system.language.choices ?? []
			);

		data.homelandLanguageConfig = {
			availableItems: availableLanguages,
			choicesKey: "language",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Homeland.Languages.label"),
			name: "system.language.choices",
			prompt: game.i18n.localize("CONAN.Item.Homeland.Languages.prompt"),
			selectedItems: selectedLanguages,
		};
	}

	/**
	 * Creates the configurations required for some classes of items which
	 * have both Mandatory and Optional Attribute choices
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getBackgroundAttributeConfigs(data) {
		// Optional Attributes
		//
		const [selectedOptionalAttributes, availableOptionalAttributes] =
			conan.utils.getDedupedSelectedAttributes(
				CONFIG.CONAN.sortedAttributes,
				this.item.system.optionalAttribute.choices ?? []
			);

		data.optionalAttributesConfig = {
			availableItems: availableOptionalAttributes,
			choicesKey: "optionalAttribute",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.OptionalAttributes.label"),
			name: "system.optionalAttribute.choices",
			prompt: game.i18n.localize("CONAN.Item.OptionalAttributes.prompt"),
			selectedItems: selectedOptionalAttributes,
		};

		// Mandatory Attributes
		//
		const [selectedMandatoryAttributes, availableMandatoryAttributes] =
			conan.utils.getDedupedSelectedAttributes(
				CONFIG.CONAN.sortedAttributes,
				this.item.system.mandatoryAttribute.choices ?? []
			);

		data.mandatoryAttributesConfig = {
			availableItems: availableMandatoryAttributes,
			choicesKey: "mandatoryAttribute",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.MandatoryAttributes.label"),
			name: "system.mandatoryAttribute.choices",
			prompt: game.i18n.localize("CONAN.Item.MandatoryAttributes.prompt"),
			selectedItems: selectedMandatoryAttributes,
		};
	}

	/**
	 * Creates the configurations required for some classes of items which
	 * have both Mandatory Skills and Elective Skill choices
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getBackgroundSkillConfigs(data) {
		// Elective Skills
		//
		const [selectedElectiveSkills, availableElectiveSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.electiveSkill.choices ?? []
			);

		data.electiveSkillsConfig = {
			availableItems: availableElectiveSkills,
			choicesKey: "electiveSkill",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.ElectiveSkills.label"),
			name: "system.electiveSkill.choices",
			prompt: game.i18n.localize("CONAN.Item.ElectiveSkills.prompt"),
			selectedItems: selectedElectiveSkills,
		};

		// Mandatory Skills
		//
		const [selectedMandatorySkills, availableMandatorySkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.mandatorySkill.choices ?? []
			);

		data.mandatorySkillsConfig = {
			availableItems: availableMandatorySkills,
			choicesKey: "mandatorySkill",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.MandatorySkills.label"),
			name: "system.mandatorySkill.choices",
			prompt: game.i18n.localize("CONAN.Item.MandatorySkills.prompt"),
			selectedItems: selectedMandatorySkills,
		};
	}

	/**
	 * Creates the configuration required for some classes of items which
	 * have a single Skill Improvement selector
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getSkillsConfig(data) {
		const [selectedSkills, availableSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.skills.choices ?? []
			);

		data.skillImprovementsConfig = {
			availableItems: availableSkills,
			choicesKey: "skills",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.SkillImprovements.label"),
			name: "system.skills.choices",
			prompt: game.i18n.localize("CONAN.Item.SkillImprovements.prompt"),
			selectedItems: selectedSkills,
		};
	}

	async getTalentData(data) {
		data.requirements = foundry.utils.duplicate(data.data?.system?.requirements ?? []);
		for (const requirement of data.requirements) {
			if (requirement.type === "talent") {
				requirement.showMin = requirement.talents.length > requirement.min;

				for (const talent of requirement.talents) {
					const requiredTalent = (await conan.compendiums.talents(undefined, false)).find(
						t => t.uuid === talent.uuid
					);

					if (!requiredTalent) {
						ui.notifications.error(
							game.i18n.format("CONAN.Item.Talent.Error.RequiredTalentMissing",
								{
									talentName: this.item.name,
									missingUuid: talent.uuid,
								}
							),
							{ permanent: true }
						);
					}

					talent.name = requiredTalent?.name ?? "ERROR: MISSING TALENT";
					talent.showRequiredRanks = talent.rank > 1;
				}
			}
		}
	}

	insertAltRow(_event) {
		try {
			const table = document.getElementById("altEffects");
			const itemId = this.item._id;
			const index = table.rows.length - 1;
			const key = `system.effects.alternative.${[index + 1]}`;
			this.item.update({
				id: itemId,
				[key]: {type: "", difficulty: "", effect: ""},
			});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	insertSpendRow(_event) {
		try {
			const table = document.getElementById("spellSpends");
			const itemId = this.item._id;
			const index = table.rows.length - 1;
			const key = `system.effects.momentum.${[index + 1]}`;
			this.item.update({
				id: itemId,
				[key]: {type: "", difficulty: "", effect: ""},
			});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	onTraitSelector(event) {
		event.preventDefault();
		const a = $(event.currentTarget);
		const options = {
			name: a.parents("label").attr("for"),
			title: a.parent().text().trim(),
			choices: CONFIG.CONAN[a.attr("data-options")],
			hasValues: a.attr("data-has-values") === "true",
			allowEmptyValues: a.attr("data-allow-empty-values") === "true",
		};
		new conan.apps.TraitSelector(this.item, options).render(true);
	}
}
