/** Class representing a stage of character creation  */
import TalentManager from "../../system/TalentManager.mjs";

export default class CharGenBaseStage {
	characterCreator;

	data;

	errors = [];

	name = "";

	uuid = foundry.utils.randomID();

	valid = false;

	constructor(characterCreator) {
		this.characterCreator = characterCreator;
		this.talentManager = new TalentManager({ignoreCost: true});
	}

	get hasErrors() {
		return this.errors.length > 0;
	}

	activateListeners(html) {}

	async applyAttributeBonuses(attributes) {}

	async applySkillBonuses(skills) {}

	async characterData() {}

	async formConfig() {
		return {
			CONFIG: CONFIG.CONAN,
			data: this.data,
			errors: this.errors,
			name: this.name,
			uuid: this.uuid,
			valid: this.valid,
		};
	}

	async getItems() {}

	async getItemFromResult(result) {
		const uuid = [
			"Compendium",
			result.documentCollection,
			result.documentId,

		].join(".");

		return await fromUuid(uuid);
	}

	async getRollTable(name) {
		const tables = await this.characterCreator.getRollTables(name) ?? [];
		return tables[0];
	}

	async getRollTables(name) {
		this.tables = await this.characterCreator.getRollTables(name);
	}

	async processElectiveSkillsSubmit(updateData) {
		const electiveChanges = {};
		for (const electiveSkill of this.electiveSkills) {
			electiveChanges[electiveSkill.skill] = {
				oldChecked: electiveSkill.checked,
				newChecked: false,
			};

			electiveSkill.bonus = 0;
			electiveSkill.checked = false;
		}

		const electivesKey = `${this.name}_electiveSkill::`;
		for (const key in updateData) {
			if (key.startsWith(electivesKey)) {
				const [, skill] = key.split("::");
				const skillChecked = updateData[key] === skill ? true : false;
				for (const electiveSkill of this.electiveSkills) {
					if (skillChecked && electiveSkill.skill === skill) {
						electiveSkill.bonus = 1;
						electiveSkill.checked = true;

						electiveChanges[skill].newChecked = true;
					}
				}
			}
		}

		let electiveChanged = false;
		for (const skill in electiveChanges) {
			const oldChecked = electiveChanges[skill].oldChecked;
			const newChecked = electiveChanges[skill].newChecked;

			if (oldChecked !== newChecked) {
				electiveChanged = true;
				break;
			}
		}

		if (electiveChanged) {
			await this.characterCreator.updateCharacterData();
		}

		return electiveChanged;
	}


	async processSubmit(updateData) {
		return updateData;
	}

	async randomItem(items) {
		if (items.size > 0) {
			const index = Math.floor(Math.random() * items.size);

			return items.find((object, i) => {
				return i === index;
			});
		}
		else {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.NoItemsAvailable")
			);
		}
	}

	async selectorUuidUpdated(updateData) {}

	async validate() {}
}
