import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_22102901 extends ConanUpdateBase {
	static version = 0.22102901;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.system.encumbrance === "1each") {
			conan.logger.log(
				"Found Item using old '1each' encumbrance value. Migrating Item."
			);

			updateData["system.encumbrance"] = 1;
		}

		return updateData;
	}

}
