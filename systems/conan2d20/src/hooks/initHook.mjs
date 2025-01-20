import { SYSTEM_ID, SYSTEM_NAME, CONFIG as CONANCONFIG } from "../config.mjs";

import * as apps from "../apps/_module.mjs";
import * as documents from "../documents/_module.mjs";
import * as sheets from "../sheets/_module.mjs";

import Combat2d20 from "../combat/Combat2d20.mjs";
import CombatDie from "../system/CombatDie.mjs";
import CombatTracker2d20 from "../combat/CombatTracker2d20.mjs";
import ConanChat from "../system/ConanChat.mjs";
import ConanCompendiums from "../documents/ConanCompendiums.mjs";
import ConanDice from "../system/ConanDice.mjs";
import ConanHooks from "../system/ConanHooks.mjs";
import ConanMacros from "../system/ConanMacros.mjs";
import ConanUtils from "../utils/ConanUtils.mjs";
import Counter from "../apps/Counter.mjs";
import Logger from "../utils/Logger.mjs";

import preloadHandlebarsTemplates from "../templates.mjs";
import registerHandlebarsHelpers from "../handlebars.mjs";
import registerSettings from "../settings.mjs";
import registerTextEditorEnrichers from "../enrichers.mjs";

export function initHook() {
	console.log(`${SYSTEM_NAME} | Running init hook`);

	globalThis.SYSTEM_ID = SYSTEM_ID;
	globalThis.SYSTEM_NAME = SYSTEM_NAME;

	CONFIG.CONAN = CONANCONFIG;

	// Override the default status effects
	CONFIG.statusEffects = CONFIG.CONAN.statusEffects;

	globalThis.conan = {
		apps,
		chat: ConanChat,
		compendiums: ConanCompendiums,
		config: CONANCONFIG,
		counter: new Counter(),
		dice: ConanDice,
		logger: Logger,
		utils: ConanUtils,
	};

	game.conan2d20 = {
		macros: ConanMacros,
	};

	registerSettings();

	// Override the default combat tracker with our own
	CONFIG.ui.combat = CombatTracker2d20;

	registerDocumentClasses();
	registerDocumentSheets();

	registerDiceSettings();

	registerHandlebarsHelpers();
	registerTextEditorEnrichers();

	preloadHandlebarsTemplates();

	ConanHooks.attach();
}

function registerDiceSettings() {
	CONFIG.Dice.terms.p = CombatDie;
}

function registerDocumentClasses() {
	CONFIG.Actor.documentClass = documents.ConanActor;
	CONFIG.Combat.documentClass = Combat2d20;
	CONFIG.Item.documentClass = documents.ConanItem;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet(SYSTEM_ID, sheets.ConanCharacterSheet, {
		makeDefault: true,
		types: ["character"],
	});

	Actors.registerSheet(SYSTEM_ID, sheets.ConanTransportSheet, {
		makeDefault: true,
		types: ["mount", "transport", "watercraft"],
	});

	Actors.registerSheet(SYSTEM_ID, sheets.ConanNPCSheet, {
		makeDefault: true,
		types: ["npc"],
	});

	Items.registerSheet(SYSTEM_ID, sheets.ConanBaseItemSheet, {
		makeDefault: true,
	});
}
