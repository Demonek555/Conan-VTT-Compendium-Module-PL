import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes some dead/unecessary fields from "display" item types and migrates
// the only needed information from actionCategory to a simple boolean

export default class Update_23062602 extends ConanUpdateBase {
	static version = 0.23062602;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "display") {
			updateData["system.-=requirement"] = null;

			if (itemData.system.damage.dice === "x") {
				updateData["system.damage.dice"] = 0;
				updateData["system.damage.special"] = true;
			}
			else {
				let dice = Number.parseInt(itemData.system.damage.dice);

				if (isNaN(dice)) dice = 1;

				updateData["system.damage.dice"] = dice;
			}
		}

		return updateData;
	}
}
