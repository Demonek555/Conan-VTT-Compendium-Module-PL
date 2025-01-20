import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenTalent extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "talent";

		this.selectedTalent = "";

		this.validate();
	}

	async formConfig() {
		const availableTalents = await this.talentManager.getAvailableSkillTalents();

		return {
			...await super.formConfig(),
			availableTalents,
			description: game.i18n.localize("CONAN.CharacterCreator.FinalTalent.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Talent.label"),
			selectedTalent: this.selectedTalent,
			template: () => "apps/character-creator/talent",
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
		this.selectedTalent = updateData.final_talent ?? "";

		this.validate();

		return updateData;
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (this.selectedTalent === "") {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectATalent")
			);
		}
	}

}
