import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenNature extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "nature";

		this.nature = null;
		this.natureAttribute = "";

		this.natureTalents = [];
		this.selectedTalent = "";

		this.mandatorySkills = [];
		this.electiveSkills = [];

		this.validate();
	}

	async _onRollNature(event) {
		event.preventDefault();

		const natures = await conan.compendiums.natures();
		this.nature = await this.randomItem(natures);

		await this.updateNatureData();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".nature-roll").click(event => this._onRollNature(event));
	}

	async applyAttributeBonuses(attributes) {
		if (this.nature) {
			const key = this.nature.system.attribute;
			attributes[key].value += 1;
		}
	}

	async applySkillBonuses(skills) {
		if (this.nature) {
			for (const mandatorySkill of this.mandatorySkills) {
				const key = mandatorySkill.skill;
				skills[key].focus.value += 1;
				skills[key].expertise.value += 1;
			}

			for (const electiveSkill of this.electiveSkills) {
				const key = electiveSkill.skill;
				skills[key].focus.value += electiveSkill.bonus;
				skills[key].expertise.value += electiveSkill.bonus;
			}
		}
	}

	async characterData() {
		return {
			"system.background.nature.value": this.nature?.uuid ?? "",
		};
	}

	async formConfig() {
		const natureUuid = this.nature?.uuid ?? "";

		const [selectedNatures, unselectedNatures] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.natures(),
				natureUuid ? [natureUuid] : []
			);

		let natureDescriptionHTML = "";

		if (this.nature) {
			natureDescriptionHTML = await TextEditor.enrichHTML(
				this.nature.system.description.value,
				{
					async: true,
				}
			);
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Nature.description"),
			electiveSkills: this.electiveSkills,
			label: game.i18n.localize("CONAN.CharacterCreator.Nature.label"),
			mandatorySkills: this.mandatorySkills,
			nature: this.nature,
			natureAttribute: this.natureAttribute,
			natureDescriptionHTML,
			natureTalents: this.natureTalents,
			selected: selectedNatures,
			selectedTalent: this.selectedTalent,
			template: () => "apps/character-creator/nature",
			unselected: unselectedNatures,
		};
	}

	async getItems() {
		const items = [];

		if (this.selectedTalent !== "") {
			items.push(await fromUuid(this.selectedTalent));
		}

		return items;
	}

	async processSubmit(updateData) {
		const electiveChanged = await this.processElectiveSkillsSubmit(updateData);

		if (electiveChanged) {
			this.selectedTalent = "";
			await this.updateNatureTalents();
		}
		else {
			this.selectedTalent = updateData.nature_talent ?? "";
		}

		if (updateData.natureUuid !== "") {
			await this.selectorUuidUpdated(updateData);
		}

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "natureUuid") {
			this.nature = await fromUuid(updateData.uuid);

			this.updateNatureData();

			this.validate();
		}
	}

	async updateNatureTalents() {
		await this.characterCreator.updateCharacterData();

		this.natureTalents = await this.talentManager.getAvailableTalentsForSkills(
			this.natureSkills
		);
	}

	async updateNatureData() {
		const skills = {};

		this.mandatorySkills = [];
		for (const skill of this.nature?.system?.mandatorySkill?.choices ?? []) {
			skills[skill] = true;
			this.mandatorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.electiveSkills = [];
		for (const skill of this.nature?.system?.electiveSkill?.choices ?? []) {
			skills[skill] = true;
			this.electiveSkills.push({
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.selectedTalent = "";
		this.natureSkills = Object.keys(skills);

		this.natureAttribute = CONFIG.CONAN.attributeLabels[
			this.nature?.system?.attribute
		] ?? "";

		await this.updateNatureTalents();
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.nature && this.nature.type === "nature")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectANature")
			);
		}

		if (this.nature) {
			let electiveSkillCount = 0;
			for (const skill of this.electiveSkills) {
				if (skill.checked) electiveSkillCount++;
			}

			if (electiveSkillCount !== 2) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectTwoElectiveSkills")
				);
			}

			if (this.selectedTalent === "") {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectATalent")
				);
			}
		}
	}

}
