import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

// Migrates a character actor's languages to uuid compendium links
//
// Attempts to match any custom values to a uuid compendium link if there is
// a match on the slugified names

export default class Update_23062001 extends ConanUpdateBase {
	static version = 0.23062001;

	async updateActor(actorData) {
		const updateData = {};

		const isCharacter = actorData.type === "character";

		if (!isCharacter) return;

		const hasLanguages = (Array.isArray(actorData.system.background.languages.value)
			&& actorData.system.background.languages.value.length > 0
		) || actorData.system.background.languages.custom !== "";

		const newLanguages = [];
		if (isCharacter && hasLanguages) {

			const languageLut = {};
			(await conan.compendiums.languages(false)).forEach(
				item => languageLut[item.name.slugify()] = item.uuid
			);

			for (const language of actorData.system.background.languages.value) {
				if (languageLut[language]) {
					newLanguages.push(languageLut[language]);
				}
			}

			// Custom languages can be separated by semicolon characters to allow for
			// more than one custom language
			let customLanguages = (actorData.system?.background?.languages?.custom ?? "").split(";");
			customLanguages = customLanguages.filter(e => e); // filter out empty strings

			for (const language of customLanguages) {
				const lutKey = language.slugify();

				if (languageLut[lutKey]) {
					newLanguages.push(languageLut[lutKey]);
				}
				else {
					ui.notifications.warn(
						game.i18n.format(
							"Language '{language}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
							{
								language,
								name: actorData.name,
							}
						),
						{permanent: true}
					);
				}
			}

		}
		updateData["system.background.languages"] = newLanguages;

		return updateData;
	}
}
