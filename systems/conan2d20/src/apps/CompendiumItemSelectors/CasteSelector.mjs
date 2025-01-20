import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class CasteSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectCaste.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectCaste.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.castes(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.caste?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.caste.value": uuid,
		});
	}
}
