import * as Stage from "./CharGenStages/_module.mjs";

import ConanActor from "../documents/ConanActor.mjs";
import ConanProgress from "../system/ConanProgress.mjs";

export default class CharacterCreator extends FormApplication {

	constructor(object={}, options={}) {
		super(object, options);

		this.baseAttributes = {};

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.baseAttributes[attribute] = {
				value: 7,
			};
		});

		this.baseSkills = {};

		CONFIG.CONAN.skillIds.forEach(skill => {
			this.baseSkills[skill] = {
				attribute: CONFIG.CONAN.skillAttributeMap[skill],
				expertise: {
					value: 0,
				},
				focus: {
					value: 0,
				},
			};
		});

		this.firstGetData = true;

		this.characterData = {};
		this.characterItems = [];

		this.errors = [];

		this.stages = [
			new Stage.CharGenName(this),
			new Stage.CharGenHomeland(this),
			new Stage.CharGenStartingAttributes(this),
			new Stage.CharGenAttributeAspects(this),
			new Stage.CharGenCaste(this),
			new Stage.CharGenStory(this),
			new Stage.CharGenArchetype(this),
			new Stage.CharGenNature(this),
			new Stage.CharGenEducation(this),
			new Stage.CharGenWarStory(this),
			new Stage.CharGenAttributes(this),
			new Stage.CharGenSkills(this),
			new Stage.CharGenTalent(this),
			new Stage.CharGenLanguage(this),
			new Stage.CharGenFortune(this),
			new Stage.CharGenBelongings(this),
		];
	}

	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "character-creator"],
			template: "systems/conan2d20/templates/apps/character-creator.hbs",
			width: 860,
			height: "auto",
			resizable: true,
			submitOnChange: true,
			tabs: [
				{
					navSelector: ".sheet-navigation",
					contentSelector: ".sheet-content",
					initial: "name",
				},
			],
		});
	}

	/** @inheritdoc */
	get title() {
		return `${game.i18n.localize("CONAN.CharacterCreator.title")}`;
	}

	/** @inheritdoc */
	activateListeners(html) {
		for (const stage of this.stages) {
			stage.activateListeners(html);
		}

		html.find(".create-character-button").click(event => this._createCharacter(event));

		html.on("input", "input[data-is-item='true']", event => this._onChangeInput(event));

		return super.activateListeners(html);
	}

	async addStockItems() {
		const compendiumUuid = game.settings.get("conan2d20", "characterCreationItemPack");
		const pack = game.packs.find(pack => pack.metadata.id === compendiumUuid);

		if (pack) {
			for (const itemIndex of pack.index) {
				const doc = await pack.getDocument(itemIndex._id);
				if (doc) this.characterItems.push(doc.toObject());
			}
		}
		else {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindItemPack"),
				{permanent: true}
			);
		}
	}

	static async createActorFromData(characterData, characterItems, userId) {
		if (!game.user.isGM) return;

		const newActor = await ConanActor.create(characterData);

		if (!newActor) return;

		// Ensure both health values are at max after creation
		await newActor.update({"system.health.mental.value": newActor.getMaxResolve()});
		await newActor.update({"system.health.physical.value": newActor.getMaxVigor()});
		await newActor.update({"system.resources.gold.value": newActor.getStartingGold()});

		await newActor.createEmbeddedDocuments("Item", characterItems);

		if (userId !== game.userId) {
			const ownership = newActor.ownership;
			ownership[userId] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;

			await newActor.update({ownership});

			const user = game.users.get(userId);

			if (user && !user.character) {
				// User doesn't have a character assigned, so assign this new
				// one they just created
				user.update({character: newActor.id});
			}

			game.socket.emit("system.conan2d20", {
				type: "openNewCharacter",
				payload: {actorId: newActor.id, userId},
			});
		}
		else {
			newActor.sheet.render(true);

			return ui.notifications.info(
				game.i18n.localize("CONAN.CharacterCreator.Created.message"),
				{permanent: true}
			);
		}
	}

	getCasteUuid() {
		for (const stage of this.stages) {
			if (stage.name === "caste") {
				return stage.getCasteUuid();
			}
		}
	}

	getCareerSkill() {
		for (const stage of this.stages) {
			if (stage.name === "archetype") {
				return stage.getCareerSkill();
			}
		}
	}

	/** @inheritdoc */
	async getData(options) {
		const data = super.getData(options);

		data.CONFIG = CONFIG.CONAN;

		let progress;
		if (this.firstGetData) {
			progress = new ConanProgress((this.stages.length * 2) + 1);
			// populate stages with starting data
			await this.updateCharacterData();
			if (progress) progress.advance();
		}

		data.stages = [];

		data.characterValid = true;
		for (const stage of this.stages) {
			await stage.validate();
			if (progress) progress.advance();
			data.stages.push(await stage.formConfig());
			if (!stage.valid) data.characterValid = false;
			if (progress) progress.advance();
		}

		if (this.errors.length > 0) data.characterValid = false;
		data.errors = this.errors;

		data.characterData = this.characterData;

		data.attributes = foundry.utils.duplicate(data.characterData["system.attributes"]);
		for (const attribute in data.attributes) {
			data.attributes[attribute].label = CONFIG.CONAN.attributeLabels[attribute];
			data.attributes[attribute].skills = [];
		}

		const skills = foundry.utils.duplicate(data.characterData["system.skills"]);
		for (const skillId in skills) {
			const skill = skills[skillId];
			skill.label = CONFIG.CONAN.skills[skillId];
			const attributeScore = data.attributes[skill.attribute].value;

			skill.tn = attributeScore + skill.expertise.value;

			data.attributes[skill.attribute].skills.push(skill);
		}

		data.talents = this.talents;

		if (this.firstGetData) this.firstGetData = false;

		if (progress) progress.finished();
		return data;
	}

	async getHomelandLanguages() {
		const homelandStage = this.stages.find(stage => stage.name === "homeland");
		return await homelandStage.getHomelandLanguages();
	}

	async getRollTables(prefix) {
		const compendiumUuid = game.settings.get("conan2d20", "characterCreationRolltablePack");
		const pack = game.packs.find(pack => pack.metadata.id === compendiumUuid);

		if (pack) {
			const ids = pack.index.filter(
				d => (d.name.toLowerCase()).startsWith(prefix)
			).map(d => d._id);

			const matchingTables = [];

			for (const id of ids) {
				const doc = await pack.getDocument(id);
				if (doc) matchingTables.push(doc);
			}

			return matchingTables;
		}
		else {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTablePack"),
				{permanent: true}
			);
		}
	}

	async update() {
		await this.updateCharacterData();
		this.render(true);
	}

	async updateCharacterData() {
		const characterDataParts = [{
			type: "character",
		}];

		const attributes = foundry.utils.duplicate(this.baseAttributes);
		const skills = foundry.utils.duplicate(this.baseSkills);

		const characterItems = [];
		const characterTalents = [];

		for (const stage of this.stages) {
			// Contains any Talents selected up to but not including this stage
			stage.talentManager.setKnownTalents(characterTalents);

			const stageData = await stage.characterData();
			if (stageData) characterDataParts.push(stageData);

			await stage.applyAttributeBonuses(attributes);
			await stage.applySkillBonuses(skills);

			const stageItems = await stage.getItems();
			for (const item of stageItems ?? []) {
				if (item.type === "talent") {
					const identifier = item.system.talentIdentifier;

					const existingIndex = characterTalents.findIndex(
						t => t.identifier === identifier
					);

					if (existingIndex >= 0) {
						const currentTalent = characterTalents[existingIndex];
						const rank = currentTalent.rank;

						characterTalents[existingIndex] = {
							identifier,
							item,
							rank: rank + 1,
						};
					}
					else {
						characterTalents.push({
							identifier,
							item,
							rank: 1,
						});
					}
				}
				else {
					characterItems.push(item);
				}

			}

			// These values contain the running values so far, in case they are
			// required by any of the stages
			stage.talentManager.setActorAttributes(
				foundry.utils.duplicate(attributes)
			);

			stage.talentManager.setActorSkills(foundry.utils.duplicate(skills));
		}

		this.talents = [];
		for (const talent of characterTalents) {
			const itemData = talent.item.toObject();

			itemData.system.rank.value = talent.rank;
			characterItems.push(itemData);

			const dupe = foundry.utils.duplicate(itemData);
			dupe.system.multiRank = talent.item.system.multiRank;
			dupe.uuid = talent.item.uuid;

			this.talents.push(dupe);
		}

		this.talents.sort((a, b) => a.name.localeCompare(b.name));

		this.characterItems = characterItems;

		characterDataParts.push({"system.attributes": attributes});
		characterDataParts.push({"system.skills": skills});

		this.characterData = conan.utils.deepMerge(...characterDataParts);

		await this.validate();
	}

	async validate() {
		this.errors = [];

		const skills = this.characterData["system.skills"];

		let numHighSkills = 0;
		for (const skill in skills) {
			const value = skills[skill].expertise.value;
			if (value > 3) numHighSkills++;
		}

		if (numHighSkills > 3) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.TooManySkillsTooHigh")
			);
		}
	}

	async _createCharacter(event) {
		event.preventDefault();
		event.stopPropagation();

		console.log("Creating Character");

		await this.updateCharacterData();

		await this.addStockItems();

		if (game.user.isGM) {
			CharacterCreator.createActorFromData(
				this.characterData,
				this.characterItems,
				game.userId
			);
		}
		else {
			game.socket.emit("system.conan2d20", {
				type: "createCharacter",
				payload: {
					characterData: this.characterData,
					characterItems: this.characterItems,
					userId: game.userId,
				},
			});
		}

		this.close();
	}

	async _onChangeInput(event) {
		event.preventDefault();
		event.stopPropagation();
		const isItem = event.currentTarget.dataset.isItem === "true";

		// We only have to do something special if we're handling a multi-choice
		// datalist
		//
		if (event.target.list && isItem) {
			const options = event.target.list.options;
			const value = event.target.value;

			const name = event.target.name;

			let uuid = null;
			for (const option of options) {
				if (option.value === value) {
					uuid = option.getAttribute("data-uuid");
					break;
				}
			}

			if (uuid === null) return;

			for (const stage of this.stages) {
				await stage.selectorUuidUpdated({name, uuid});
			}
		}

		return this._onSubmit(event);
	}

	/** @inheritdoc */
	async _onSubmit(event) {
		let updateData = this._getSubmitData();

		for (const stage of this.stages) {
			updateData = await stage.processSubmit(updateData);
		}

		this.update();
	}

	/** @inheritdoc */
	async _updateObject(event, formData) {
		console.log(formData);
	}

}
