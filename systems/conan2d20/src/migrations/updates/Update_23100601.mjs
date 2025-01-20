import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_23100601 extends ConanUpdateBase {
	static version = 0.23100601;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "armor" && itemData.system.qualities) {
			const newQualities = [];

			for (const quality of itemData.system.qualities?.value ?? []) {
				if (quality.type.hasOwnProperty("type")) {
					newQualities.push(quality.type);
				}
				else {
					newQualities.push(quality);
				}
			}

			updateData["system.qualities.value"] = newQualities;
		}

		return updateData;
	}
}
