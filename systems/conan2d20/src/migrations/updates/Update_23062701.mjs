import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes some dead/unecessary fields from "talent" item types

export default class Update_23062701 extends ConanUpdateBase {
	static version = 0.23062701;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent") {
			updateData["system.-=actionCategory"] = null;
			updateData["system.-=actionType"] = null;
			updateData["system.-=category"] = null;
			updateData["system.-=skill"] = null;
		}

		return updateData;
	}
}
