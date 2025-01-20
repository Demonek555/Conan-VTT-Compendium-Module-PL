import { generateSortedData } from "../config.mjs";

export const setupHook = {
	attach: () => {
		conan.logger.log("Attaching setup hook");

		Hooks.once("setup", () => {
			conan.logger.log("Running setup hook");

			// Go through the CONFIG object and localize any Strings
			for (const obj in CONFIG.CONAN) {
				if ({}.hasOwnProperty.call(CONFIG.CONAN, obj)) {
					for (const el in CONFIG.CONAN[obj]) {
						if ({}.hasOwnProperty.call(CONFIG.CONAN[obj], el)) {
							if (typeof CONFIG.CONAN[obj][el] === "string") {
								CONFIG.CONAN[obj][el] = game.i18n.localize(
									CONFIG.CONAN[obj][el]
								);
							}
						}
					}
				}
			}

			generateSortedData();
		});
	},
};
