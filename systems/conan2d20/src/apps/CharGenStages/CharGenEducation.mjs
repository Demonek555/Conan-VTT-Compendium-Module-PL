import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenEducation extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "education";

		this.education = null;
		this.educationAttribute = "";

		this.careerSkill = "";
		this.educationSkills = [];
		this.educationTalents = [];

		this.selectedTalent = "";

		this.mandatorySkills = [];
		this.electiveSkills = [];

		this.missingMandatoryCareerSkill = false;
		this.missingElectiveCareerSkill = false;

		this.validate();
	}

	async _onRollEducation(event) {
		event.preventDefault();

		const educations = await conan.compendiums.educations();
		this.education = await this.randomItem(educations);

		await this.updateEducationData();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".education-roll").click(event => this._onRollEducation(event));
	}

	async applyAttributeBonuses(attributes) {
		if (this.education && this.education.system.attribute) {
			const key = this.education.system.attribute;
			attributes[key].value += 1;
		}
	}

	async applySkillBonuses(skills) {
		if (this.education) {
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
			"system.background.education.value": this.education?.uuid ?? "",
		};
	}

	async formConfig() {
		const educationUuid = this.education?.uuid ?? "";

		const [selectedEducations, unselectedEducations] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.educations(),
				educationUuid ? [educationUuid] : []
			);

		let educationDescriptionHTML = "";

		if (this.education) {
			educationDescriptionHTML = await TextEditor.enrichHTML(
				this.education.system.description.value,
				{
					async: true,
				}
			);
		}

		const careerSkill = this.characterCreator.getCareerSkill();
		if (careerSkill !== this.careerSkill) {
			this.careerSkill = careerSkill;
			await this.updateEducationData();
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Education.description"),
			electiveSkills: this.electiveSkills,
			label: game.i18n.localize("CONAN.CharacterCreator.Education.label"),
			mandatorySkills: this.mandatorySkills,
			education: this.education,
			educationAttribute: this.educationAttribute,
			educationDescriptionHTML,
			educationTalents: this.educationTalents,
			selected: selectedEducations,
			selectedTalent: this.selectedTalent,
			hasAttribute: (this.education?.system?.attribute ?? "") !== "",
			template: () => "apps/character-creator/education",
			unselected: unselectedEducations,
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
			await this.updateEducationTalents();
		}
		else {
			this.selectedTalent = updateData.education_talent ?? "";
		}

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "educationUuid") {
			this.education = await fromUuid(updateData.uuid);

			await this.updateEducationData();

			this.validate();
		}
	}

	async updateEducationTalents() {
		await this.characterCreator.updateCharacterData();

		this.educationTalents = await this.talentManager.getAvailableTalentsForSkills(
			this.educationSkills
		);
	}

	async updateEducationData() {
		const skills = {};

		this.educationAttribute = CONFIG.CONAN.attributeLabels[
			this.education?.system?.attribute
		] ?? "";

		this.mandatorySkills = [];
		for (const skill of this.education?.system?.mandatorySkill?.choices ?? []) {
			skills[skill] = true;
			this.mandatorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.careerSkill = this.characterCreator.getCareerSkill();
		this.missingMandatoryCareerSkill = false;
		if (this.education?.system?.mandatorySkill?.career) {
			if (this.careerSkill) {
				skills[this.careerSkill] = true;

				this.mandatorySkills.push({
					label: CONFIG.CONAN.skills[this.careerSkill],
					skill: this.careerSkill,
				});
			}
			else {
				this.missingMandatoryCareerSkill = true;
			}
		}

		if (this.education?.system?.mandatorySkill?.randomCareer) {
			const archetypes = await conan.compendiums.archetypes();
			const archetype = await this.randomItem(archetypes);

			if (archetype) {
				const skill = archetype?.system?.careerSkill?.choices[0] ?? "";

				skills[skill] = true;

				this.mandatorySkills.push({
					label: CONFIG.CONAN.skills[skill],
					skill: skill,
				});
			}
		}

		this.mandatorySkills.sort((a, b) => a.label.localeCompare(b.label));

		this.electiveSkills = [];
		for (const skill of this.education?.system?.electiveSkill?.choices ?? []) {
			skills[skill] = true;
			this.electiveSkills.push({
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.missingElectiveCareerSkill = false;
		if (this.education?.system?.electiveSkill?.career) {
			if (this.careerSkill) {
				skills[this.careerSkill] = true;

				this.electiveSkills.push({
					bonus: 0,
					checked: false,
					label: CONFIG.CONAN.skills[this.careerSkill],
					skill: this.careerSkill,
				});
			}
			else {
				this.missingElectiveCareerSkill = true;
			}
		}

		if (this.education?.system?.electiveSkill?.randomCareer) {
			const archetypes = await conan.compendiums.archetypes();
			const archetype = await this.randomItem(archetypes);

			if (archetype) {
				const skill = archetype?.system?.careerSkill?.choices[0] ?? "";

				skills[skill] = true;

				this.electiveSkills.push({
					bonus: 0,
					checked: false,
					label: CONFIG.CONAN.skills[skill],
					skill: skill,
				});
			}
		}

		this.electiveSkills.sort((a, b) => a.label.localeCompare(b.label));

		this.selectedTalent = "";
		this.educationSkills = Object.keys(skills);

		await this.updateEducationTalents();
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.education && this.education.type === "education")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAnEducation")
			);
		}

		if (this.education) {
			if (this.missingMandatoryCareerSkill || this.missingElectiveCareerSkill) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAnArchetype")
				);
			}

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
