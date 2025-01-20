import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenArchetype extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "archetype";

		this.archetype = null;

		this.careerSkills = [];
		this.careerTalents = [];
		this.electiveSkills = [];
		this.mandatorySkills = [];

		this.validate();
	}

	async _onRollArchetype(event) {
		event.preventDefault();

		const archetypes = await conan.compendiums.archetypes();
		this.archetype = await this.randomItem(archetypes);

		await this.updateArchetypeData();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".archetype-roll").click(event => this._onRollArchetype(event));
	}

	async applySkillBonuses(skills) {
		if (this.archetype) {
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

			for (const careerSkill of this.careerSkills) {
				const key = careerSkill.skill;
				skills[key].focus.value += 2;
				skills[key].expertise.value += 2;
			}
		}
	}

	async characterData() {
		return {
			"system.background.archetype.value": this.archetype?.uuid ?? "",
		};
	}

	async formConfig() {
		const archetypeUuid = this.archetype?.uuid ?? "";

		const [selectedArchetypes, unselectedArchetypes] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.archetypes(),
				archetypeUuid ? [archetypeUuid] : []
			);

		let archetypeDescriptionHTML = "";

		if (this.archetype) {
			archetypeDescriptionHTML = await TextEditor.enrichHTML(
				this.archetype.system.description.value,
				{
					async: true,
				}
			);
		}

		return {
			...await super.formConfig(),
			archetype: this.archetype,
			archetypeDescriptionHTML,
			careerSkills: this.careerSkills,
			careerTalents: this.careerTalents,
			description: game.i18n.localize("CONAN.CharacterCreator.Archetype.description"),
			electiveSkills: this.electiveSkills,
			label: game.i18n.localize("CONAN.CharacterCreator.Archetype.label"),
			mandatorySkills: this.mandatorySkills,
			selected: selectedArchetypes,
			template: () => "apps/character-creator/archetype",
			unselected: unselectedArchetypes,
		};
	}

	getCareerSkill() {
		return this.archetype?.system?.careerSkill?.choices[0] ?? "";
	}

	async getItems() {
		return this.careerTalents ?? [];
	}

	async processSubmit(updateData) {
		await this.processElectiveSkillsSubmit(updateData);

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "archetypeUuid") {
			this.archetype = await fromUuid(updateData.uuid);

			await this.updateArchetypeData();

			this.validate();
		}
	}

	async updateArchetypeData() {
		const skills = {};

		this.careerSkills = [];
		for (const skill of this.archetype?.system?.careerSkill?.choices ?? []) {
			skills[skill] = true;
			this.careerSkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.electiveSkills = [];
		for (const skill of this.archetype?.system?.electiveSkill?.choices ?? []) {
			skills[skill] = true;
			this.electiveSkills.push({
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.mandatorySkills = [];
		for (const skill of this.archetype?.system?.mandatorySkill?.choices ?? []) {
			skills[skill] = true;
			this.mandatorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.careerTalents = [];
		for (const talentUuid of this.archetype?.system?.careerTalent?.choices ?? []) {
			this.careerTalents.push(await fromUuid(talentUuid));
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.archetype && this.archetype.type === "archetype")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAnArchetype")
			);
		}

		if (this.archetype) {
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

			if (this.careerTalent === "") {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectACareerTalent")
				);
			}
		}
	}

}
