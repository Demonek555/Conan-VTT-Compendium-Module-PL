import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_031421 extends ConanUpdateBase {
	static version = 0.031421;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent" && itemData.system.skill) {
			conan.logger.log(
				"Found Talent Item from previous schema. Migrating Item schema."
			);

			if (!itemData.system.tree) {
				updateData["system.tree"] =
					game.i18n.localize(CONFIG.CONAN.skills[item.system.skill]) || "";
			}

			conan.logger.log("Removing unused field in Item schema.");

			updateData["system.-=skill"] = null;
		}

		return updateData;
	}
}
