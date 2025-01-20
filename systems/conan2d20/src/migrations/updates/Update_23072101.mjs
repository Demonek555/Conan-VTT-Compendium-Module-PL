import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Migrates a character actor's archetype from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

export default class Update_23072101 extends ConanUpdateBase {
	static version = 0.23072101;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.archetype": {value: ""},
		};

		const currentValue = actorData.system?.background?.archetype?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};

			(await conan.compendiums.archetypes(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.archetype"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Archetype '{archetype}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							archetype: currentValue,
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
