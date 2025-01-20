export default class SkillRollRequest extends Application {
	constructor(actor, options={}) {
		super(actor, options);

		this.difficulty = 1;
		this.skill = CONFIG.CONAN.sortedSkills[0].key;

		this.difficulties = [
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.0"),
			},
			{
				active: true,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.1"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.2"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.3"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.4"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.5"),
			},
		];
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "skill-roll-request"],
			template: "systems/conan2d20/templates/apps/skill-roll-request.hbs",
			width: "auto",
			height: "auto",
			submitOnChange: false,
			title: game.i18n.localize("CONAN.SkillRollRequest.title"),
		});
	}

	activateListeners(html) {
		super.activateListeners(html);
		const me = this;

		// Difficulty setting buttons
		html
			.find(".skill-roll-difficulty")
			.on("click", this._onClickDifficultyButton.bind(this));

		html.find(".skill-roll-select").on("change", event => {
			event.preventDefault();
			const selector = event.currentTarget;
			me.skill = selector?.value ?? CONFIG.CONAN.sortedSkills[0].key;
		});

		html.find(".copy-skill-check").click(event => {
			event.preventDefault();
			conan.utils.copyToClipboard(
				`@cst[${CONFIG.CONAN.skills[this.skill]},${this.difficulty}]`
			);
		});

		html.find(".request-skill-check").click(event => {
			event.preventDefault();
			conan.chat.renderSkillTestRequestCard({
				difficulty: this.difficulty,
				skill: CONFIG.CONAN.skills[this.skill],
			});
		});
	}

	async getData() {
		const data = {
			difficulties: this.difficulties,
			selectedSkill: this.skill,
			skills: CONFIG.CONAN.sortedSkills,
		};

		return data;
	}

	async _onClickDifficultyButton(event) {
		event.preventDefault();

		const button = $(event.currentTarget);

		const difficulty = parseInt(button.attr("data-difficulty"));

		if (difficulty === this.difficulty) return;

		this.difficulty = difficulty;

		button.siblings().removeClass("active");
		button.addClass("active");
	}
}
