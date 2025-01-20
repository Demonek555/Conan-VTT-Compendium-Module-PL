import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenLanguage extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "language";
		this.skills = {};

		this.selectedLanguages = [];

		this.validate();
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._onDeleteLanguage(event));
	}

	async applySkillBonuses(skills) {
		this.skills = foundry.utils.duplicate(skills);
	}

	async characterData() {
		return {
			"system.background.languages": this.selectedLanguages,
		};
	}

	async formConfig() {
		const homelandLanguages = await this.characterCreator.getHomelandLanguages();

		let [selected, unselected] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.languages(),
				[...homelandLanguages, ...this.selectedLanguages]
			);

		selected = selected.filter(
			language => !homelandLanguages.includes(language.uuid)
		);

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Languages.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Languages.label"),
			selected,
			template: () => "apps/character-creator/languages",
			unselected,
		};
	}

	async processSubmit(updateData) {
		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "languageUuid") {
			if (!this.selectedLanguages.includes(updateData.uuid)) {
				this.selectedLanguages.push(updateData.uuid);
			}

			this.validate();
		}
	}

	async setHomelandLanguages(languages) {
		this.homelandLanguages = languages;
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		const allowedLanguages = 1 + (this.skills?.lin?.focus?.value ?? 0);
		const selectedCount = this.selectedLanguages.length;

		if (selectedCount !== allowedLanguages) {
			this.valid = false;

			let i18nKey = "YouMustSelectMutliple";
			if (allowedLanguages === 1) {
				i18nKey = "YouMustSelectSingle";
			}

			this.errors.push(
				game.i18n.format(
					`CONAN.CharacterCreator.Languages.Errors.${i18nKey}`,
					{ num: allowedLanguages })
			);
		}
	}

	async _onDeleteLanguage(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		const languages = [];
		for (const language of this.selectedLanguages) {
			if (language === deleteUuid) continue;
			languages.push(language);
		}
		this.selectedLanguages = languages;

		await this.validate();

		this.characterCreator.update();
	}

}
