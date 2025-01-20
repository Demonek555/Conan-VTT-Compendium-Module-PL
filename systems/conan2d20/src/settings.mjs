export default async function() {
	console.log(`${SYSTEM_NAME} | Registering game settings`);

	// -------------------
	//  INTERNAL SETTINGS
	// -------------------
	//
	game.settings.register(SYSTEM_ID, "doom", {
		name: "Doom",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
	});


	game.settings.register(SYSTEM_ID, "momentum", {
		name: "Momentum",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
	});


	// -----------------
	//  PUBLIC SETTINGS
	// -----------------
	//
	game.settings.register(SYSTEM_ID, "combatTrackerMomentumUpdate", {
		name: "Combat Tracker Updates Momentum/Doom",
		hint: "If checked the Combat Tracker will decrement the Momentum Pool when a new Combat Round starts, or when Combat ends.  It will also bank any unspent player or NPC Momentum in the Momentum or Doom Pools when their turn is flagged as completed.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
	});


	game.settings.register(SYSTEM_ID, "allowOverpoweredNpcGroups", {
		name: "Allow Overpowered NPC Groups",
		hint: "If checked, Mob/Squad members will not be limited to just Minions.",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
	});


	game.settings.register(SYSTEM_ID, "playerCounterEdit", {
		name: "Allow Players To Edit Counters",
		hint: "If checked, players will be able to change counter values manually.",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
	});


	game.settings.register(SYSTEM_ID, "disableManualHealthEdit", {
		name: "Disable Health Keyboard Input",
		hint: "If checked, players will only be able to edit their characters' health values using mouse controls.",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		requiresReload: true,
	});


	game.settings.registerMenu(SYSTEM_ID, "sources", {
		name: "Book Source Filter",
		hint: "If populated, only book sources included in this list will be used by the Character Creation and Upgrade interfaces. Items with no Book Source set will always be included.",
		label: "Configure Source Filter",
		icon: "fa-solid fa-book",
		type: conan.apps.SourceFilterSettings,
		restricted: true,
	});
	conan.apps.SourceFilterSettings.registerSetting();


	const characterCreationRollTables = await conan.compendiums.characterCreationRollTables();

	game.settings.register(SYSTEM_ID, "characterCreationRolltablePack", {
		name: "Character Creation RollTables",
		hint: "The Compendium for the Character Creator to use as a source of RollTables.",
		choices: characterCreationRollTables,
		type: String,
		default: "conan2d20.character-creation-tables-core",
		scope: "world",
		config: true,
	});


	const characterItemChoices = await conan.compendiums.characterItemChoiceRollTables();

	game.settings.register(SYSTEM_ID, "characterCreationItemPack", {
		name: "Character Creation Items",
		hint: "The Compendium of default Items to be added to Characters created by the Character Creator.",
		choices: characterItemChoices,
		type: String,
		default: "conan2d20.new-character-items",
		scope: "world",
		config: true,
	});


	game.settings.register(SYSTEM_ID, "addActionsToNewCharacters", {
		name: "CONAN.settings.addActionsToNewCharacters.name",
		hint: "CONAN.settings.addActionsToNewCharacters.hint",
		scope: "world",
		type: Boolean,
		config: true,
		default: true,
	});


	// ----------------
	//  DEBUG SETTINGS
	// ----------------
	//
	game.settings.register(SYSTEM_ID, "debugEnabled", {
		name: "CONAN.settings.debugEnabled.name",
		hint: "CONAN.settings.debugEnabled.hint",
		scope: "world",
		type: Boolean,
		config: true,
		default: false,
		requiresReload: true,
	});


	game.settings.register(SYSTEM_ID, "worldSchemaVersion", {
		name: "Schema Version",
		hint: "Records the current schema version for the Conan 2d20 system data. (don't modify this unless you know what you are doing)",
		scope: "world",
		config: game.settings.get(SYSTEM_ID, "debugEnabled"),
		default: -1,
		type: Number,
	});


	game.settings.register(SYSTEM_ID, "systemVersion", {
		name: "System Version",
		hint: "Records the current Conan 2d20 system version number (don't modify this unless you know what you are doing)",
		scope: "world",
		config: game.settings.get(SYSTEM_ID, "debugEnabled"),
		default: "",
		type: String,
	});


	game.settings.register(SYSTEM_ID, "migrateSystemCompendiums", {
		name: "Migrate System Compendiums",
		hint: "Perform data migration on the built in Conan 2d20 system compendiums (don't modify this unless you know what you are doing)",
		scope: "world",
		type: Boolean,
		config: game.settings.get(SYSTEM_ID, "debugEnabled"),
		default: false,
		requiresReload: true,
	});
}
