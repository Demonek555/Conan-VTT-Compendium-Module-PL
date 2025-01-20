import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenStartingAttributes extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "starting attributes";

		this.attributes = {};

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.attributes[attribute] = {
				attribute,
				label: CONFIG.CONAN.attributeLabels[attribute],
				tooltip: CONFIG.CONAN.attributeTooltips[attribute],
				value: 7,
			};
		});

		this.increased = 0;
		this.decreased = 0;

		this.validate();
	}

	activateListeners(html) {
		const me = this;

		html.find(".starting-attributes .quantity-grid")
			.each(function() {
				const spinner = $(this);
				const input = spinner.find("input[type=\"number\"]");
				const btnUp = spinner.find(".quantity-up");
				const btnDown = spinner.find(".quantity-down");
				const attribute = input.attr("data-attribute");

				input.on("wheel", ev => {
					ev.preventDefault();
					if (ev.originalEvent.deltaY < 0) {
						me._inc_attribute(input, attribute);
					}
					else if (ev.originalEvent.deltaY > 0) {
						me._dec_attribute(input, attribute);
					}
				});

				btnUp.click(ev => {
					ev.preventDefault();
					me._inc_attribute(input, attribute);
				});

				btnDown.click(ev => {
					ev.preventDefault();
					me._dec_attribute(input, attribute);
				});
			});
	}

	async applyAttributeBonuses(attributes) {
		for (const attribute in attributes) {
			const attributeBonus = this.attributes[attribute].value - attributes[attribute].value;
			attributes[attribute].value += attributeBonus;
		}
	}

	async formConfig() {
		const config = {
			...await super.formConfig(),
			attributes: this.attributes,
			description: game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.label"),
			template: () => "apps/character-creator/starting-attributes",
		};

		return config;
	}

	async processSubmit(updateData) {
		this.validate();
		return updateData;
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		this.reduced = 0;
		this.increased = 0;

		for (const attributeId of Object.keys(this.attributes)) {
			const attribute = this.attributes[attributeId];

			if (attribute.value === 6) this.reduced++;
			if (attribute.value === 8) this.increased++;

			if (attribute.value < 6) {
				this.errors.push(
					game.i18n.format("CONAN.CharacterCreator.StartingAttributes.Errors.OutOfBoundsLow",
						{attributeName: attribute.label}
					)
				);
			}
			else if (attribute.value > 8) {
				this.errors.push(
					game.i18n.format("CONAN.CharacterCreator.StartingAttributes.Errors.OutOfBoundsHigh",
						{attributeName: attribute.label}
					)
				);
			}

		}

		if (this.reduced > 2) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.Errors.MaxTwoReduced")
			);
		}

		if (this.increased > 2) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.Errors.MaxTwoIncreased")
			);
		}

		if (this.reduced !== this.increased) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.Errors.SameNumberOfAttributes")
			);
		}

		if (this.errors.length > 0) this.valid = false;
	}

	_dec_attribute(input, attribute) {
		let value = this.attributes[attribute].value;
		value--;
		if (value < 6) value = 6;

		this.attributes[attribute].value = value;

		this.validate();
		this.characterCreator.update();
	}

	_inc_attribute(input, attribute) {
		let value = this.attributes[attribute].value;
		value++;
		if (value > 8) value = 8;

		this.attributes[attribute].value = value;

		this.validate();
		this.characterCreator.update();
	}
}
