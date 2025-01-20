import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class StorySelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectStory.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectStory.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.stories(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.story?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.story.value": uuid,
		});
	}
}
