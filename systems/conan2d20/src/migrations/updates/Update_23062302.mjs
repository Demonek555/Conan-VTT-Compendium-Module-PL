import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes some dead/unused fields and renames the "war-story" field to
// something less problematic.  Also extracts the trait value from the weird
// location it had got itself in and puts it in a better place

export default class Update_23062302 extends ConanUpdateBase {
	static version = 0.23062302;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const warStory = actorData.system?.background["war-story"]?.value ?? "";
		const trait = actorData.system?.background?.story?.trait?.value ?? "";

		// TODO If both trait and caste is set for this actor, attempt to
		// work out what the matching story is as we didn't previously use
		// that field

		const updateData = {
			"system.background.-=attribute-aspect": null,
			"system.background.-=war-story": null,
			"system.background.story.-=trait": null,
			"system.background.trait": {value: trait},
			"system.background.warstory": {value: warStory},
		};

		return updateData;
	}
}
