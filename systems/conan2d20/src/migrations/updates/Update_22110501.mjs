import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_22110501 extends ConanUpdateBase {
	static version = 0.22110501;

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.system.health.mental.traumas.current) {
			updateData["system.health.mental.traumas.value"] =
				actorData.system.health.mental.traumas.current;

			updateData["system.health.mental.traumas.-=current"] = null;
			updateData["system.health.mental.traumas.-=treated"] = null;

			conan.logger.log("Conan2d20 System | Migrating Actor mental health");
		}

		return updateData;
	}
}
