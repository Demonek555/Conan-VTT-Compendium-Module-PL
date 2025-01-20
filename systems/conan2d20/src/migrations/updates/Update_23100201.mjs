import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_23100201 extends ConanUpdateBase {
	static version = 0.23100201;

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.system.qualities) {
			updateData["system.qualities.-=custom"] = null;
		}

		if (actorData.system.categories) {
			updateData["system.categories.-=custom"] = null;
		}

		return updateData;
	}

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.system.qualities) {
			const newQualities = [];

			for (const quality of itemData.system.qualities?.value ?? []) {
				if (quality.type === "custom") continue;
				newQualities.push(quality);
			}

			updateData["system.qualities.value"] = newQualities;
			updateData["system.qualities.-=custom"] = null;
		}

		if (itemData.system.coverage) {
			updateData["system.coverage.-=custom"] = null;
		}

		return updateData;
	}
}
