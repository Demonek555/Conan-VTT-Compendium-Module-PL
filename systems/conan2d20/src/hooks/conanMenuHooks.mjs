import ConanMenu from "../menu/ConanMenu.mjs";

export const conanMenuHooks = {
	attach: () => {
		conan.logger.log("Attaching conanMenuHooks");

		Hooks.on("getSceneControlButtons", ConanMenu.getButtons);
		Hooks.on("renderSceneControls", ConanMenu.renderControls);
	},
};
