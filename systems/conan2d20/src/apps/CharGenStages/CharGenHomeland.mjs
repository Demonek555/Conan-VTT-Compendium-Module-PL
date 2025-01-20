import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenHomeland extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "homeland";

		this.homeland = null;
		this.homelandTalent = null;

		this.language = null;
		this.languageChanged = false;
		this.languages = [];

		this.validate();
	}

	async _onRollHomeland(event) {
		event.preventDefault();

		const homelands = await conan.compendiums.homelands();
		this.homeland = await this.randomItem(homelands);

		const talentUuid = this.homeland?.system?.talent?.choices[0];

		this.homelandTalent = await fromUuid(talentUuid) ?? null;

		await this._updateLanguageChoices();

		this.validate();

		this.characterCreator.update();
	}

	async _updateLanguageChoices() {
		const languages = this.homeland?.system?.language?.choices ?? [];

		this.languages = [];
		for (const language of languages) {
			const languageObject = await fromUuid(language);

			this.languages.push({
				name: languageObject.name,
				value: language,
			});
		}

		this.languages.sort((a, b) => a.name.localeCompare(b.name));

		this.language = this.languages[0]?.value ?? "";
		this.languageChanged = true;
	}

	activateListeners(html) {
		html.find(".homeland-roll").click(event => this._onRollHomeland(event));
	}

	async characterData() {
		return {
			"system.background.homeland.value": this.homeland?.uuid ?? "",
			"system.background.languages": this.language ? [this.language] : [],
		};
	}

	async formConfig() {
		const homelandUuid = this.homeland?.uuid ?? "";

		const [selectedHomelands, unselectedHomelands] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.homelands(),
				homelandUuid ? [homelandUuid] : []
			);


		let talentDescriptionHTML = "";

		if (this.homelandTalent) {
			talentDescriptionHTML = await TextEditor.enrichHTML(
				this.homelandTalent.system.description.value,
				{
					async: true,
				}
			);
		}

		let languageItem = null;
		if (this.language) {
			languageItem = await fromUuid(this.language);
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Homeland.description"),
			homeland: this.homeland,
			homelandTalent: this.homelandTalent,
			label: game.i18n.localize("CONAN.CharacterCreator.Homeland.label"),
			language: this.language,
			languageItem,
			languages: this.languages,
			chooseLanguage: (this.languages ?? []).length > 1,
			selected: selectedHomelands,
			talentDescriptionHTML,
			template: () => "apps/character-creator/homeland",
			unselected: unselectedHomelands,
		};
	}

	async getHomelandLanguages() {
		return this.language ? [this.language] : [];
	}

	async getItems() {
		if (!this.homelandTalent) return;

		return [this.homelandTalent];
	}

	async processSubmit(updateData) {
		if (this.languageChanged) {
			this.languageChanged = false;
		}
		else {
			this.language = updateData.homelandLanguage;
		}

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "homelandUuid") {
			this.homeland = await fromUuid(updateData.uuid);

			const talentUuid = this.homeland?.system?.talent?.choices[0];

			this.homelandTalent = await fromUuid(talentUuid) ?? null;

			await this._updateLanguageChoices();

			this.validate();

			this.characterCreator.update();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.homeland && this.homeland.type === "homeland")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Homeland.Errors.YouMustSelectAHomeland")
			);
		}
	}

}
