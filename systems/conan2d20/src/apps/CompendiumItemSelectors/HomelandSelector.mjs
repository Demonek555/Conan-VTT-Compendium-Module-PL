import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class HomelandSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectHomeland.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectHomeland.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.homelands(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.homeland?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.homeland.value": uuid,
		});
	}
}
