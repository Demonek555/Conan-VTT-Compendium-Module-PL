import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_22081201 extends ConanUpdateBase {
	static version = 0.22081201;

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.type === "npc") {
			// Delete these unused fields
			updateData["system.-=isMinion"] = null;
			updateData["system.-=isToughened"] = null;
			updateData["system.-=isNemesis"] = null;

			const categories = actorData.system.categories.value;

			if (categories.includes("minion")) {
				updateData["system.type"] = "minion";
			}
			if (categories.includes("toughened")) {
				updateData["system.type"] = "toughened";
			}
			if (categories.includes("nemesis")) {
				updateData["system.type"] = "nemesis";
			}


			const newCategories = [];
			for (const category of actorData.system.categories.value) {
				if (category !== "minion"
					&& category !== "toughened"
					&& category !== "nemesis"
				) {
					newCategories.push(category);
				}
			}

			updateData["system.categories.value"] = newCategories;
		}

		return updateData;
	}
}
