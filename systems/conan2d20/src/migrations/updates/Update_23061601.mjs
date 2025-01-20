import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Remove dead/unused fields that were never removed previously due to
// limitations with the previous migration scripts

export default class Update_23061601 extends ConanUpdateBase {
	static version = 0.23061601;

	// A whole bunch of field deletions in previous schema update scripts did
	// not work correctly, so we will clean them up in this one.

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.type === "npc") {
			updateData["system.-=isMinion"] = null;
			updateData["system.-=isToughened"] = null;
			updateData["system.-=isNemesis"] = null;
		}

		updateData["system.health.mental.traumas.-=current"] = null;
		updateData["system.health.mental.traumas.-=treated"] = null;

		return updateData;
	}

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent" && itemData.system.skill) {
			conan.logger.log("Removing unused field in Item schema.");

			updateData["system.-=skill"] = null;
		}

		return updateData;
	}
}
