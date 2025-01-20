import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_22040301 extends ConanUpdateBase {
	static version = 0.22040301;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "transportation") {
			if (
				typeof itemData.system.stowage === "number"
					|| typeof itemData.system.stowage === "string"
			) {
				conan.logger.log(
					"Found Item using old stowage schema. Migrating Item schema."
				);

				let currentStowage = parseInt(itemData.system.stowage);
				currentStowage = isNaN(currentStowage) ? 0 : currentStowage;

				updateData["system.stowage.max"] = currentStowage;
				updateData["system.stowage.value"] = currentStowage;
			}
		}

		return updateData;
	}

}
