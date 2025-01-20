import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class ArchetypeSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectArchetype.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectArchetype.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.archetypes(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.archetype?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.archetype.value": uuid,
		});
	}
}
