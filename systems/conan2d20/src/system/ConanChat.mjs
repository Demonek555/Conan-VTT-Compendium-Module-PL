export default class ConanChat {

	static async renderApplyDamageResultCard(data) {
		const template = "systems/conan2d20/templates/chat/apply-damage-result-card.hbs";
		return ConanChat._renderChatCard(template, data);
	}

	static async renderCombatDiceRollCard(data) {
		const template =
			"systems/conan2d20/templates/chat/combat-dice-roll-card.hbs";
		ConanChat._renderChatCard(template, data);
	}

	static async renderDamageRollCard(data) {
		const template = "systems/conan2d20/templates/chat/damage-roll-card.hbs";
		ConanChat._renderChatCard(template, data);
	}

	static async renderSkillTestCard(data) {
		const template = "systems/conan2d20/templates/chat/skill-roll-card.hbs";
		ConanChat._renderChatCard(template, data);
	}

	static async renderSkillTestRequestCard(data) {
		const template = "systems/conan2d20/templates/chat/skill-roll-request-card.hbs";
		return ConanChat._renderChatCard(template, data);
	}

	static async renderSoakDiceRollCard(data) {
		const template = "systems/conan2d20/templates/chat/soak-roll-card.hbs";
		ConanChat._renderChatCard(template, data);
	}

	static async rerollNotification(numDice, actor) {
		let speaker;
		if (actor) {
			speaker = ChatMessage.getSpeaker({
				actor: actor,
				token: actor.token,
			});
		}
		else {
			speaker = ChatMessage.getSpeaker();
		}

		let html = `<h2>${game.i18n.localize("CONAN.rerollTriggered")}</h2><div>`;

		const diceSuffix =
			numDice > 1
				? game.i18n.localize("CONAN.dicePlural")
				: game.i18n.localize("CONAN.diceSingular");

		if (actor?.isNPC) {
			html += `${game.i18n.format("CONAN.rerollTextNpc", {
				character: `<b>${speaker.alias}</b>`,
				diceCount: `<b>${numDice}</b>`,
			})} ${diceSuffix}.<br>`;
		}
		else {
			html += `${game.i18n.format("CONAN.rerollText", {
				character: `<b>${speaker.alias}</b>`,
				diceCount: `<b>${numDice}</b>`,
			})} ${diceSuffix}.<br>`;
		}

		html += "</div>";

		const chatData = {
			speaker,
			rollMode: "reroll",
			content: html,
		};

		ChatMessage.create(chatData);
	}

	static getMessageActor(message) {
		const tokenId = message.flags.conan2d20.tokenId;

		// If tokenId is set on the message flags, then we need to use the
		// synthetic Token Actor rather than the base Actor.
		//
		let actor;
		if (tokenId) {
			actor = game.actors.tokens[tokenId];
		}
		else {
			actor = game.actors.get(message.speaker.actor);
		}

		return actor;
	}

	static async _renderChatCard(template, data) {
		const html = await renderTemplate(template, data);

		let speaker;
		if (data.actor) {
			speaker = ChatMessage.getSpeaker({
				actor: data.actor,
				token: data.actor.token,
			});
		}
		else {
			speaker = ChatMessage.getSpeaker();
		}

		const messageStyles = conan.utils.getMessageStyles();

		const chatData = {
			"flags.data": data,
			content: html,
			speaker,
			type: messageStyles.OTHER,
			user: game.user.id,
		};

		ChatMessage.applyRollMode(chatData, game.settings.get("core", "rollMode"));

		return ChatMessage.create(chatData);
	}

	static async applyDamageFromMessage(message) {
		const data = message.flags.data;

		let item = null;
		if (data.actor) {
			const actor = await game.actors.get(data.actor._id);

			item = actor.getEmbeddedDocument(
				"Item",
				data.item._id
			);
		}

		let targets = [];

		const controlledTokenCount = canvas.tokens.controlled.length;
		if (controlledTokenCount > 0) {
			for (const token of canvas.tokens.controlled) {
				targets.push(token.actor);
			}
		}
		else {
			return ui.notifications.warn(
				game.i18n.format("CONAN.ApplyDamage.Error.NoTokensSelected.message")
			);
		}

		const damage = {
			resolve: 0,
			vigor: 0,
			effects: 0,
			location: "torso",
		};

		if (data.rollData.damage.type === "physical") {
			damage.vigor = data.results.total;
		}
		else {
			damage.resolve = data.results.total;
		}

		damage.effects = data.results.effects;
		damage.location = data.rollData.damage.locationId ?? "head";

		return new conan.apps.ApplyDamage({
			damage,
			item,
			targets,
		}).render(true);
	}
}

