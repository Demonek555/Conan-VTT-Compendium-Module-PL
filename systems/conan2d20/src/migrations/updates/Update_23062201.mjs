import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes unecessary field, and values from weapon and npcattack items

export default class Update_23062201 extends ConanUpdateBase {
	static version = 0.23062201;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "weapon" || itemData.type === "npcattack") {
			updateData["system.-=group"] = null;

			if (itemData.system.size === "none") {
				updateData["system.size"] = "";
			}
		}

		return updateData;
	}
}
