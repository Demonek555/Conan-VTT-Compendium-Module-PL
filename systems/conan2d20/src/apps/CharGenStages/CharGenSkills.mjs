import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenSkills extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "final skills";

		this.baseSkills = [];
		this.skills = [];
		this.skillBonuses = {};

		this.validate();
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._onDeleteSkill(event));
	}

	async applySkillBonuses(skills) {
		this.baseSkills = foundry.utils.duplicate(skills);
		for (const skill of this.skills) {
			const bonus = this.skillBonuses[skill] ?? 0;
			skills[skill].focus.value += bonus;
			skills[skill].expertise.value += bonus;
		}
	}

	async formConfig() {
		const [selectedSkills, availableSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.skills
			);

		for (const skill of selectedSkills) {
			skill.bonus = this.skillBonuses[skill.uuid] ?? 0;
		}

		const config = {
			...await super.formConfig(),
			showSkillTable: this.skills.length > 0,
			selectedSkills,
			availableSkills,
			skillBonuses: this.skillBonuses,
			description: game.i18n.localize("CONAN.CharacterCreator.Skills.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Skills.label"),
			template: () => "apps/character-creator/skills",
		};

		return config;
	}

	async processSubmit(updateData) {
		for (const key in updateData) {
			if (key.startsWith("finishing_skill::")) {
				const value = updateData[key];
				if (value === undefined) continue;
				const [skillId, selectedBonus] = value.split("::");
				this.skillBonuses[skillId] = Number(selectedBonus);
			}
		}

		await this.validate();
		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "finishingSkillUuid") {
			if (!this.skills.includes(updateData.uuid)) {
				this.skills.push(updateData.uuid);

				this.skillBonuses[updateData.uuid] = 1;

				this.skills.sort((a, b) => a.localeCompare(b));
			}
		}
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		const skillBonusTotal = Object.values(this.skillBonuses).reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0
		);

		if (skillBonusTotal < 3) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Skills.Errors.YouMustAssignThreeSkillPoints")
			);
		}
		else if (skillBonusTotal > 3) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Skills.Errors.MaximumThreeSkillPointsExceeded")
			);
		}

		for (const skill in this.baseSkills) {
			const bonus = this.skillBonuses[skill] ?? 0;
			const focus = (this.baseSkills[skill]?.focus?.value ?? 0) + bonus;
			const expertise = (this.baseSkills[skill]?.expertise?.value ?? 0) + bonus;

			if (focus > 5 || expertise > 5) {
				this.valid = false;

				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.Fortune.SkillExceededMax")
				);
			}
		}
	}

	async _onDeleteSkill(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		const newSkills = [];
		for (const skill of this.skills) {
			if (skill === deleteUuid) continue;
			newSkills.push(skill);
		}
		this.skills = newSkills;

		delete this.skillBonuses[deleteUuid];

		await this.validate();

		this.characterCreator.update();
	}
}
