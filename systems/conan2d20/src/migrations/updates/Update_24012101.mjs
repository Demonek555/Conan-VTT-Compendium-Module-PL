import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_24012101 extends ConanUpdateBase {
	static version = 0.24012101;

	async updateActor(actorData) {
		if (actorData.type !== "npc") return;

		return {
			"system.-=description": null,
			"system.-=notes": null,
			"system.-=optional": null,
		};
	}

}
