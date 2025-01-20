import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenFortune extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "fortune";

		this.baseAttributes = [];
		this.attributes = [];

		this.baseSkills = [];
		this.skill = "";

		this.skillBonuses = {};

		this.fortuneSpend = "none";

		this.fortuneSpendOptions = {
			none: "No Fortune Spend",
			attribute: "Attribute +1",
			skill: "Skill +2",
		};

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.attributes.push({
				attribute,
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.attributeLabels[attribute],
			});
		});

		this.ancientBloodline = null;
		this.ancientBloodlineNeeded = false;
		this.ancientBloodlineUuid = "";

		this.validate();
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._onDeleteSkill(event));
	}

	async applyAttributeBonuses(attributes) {
		this.baseAttributes = foundry.utils.duplicate(attributes);
		this.ancientBloodlineNeeded = false;

		if (this.fortuneSpend !== "attribute") return;

		for (const attribute in attributes) {
			const bonus = this.attributes.find(a => a.attribute === attribute).bonus ?? 0;
			attributes[attribute].value += bonus;
			this.baseAttributes[attribute].value += bonus;

			if (attributes[attribute].value > 12) this.ancientBloodlineNeeded = true;
		}
	}

	async applySkillBonuses(skills) {
		this.baseSkills = foundry.utils.duplicate(skills);

		if (this.fortuneSpend !== "skill" || this.skill === "") return;

		skills[this.skill].focus.value += 2;
		skills[this.skill].expertise.value += 2;
	}

	async characterData() {
		const maxFortune = this.fortuneSpend === "none" ? 3 : 2;

		return {
			"system.resources.fortune.max": maxFortune,
			"system.resources.fortune.value": maxFortune,
		};
	}

	async formConfig() {
		const [selectedSkills, availableSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.skill ? [this.skill] : []
			);

		let [selectedAncientBloodlines, unselectedAncientBloodlines] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.bloodlineTalents(),
				this.ancientBloodlineUuid ? [this.ancientBloodlineUuid] : []
			);

		if (this.ancientBloodlineNeeded && this.ancientBloodline === null) {
			if (unselectedAncientBloodlines.length === 1) {
				this.ancientBloodline = unselectedAncientBloodlines[0];
				this.ancientBloodlineUuid = this.ancientBloodline.uuid;
				selectedAncientBloodlines = [this.ancientBloodline];
				await this.validate();
			}
		}

		let ancientBloodlineDescriptionHTML = "";

		if (this.ancientBloodline) {
			ancientBloodlineDescriptionHTML = await TextEditor.enrichHTML(
				this.ancientBloodline.system.description.value,
				{
					async: true,
				}
			);
		}

		const config = {
			...await super.formConfig(),
			ancientBloodline: this.ancientBloodline,
			ancientBloodlineDescriptionHTML,
			ancientBloodlineNeeded: this.ancientBloodlineNeeded,
			attributes: this.attributes,
			availableSkills,
			description: game.i18n.localize("CONAN.CharacterCreator.Fortune.description"),
			fortuneSpend: this.fortuneSpend,
			fortuneSpendOptions: this.fortuneSpendOptions,
			label: game.i18n.localize("CONAN.CharacterCreator.Fortune.label"),
			selectedAncientBloodlines,
			selectedSkills,
			showSkillTable: this.skill !== "",
			template: () => "apps/character-creator/fortune",
			unselectedAncientBloodlines,
		};

		return config;
	}

	async processAttributesSubmit(updateData) {
		const changes = {};
		for (const attribute of this.attributes) {
			changes[attribute.attribute] = {
				oldChecked: attribute.checked,
				newChecked: false,
			};

			attribute.bonus = 0;
			attribute.checked = false;
		}

		const updateKey = "fortune_attribute::";
		for (const key in updateData) {
			if (key.startsWith(updateKey)) {
				const [, attributeId] = key.split("::");
				const attributeChecked = updateData[key] === attributeId ? true : false;
				for (const attribute of this.attributes) {
					if (attributeChecked && attribute.attribute === attributeId) {
						attribute.checked = true;

						changes[attributeId].newChecked = true;
					}
				}
			}
		}

		const checkedAttributes = this.attributes.filter(a => a.checked) ?? [];
		let bonus = 0;
		if (checkedAttributes.length === 1) bonus = 1;

		for (const checkedAttribute of checkedAttributes) {
			checkedAttribute.bonus = bonus;
		}

		let changed = false;
		for (const attribute in changes) {
			const oldChecked = changes[attribute].oldChecked;
			const newChecked = changes[attribute].newChecked;

			if (oldChecked !== newChecked) {
				changed = true;
				break;
			}
		}

		if (changed) {
			await this.characterCreator.updateCharacterData();
		}

		return changed;
	}

	async processSubmit(updateData) {
		this.fortuneSpend = updateData.fortuneSpend;
		await this.processAttributesSubmit(updateData);
		await this.characterCreator.updateCharacterData();
		await this.validate();
		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "ancientBloodlineUuid") {
			this.ancientBloodlineUuid = updateData.uuid;
			this.ancientBloodline = await fromUuid(updateData.uuid);

			await this.validate();
		}

		if (updateData.name === "fortuneSkillUuid") {
			this.skill = updateData.uuid;
			await this.characterCreator.updateCharacterData();
			await this.validate();
		}
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		if (this.fortuneSpend === "attribute") {
			const checkedAttributes = (this.attributes.filter(a => a.checked) ?? []).length;

			if (checkedAttributes > 1) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MaxOneAttributes")
				);
			}

			if (checkedAttributes < 1) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MinOneAttributes")
				);
			}

			if (this.ancientBloodlineNeeded && this.ancientBloodline === null) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.AncientBloodlineTalentNeeded")
				);
			}

			for (const attribute of Object.keys(this.baseAttributes)) {
				if (this.baseAttributes[attribute].value > 14) {
					this.valid = false;
					this.errors.push(
						game.i18n.localize("CONAN.CharacterCreator.Errors.AttributeExceedsMax")
					);

					break;
				}
			}
		}
		else if (this.fortuneSpend === "skill") {
			if (this.skill === "") {
				this.valid = false;

				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.Fortune.MustSelectSkill")
				);
			}
			else {
				const focus = (this.baseSkills[this.skill]?.focus?.value ?? 0) + 2;
				const expertise = (this.baseSkills[this.skill]?.expertise?.value ?? 0) + 2;

				if (focus > 3 || expertise > 3) {
					this.valid = false;

					this.errors.push(
						game.i18n.localize("CONAN.CharacterCreator.Errors.Fortune.SkillCannotExceedThree")
					);
				}
			}
		}
	}

	async _onDeleteSkill(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		this.skill = "";

		delete this.skillBonuses[deleteUuid];

		await this.validate();

		this.characterCreator.update();
	}
}
