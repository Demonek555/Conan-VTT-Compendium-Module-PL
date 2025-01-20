import CompendiumItemSelector from "../CompendiumItemSelector.mjs";

export default class EducationSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectEducation.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectEducation.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.educations(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.education?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.education.value": uuid,
		});
	}
}
