import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Migrates a character actor's homeland from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

export default class Update_23061901 extends ConanUpdateBase {
	static version = 0.23061901;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.homeland": {value: ""},
		};

		const currentHomeland = actorData.system?.background?.homeland?.value ?? "";

		if (currentHomeland !== "") {
			const itemLut = {};
			(await conan.compendiums.homelands(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const homelandItem = itemLut[currentHomeland.slugify()];

			if (homelandItem) {
				updateData["system.background.homeland"] = {value: homelandItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Homeland '{homeland}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							homeland: currentHomeland,
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
