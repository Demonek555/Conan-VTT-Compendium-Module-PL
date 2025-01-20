import ConanMenuLayer from "./ConanMenuLayer.mjs";

export default class ConanMenu {
	static async getButtons(controls) {
		canvas.conanGmTools = new ConanMenuLayer();

		controls.push({
			name: "conan-menu",
			title: "CONAN.GmTools",
			layer: "conanGmTools",
			icon: "fa-solid fa-axe-battle",
			visible: game.user.isGM,
			tools: [
				{
					button: true,
					icon: "fa-solid fa-user-plus",
					name: "open-character-creator",
					title: "CONAN.CharacterCreator.button.label",
					onClick: async () => new conan.apps.CharacterCreator().render(true),
				},
				{
					button: true,
					icon: "fa-solid fa-dice-d20",
					name: "request-skill-roll",
					title: "CONAN.SkillRollRequest.title",
					onClick: async () => conan.skillRollRequest.render(true),
				},
				{
					button: true,
					icon: "fa-solid fa-clapperboard",
					name: "new-scene-tool",
					title: "CONAN.NewScene.title",
					onClick: async () => game.conan2d20.macros.newScene(),
				},
				{
					button: true,
					icon: "fa-solid fa-repeat",
					name: "init-game-tool",
					title: "CONAN.InitialiseGame.title",
					onClick: async () => game.conan2d20.macros.initGame(),
				},
			],
		});
	}

	static async renderControls(app, html, data) {}
}
