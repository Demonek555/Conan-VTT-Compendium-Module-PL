import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes some dead/unecessary fields from "talent" item types

export default class Update_23062801 extends ConanUpdateBase {
	static version = 0.23062801;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "caste") {
			updateData["system.story.-=numAllowed"] = null;
			updateData["system.talent.-=numAllowed"] = null;
		}

		if (itemData.type === "homeland") {
			updateData["system.language.-=numAllowed"] = null;
			updateData["system.talent.-=numAllowed"] = null;
		}

		if (itemData.type === "nature") {
			updateData["system.electiveSkill.-=numAllowed"] = null;
			updateData["system.mandatorySkill.-=numAllowed"] = null;
		}

		return updateData;
	}
}
