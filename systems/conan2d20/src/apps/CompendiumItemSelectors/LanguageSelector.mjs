import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class LanguageSelector extends CompendiumItemSelector {

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectLanguage.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectLanguages.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.languages(false);
	}

	async getUuids() {
		return this.object?.system?.background?.languages ?? [];
	}

	async saveUuids(uuids) {
		return this.object.update({
			"system.background.languages": uuids,
		});
	}
}
