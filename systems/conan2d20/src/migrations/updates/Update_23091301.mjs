import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_23091301 extends ConanUpdateBase {
	static version = 0.23091301;

	async updateItem(itemData, actorData) {
		const updateData = {};

		const qualityCleanTypes = ["display", "npcattack", "weapon"];

		if (qualityCleanTypes.includes(itemData.type)) {
			const qualities = itemData.system?.qualities?.value ?? [];

			for (const quality of qualities) {
				delete quality.exceptions;
				delete quality.label;
			}

			updateData["system.qualities.value"] = qualities;
		}
		else if (itemData.type === "armor") {
			const qualities = itemData.system?.qualities?.value ?? [];

			const newQualities = [];

			for (const quality of qualities) {
				newQualities.push({
					type: quality,
					value: "",
				});
			}

			updateData["system.qualities.value"] = newQualities;
		}

		return updateData;
	}
}
