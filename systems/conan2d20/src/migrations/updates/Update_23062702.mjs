import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Rename schema fields for internal consistency

export default class Update_23062702 extends ConanUpdateBase {
	static version = 0.23062702;

	async updateItem(itemData, actorData) {
		const updateData = {};

		const max = itemData.system.capacity;
		const value = itemData.system.current;

		if (itemData.type === "transportation") {
			updateData["system.passengers.-=capacity"] = null;
			updateData["system.passengers.-=current"] = null;
			updateData["system.passengers.max"] = max;
			updateData["system.passengers.value"] = value;
		}

		return updateData;
	}
}
