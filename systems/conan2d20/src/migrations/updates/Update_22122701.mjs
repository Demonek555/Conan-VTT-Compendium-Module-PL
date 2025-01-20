import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_22122701 extends ConanUpdateBase {
	static version = 0.22122701;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "kit") {
			updateData["system.quantity"] = 1;
		}

		return updateData;
	}
}
