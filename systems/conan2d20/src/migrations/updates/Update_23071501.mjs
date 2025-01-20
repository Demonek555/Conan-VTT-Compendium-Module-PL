import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// The `archetype`, `education` and `nature` talent types don't really exist
// in the game, so retire them.  If any user has created talents of these types
// they will be moved to `other`
//
// Also, for skill related talents, attempt to set the linked skill from the
// tree name as this will be useful for the new Talent Manager that's being
// added

export default class Update_23071501 extends ConanUpdateBase {
	static version = 0.23071501;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent") {
			const talentType = itemData.system.talentType;

			const typesToMigrate = ["archetype", "education", "nature"];

			if (typesToMigrate.includes(talentType)) {
				updateData["system.talentType"] = "other";
			}
			else if (talentType === "skill") {
				updateData["system.tree"] = "";

				let foundSkill = false;
				const tree = (itemData.system.tree ?? "").trim();
				for (const [key, value] of Object.entries(CONFIG.CONAN.skills)) {
					if (tree === value) {
						foundSkill = true;
						updateData["system.linkedSkill"] = key;
						break;
					}
				}

				if (!foundSkill) {
					let message;

					// linkedSkill needs to be set to _something_ so just use
					// the first in the list and also warning that it needs to
					// be manually fixed should be good enough
					//
					updateData["system.linkedSkill"] = "acr";

					if (actorData) {
						message = game.i18n.format(
							"Unable to derive linked Skill for Talent '{talent}' belonging to Actor '{actorName}' from its configured Tree; you will need to update the linked Skill for this Talent manually.",
							{
								talent: itemData.name,
								actorName: actorData.name,
							}
						);
					}
					else {
						message = game.i18n.format(
							"Unable to derive linked Skill for Talent '{talent}' from its configured Tree; you will need to update the linked Skill for this Talent manually.",
							{
								talent: itemData.name,
							}
						);
					}

					ui.notifications.warn(message, {permanent: true});
				}
			}
			else if (talentType !== "other") {
				updateData["system.tree"] = "";
			}
		}

		return updateData;
	}
}