// eslint-disable-next-line no-unused-vars
Hooks.on("renderChatLog", (log, html, data) => {

	// Handle clicking on the Spend/Bank Momentum button on a successfull skill
	// test chat card
	html.on("click", ".chat-bank-momentum", event => {
		const target = $(event.currentTarget);
		const messageId = target.parents(".message").attr("data-message-id");
		const message = game.messages.get(messageId);

		if (message.isAuthor || game.user.isGM) {
			const actor = game.actors.get(message.speaker.actor);
			const bankType = message.flags?.data?.rollData?.bankType ?? null;

			if (actor.system.momentum <= 0) {
				ui.notifications.warn(game.i18n.localize("CONAN.noUnbankedMomentum"));
			}
			else {
				new conan.apps.MomentumBanker(actor, {bankType}).render(true);
			}
		}
	});

	// Handle clicking on the Attack button on a weapon chat card
	html.on("click", ".chat-execute-attack", event => {
		event.preventDefault();

		const target = $(event.currentTarget);

		const messageId = target.parents(".message").attr("data-message-id");
		const message = game.messages.get(messageId);

		const actor = ConanChat.getMessageActor(message);
		const itemId = message.flags.conan2d20.itemId;

		actor._executeAttack(itemId);
	});

	// Handle clicking on the Damage button on a weapon chat card
	html.on("click", ".chat-execute-damage", event => {
		event.preventDefault();

		const target = $(event.currentTarget);

		const messageId = target.parents(".message").attr("data-message-id");
		const message = game.messages.get(messageId);

		const actor = ConanChat.getMessageActor(message);

		const weapon = actor.getEmbeddedDocument(
			"Item",
			message.flags.conan2d20.itemId
		);

		weapon.triggerDamageRoll();
	});

	// Handle clicking on the Shield Soak button on a weapon chat card
	html.on("click", ".chat-execute-soak", event => {
		event.preventDefault();

		const target = $(event.currentTarget);

		const messageId = target.parents(".message").attr("data-message-id");
		const message = game.messages.get(messageId);

		const actor = ConanChat.getMessageActor(message);

		const item = actor.getEmbeddedDocument(
			"Item",
			message.flags.conan2d20.itemId
		);

		item.triggerSoakRoll();
	});

	// Handle clicking on the Shield Soak button on a weapon chat card
	html.on("click", ".chat-use-kit", event => {
		event.preventDefault();

		const target = $(event.currentTarget);

		const messageId = target.parents(".message").attr("data-message-id");
		const message = game.messages.get(messageId);

		const actor = ConanChat.getMessageActor(message);

		actor.useKit(message.flags.conan2d20.itemId);
	});

	// Handle clicking on dice in chat to select for reroll
	html.on("click", ".roll-list-entry", event => {
		const target = $(event.currentTarget);
		const messageId = target.parents(".message").attr("data-message-id");
		const message = game.messages.get(messageId);

		const isReroll = message.flags.data.rollData.isReroll;
		const rolls = message.flags.data.results.rolls;

		if (message.isAuthor || game.user.isGM) {
			if (!isReroll) {
				const diceId = parseInt(target.attr("id"));
				const isFortuneDie = rolls[diceId].fortuneSpend;

				// Don"t allow dice bought with Fortune to be re-rolled
				if (isFortuneDie) {
					return ui.notifications.warn(
						game.i18n.localize("CONAN.YouCannotSelectFortuneDiceForReroll")
					);
				}
				else {
					target.toggleClass("selected");

					const newHtml = target.parents().children(".message-content").html();

					message.update({content: newHtml});
				}
			}
			else {
				return ui.notifications.warn(
					game.i18n.localize("CONAN.YouCanOnlyRerollOnce")
				);
			}
		}
	});
});

Hooks.on("getChatLogEntryContext", (html, options) => {
	const canReroll = function(li) {
		let result = false;
		const message = game.messages.get(li.attr("data-message-id"));

		if (message.isAuthor || game.user.isGM) {
			const card = li.find(".roll-card");
			if (card.length && message.flags.data.rollData.isReroll === false) {
				result = true;
			}
		}
		return result;
	};

	options.push(
		{
			name: game.i18n.localize("CONAN.CHATOPT.triggerReroll"),
			icon: "<i class=\"fas fa-dice\"></i>",
			condition: canReroll,
			callback: li => {
				const message = game.messages.get(li.attr("data-message-id"));
				try {
					conan.dice.triggerReroll(message);
				}
				catch(e) {
					conan.logger.error(e);
					ui.notifications.error(e);
				}
			},
		},
		{
			name: game.i18n.localize("CONAN.ApplyDamage.title"),
			icon: "<i class=\"fa-solid fa-droplet\"></i>",
			condition: li => {
				const message = game.messages.get(li.attr("data-message-id"));
				return game.user.isGM && message.flags?.data?.type === "damage";
			},
			callback: li => {
				const message = game.messages.get(li.attr("data-message-id"));
				try {
					ConanChat.applyDamageFromMessage(message);
				}
				catch(e) {
					conan.logger.error(e);
					ui.notifications.error(e);
				}
			},
		}
	);

	options.sort((a, b) => a.name.localeCompare(b.name));
});
