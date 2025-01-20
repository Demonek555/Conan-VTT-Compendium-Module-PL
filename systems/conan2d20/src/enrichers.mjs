export default function registerTextEditorEnrichers() {

	CONFIG.TextEditor.enrichers = CONFIG.TextEditor.enrichers.concat(
		[{
			pattern: /@([cr]{1})st\[([^,]+),\s*([0-5])\]/gm,
			enricher: enrichSkillTestRequest,
		},
		{
			pattern: /§|CD|DC/gm,
			enricher: () => {
				const i = document.createElement("i");
				i.classList.add("phoenix-sigil");
				return i;
			},
		}]
	);

	const body = $("body");
	body.on("click", "a.conan-skill-test", _onClick);
}

// Work out which actor to use.  If the user clicking the link is the GM and
// they have tokens selected then use these.
//
// Players always use their own character Actor.
//
async function getActors() {
	let actors = [];

	if (game.user.isGM) {
		for (const token of canvas.tokens.controlled) {
			actors.push(token.actor);
		}
	}
	else {
		actors.push(game.user.character);
	}

	return actors;
}

async function enrichSkillTestRequest(match, options) {
	const type = match[1];
	const skill = match[2].trim();
	const difficulty = Number(match[3]);
	const difficultyLabel = CONFIG.CONAN.rollDifficultyLevels[difficulty];

	const a = document.createElement("a");
	a.classList.add("conan-skill-test");

	a.dataset.difficulty = difficulty;
	a.dataset.skill = skill;
	a.dataset.type = type;

	switch (type) {
		case "c":
			a.classList.add("conan-request-skill-test");
			a.innerHTML = `<i class="fa-regular fa-comment-dots"></i> ${difficultyLabel} ${skill}`;
			break;
		case "r":
			a.classList.add("conan-roll-skill-test");
			a.innerHTML = `<i class="fa-solid fa-dice-d20"></i> ${difficultyLabel} ${skill}`;
			break;
	}

	return a;
}

async function triggerSkillRollRequest(data) {
	const actors = await getActors();

	if (actors.length <= 0) {
		return ui.notifications.warn(
			game.i18n.localize("CONAN.Macro.Error.NoTokensSelected")
		);
	}

	const skillName = data.skill.toLowerCase();

	for (const actor of actors) {
		const options = {
			difficulty: Number(data.difficulty) ?? 1,
		};

		if (actor.isNPC) {
			for (let expertise in CONFIG.CONAN.expertiseFields) {
				const enName = CONFIG.CONAN.expertiseFieldsEnglish[expertise].toLowerCase();
				const i18nName = CONFIG.CONAN.expertiseFields[expertise].toLowerCase();

				if (i18nName === skillName || enName === skillName) {
					options.expertise = expertise;
					options.attribute = CONFIG.CONAN.expertiseAttributeMap[expertise];
					break;
				}
			}
		}
		else {
			for (let skill in CONFIG.CONAN.skills) {
				const enName = CONFIG.CONAN.skillsEnglish[skill].toLowerCase();
				const i18nName = CONFIG.CONAN.skills[skill].toLowerCase();

				if (i18nName === skillName || enName === skillName) {
					options.skill = skill;
					options.attribute = CONFIG.CONAN.skillAttributeMap[skill];
					break;
				}
			}
		}

		if (!(options.attribute && (options.expertise || options.skill))) {
			ui.notifications.warn(
				game.i18n.format("CONAN.Macro.Error.UnknownSkill", {
					skillName,
					actorName: actor.name,
				})
			);

			continue;
		}

		new conan.apps.SkillRoller(actor, options).render(true);
	}
}

async function _onClick(event) {
	event.preventDefault();

	const element = event.currentTarget;
	const data = foundry.utils.duplicate(element.dataset) ?? {};

	if (data.type === "c") {
		return conan.chat.renderSkillTestRequestCard(data);
	}

	if (data.type === "r") {
		return triggerSkillRollRequest(data);

	}
}
