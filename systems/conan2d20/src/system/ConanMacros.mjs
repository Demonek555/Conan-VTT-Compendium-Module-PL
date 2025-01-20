import Counter from "../apps/Counter.mjs";

export default class ConanMacros {
	static async adjustDoom(value = 0) {
		if (!game.user.isGM) {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.GameMasterRoleRequired", {
					macro: "adjustDoom",
				})
			);
		}

		if (Number.isInteger(value) && value !== 0) {
			Counter.changeCounter(value, "doom");
		}
		else {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.adjustCounterValueError", {
					type: "Doom",
				})
			);
		}
	}

	static async adjustMomentum(value = 0) {
		if (!game.user.isGM) {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.GameMasterRoleRequired", {
					macro: "adjustMomentum",
				})
			);
		}

		if (Number.isInteger(value) && value !== 0) {
			Counter.changeCounter(value, "momentum");
		}
		else {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.adjustCounterValueError", {
					type: "Momentum",
				})
			);
		}
	}

	static async applyDamage() {
		const targets = await ConanMacros._getMacroActors();

		if (!Array.isArray(targets) || targets.length < 1) return;

		return new conan.apps.ApplyDamage({targets}).render(true);
	}

	static async basicSkillRoll() {
		return new conan.apps.SkillRoller().render(true);
	}

	static async combatDiceRoll() {
		new conan.apps.CombatDiceRoller().render(true);
	}

	static async coverSoakDiceRoll(itemName = null, soak = 1) {
		return ConanMacros.soakDiceRoll("cover", itemName, soak);
	}

	static async createItemMacro(dropData, slot) {
		const itemData = await Item.implementation.fromDropData(dropData);

		if (!itemData) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.Macro.Warn.CreateItemRequiresOwnership")
			);
		}

		const macroData = {
			command: `game.conan2d20.macros.postItem("${dropData.uuid}")`,
			flags: {"conan2d20.itemMacro": true},
			img: itemData.img,
			name: itemData.name,
			scope: "actor",
			type: "script",
		};

		// Assign the macro to the hotbar
		const macro =
			game.macros.find(m => m.name === macroData.name
				&& m.command === macroData.command
				&& m.author.isSelf
			) || (await Macro.create(macroData));

		game.user.assignHotbarMacro(macro, slot);
	}

	static async damageRoll(weaponName = null) {
		const actor = await ConanMacros._getMacroActor();

		let item = null;
		if (weaponName) {
			if (actor) {
				item = actor.getItemByName(weaponName);
			}
			else if (game.user.isGM) {
				item = game.items.find(x => x.name === weaponName) || null;
			}

			if (!item) {
				return ui.notifications.error(
					game.i18n.format("CONAN.Macro.Error.NoSuchItem", {
						itemName: weaponName,
					})
				);
			}

			if (!item.canCauseDamage()) {
				return ui.notifications.error(
					game.i18n.format("CONAN.Macro.Error.ItemCannotCauseDamage", {
						itemName: weaponName,
					})
				);
			}
		}

		const options = {item};

		return new conan.apps.DamageRoller(actor, options).render(true);
	}

	static async initGame() {
		if (!game.user.isGM) {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.GameMasterRoleRequired", {
					macro: "Initialize Game",
				})
			);
		}
		else {
			try {
				const players = game.users.players;

				let startingDoom = 0;

				for (const player of players) {
					const actor = player.character;

					if (!actor) continue; // Player doesn"t own a character

					// Reset current Vigor and Resolve to max.
					actor.update({"system.health.mental.value": actor.getMaxResolve()});
					actor.update({"system.health.physical.value": actor.getMaxVigor()});

					// Reset Fortune
					const startingFortune = actor.system.resources.fortune.max;
					actor.update({"system.resources.fortune.value": startingFortune});

					startingDoom += startingFortune;

					// Also purge any leftover personal momentum
					actor.update({"system.momentum": 0});
				}

				// Momentum is reset to zero
				Counter.setCounter(0, "momentum");

				// Set Doom to starting value (sum of all players" starting Fortune)
				Counter.setCounter(startingDoom, "doom");

				return ui.notifications.info(
					game.i18n.format("CONAN.Macro.Success", {
						macro: "Initialize Game",
					})
				);
			}
			catch(e) {
				return ui.notifications.error(
					game.i18n.format("CONAN.Macro.Error.CaughtError", {
						macro: "Initialize Game",
						error: e,
					})
				);
			}
		}
	}

	static async moraleSoakDiceRoll(itemName = null, soak = 1) {
		return ConanMacros.soakDiceRoll("morale", itemName, soak);
	}

	static async newScene() {
		if (!game.user.isGM) {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.GameMasterRoleRequired", {
					macro: "New Scene",
				})
			);
		}
		else {
			try {
				const players = game.users.players;

				for (const player of players) {
					const actor = player.character;

					if (!actor) continue; // Player doesn't own a character

					// Reset current Vigor and Resolve to max.
					actor.update({"system.health.mental.value": actor.getMaxResolve()});
					actor.update({"system.health.physical.value": actor.getMaxVigor()});

					// Also purge any leftover personal momentum
					actor.update({"system.momentum": 0});
				}

				// Now reduce the momentum pool by one
				Counter.changeCounter(-1, "momentum");

				return ui.notifications.info(
					game.i18n.format("CONAN.Macro.Success", {
						macro: "New Scene",
					})
				);
			}
			catch(e) {
				return ui.notifications.error(
					game.i18n.format("CONAN.Macro.Error.CaughtError", {
						macro: "New Scene",
						error: e,
					})
				);
			}
		}
	}

	static async postItem(itemUuid) {
		// This is very basic for now, we just post any item to chat
		const item = await fromUuid(itemUuid);
		item.postItem();
	}

	static async requestSkillTest() {
		if (!game.user.isGM) {
			return ui.notifications.error(
				game.i18n.format("CONAN.Macro.Error.GameMasterRoleRequired", {
					macro: "Request Skill Test",
				})
			);
		}
		else {
			try {
				conan.skillRollRequest.render(true);
			}
			catch(e) {
				return ui.notifications.error(
					game.i18n.format("CONAN.Macro.Error.CaughtError", {
						macro: "Request Skill Test",
						error: e,
					})
				);
			}
		}
	}

	static async skillRoll(skillName = null) {
		const actor = await ConanMacros._getMacroActor();

		if (!actor) return new conan.apps.SkillRoller().render(true);

		const options = {};

		// If a skill name has been specified, try and match it up to those the
		// system supports and work out what Attribute it uses by default.
		//
		if (skillName) {
			skillName ||= "";
			skillName = skillName.toLowerCase();

			if (actor.isNPC) {
				for (let expertise in CONFIG.CONAN.expertiseFields) {
					if (
						CONFIG.CONAN.expertiseFields[expertise].toLowerCase() === skillName
					) {
						options.expertise = expertise;
						options.attribute = CONFIG.CONAN.expertiseAttributeMap[expertise];
						break;
					}
				}
			}
			else {
				for (let skill in CONFIG.CONAN.skills) {
					if (CONFIG.CONAN.skills[skill].toLowerCase() === skillName) {
						options.skill = skill;
						options.attribute = CONFIG.CONAN.skillAttributeMap[skill];
						break;
					}
				}
			}

			if (!(options.attribute && (options.expertise || options.skill))) {
				return ui.notifications.warn(
					game.i18n.format("CONAN.Macro.Error.UnknownSkill", {
						skillName,
						actorName: actor.name,
					})
				);
			}
		}

		if (actor) {
			if (actor.canRollSkillChecks) {
				return new conan.apps.SkillRoller(actor, options).render(true);
			}
			else {
				ui.notifications.error(
					game.i18n.format("CONAN.SkillRoll.Errors.InvalidActorType", {
						type: game.i18n.localize(`TYPES.Actor.${actor.type}`),
					})
				);
			}
		}
	}

	static async soakDiceRoll(type = "cover", itemName = null, soak = 1) {
		const actor = await ConanMacros._getMacroActor();
		const options = {type, itemName, soak};
		new conan.apps.SoakDiceRoller(actor, options).render(true);
	}

	// Work out which actor to use.  If the user running the macro is the GM and
	// they have no tokens selected then create a generic version, otherwise use
	// the selected token.
	//
	// Players running a script always use their own character Actor.
	//
	static async _getMacroActor() {
		let actor = null;

		if (game.user.isGM) {
			const controlledTokenCount = canvas.tokens.controlled.length;
			if (controlledTokenCount > 0) {
				if (controlledTokenCount !== 1) {
					return ui.notifications.warn(
						game.i18n.format("CONAN.Macro.Error.TooManyTokensSelected", {
							max: 1,
						})
					);
				}
				else {
					actor = canvas.tokens.controlled[0].actor;
				}
			}
		}
		else {
			actor = game.user.character;
		}

		return actor;
	}

	// Work out which actors to use.  GMs need at least one token selected.
	//
	// Players always use their own character Actor.
	//
	static async _getMacroActors() {
		let actors = [];

		if (game.user.isGM) {
			const controlledTokenCount = canvas.tokens.controlled.length;
			if (controlledTokenCount > 0) {
				for (const token of canvas.tokens.controlled) {
					actors.push(token.actor);
				}
			}
			else {
				ui.notifications.warn(
					game.i18n.format("CONAN.Macro.Error.NoTokensSelected")
				);
			}
		}
		else {
			actors.push(game.user.character);
		}

		return actors;
	}
}
