import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes some dead/unecessary fields from "action" item types and migrates
// the only needed information from actionCategory to a simple boolean

export default class Update_23062601 extends ConanUpdateBase {
	static version = 0.23062601;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "action") {
			updateData["system.-=actionCategory"] = null;
			updateData["system.-=actionCount"] = null;
			updateData["system.-=requirements"] = null;
			updateData["system.-=weapon"] = null;

			// In all the core actions but not in schema, so ditch them
			updateData["system.-=damage"] = null;
			updateData["system.-=qualities"] = null;

			if (itemData.system.actionCategory === "movement") {
				updateData["system.isMovementAction"] = true;
			}
		}

		return updateData;
	}
}
