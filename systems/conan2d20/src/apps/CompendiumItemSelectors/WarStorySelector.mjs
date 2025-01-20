import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class WarStorySelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectWarStory.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectWarStory.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.warStories(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.warstory?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.warstory.value": uuid,
		});
	}
}
