import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenName extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "name";

		this.characterName = "";

		this.validate();
	}

	async characterData() {
		return {name: this.characterName};
	}

	async formConfig() {
		return {
			...await super.formConfig(),
			characterName: this.characterName,
			description: game.i18n.localize("CONAN.CharacterCreator.Name.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Name.label"),
			template: () => "apps/character-creator/name",
		};
	}

	async processSubmit(updateData) {
		this.characterName = updateData.characterName;

		this.validate();

		return updateData;
	}

	async validate() {
		this.errors = [];
		this.valid = typeof this.characterName === "string" && this.characterName.length > 0;

		if (!this.valid) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Name.Errors.NameCannotBeBlank")
			);
		}
	}

}
