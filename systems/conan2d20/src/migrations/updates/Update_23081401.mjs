import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Remove legacy 'prerequisites' field from Talents and irrelevant `xp.max`
// value from Actors

export default class Update_23081401 extends ConanUpdateBase {
	static version = 0.23081401;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.resources.xp.-=max": null,
		};

		return updateData;
	}

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent") {
			updateData["system.-=prerequisites"] = null;
		}

		return updateData;
	}
}
