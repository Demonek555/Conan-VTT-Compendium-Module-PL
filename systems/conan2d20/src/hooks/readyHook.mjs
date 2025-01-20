import ConanMigrationRunner from "../migrations/ConanMigrationRunner.mjs";

import foundryOverrides from "../overrides.mjs";
import listenOnSocket from "../socket.mjs";
import registerSettings from "../settings.mjs";

export const readyHook = {
	attach: () => {
		conan.logger.log("Attaching ready hook");

		Hooks.once("ready", async () => {
			conan.logger.log("Running ready hook");

			registerSettings();

			foundryOverrides();
			listenOnSocket();

			if (game.user.isGM) {
				await new ConanMigrationRunner().run();
			}

			conan.skillRollRequest = new conan.apps.SkillRollRequest();

			conan.counter.render(true);
			conan.utils.showNewReleaseNotes();
		});
	},
};
