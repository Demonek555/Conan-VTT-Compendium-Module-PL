export const hotbarDrop = {
	attach: () => {
		conan.logger.log("Attaching hotbarDrop hook");

		Hooks.on("hotbarDrop", (bar, data, slot) => {
			conan.logger.debug("Running hotbarDrop hook");

			if (data.type === "Item") {
				game.conan2d20.macros.createItemMacro(data, slot);
				return false;
			}
		});
	},
};
