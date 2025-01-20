import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_24022401 extends ConanUpdateBase {
	static version = 0.24022401;

	async updateActor(actorData) {

		const categoryValues = actorData.system.categories?.value ?? [];

		const updateData = {
			"system.-=categories": null,
			"system.-=difficultyModifier": null,
			"system.-=skilldice": null,
			"system.-=spells": null,
			"system.-=spellslist": null,
			"system.tags.value": categoryValues,
		};

		return updateData;
	}

}
