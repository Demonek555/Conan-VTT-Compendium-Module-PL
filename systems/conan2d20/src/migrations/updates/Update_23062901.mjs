import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Migrates a character actor's nature from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

export default class Update_23062901 extends ConanUpdateBase {
	static version = 0.23062901;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.education": {value: ""},
		};

		const currentValue = actorData.system?.background?.education?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};
			(await conan.compendiums.educations(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.education"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Education '{education}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							education: currentValue,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}
