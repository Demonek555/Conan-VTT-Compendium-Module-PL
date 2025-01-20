import CharacterCreator from "../apps/CharacterCreator";

export const conanCharacterCreatorHooks = {
	attach: () => {
		conan.logger.log("Attaching conanCharacterCreatorHooks");

		Hooks.on("renderSidebarTab", async function(app, html) {
			if (app.options.classes.includes("actors-sidebar")) {
				conan.logger.debug(
					"Running conanCharacterCreatorHooks::renderSidebarTab hook"
				);

				const title = game.i18n.localize("CONAN.CharacterCreator.button.label");

				const button = $(
					await renderTemplate(
						"systems/conan2d20/templates/ui/character-creator-button.hbs",
						{ title }
					)
				);

				button.click(() => {
					new CharacterCreator().render(true);
				});

				html.find(".directory-footer").append(button);
			}
		});
	},
};
