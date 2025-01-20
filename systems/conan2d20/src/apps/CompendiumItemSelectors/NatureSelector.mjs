import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class NatureSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectNature.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectNature.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.natures(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.nature?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.nature.value": uuid,
		});
	}
}
