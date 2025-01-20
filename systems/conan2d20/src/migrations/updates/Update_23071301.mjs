import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Removes unecessary legacy data entries from character templates as they
// are now calculated

export default class Update_23071301 extends ConanUpdateBase {
	static version = 0.23071301;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const skillKeys = [
			"acr",
			"alc",
			"ani",
			"ath",
			"com",
			"cou",
			"cra",
			"dis",
			"hea",
			"ins",
			"lin",
			"lor",
			"mel",
			"obs",
			"par",
			"per",
			"ran",
			"res",
			"sai",
			"soc",
			"sor",
			"ste",
			"sur",
			"thi",
			"war",
		];

		const updateData = {};

		skillKeys.forEach(key => {
			updateData[`system.skills.${key}.-=trained`] = null;
			updateData[`system.skills.${key}.-=tn`] = null;
		});

		return updateData;
	}
}
