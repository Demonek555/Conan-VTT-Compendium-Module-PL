import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Migrates a character actor's caste from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

export default class Update_23062301 extends ConanUpdateBase {
	static version = 0.23062301;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.caste": {value: ""},
		};

		const currentValue = actorData.system?.background?.caste?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};
			(await conan.compendiums.castes(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.caste"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Caste '{caste}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							caste: currentValue,
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
