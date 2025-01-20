import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_220106 extends ConanUpdateBase {
	static version = 0.220106;

	async updateActor(actorData) {
		const updateData = {};

		const physicalExists = Number.isInteger(
			actorData.system?.health?.physical?.bonus
		);

		const mentalExists = Number.isInteger(
			actorData.system?.health?.mental?.bonus
		);

		if (!physicalExists || !mentalExists) {
			conan.logger.log(
				"Found Actor missing health bonus from previous schema. Migrating Actor schema."
			);

			updateData["system.health.physical.bonus"] = 0;
			updateData["system.health.mental.bonus"] = 0;
		}

		return updateData;
	}
}
