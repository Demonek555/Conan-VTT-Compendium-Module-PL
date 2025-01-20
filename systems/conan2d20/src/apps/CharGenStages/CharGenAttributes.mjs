import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenAttributes extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "final attributes";

		this.baseAttributes = [];
		this.attributes = [];

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

	async applyAttributeBonuses(attributes) {
		this.baseAttributes = foundry.utils.duplicate(attributes);
		this.ancientBloodlineNeeded = false;
		for (const attribute in attributes) {
			const bonus = this.attributes.find(a => a.attribute === attribute).bonus ?? 0;
			attributes[attribute].value += bonus;
			this.baseAttributes[attribute].value += bonus;

			if (attributes[attribute].value > 12) this.ancientBloodlineNeeded = true;
		}
	}

	async formConfig() {
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
			description: game.i18n.localize("CONAN.CharacterCreator.Attributes.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Attributes.label"),
			selectedAncientBloodlines,
			template: () => "apps/character-creator/attributes",
			unselectedAncientBloodlines,
		};

		return config;
	}

	async getItems() {
		const items = [];

		if (this.ancientBloodlineUuid !== "") {
			items.push(await fromUuid(this.ancientBloodlineUuid));
		}

		return items;
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

		const updateKey = "finishing_attribute::";
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
		if (checkedAttributes.length === 1) bonus = 2;
		if (checkedAttributes.length === 2) bonus = 1;

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
		await this.processAttributesSubmit(updateData);

		await this.validate();
		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "ancientBloodlineUuid") {
			this.ancientBloodlineUuid = updateData.uuid;
			this.ancientBloodline = await fromUuid(updateData.uuid);

			await this.validate();
		}
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		const checkedAttributes = (this.attributes.filter(a => a.checked) ?? []).length;

		if (checkedAttributes > 2) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MaxTwoAttributes")
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
}
