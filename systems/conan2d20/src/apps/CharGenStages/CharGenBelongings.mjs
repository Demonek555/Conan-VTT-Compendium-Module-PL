import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenBelongings extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "belongings";

		this.belonging = null;
		this.garment = null;
		this.weapon = null;
		this.provenance = "";

		this.validate();
	}

	activateListeners(html) {
		html.find(".belonging-roll").click(event => this._onRollBelonging(event));
		html.find(".garment-roll").click(event => this._onRollGarment(event));
		html.find(".weapon-roll").click(event => this._onRollWeapon(event));
	}

	async formConfig() {
		return {
			...await super.formConfig(),
			belonging: this.belonging,
			garment: this.garment,
			weapon: this.weapon,
			provenance: this.provenance,
			characterName: this.characterName,
			description: game.i18n.localize("CONAN.CharacterCreator.Belongings.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Belongings.label"),
			template: () => "apps/character-creator/belongings",
		};
	}

	async getItems() {
		const items = [];

		if (this.belonging !== null) {
			items.push(this.belonging.toObject());
		}
		if (this.garment !== null) {
			items.push(this.garment.toObject());
		}
		if (this.weapon !== null) {
			const weapon = this.weapon.toObject();

			weapon.system.description.value += `<p><b>${this.provenance}</b></p>`;

			items.push(weapon);
		}

		return items;
	}

	async getProvenance() {
		const table = await this.getRollTable("provenance");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		return draw.results[0].text ?? "";
	}

	async processSubmit(updateData) {
		this.validate();
		return updateData;
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (this.belonging === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.Belongings.RollForBelonging")
			);
		}
		if (this.garment === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.Belongings.RollForGarment")
			);
		}
		if (this.weapon === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.Belongings.RollForWeapon")
			);
		}
	}

	async _onRollBelonging(event) {
		event.preventDefault();

		const table = await this.getRollTable("personal belongings");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		this.belonging = await this.getItemFromResult(draw.results[0]);

		this.validate();

		this.characterCreator.update();
	}

	async _onRollGarment(event) {
		event.preventDefault();

		const table = await this.getRollTable("garments");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		this.garment = await this.getItemFromResult(draw.results[0]);

		this.validate();

		this.characterCreator.update();
	}

	async _onRollWeapon(event) {
		event.preventDefault();

		const table = await this.getRollTable("weapon");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		this.weapon = await this.getItemFromResult(draw.results[0]);

		this.provenance = await this.getProvenance();

		this.validate();

		this.characterCreator.update();
	}
}
