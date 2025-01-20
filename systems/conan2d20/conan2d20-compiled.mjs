function diceSoNiceReadyHook(dice3d) {
	console.log(`${SYSTEM_NAME} | Running diceSoNiceReady hook`);

	dice3d.addSystem(
		{id: "conan2d20black", name: "Conan 2d20 - Black"},
		"default"
	);
	dice3d.addSystem({id: "conan2d20white", name: "Conan 2d20 - White"}, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"systems/conan2d20/assets/dice/phoenix/phoenix-black.png",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
		],
		/* eslint-disable-next-line no-sparse-arrays */
		bumpMaps: [
			"systems/conan2d20/assets/dice/phoenix/phoenixBump.png",
			...Array(19),
		],
		system: "conan2d20black",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"systems/conan2d20/assets/dice/phoenix/phoenix-white.png",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
		],
		/* eslint-disable-next-line no-sparse-arrays */
		bumpMaps: [
			"systems/conan2d20/assets/dice/phoenix/phoenixBump.png",
			...Array(19),
		],
		system: "conan2d20white",
	});

	dice3d.addDicePreset({
		type: "dp",
		labels: [
			"systems/conan2d20/assets/dice/combat/black/Combat1.png",
			"systems/conan2d20/assets/dice/combat/black/Combat2.png",
			"systems/conan2d20/assets/dice/combat/black/Combat3.png",
			"systems/conan2d20/assets/dice/combat/black/Combat4.png",
			"systems/conan2d20/assets/dice/combat/black/Combat5.png",
			"systems/conan2d20/assets/dice/combat/black/Combat6.png",
		],
		bumpMaps: [
			"systems/conan2d20/assets/dice/combat/black/Combat1.png",
			"systems/conan2d20/assets/dice/combat/black/Combat2.png",
			"systems/conan2d20/assets/dice/combat/black/Combat3.png",
			"systems/conan2d20/assets/dice/combat/black/Combat4.png",
			"systems/conan2d20/assets/dice/combat/black/Combat5.png",
			"systems/conan2d20/assets/dice/combat/black/Combat6.png",
		],
		system: "conan2d20black",
	});

	dice3d.addDicePreset({
		type: "dp",
		labels: [
			"systems/conan2d20/assets/dice/combat/white/Combat1.png",
			"systems/conan2d20/assets/dice/combat/white/Combat2.png",
			"systems/conan2d20/assets/dice/combat/white/Combat3.png",
			"systems/conan2d20/assets/dice/combat/white/Combat4.png",
			"systems/conan2d20/assets/dice/combat/white/Combat5.png",
			"systems/conan2d20/assets/dice/combat/white/Combat6.png",
		],
		bumpMaps: [
			"systems/conan2d20/assets/dice/combat/white/Combat1.png",
			"systems/conan2d20/assets/dice/combat/white/Combat2.png",
			"systems/conan2d20/assets/dice/combat/white/Combat3.png",
			"systems/conan2d20/assets/dice/combat/white/Combat4.png",
			"systems/conan2d20/assets/dice/combat/white/Combat5.png",
			"systems/conan2d20/assets/dice/combat/white/Combat6.png",
		],
		system: "conan2d20white",
	});
}

const SYSTEM_ID$1 = "conan2d20";
const SYSTEM_NAME$1 = "Conan 2d20";

const CONFIG$1 = {};

CONFIG$1.DEFAULT_MOB_SIZE = 5;

CONFIG$1.ASSIST_2D20_DICE = 1;
CONFIG$1.BASE_2D20_DICE = 2;
CONFIG$1.MAX_2D20_DICE = 5;
CONFIG$1.MAX_2D20_PURCHASE = 3;

CONFIG$1.actionTypes = {
	free: "CONAN.Item.Action.Types.Free",
	minor: "CONAN.Item.Action.Types.Minor",
	reaction: "CONAN.Item.Action.Types.Reaction",
	standard: "CONAN.Item.Action.Types.Standard",
};

CONFIG$1.armorQualities = {
	brittle: "CONAN.Item.Armor.Qualities.Brittle",
	bulky: "CONAN.Item.Armor.Qualities.Bulky",
	cool: "CONAN.Item.Armor.Qualities.Cool",
	couragex: "CONAN.Item.Armor.Qualities.CourageX",
	fragile: "CONAN.Item.Armor.Qualities.Fragile",
	heavy: "CONAN.Item.Armor.Qualities.Heavy",
	intimidating: "CONAN.Item.Armor.Qualities.Intimidating",
	noisy: "CONAN.Item.Armor.Qualities.Noisy",
	mentalPiercingx: "CONAN.Item.Armor.Qualities.PiercingX",
	vheavy: "CONAN.Item.Armor.Qualities.VeryHeavy",
	warm: "CONAN.Item.Armor.Qualities.Warm",
};

CONFIG$1.armorTypes = {
	heavyArmor: "CONAN.Item.Armor.Types.HeavyArmor",
	heavyCloth: "CONAN.Item.Armor.Types.HeavyClothing",
	lightArmor: "CONAN.Item.Armor.Types.LightArmor",
	veryHeavyArmor: "CONAN.Item.Armor.Types.VeryHeavyArmor",
};

CONFIG$1.attributeIds = [
	"agi",
	"awa",
	"bra",
	"coo",
	"int",
	"per",
	"wil",
];

CONFIG$1.attributeLabels = {
	bra: "CONAN.Actor.Attribute.Brawn.label",
	agi: "CONAN.Actor.Attribute.Agility.label",
	awa: "CONAN.Actor.Attribute.Awareness.label",
	coo: "CONAN.Actor.Attribute.Coordination.label",
	int: "CONAN.Actor.Attribute.Intelligence.label",
	wil: "CONAN.Actor.Attribute.Will.label",
	per: "CONAN.Actor.Attribute.Personality.label",
};

CONFIG$1.attributeTooltips = {
	bra: "CONAN.Actor.Attribute.Brawn.tooltip",
	agi: "CONAN.Actor.Attribute.Agility.tooltip",
	awa: "CONAN.Actor.Attribute.Awareness.tooltip",
	coo: "CONAN.Actor.Attribute.Coordination.tooltip",
	int: "CONAN.Actor.Attribute.Intelligence.tooltip",
	wil: "CONAN.Actor.Attribute.Will.tooltip",
	per: "CONAN.Actor.Attribute.Personality.tooltip",
};

CONFIG$1.backgroundItems = [
	"archetype",
	"aspect",
	"caste",
	"education",
	"homeland",
	"language",
	"nature",
	"story",
	"warstory",
];

CONFIG$1.coverageTypes = {
	head: "CONAN.Item.Armor.Coverage.Head",
	torso: "CONAN.Item.Armor.Coverage.Torso",
	larm: "CONAN.Item.Armor.Coverage.LeftArm",
	rarm: "CONAN.Item.Armor.Coverage.RightArm",
	lleg: "CONAN.Item.Armor.Coverage.LeftLeg",
	rleg: "CONAN.Item.Armor.Coverage.RightLeg",
};

CONFIG$1.defaultActorTokenImages = {
	character: "systems/conan2d20/assets/tokens/conan-default-actor-green.webp",
	mount: "systems/conan2d20/assets/tokens/conan-default-actor-purple.webp",
	npc: "systems/conan2d20/assets/tokens/conan-default-actor-red.webp",
	transport: "systems/conan2d20/assets/tokens/conan-default-actor-brown.webp",
	watercraft: "systems/conan2d20/assets/tokens/conan-default-actor-blue.webp",
};

CONFIG$1.JournalUuids = {
	releaseNotes: "Compendium.conan2d20.documentation.JournalEntry.g7Ur47STfj45yX7k",
};

CONFIG$1.skillIds = [
	"acr",
	"alc",
	"ani",
	"ath",
	"com",
	"cou",
	"cra",
	"dis",
	"hea",
	"ins",
	"lin",
	"lor",
	"mel",
	"obs",
	"par",
	"per",
	"ran",
	"res",
	"sai",
	"soc",
	"sor",
	"ste",
	"sur",
	"thi",
	"war",
];

CONFIG$1.skills = {
	acr: "CONAN.skills.acr",
	mel: "CONAN.skills.mel",
	ste: "CONAN.skills.ste",
	ins: "CONAN.skills.ins",
	obs: "CONAN.skills.obs",
	sur: "CONAN.skills.sur",
	thi: "CONAN.skills.thi",
	ath: "CONAN.skills.ath",
	res: "CONAN.skills.res",
	par: "CONAN.skills.par",
	ran: "CONAN.skills.ran",
	sai: "CONAN.skills.sai",
	alc: "CONAN.skills.alc",
	cra: "CONAN.skills.cra",
	hea: "CONAN.skills.hea",
	lin: "CONAN.skills.lin",
	lor: "CONAN.skills.lor",
	war: "CONAN.skills.war",
	ani: "CONAN.skills.ani",
	com: "CONAN.skills.com",
	cou: "CONAN.skills.cou",
	per: "CONAN.skills.per",
	soc: "CONAN.skills.soc",
	dis: "CONAN.skills.dis",
	sor: "CONAN.skills.sor",
};

CONFIG$1.skillsEnglish = {
	acr: "Acrobatics",
	mel: "Melee",
	ste: "Stealth",
	ins: "Insight",
	obs: "Observation",
	sur: "Survival",
	thi: "Thievery",
	ath: "Athletics",
	res: "Resistance",
	par: "Parry",
	ran: "Ranged Weapons",
	sai: "Sailing",
	alc: "Alchemy",
	cra: "Craft",
	hea: "Healing",
	lin: "Linguistics",
	lor: "Lore",
	war: "Warfare",
	ani: "Animal Handling",
	com: "Command",
	cou: "Counsel",
	per: "Persuade",
	soc: "Society",
	dis: "Discipline",
	sor: "Sorcery",
};

CONFIG$1.skillAttributeMap = {
	acr: "agi",
	mel: "agi",
	ste: "agi",
	ins: "awa",
	obs: "awa",
	sur: "awa",
	thi: "awa",
	ath: "bra",
	res: "bra",
	par: "coo",
	ran: "coo",
	sai: "coo",
	alc: "int",
	cra: "int",
	hea: "int",
	lin: "int",
	lor: "int",
	war: "int",
	ani: "per",
	com: "per",
	cou: "per",
	per: "per",
	soc: "per",
	dis: "wil",
	sor: "wil",
};

CONFIG$1.skillTooltips = {
	acr: "CONAN.skillTooltips.acr",
	alc: "CONAN.skillTooltips.alc",
	ani: "CONAN.skillTooltips.ani",
	ath: "CONAN.skillTooltips.ath",
	cmb: "CONAN.skillTooltips.cmb",
	com: "CONAN.skillTooltips.com",
	cou: "CONAN.skillTooltips.cou",
	cra: "CONAN.skillTooltips.cra",
	dis: "CONAN.skillTooltips.dis",
	frt: "CONAN.skillTooltips.frt",
	hea: "CONAN.skillTooltips.hea",
	ins: "CONAN.skillTooltips.ins",
	knw: "CONAN.skillTooltips.knw",
	lin: "CONAN.skillTooltips.lin",
	lor: "CONAN.skillTooltips.lor",
	mel: "CONAN.skillTooltips.mel",
	mov: "CONAN.skillTooltips.mov",
	obs: "CONAN.skillTooltips.obs",
	par: "CONAN.skillTooltips.par",
	per: "CONAN.skillTooltips.per",
	ran: "CONAN.skillTooltips.ran",
	res: "CONAN.skillTooltips.res",
	sai: "CONAN.skillTooltips.sai",
	scl: "CONAN.skillTooltips.scl",
	sns: "CONAN.skillTooltips.sns",
	soc: "CONAN.skillTooltips.soc",
	sor: "CONAN.skillTooltips.sor",
	ste: "CONAN.skillTooltips.ste",
	sur: "CONAN.skillTooltips.sur",
	thi: "CONAN.skillTooltips.thi",
	war: "CONAN.skillTooltips.war",
};

CONFIG$1.talentRequirementTypes = {
	expertise: "CONAN.Talent.RequirementTypes.Expertise.label",
	focus: "CONAN.Talent.RequirementTypes.Focus.label",
	special: "CONAN.Talent.RequirementTypes.Special.label",
	talent: "CONAN.Talent.RequirementTypes.Talent.label",
};

CONFIG$1.enchantmentExplodingItems = {
	flashPaper: "CONAN.enchantmentExplodingItems.fla",
	smallFireworks: "CONAN.enchantmentExplodingItems.sma",
	loudFireworks: "CONAN.enchantmentExplodingItems.lou",
	largeFireworks: "CONAN.enchantmentExplodingItems.lar",
	smallExplosives: "CONAN.enchantmentExplodingItems.sme",
	largeExplosives: "CONAN.enchantmentExplodingItems.lex",
};

CONFIG$1.enchantmentStrengths = {
	weak: "CONAN.enchantmentStrengths.wea",
	average: "CONAN.enchantmentStrengths.ave",
	potent: "CONAN.enchantmentStrengths.pot",
	dangerous: "CONAN.enchantmentStrengths.dan",
	extraordinary: "CONAN.enchantmentStrengths.ext",
	devastationg: "CONAN.enchantmentStrengths.dev",
};

CONFIG$1.enchantmentBlindingStrengths = {
	regular: "CONAN.enchantmentBlindingStrengths.reg",
	dry: "CONAN.enchantmentBlindingStrengths.dry",
	fine: "CONAN.enchantmentBlindingStrengths.fin",
	perfumed: "CONAN.enchantmentBlindingStrengths.per",
	burning: "CONAN.enchantmentBlindingStrengths.bur",
};

CONFIG$1.enchantmentTalismanTypes = {
	animal: "CONAN.enchantmentTalismanTypes.ani",
	chasme: "CONAN.enchantmentTalismanTypes.cha",
	hamsa: "CONAN.enchantmentTalismanTypes.ham",
	nazar: "CONAN.enchantmentTalismanTypes.naz",
	pictish: "CONAN.enchantmentTalismanTypes.pic",
};

CONFIG$1.enchantmentTypes = {
	blindingPowder: "CONAN.enchantmentTypes.bli",
	burningLiquid: "CONAN.enchantmentTypes.bur",
	explodingPowder: "CONAN.enchantmentTypes.exp",
	lotusPollen: "CONAN.enchantmentTypes.lot",
	reinforcedFabric: "CONAN.enchantmentTypes.rei",
	talisman: "CONAN.enchantmentTypes.tal",
	upasGlass: "CONAN.enchantmentTypes.upa",
};

CONFIG$1.upasGlassSizes = {
	resilient: "CONAN.upasGlassSizes.res",
	strengthened: "CONAN.upasGlassSizes.str",
	unbreakable: "CONAN.upasGlassSizes.unb",
};

CONFIG$1.enchantmentVolatilities = {
	burningAlcohol: "CONAN.enchantmentVolatilities.bur",
	explodingLiquor: "CONAN.enchantmentVolatilities.exp",
	volatileSpirits: "CONAN.enchantmentVolatilities.vol",
	hellishBrimstone: "CONAN.enchantmentVolatilities.hel",
};

CONFIG$1.expertiseFields = {
	mov: "CONAN.expertiseFields.mov",
	cmb: "CONAN.expertiseFields.cmb",
	frt: "CONAN.expertiseFields.frt",
	knw: "CONAN.expertiseFields.knw",
	scl: "CONAN.expertiseFields.scl",
	sns: "CONAN.expertiseFields.sns",
};

// Hard-coded so we can always use the English versions in the text enrichers
// as a fallback
CONFIG$1.expertiseFieldsEnglish = {
	mov: "Movement",
	cmb: "Combat",
	frt: "Fortitude",
	knw: "Knowledge",
	scl: "Social",
	sns: "Senses",
};

CONFIG$1.expertiseAttributeMap = {
	mov: "agi",
	cmb: "agi",
	frt: "bra",
	knw: "int",
	scl: "per",
	sns: "awa",
};

CONFIG$1.rollDifficultyLevels = {
	0: "CONAN.skillRollDifficultyLevels.0",
	1: "CONAN.skillRollDifficultyLevels.1",
	2: "CONAN.skillRollDifficultyLevels.2",
	3: "CONAN.skillRollDifficultyLevels.3",
	4: "CONAN.skillRollDifficultyLevels.4",
	5: "CONAN.skillRollDifficultyLevels.5",
};

CONFIG$1.skillRollResourceSpends = {
	momentum: "CONAN.skillRollResourceSpends.mome",
	doom: "CONAN.skillRollResourceSpends.doom",
};

CONFIG$1.rollResults = {
	success: "CONAN.SkillRoll.Success.label",
	failure: "CONAN.SkillRoll.Failure.label",
};

CONFIG$1.attacks = {
	weapon: "CONAN.attackTypes.weapon",
	display: "CONAN.attackTypes.display",
};

CONFIG$1.attackTypes = {
	melee: "CONAN.attackTypes.melee",
	ranged: "CONAN.attackTypes.ranged",
	threaten: "CONAN.attackTypes.threaten",
};

CONFIG$1.damageTypes = {
	mental: "CONAN.damageTypes.mental",
	physical: "CONAN.damageTypes.physical",
};

CONFIG$1.MOUNT_CAPABILITIES = {
	pack: "CONAN.mount.capabilties.pack.name",
	mount: "CONAN.mount.capabilties.mount.name",
	battle: "CONAN.mount.capabilties.battle.name",
};

CONFIG$1.MOUNT_CAPABILITY_TOOLTIPS = {
	pack: "CONAN.mount.capabilties.pack.description",
	mount: "CONAN.mount.capabilties.mount.description",
	battle: "CONAN.mount.capabilties.battle.description",
};

CONFIG$1.npcActionTypes = {
	abilities: "CONAN.Item.NpcAction.Types.SpecialAbility",
	doom: "CONAN.Item.NpcAction.Types.DoomSpend",
};

CONFIG$1.NPC_CATEGORIES = {
	horror: "CONAN.npc.categories.horror.name",
	undead: "CONAN.npc.categories.undead.name",
};

CONFIG$1.NPC_CATEGORY_TOOLTIPS = {
	horror: "CONAN.npc.categories.horror.description",
	undead: "CONAN.npc.categories.undead.description",
};

CONFIG$1.npcAttackTypes = {
	melee: "CONAN.npcAttackTypes.melee",
	ranged: "CONAN.npcAttackTypes.ranged",
	threaten: "CONAN.npcAttackTypes.threaten",
};

CONFIG$1.NPC_TYPES = {
	minion: "CONAN.npc.type.minion",
	toughened: "CONAN.npc.type.toughened",
	nemesis: "CONAN.npc.type.nemesis",
};

CONFIG$1.availabilityTypes = {
	0: "CONAN.skillRollDifficultyLevels.0",
	1: "CONAN.skillRollDifficultyLevels.1",
	2: "CONAN.skillRollDifficultyLevels.2",
	3: "CONAN.skillRollDifficultyLevels.3",
	4: "CONAN.skillRollDifficultyLevels.4",
	5: "CONAN.skillRollDifficultyLevels.5",
};

CONFIG$1.conditionTypes = {
	blind: "CONAN.conditions.bli",
	burningx: "CONAN.conditions.bur",
	dazed: "CONAN.conditions.daz",
	dead: "CONAN.conditions.dead",
	deaf: "CONAN.conditions.dea",
	grappled: "CONAN.conditions.grappled",
	guardBroken: "CONAN.conditions.gua",
	hindered: "CONAN.conditions.hin",
	poisoned: "CONAN.conditions.poi",
	prone: "CONAN.conditions.pro",
	staggered: "CONAN.conditions.sta",
};

CONFIG$1.itemPermissions = {
	action: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	archetype: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	armor: {
		canOwn: [
			"character",
			"mount",
			"transport",
			"watercraft",
		],
		canUse: [
			"character",
		],
	},
	aspect: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	caste: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	display: {
		canOwn: [
			"character",
		],
		canUse: [
			"character",
		],
	},
	education: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	enchantment: {
		canOwn: [
			"character",
		],
		canUse: [
			"character",
		],
	},
	homeland: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	kit: {
		canOwn: [
			"character",
			"mount",
			"transport",
			"watercraft",

		],
		canUse: [
			"character",
		],
	},
	language: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	miscellaneous: {
		canOwn: [
			"character",
			"mount",
			"transport",
			"watercraft",
		],
		canUse: [
			"character",
		],
	},
	nature: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	npcaction: {
		canOwn: [
			"mount",
			"npc",
		],
		canUse: [
			"mount",
			"npc",
		],
	},
	npcattack: {
		canOwn: [
			"mount",
			"npc",
		],
		canUse: [
			"mount",
			"npc",
		],
	},
	spell: {
		canOwn: [
			"character",
		],
		canUse: [
			"character",
		],
	},
	story: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	talent: {
		canOwn: [
			"character",
		],
		canUse: [
			"character",
		],
	},
	warstory: {
		canOwn: [
			"character",
		],
		canUse: [],
	},
	weapon: {
		canOwn: [
			"character",
			"mount",
			"transport",
			"watercraft",
		],
		canUse: [
			"character",
		],
	},
};

CONFIG$1.kitTypes = {
	facility: "CONAN.kitTypes.fac",
	kit: "CONAN.kitTypes.kit",
	library: "CONAN.kitTypes.lib",
	reload: "CONAN.kitTypes.rel",
	resource: "CONAN.kitTypes.res",
	tool: "CONAN.kitTypes.too",
};

CONFIG$1.kitUses = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	inf: "&infin;",
};

CONFIG$1.lotusPollenColors = {
	black: "CONAN.lotusPollenColors.black",
	purple: "CONAN.lotusPollenColors.purple",
	yellow: "CONAN.lotusPollenColors.yellow",
	green: "CONAN.lotusPollenColors.green",
	gray: "CONAN.lotusPollenColors.gray",
	golden: "CONAN.lotusPollenColors.golden",
};

CONFIG$1.lotusPollenDifficulty = {
	per: "CONAN.lotusPollenDifficulty",
};

CONFIG$1.lotusPollenForms = {
	gas: "CONAN.lotusPollenForms.gas",
	powder: "CONAN.lotusPollenForms.pow",
	liquid: "CONAN.lotusPollenForms.liq",
};

CONFIG$1.lotusPollenUses = {
	opiate: "CONAN.lotusPollenUses.opi",
	poison: "CONAN.lotusPollenUses.poi",
	paralytic: "CONAN.lotusPollenUses.par",
	hallucinogenic: "CONAN.lotusPollenUses.hal",
	enchantment: "CONAN.lotusPollenUses.enc",
	anger: "CONAN.lotusPollenUses.ang",
	madness: "CONAN.lotusPollenUses.mad",
};

CONFIG$1.WATERCRAFT_QUALITIES = {
	agile: "CONAN.qualities.watercraft.agile.name",
	deep_draft: "CONAN.qualities.watercraft.deep_draft.name",
	galley: "CONAN.qualities.watercraft.galley.name",
	light_craft: "CONAN.qualities.watercraft.light_craft.name",
	ponderous: "CONAN.qualities.watercraft.ponderous.name",
	portage: "CONAN.qualities.watercraft.portage.name",
	ram: "CONAN.qualities.watercraft.ram.name",
	rugged: "CONAN.qualities.watercraft.rugged.name",
	shallow_draft: "CONAN.qualities.watercraft.shallow_draft.name",
	ship: "CONAN.qualities.watercraft.ship.name",
};

CONFIG$1.WATERCRAFT_QUALITY_TOOLTIPS = {
	agile: "CONAN.qualities.watercraft.agile.description",
	deep_draft: "CONAN.qualities.watercraft.deep_draft.description",
	galley: "CONAN.qualities.watercraft.galley.description",
	light_craft: "CONAN.qualities.watercraft.light_craft.description",
	ponderous: "CONAN.qualities.watercraft.ponderous.description",
	portage: "CONAN.qualities.watercraft.portage.description",
	ram: "CONAN.qualities.watercraft.ram.description",
	rugged: "CONAN.qualities.watercraft.rugged.description",
	shallow_draft: "CONAN.qualities.watercraft.shallow_draft.description",
	ship: "CONAN.qualities.watercraft.ship.description",
};

CONFIG$1.sources = {
	ageOfConan: "CONAN.SourceBook.ageOfConan",
	ancientRuins: "CONAN.SourceBook.ancientRuins",
	bookOfSkelos: "CONAN.SourceBook.bookOfSkelos",
	conanTheAdventurer: "CONAN.SourceBook.conanTheAdventurer",
	conanTheBarbarian: "CONAN.SourceBook.conanTheBarbarian",
	conanTheBrigand: "CONAN.SourceBook.conanTheBrigand",
	conanTheKing: "CONAN.SourceBook.conanTheKing",
	conanTheMercenary: "CONAN.SourceBook.conanTheMercenary",
	conanThePirate: "CONAN.SourceBook.conanThePirate",
	conanTheScout: "CONAN.SourceBook.conanTheScout",
	conanTheThief: "CONAN.SourceBook.conanTheThief",
	conanTheWanderer: "CONAN.SourceBook.conanTheWanderer",
	coreRulebook: "CONAN.SourceBook.coreRulebook",
	exilesSourcebook: "CONAN.SourceBook.exilesSourcebook",
	horrorsOfTheHyborianAge: "CONAN.SourceBook.horrorsOfTheHyborianAge",
	jeweledThronesOfTheEarth: "CONAN.SourceBook.jeweledThronesOfTheEarth",
	kullOfAtlantis: "CONAN.SourceBook.kullOfAtlantis",
	monolithSourcebook: "CONAN.SourceBook.monolithSourcebook",
	namelessCults: "CONAN.SourceBook.namelessCults",
	pitOfKutallu: "CONAN.SourceBook.pitOfKutallu",
	quickstart: "CONAN.SourceBook.quickstart",
	shadowOfTheSorcerer: "CONAN.SourceBook.shadowOfTheSorcerer",
	shiningKingdoms: "CONAN.SourceBook.shiningKingdoms",
	treasureHouseOfJaizinKaa: "CONAN.SourceBook.treasureHouseOfJaizinKaa",
	wavesStainedCrimson: "CONAN.SourceBook.wavesStainedCrimson",
};

CONFIG$1.statusEffects = [
	{
		img: "systems/conan2d20/assets/icons/conditions/blind.svg",
		id: "blind",
		name: "CONAN.conditions.bli",
		title: "CONAN.conditionDescriptionBlin",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/burningx.svg",
		id: "burningx",
		name: "CONAN.conditions.bur",
		title: "CONAN.conditionDescriptionBurn",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: 1,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/dazed.svg",
		id: "dazed",
		name: "CONAN.conditions.daz",
		title: "CONAN.conditionDescriptionDaze",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/dead.svg",
		id: "dead",
		name: "CONAN.conditions.dead",
		title: "CONAN.conditionDescriptionDead",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/deaf.svg",
		id: "deaf",
		name: "CONAN.conditions.dea",
		title: "CONAN.conditionDescriptionDeaf",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/grappled.svg",
		id: "grappled",
		name: "CONAN.conditions.grappled",
		title: "CONAN.conditionDescriptionGrappled",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/guardbreak.svg",
		id: "guardBroken",
		name: "CONAN.conditions.gua",
		title: "CONAN.conditionDescriptionGuar",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/hindered.svg",
		id: "hindered",
		name: "CONAN.conditions.hin",
		title: "CONAN.conditionDescriptionHind",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/poisoned.svg",
		id: "poisoned",
		name: "CONAN.conditions.poi",
		title: "CONAN.conditionDescriptionPois",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/prone.svg",
		id: "prone",
		name: "CONAN.conditions.pro",
		title: "CONAN.conditionDescriptionPron",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
	{
		img: "systems/conan2d20/assets/icons/conditions/staggered.svg",
		id: "staggered",
		name: "CONAN.conditions.sta",
		title: "CONAN.conditionDescriptionStag",
		flags: {
			conan2d20: {
				trigger: "endRound",
				value: null,
			},
		},
	},
];

CONFIG$1.transpoAnimals = {
	one: "CONAN.transpoAnimals.1",
	onep: "CONAN.transpoAnimals.1p",
	two: "CONAN.transpoAnimals.2",
	twop: "CONAN.transpoAnimals.2p",
	four: "CONAN.transpoAnimals.4",
	fourp: "CONAN.transpoAnimals.4p",
};

CONFIG$1.transpoBoatTypes = {
	bireme: "CONAN.transpoBoatTypes.bireme",
	canoe: "CONAN.transpoBoatTypes.canoe",
	carrack: "CONAN.transpoBoatTypes.carrack",
	cog: "CONAN.transpoBoatTypes.cog",
	galley: "CONAN.transpoBoatTypes.galley",
	gondola: "CONAN.transpoBoatTypes.gondola",
	kayak: "CONAN.transpoBoatTypes.kayak",
	longboat: "CONAN.transpoBoatTypes.longboat",
	longship: "CONAN.transpoBoatTypes.longship",
	raft: "CONAN.transpoBoatTypes.raft",
};

CONFIG$1.transpoCapabilities = {
	p: "CONAN.transpoCapabilities.p",
	mp: "CONAN.transpoCapabilities.mp",
	bmp: "CONAN.transpoCapabilities.bmp",
};

CONFIG$1.transpoCartTypes = {
	carriage: "CONAN.transpoCartTypes.carriage",
	cart: "CONAN.transpoCartTypes.cart",
	hchar: "CONAN.transpoCartTypes.hchar",
	lchar: "CONAN.transpoCartTypes.lchar",
	litter: "CONAN.transpoCartTypes.litter",
	wagon: "CONAN.transpoCartTypes.wagon",
	pwagon: "CONAN.transpoCartTypes.pwagon",
};

CONFIG$1.transpoCategories = {
	mounts: "CONAN.transpoCategories.mounts",
	carts: "CONAN.transpoCategories.carts",
	boats: "CONAN.transpoCategories.boats",
};

CONFIG$1.transpoMountTypes = {
	buffalo: "CONAN.transpoMountTypes.buffalo",
	camel: "CONAN.transpoMountTypes.camel",
	donkey: "CONAN.transpoMountTypes.donkey",
	dhorse: "CONAN.transpoMountTypes.dhorse",
	rhorse: "CONAN.transpoMountTypes.rhorse",
	whorse: "CONAN.transpoMountTypes.whorse",
};

CONFIG$1.talentTypes = {
	bloodline: "CONAN.talentTypes.bloodline",
	caste: "CONAN.talentTypes.caste",
	fortune: "CONAN.talentTypes.fortune",
	homeland: "CONAN.talentTypes.homeland",
	other: "CONAN.talentTypes.other",
	skill: "CONAN.talentTypes.skill",
};

CONFIG$1.weaponQualities = {
	area: "CONAN.qualities.weapons.area",
	backlashx: "CONAN.qualities.weapons.back",
	blessedx: "CONAN.qualities.weapons.bles",
	blinding: "CONAN.qualities.weapons.blin",
	brilliant: "CONAN.qualities.weapons.bril",
	cavalryx: "CONAN.qualities.weapons.cava",
	cover: "CONAN.qualities.weapons.cove",
	cursedx: "CONAN.qualities.weapons.curs",
	enchantedx: "CONAN.qualities.weapons.ench",
	ensorcelledx: "CONAN.qualities.weapons.enso",
	familiar: "CONAN.qualities.weapons.fami",
	fearsomex: "CONAN.qualities.weapons.fear",
	fragile: "CONAN.qualities.weapons.frag",
	grappling: "CONAN.qualities.weapons.grap",
	hiddenx: "CONAN.qualities.weapons.hidd",
	improvised: "CONAN.qualities.weapons.impr",
	intriguingx: "CONAN.qualities.weapons.intr",
	incendiaryx: "CONAN.qualities.weapons.ince",
	intense: "CONAN.qualities.weapons.inte",
	keen: "CONAN.qualities.weapons.keen",
	knockdown: "CONAN.qualities.weapons.knoc",
	maledictionx: "CONAN.qualities.weapons.male",
	nonlethal: "CONAN.qualities.weapons.nonl",
	pairedx: "CONAN.qualities.weapons.pair",
	parrying: "CONAN.qualities.weapons.parr",
	patron: "CONAN.qualities.weapons.patr",
	persistentx: "CONAN.qualities.weapons.pers",
	piercingx: "CONAN.qualities.weapons.pier",
	purposex: "CONAN.qualities.weapons.purp",
	regalx: "CONAN.qualities.weapons.rega",
	sanguinex: "CONAN.qualities.weapons.sang",
	shieldx: "CONAN.qualities.weapons.shie",
	spreadx: "CONAN.qualities.weapons.spre",
	stun: "CONAN.qualities.weapons.stun",
	subtlex: "CONAN.qualities.weapons.subt",
	thrown: "CONAN.qualities.weapons.thro",
	trappedx: "CONAN.qualities.weapons.trap",
	unforgivingx: "CONAN.qualities.weapons.unfo",
	venom: "CONAN.qualities.weapons.veno",
	viciousx: "CONAN.qualities.weapons.vici",
	volley: "CONAN.qualities.weapons.voll",
	weak: "CONAN.qualities.weapons.weak",
};

CONFIG$1.weaponTypes = {
	melee: "CONAN.weaponTypes.melee",
	ranged: "CONAN.weaponTypes.ranged",
};

CONFIG$1.weaponSizes = {
	crew: "CONAN.Item.Weapon.Sizes.crew",
	fixed: "CONAN.Item.Weapon.Sizes.fixed",
	monstrous: "CONAN.Item.Weapon.Sizes.monstrous",
	oneHanded: "CONAN.Item.Weapon.Sizes.oneHanded",
	twoHanded: "CONAN.Item.Weapon.Sizes.twoHanded",
	unbalanced: "CONAN.Item.Weapon.Sizes.unbalanced",
	unwieldy: "CONAN.Item.Weapon.Sizes.unwieldy",
};

CONFIG$1.weaponReaches = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
};

CONFIG$1.weaponRanges = {
	close: "CONAN.Item.Weapon.Ranges.close",
	medium: "CONAN.Item.Weapon.Ranges.medium",
	long: "CONAN.Item.Weapon.Ranges.long",
};

CONFIG$1.soakValue = {
	light: "CONAN.SoakLight",
	heavy: "CONAN.SoakHeavy",
};

CONFIG$1.qualitiesDescriptions = {
	agile: "CONAN.qualities.watercraft.agile.description",
	area: "CONAN.qualities.description.area",
	armorFragile: "CONAN.qualities.description.afra",
	backlashx: "CONAN.qualities.description.back",
	blessedx: "CONAN.qualities.description.bles",
	blinding: "CONAN.qualities.description.blin",
	brilliant: "CONAN.qualities.description.bril",
	brittle: "CONAN.qualities.description.brit",
	bulky: "CONAN.qualities.description.bulk",
	cavalryx: "CONAN.qualities.description.cava",
	cool: "CONAN.qualities.description.cool",
	courage: "CONAN.qualities.description.cour",
	cover: "CONAN.qualities.description.cove",
	cursedx: "CONAN.qualities.description.curs",
	deep_draft: "CONAN.qualities.watercraft.deep_draft.description",
	enchantedx: "CONAN.qualities.description.ench",
	ensorcelledx: "CONAN.qualities.description.enso",
	familiar: "CONAN.qualities.description.fami",
	fearsomex: "CONAN.qualities.description.fear",
	fragile: "CONAN.qualities.description.frag",
	galley: "CONAN.qualities.watercraft.galley.description",
	grappling: "CONAN.qualities.description.grap",
	heavy: "CONAN.qualities.description.heav",
	hiddenx: "CONAN.qualities.description.hidd",
	improvised: "CONAN.qualities.description.impr",
	incendiaryx: "CONAN.qualities.description.ince",
	intense: "CONAN.qualities.description.inte",
	intimidating: "CONAN.qualities.description.inti",
	intriguingx: "CONAN.qualities.description.intr",
	keen: "CONAN.qualities.description.keen",
	knockdown: "CONAN.qualities.description.knoc",
	light_craft: "CONAN.qualities.watercraft.light_craft.description",
	maledictionx: "CONAN.qualities.description.male",
	mentalPiercingx: "CONAN.qualities.description.apie",
	noisy: "CONAN.qualities.description.nois",
	nonlethal: "CONAN.qualities.description.nonl",
	paired: "CONAN.qualities.description.pair",
	pairedx: "CONAN.qualities.description.pair",
	parrying: "CONAN.qualities.description.parr",
	patron: "CONAN.qualities.description.patr",
	persistentx: "CONAN.qualities.description.pers",
	piercingx: "CONAN.qualities.description.pier",
	ponderous: "CONAN.qualities.watercraft.ponderous.description",
	portage: "CONAN.qualities.watercraft.portage.description",
	purposex: "CONAN.qualities.description.purp",
	ram: "CONAN.qualities.watercraft.ram.description",
	regalx: "CONAN.qualities.description.rega",
	rugged: "CONAN.qualities.watercraft.rugged.description",
	sanguinex: "CONAN.qualities.description.sang",
	shallow_draft: "CONAN.qualities.watercraft.shallow_draft.description",
	shieldx: "CONAN.qualities.description.shie",
	ship: "CONAN.qualities.watercraft.ship.description",
	spreadx: "CONAN.qualities.description.spre",
	stun: "CONAN.qualities.description.stun",
	subtlex: "CONAN.qualities.description.subt",
	thrown: "CONAN.qualities.description.thro",
	trappedx: "CONAN.qualities.description.trap",
	unforgivingx: "CONAN.qualities.description.unfo",
	venom: "CONAN.qualities.description.veno",
	vheavy: "CONAN.qualities.description.vhea",
	viciousx: "CONAN.qualities.description.vici",
	volley: "CONAN.qualities.description.voll",
	warm: "CONAN.qualities.description.warm",
	weak: "CONAN.qualities.description.weak",
};

function generateSortedData() {
	CONFIG$1.sortedAttributes = [];
	for (let attribute in CONFIG$1.attributeLabels) {
		CONFIG$1.sortedAttributes.push({
			key: attribute,
			name: CONFIG$1.attributeLabels[attribute],
		});
	}
	CONFIG$1.sortedAttributes.sort((a, b) => a.name.localeCompare(b.name));

	CONFIG$1.sortedSkills = [];
	for (let skill in CONFIG$1.skills) {
		CONFIG$1.sortedSkills.push({
			key: skill,
			name: CONFIG$1.skills[skill],
		});
	}
	CONFIG$1.sortedSkills.sort((a, b) => a.name.localeCompare(b.name));

	CONFIG$1.sortedSources = [];
	for (let source in CONFIG$1.sources) {
		CONFIG$1.sortedSources.push({
			key: source,
			name: CONFIG$1.sources[source],
		});
	}
	CONFIG$1.sortedSources.sort((a, b) => a.name.localeCompare(b.name));

	CONFIG$1.sortedWeaponQualities = [];
	for (let quality in CONFIG$1.weaponQualities) {
		CONFIG$1.sortedWeaponQualities.push({
			key: quality,
			name: CONFIG$1.weaponQualities[quality],
		});
	}
	CONFIG$1.sortedWeaponQualities.sort((a, b) => a.name.localeCompare(b.name));
}

class ApplyDamage extends Application {

	constructor(options) {
		super(options);

		this.supported_qualities = [
			"blinding",
			"cavalryx",
			"fearsomex",
			"grappling",
			"improvised",
			"incendiaryx",
			"intense",
			"knockdown",
			"nonlethal",
			"persistentx",
			"piercingx",
			"spreadx",
			"stun",
			"unforgivingx",
			"viciousx",
		];

		// Transport actors can't take damage
		this.targets = (options.targets ?? [])
			.filter(actor => actor.canTakeDamage);

		if (this.targets.length <= 0) {
			ui.notifications.warn(
				game.i18n.localize("CONAN.ApplyDamage.Error.NoTokensSelected.message"),
				{permanent: false}
			);
		}

		this.isWatercraft =
			(this.targets.filter(t => t.isWatercraft)).length === this.targets.length;

		this.damage = options.damage ?? {
			effects: 0,
			location: "head",
			resolve: 0,
			vigor: 0,
		};

		this.damage.penetration = 0;

		this.item = options.item ?? undefined;

		this.qualities = null;
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "apply-damage"],
			template: "systems/conan2d20/templates/apps/apply-damage.hbs",
			width: 280,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		if (this.item) {
			return `${this.item.name} ${game.i18n.localize("CONAN.Damage")}`;
		}
		else {
			return `${game.i18n.localize("CONAN.ApplyDamage.title")}`;
		}
	}

	activateListeners(html) {
		const me = this;

		html.find(".apply-damage-button").click(async event => {
			event.preventDefault();
			this.applyDamage();
			this.close();
		});

		html.find(".character").click(async event => {
			event.preventDefault();
			const index = $(event.currentTarget).data("actor-index");
			const target = this.targets[index];
			target.sheet.render(true);
		});

		html.find(".character").contextmenu(async event => {
			event.preventDefault();
			const index = $(event.currentTarget).data("actor-index");
			const newTargetList = [];

			for (let i = 0; i < this.targets.length; i++) {
				if (index === i) continue;
				newTargetList.push(this.targets[i]);
			}

			if (newTargetList.length > 0) {
				this.targets = newTargetList;
				this.render(false);
			}
			else {
				this.close();
			}
		});

		html.find(".apply-damage .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me.damage[quantityType] += 1;
				}
				else if (ev.originalEvent.deltaY > 0) {
					me.damage[quantityType] -= 1;
					me.damage[quantityType] = me.damage[quantityType] >= 0
						? me.damage[quantityType]
						: 0;
				}
				me.render(false);
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me.damage[quantityType] += 1;
				me.render(false);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me.damage[quantityType] -= 1;
				me.damage[quantityType] = me.damage[quantityType] >= 0
					? me.damage[quantityType]
					: 0;
				me.render(false);
			});
		});

		html.find(".apply-damage select").on("change", function() {
			const selector = $(this);
			const value = selector.val();
			me.damage.location = value;
		});

		html.find(".quality-tag").click(event => {
			event.preventDefault();
			let qualitySlug = $(event.currentTarget).data("quality");

			for (const quality of this.qualities) {
				if (quality.slug === qualitySlug) {
					quality.enabled = !quality.enabled;
					break;
				}
			}

			me.render(true);
		});

		super.activateListeners(html);
	}

	async applyDamage() {
		const qualities = (this.qualities ?? []).filter(q => q.enabled && q.supported);
		this.damage.locationLocalized = CONFIG.CONAN.coverageTypes[this.damage.location];
		for (const target of this.targets) {
			const damage = foundry.utils.duplicate(this.damage);
			const results = await target.applyDamage(damage, qualities);

			conan.chat.renderApplyDamageResultCard(results);
		}
	}

	async getData() {
		if (this.qualities === null && this.item) {
			const itemData = await this.item.getChatData();

			this.qualities = itemData.qualities;

			for (const quality of this.qualities) {
				quality.supported = this.supported_qualities.includes(quality.type);
				quality.enabled = true;
				quality.slug = quality.label.slugify();
			}
		}

		const selectedTargets = await this.getSelectedTargetsData();

		const context = {
			damage: this.damage,
			hasQualities: this.item && this.qualities.length > 0,
			isWatercraft: this.isWatercraft,
			item: this.item,
			qualities: this.qualities,
			locations: CONFIG.CONAN.coverageTypes,
			selectedTargets,
		};

		return context;
	}

	async getSelectedTargetsData() {
		const selectedTargets = [];

		this.targets.forEach((target, index) => {
			let name;
			let img;

			if (target.isToken) {
				name = target.token.name;
				img = target.token.texture.src;
			}
			else {
				name = target.name;
				img = target.prototypeToken.texture.src;
			}

			selectedTargets.push({
				img,
				index,
				name,
			});
		});

		if (selectedTargets.length > 1) {
			selectedTargets.sort((a, b) => a.name.localeCompare(b.name));
		}

		return selectedTargets;
	}
}

class TalentManager {
	constructor(options={}) {
		this.ignoreCost = options.ignoreCost ?? false;

		this.actorKnownTalentsLut = {};
		this.actorAttributes = [];
		this.actorSkills = [];
		this.actorXp = 200;
	}

	async getAvailableTalentsForSkills(skills=[]) {
		const selectedTalents = new Collection();

		// If we haven't been given an Array of skills then just return an empty
		// collection
		if (!Array.isArray(skills)) return selectedTalents;

		const allSkillTalents = await conan.compendiums.skillTalents();
		for (const talent of allSkillTalents) {
			talent.system.multiRank = talent.system.rank.max > 1;
			talent.system.talentIdentifier =
				conan.utils.generateTalentIdentifier(talent);

			if (skills.includes(talent.system.linkedSkill)) {
				// Make sure we meet the requirements
				const meetsRequirements = await this._meetsRequirements(talent);

				if (meetsRequirements) {
					let rank = 1;

					if (Object.hasOwn(this.actorKnownTalentsLut, talent.system.talentIdentifier)) {
						const current = this.actorKnownTalentsLut[talent.system.talentIdentifier];
						rank = current + 1;
					}

					const discount = this.actorSkills[talent.system.linkedSkill].discount;
					const cost = talent.system.cost - discount;

					selectedTalents.set(talent._id, {item: talent, rank, cost});
				}
			}
		}

		return selectedTalents;
	}

	async getAvailableSkillTalents() {
		return await this.getAvailableTalentsForSkills(Object.keys(CONFIG.CONAN.skills));
	}

	async getPurchasableTalents() {
		const availableTalents = await this.getAvailableSkillTalents();

		const fortuneTalents = await conan.compendiums.fortuneTalents();
		for (const talent of fortuneTalents) {
			// Make sure we meet the requirements
			const meetsRequirements = await this._meetsRequirements(talent);

			if (meetsRequirements) {
				let rank = 1;
				if (Object.hasOwn(this.actorKnownTalentsLut, talent.system.talentIdentifier)) {
					const current = this.actorKnownTalentsLut[talent.system.talentIdentifier];
					rank = current + 1;
				}

				const cost = talent.system.cost;

				availableTalents.set(talent.id, {item: talent, rank, cost});
			}
		}

		return availableTalents;
	}

	async setActorAttributes(attributes) {
		this.actorAttributes = attributes;
	}

	async setActorSkills(skills) {
		this.actorSkills = skills;
		for (const key in this.actorSkills) {
			const skill = this.actorSkills[key];
			skill.discount = 25 * Number(skill.focus.value);
		}
	}

	async setActorXp(xp) {
		this.actorXp = xp;
	}

	async setKnownTalents(talents) {
		this.actorKnownTalentsLut = {};

		for (const talent of talents) {
			this.actorKnownTalentsLut[talent.identifier] = talent.rank;
		}
	}

	async _meetsRequirements(talent) {
		let requirementsMet = true;

		// First make sure that if the character already knows the talent that
		// they have not maxed it out
		const knownTalent = this.actorKnownTalentsLut[
			talent.system.talentIdentifier
		];

		if (knownTalent) {
			if (knownTalent >= talent.system.rank.max) {
				requirementsMet = false;
			}
		}

		for (const requirement of talent.system.requirements) {
			// If requirements are not met, no need to check further
			if (!requirementsMet) break;

			const type = requirement.type;
			switch (type) {
				case "expertise":
				case "focus":
					if (requirementsMet) {
						const skill = this.actorSkills[requirement.skill];
						requirementsMet = skill[type].value >= requirement.value;
					}
					break;
				case "talent":
					for (const required of requirement.talents) {
						const check = await fromUuid(required.uuid);

						if (check) {
							const known = this.actorKnownTalentsLut[
								check.system.talentIdentifier
							];

							requirementsMet = known
								? known >= required.rank
								: false;
						}
						else {
							requirementsMet = false;
						}

						if (!requirementsMet) break;
					}
					break;
			}
		}

		// Unless we've specifically been told to ignore to XP cost of the
		// Talent (during Character Creation mainly) then as a last check
		// ensure we have the XP funds to purchase it.
		//
		if (!this.ignoreCost) {
			const discount = talent.system.linkedSkill !== ""
				? this.actorSkills[talent.system.linkedSkill].discount
				: 0;

			if (talent.system.cost - discount > this.actorXp) requirementsMet = false;
		}

		return requirementsMet;
	}
}

/** Class representing a stage of character creation  */

class CharGenBaseStage {
	characterCreator;

	data;

	errors = [];

	name = "";

	uuid = foundry.utils.randomID();

	valid = false;

	constructor(characterCreator) {
		this.characterCreator = characterCreator;
		this.talentManager = new TalentManager({ignoreCost: true});
	}

	get hasErrors() {
		return this.errors.length > 0;
	}

	activateListeners(html) {}

	async applyAttributeBonuses(attributes) {}

	async applySkillBonuses(skills) {}

	async characterData() {}

	async formConfig() {
		return {
			CONFIG: CONFIG.CONAN,
			data: this.data,
			errors: this.errors,
			name: this.name,
			uuid: this.uuid,
			valid: this.valid,
		};
	}

	async getItems() {}

	async getItemFromResult(result) {
		const uuid = [
			"Compendium",
			result.documentCollection,
			result.documentId,

		].join(".");

		return await fromUuid(uuid);
	}

	async getRollTable(name) {
		const tables = await this.characterCreator.getRollTables(name) ?? [];
		return tables[0];
	}

	async getRollTables(name) {
		this.tables = await this.characterCreator.getRollTables(name);
	}

	async processElectiveSkillsSubmit(updateData) {
		const electiveChanges = {};
		for (const electiveSkill of this.electiveSkills) {
			electiveChanges[electiveSkill.skill] = {
				oldChecked: electiveSkill.checked,
				newChecked: false,
			};

			electiveSkill.bonus = 0;
			electiveSkill.checked = false;
		}

		const electivesKey = `${this.name}_electiveSkill::`;
		for (const key in updateData) {
			if (key.startsWith(electivesKey)) {
				const [, skill] = key.split("::");
				const skillChecked = updateData[key] === skill ? true : false;
				for (const electiveSkill of this.electiveSkills) {
					if (skillChecked && electiveSkill.skill === skill) {
						electiveSkill.bonus = 1;
						electiveSkill.checked = true;

						electiveChanges[skill].newChecked = true;
					}
				}
			}
		}

		let electiveChanged = false;
		for (const skill in electiveChanges) {
			const oldChecked = electiveChanges[skill].oldChecked;
			const newChecked = electiveChanges[skill].newChecked;

			if (oldChecked !== newChecked) {
				electiveChanged = true;
				break;
			}
		}

		if (electiveChanged) {
			await this.characterCreator.updateCharacterData();
		}

		return electiveChanged;
	}


	async processSubmit(updateData) {
		return updateData;
	}

	async randomItem(items) {
		if (items.size > 0) {
			const index = Math.floor(Math.random() * items.size);

			return items.find((object, i) => {
				return i === index;
			});
		}
		else {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.NoItemsAvailable")
			);
		}
	}

	async selectorUuidUpdated(updateData) {}

	async validate() {}
}

class CharGenArchetype extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "archetype";

		this.archetype = null;

		this.careerSkills = [];
		this.careerTalents = [];
		this.electiveSkills = [];
		this.mandatorySkills = [];

		this.validate();
	}

	async _onRollArchetype(event) {
		event.preventDefault();

		const archetypes = await conan.compendiums.archetypes();
		this.archetype = await this.randomItem(archetypes);

		await this.updateArchetypeData();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".archetype-roll").click(event => this._onRollArchetype(event));
	}

	async applySkillBonuses(skills) {
		if (this.archetype) {
			for (const mandatorySkill of this.mandatorySkills) {
				const key = mandatorySkill.skill;
				skills[key].focus.value += 1;
				skills[key].expertise.value += 1;
			}

			for (const electiveSkill of this.electiveSkills) {
				const key = electiveSkill.skill;
				skills[key].focus.value += electiveSkill.bonus;
				skills[key].expertise.value += electiveSkill.bonus;
			}

			for (const careerSkill of this.careerSkills) {
				const key = careerSkill.skill;
				skills[key].focus.value += 2;
				skills[key].expertise.value += 2;
			}
		}
	}

	async characterData() {
		return {
			"system.background.archetype.value": this.archetype?.uuid ?? "",
		};
	}

	async formConfig() {
		const archetypeUuid = this.archetype?.uuid ?? "";

		const [selectedArchetypes, unselectedArchetypes] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.archetypes(),
				archetypeUuid ? [archetypeUuid] : []
			);

		let archetypeDescriptionHTML = "";

		if (this.archetype) {
			archetypeDescriptionHTML = await TextEditor.enrichHTML(
				this.archetype.system.description.value,
				{
					async: true,
				}
			);
		}

		return {
			...await super.formConfig(),
			archetype: this.archetype,
			archetypeDescriptionHTML,
			careerSkills: this.careerSkills,
			careerTalents: this.careerTalents,
			description: game.i18n.localize("CONAN.CharacterCreator.Archetype.description"),
			electiveSkills: this.electiveSkills,
			label: game.i18n.localize("CONAN.CharacterCreator.Archetype.label"),
			mandatorySkills: this.mandatorySkills,
			selected: selectedArchetypes,
			template: () => "apps/character-creator/archetype",
			unselected: unselectedArchetypes,
		};
	}

	getCareerSkill() {
		return this.archetype?.system?.careerSkill?.choices[0] ?? "";
	}

	async getItems() {
		return this.careerTalents ?? [];
	}

	async processSubmit(updateData) {
		await this.processElectiveSkillsSubmit(updateData);

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "archetypeUuid") {
			this.archetype = await fromUuid(updateData.uuid);

			await this.updateArchetypeData();

			this.validate();
		}
	}

	async updateArchetypeData() {

		this.careerSkills = [];
		for (const skill of this.archetype?.system?.careerSkill?.choices ?? []) {
			this.careerSkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.electiveSkills = [];
		for (const skill of this.archetype?.system?.electiveSkill?.choices ?? []) {
			this.electiveSkills.push({
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.mandatorySkills = [];
		for (const skill of this.archetype?.system?.mandatorySkill?.choices ?? []) {
			this.mandatorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.careerTalents = [];
		for (const talentUuid of this.archetype?.system?.careerTalent?.choices ?? []) {
			this.careerTalents.push(await fromUuid(talentUuid));
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.archetype && this.archetype.type === "archetype")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAnArchetype")
			);
		}

		if (this.archetype) {
			let electiveSkillCount = 0;
			for (const skill of this.electiveSkills) {
				if (skill.checked) electiveSkillCount++;
			}

			if (electiveSkillCount !== 2) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectTwoElectiveSkills")
				);
			}

			if (this.careerTalent === "") {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectACareerTalent")
				);
			}
		}
	}

}

class CharGenAttributeAspects extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "attribute aspects";

		this.data = {
			aspectOneUuid: null,
			aspectTwoUuid: null,
		};

		this.aspectOne = null;
		this.aspectTwo = null;

		this.selectorOneChanged = true;
		this.selectorTwoChanged = true;

		this.mandatory = {};
		this.optional = {};

		this._updateManadatoryAttributeConfig();
		this._updateOptionalAttributeConfig();

		this.validate();
	}

	async _onRollAspect(event) {
		event.preventDefault();

		const aspectIndex = $(event.currentTarget).data("aspect-index");

		const aspects = await conan.compendiums.aspects();
		const result = await this.randomItem(aspects);

		if (aspectIndex === "one") {
			this.aspectOne = result;
			this.data.aspectOneUuid = result.uuid;
		}
		else if (aspectIndex === "two") {
			this.aspectTwo = result;
			this.data.aspectTwoUuid = result.uuid;
		}

		this._updateManadatoryAttributeConfig();
		this._updateOptionalAttributeConfig();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".aspect-roll").click(event => this._onRollAspect(event));
	}

	async applyAttributeBonuses(attributes) {
		for (const mandatoryAttribute of this.mandatory.attributes) {
			const key = mandatoryAttribute.attribute;
			attributes[key].value += mandatoryAttribute.bonus;
		}

		for (const aspect of this.optional.aspects) {
			for (const optionalAttribute of aspect.attributes) {
				const key = optionalAttribute.attribute;
				attributes[key].value += optionalAttribute.bonus;
			}
		}
	}

	async formConfig() {
		const aspects = await conan.compendiums.aspects();

		const [selectedAspectOne, unselectedAspectOne] =
			await conan.utils.getDedupedSelectedItems(
				aspects,
				this.data.aspectOneUuid ? [this.data.aspectOneUuid] : []
			);

		const [selectedAspectTwo, unselectedAspectTwo] =
			await conan.utils.getDedupedSelectedItems(
				aspects,
				this.data.aspectTwoUuid ? [this.data.aspectTwoUuid] : []
			);

		return {
			...await super.formConfig(),
			aspects: [
				{
					aspectIndex: "one",
					label: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.One.label"),
					selected: selectedAspectOne[0],
					unselected: unselectedAspectOne,
				},
				{
					aspectIndex: "two",
					label: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Two.label"),
					selected: selectedAspectTwo[0],
					unselected: unselectedAspectTwo,
				},
			],
			description: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.label"),
			mandatory: this.mandatory,
			optional: this.optional,
			template: () => "apps/character-creator/attribute-aspects",
		};
	}

	processMandatoryAttributeUpdates(updateData) {
		if (updateData.mandatoryBest) {
			for (const entry of this.mandatory.attributes) {
				if (entry.id === updateData.mandatoryBest) {
					entry.best = true;
					entry.worst = false;
				}
				else {
					entry.best = false;
				}
			}
		}

		if (updateData.mandatoryWorst) {
			for (const entry of this.mandatory.attributes) {
				if (entry.id === updateData.mandatoryWorst) {
					entry.worst = true;
					entry.best = false;
				}
				else {
					entry.worst = false;
				}
			}
		}

		// Update bonuses
		for (const entry of this.mandatory.attributes) {
			if (entry.best) {
				entry.bonus = 3;
			}
			else if (entry.worst) {
				entry.bonus = 1;
			}
			else {
				entry.bonus = 2;
			}
		}
	}

	processOptionalAttributeUpdates(updateData) {
		if (updateData.aspectOptional_0) {
			for (const entry of this.optional.aspects[0].attributes) {
				if (entry.id === updateData.aspectOptional_0) {
					entry.checked = true;
					entry.bonus = 1;
				}
				else {
					entry.checked = false;
					entry.bonus = 0;
				}
			}
		}

		if (updateData.aspectOptional_1) {
			for (const entry of this.optional.aspects[1].attributes) {
				if (entry.id === updateData.aspectOptional_1) {
					entry.checked = true;
					entry.bonus = 1;
				}
				else {
					entry.checked = false;
					entry.bonus = 0;
				}
			}
		}
	}

	async processSubmit(updateData) {
		this.processMandatoryAttributeUpdates(updateData);

		this.processOptionalAttributeUpdates(updateData);

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name.startsWith("aspect_")) {
			const aspect = await fromUuid(updateData.uuid);

			if (updateData.name.endsWith("_one")) {
				this.selectorOneChanged = true;
				this.data.aspectOneUuid = updateData.uuid;
				this.aspectOne = aspect;
			}
			else if (updateData.name.endsWith("_two")) {
				this.selectorTwoChanged = true;
				this.data.aspectTwoUuid = updateData.uuid;
				this.aspectTwo = aspect;
			}

			this._updateManadatoryAttributeConfig();
			this._updateOptionalAttributeConfig();

			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.aspectOne && this.aspectOne.type === "aspect")
			|| !(this.aspectTwo && this.aspectOne.type === "aspect")
		) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectBothAttributeAspects")
			);
		}
		else {
			const best = this.mandatory.attributes.find(e => e.best);
			if (!best) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectMandatoryBest")
				);
			}

			const worst = this.mandatory.attributes.find(e => e.worst);
			if (!worst) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectMandatoryWorst")
				);
			}

			if (best && worst) {
				if (best.attribute === worst.attribute) {
					this.valid = false;
					this.errors.push(
						game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.BestAndWorstTheSame")
					);
				}
			}
		}

		this.optional.aspects.forEach(aspect => {
			if (!aspect.attributes.find(a => a.checked)) {
				this.valid = false;
				this.errors.push(
					game.i18n.format(
						"CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectOneOptional",
						{aspectName: aspect.aspectName}
					)
				);
			}
		});
	}

	async _updateManadatoryAttributeConfig() {
		this.mandatory = {
			show: this.aspectOne !== null && this.aspectTwo !== null,
			attributes: [],
		};

		if (this.mandatory.show) {
			[this.aspectOne, this.aspectTwo].forEach(aspect => {
				const randomId = foundry.utils.randomID();

				aspect.system.mandatoryAttribute.choices.forEach(attribute => {
					this.mandatory.attributes.push({
						aspectName: aspect.name,
						attribute,
						best: false,
						id: `${attribute}_${randomId}`,
						name: CONFIG.CONAN.attributeLabels[attribute],
						worst: false,
						bonus: 2,
					});
				});
			});
		}
	}

	async _updateOptionalAttributeConfig() {
		this.optional = {
			show: this.aspectOne !== null && this.aspectTwo !== null,
			aspects: [],
		};

		if (this.optional.show) {
			let aspectIndex = 0;
			[this.aspectOne, this.aspectTwo].forEach(aspect => {
				const aspectId = aspect.name.slugify();
				const aspectData = {
					aspectId,
					aspectName: aspect.name,
					attributes: [],
				};

				aspect.system.optionalAttribute.choices.forEach(attribute => {
					const randomId = foundry.utils.randomID();

					aspectData.attributes.push({
						aspectId,
						attribute,
						bonus: 0,
						checked: false,
						dataName: `aspectOptional_${aspectIndex}`,
						id: `${attribute}_${randomId}`,
						name: CONFIG.CONAN.attributeLabels[attribute],
					});
				});

				this.optional.aspects.push(aspectData);

				aspectIndex++;
			});
		}
	}
}

class CharGenAttributes extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "final attributes";

		this.baseAttributes = [];
		this.attributes = [];

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.attributes.push({
				attribute,
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.attributeLabels[attribute],
			});
		});

		this.ancientBloodline = null;
		this.ancientBloodlineNeeded = false;
		this.ancientBloodlineUuid = "";

		this.validate();
	}

	async applyAttributeBonuses(attributes) {
		this.baseAttributes = foundry.utils.duplicate(attributes);
		this.ancientBloodlineNeeded = false;
		for (const attribute in attributes) {
			const bonus = this.attributes.find(a => a.attribute === attribute).bonus ?? 0;
			attributes[attribute].value += bonus;
			this.baseAttributes[attribute].value += bonus;

			if (attributes[attribute].value > 12) this.ancientBloodlineNeeded = true;
		}
	}

	async formConfig() {
		let [selectedAncientBloodlines, unselectedAncientBloodlines] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.bloodlineTalents(),
				this.ancientBloodlineUuid ? [this.ancientBloodlineUuid] : []
			);

		if (this.ancientBloodlineNeeded && this.ancientBloodline === null) {
			if (unselectedAncientBloodlines.length === 1) {
				this.ancientBloodline = unselectedAncientBloodlines[0];
				this.ancientBloodlineUuid = this.ancientBloodline.uuid;
				selectedAncientBloodlines = [this.ancientBloodline];
			}
		}

		let ancientBloodlineDescriptionHTML = "";

		if (this.ancientBloodline) {
			ancientBloodlineDescriptionHTML = await TextEditor.enrichHTML(
				this.ancientBloodline.system.description.value,
				{
					async: true,
				}
			);
		}

		const config = {
			...await super.formConfig(),
			ancientBloodline: this.ancientBloodline,
			ancientBloodlineDescriptionHTML,
			ancientBloodlineNeeded: this.ancientBloodlineNeeded,
			attributes: this.attributes,
			description: game.i18n.localize("CONAN.CharacterCreator.Attributes.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Attributes.label"),
			selectedAncientBloodlines,
			template: () => "apps/character-creator/attributes",
			unselectedAncientBloodlines,
		};

		return config;
	}

	async getItems() {
		const items = [];

		if (this.ancientBloodlineUuid !== "") {
			items.push(await fromUuid(this.ancientBloodlineUuid));
		}

		return items;
	}

	async processAttributesSubmit(updateData) {
		const changes = {};
		for (const attribute of this.attributes) {
			changes[attribute.attribute] = {
				oldChecked: attribute.checked,
				newChecked: false,
			};

			attribute.bonus = 0;
			attribute.checked = false;
		}

		const updateKey = "finishing_attribute::";
		for (const key in updateData) {
			if (key.startsWith(updateKey)) {
				const [, attributeId] = key.split("::");
				const attributeChecked = updateData[key] === attributeId ? true : false;
				for (const attribute of this.attributes) {
					if (attributeChecked && attribute.attribute === attributeId) {
						attribute.checked = true;

						changes[attributeId].newChecked = true;
					}
				}
			}
		}

		const checkedAttributes = this.attributes.filter(a => a.checked) ?? [];
		let bonus = 0;
		if (checkedAttributes.length === 1) bonus = 2;
		if (checkedAttributes.length === 2) bonus = 1;

		for (const checkedAttribute of checkedAttributes) {
			checkedAttribute.bonus = bonus;
		}

		let changed = false;
		for (const attribute in changes) {
			const oldChecked = changes[attribute].oldChecked;
			const newChecked = changes[attribute].newChecked;

			if (oldChecked !== newChecked) {
				changed = true;
				break;
			}
		}

		if (changed) {
			await this.characterCreator.updateCharacterData();
		}

		return changed;
	}

	async processSubmit(updateData) {
		await this.processAttributesSubmit(updateData);

		await this.validate();
		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "ancientBloodlineUuid") {
			this.ancientBloodlineUuid = updateData.uuid;
			this.ancientBloodline = await fromUuid(updateData.uuid);

			await this.validate();
		}
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		const checkedAttributes = (this.attributes.filter(a => a.checked) ?? []).length;

		if (checkedAttributes > 2) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MaxTwoAttributes")
			);
		}

		if (checkedAttributes < 1) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MinOneAttributes")
			);
		}

		if (this.ancientBloodlineNeeded && this.ancientBloodline === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.AncientBloodlineTalentNeeded")
			);
		}

		for (const attribute of Object.keys(this.baseAttributes)) {
			if (this.baseAttributes[attribute].value > 14) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.AttributeExceedsMax")
				);

				break;
			}
		}
	}
}

class CharGenCaste extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "caste";

		this.caste = null;
		this.casteSkill = "";
		this.casteTalents = [];

		this.validate();
	}

	async _onRollCaste(event) {
		event.preventDefault();

		const castes = await conan.compendiums.castes();
		this.caste = await this.randomItem(castes);

		await this.updateCasteData();

		this.validate();

		this.characterCreator.update();
	}

	async updateCasteData() {
		this.casteTalents = [];

		for (const talentUuid of this.caste?.system?.talent?.choices ?? []) {
			this.casteTalents.push(await fromUuid(talentUuid));
		}

		this.casteSkill = CONFIG.CONAN.skills[this.caste?.system?.skill] ?? "";

	}

	activateListeners(html) {
		html.find(".caste-roll").click(event => this._onRollCaste(event));
	}

	async applySkillBonuses(skills) {
		if (!this.caste) return;

		const skill = this.caste.system.skill;
		skills[skill].focus.value += 1;
		skills[skill].expertise.value += 1;
	}

	async characterData() {
		return {
			"system.background.caste.value": this.caste?.uuid ?? "",
			"system.background.standing.value": this.caste?.system?.socialStanding ?? 0,
		};
	}

	async formConfig() {
		const casteUuid = this.caste?.uuid ?? "";

		const [selectedCastes, unselectedCastes] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.castes(),
				casteUuid ? [casteUuid] : []
			);

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Caste.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Caste.label"),
			selected: selectedCastes,
			unselected: unselectedCastes,
			caste: this.caste,
			casteTalents: this.casteTalents,
			casteSkill: this.casteSkill,
			casteStory: this.casteStory,
			template: () => "apps/character-creator/caste",
		};
	}

	getCasteUuid() {
		return this.caste?.uuid ?? "";
	}

	async getItems() {
		if (!(Array.isArray(this.casteTalents) && this.casteTalents.length > 0)) return;

		const items = [];
		for (const talent of this.casteTalents) {
			items.push(talent);
		}

		return items;
	}

	async processSubmit(updateData) {
		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "casteUuid") {
			this.caste = await fromUuid(updateData.uuid);

			await this.updateCasteData();

			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.caste && this.caste.type === "caste")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Caste.Errors.YouMustSelectACaste")
			);
		}
	}

}

class CharGenEducation extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "education";

		this.education = null;
		this.educationAttribute = "";

		this.careerSkill = "";
		this.educationSkills = [];
		this.educationTalents = [];

		this.selectedTalent = "";

		this.mandatorySkills = [];
		this.electiveSkills = [];

		this.missingMandatoryCareerSkill = false;
		this.missingElectiveCareerSkill = false;

		this.validate();
	}

	async _onRollEducation(event) {
		event.preventDefault();

		const educations = await conan.compendiums.educations();
		this.education = await this.randomItem(educations);

		await this.updateEducationData();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".education-roll").click(event => this._onRollEducation(event));
	}

	async applyAttributeBonuses(attributes) {
		if (this.education && this.education.system.attribute) {
			const key = this.education.system.attribute;
			attributes[key].value += 1;
		}
	}

	async applySkillBonuses(skills) {
		if (this.education) {
			for (const mandatorySkill of this.mandatorySkills) {
				const key = mandatorySkill.skill;
				skills[key].focus.value += 1;
				skills[key].expertise.value += 1;
			}

			for (const electiveSkill of this.electiveSkills) {
				const key = electiveSkill.skill;
				skills[key].focus.value += electiveSkill.bonus;
				skills[key].expertise.value += electiveSkill.bonus;
			}
		}
	}

	async characterData() {
		return {
			"system.background.education.value": this.education?.uuid ?? "",
		};
	}

	async formConfig() {
		const educationUuid = this.education?.uuid ?? "";

		const [selectedEducations, unselectedEducations] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.educations(),
				educationUuid ? [educationUuid] : []
			);

		let educationDescriptionHTML = "";

		if (this.education) {
			educationDescriptionHTML = await TextEditor.enrichHTML(
				this.education.system.description.value,
				{
					async: true,
				}
			);
		}

		const careerSkill = this.characterCreator.getCareerSkill();
		if (careerSkill !== this.careerSkill) {
			this.careerSkill = careerSkill;
			await this.updateEducationData();
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Education.description"),
			electiveSkills: this.electiveSkills,
			label: game.i18n.localize("CONAN.CharacterCreator.Education.label"),
			mandatorySkills: this.mandatorySkills,
			education: this.education,
			educationAttribute: this.educationAttribute,
			educationDescriptionHTML,
			educationTalents: this.educationTalents,
			selected: selectedEducations,
			selectedTalent: this.selectedTalent,
			hasAttribute: (this.education?.system?.attribute ?? "") !== "",
			template: () => "apps/character-creator/education",
			unselected: unselectedEducations,
		};
	}

	async getItems() {
		const items = [];

		if (this.selectedTalent !== "") {
			items.push(await fromUuid(this.selectedTalent));
		}

		return items;
	}

	async processSubmit(updateData) {
		const electiveChanged = await this.processElectiveSkillsSubmit(updateData);

		if (electiveChanged) {
			this.selectedTalent = "";
			await this.updateEducationTalents();
		}
		else {
			this.selectedTalent = updateData.education_talent ?? "";
		}

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "educationUuid") {
			this.education = await fromUuid(updateData.uuid);

			await this.updateEducationData();

			this.validate();
		}
	}

	async updateEducationTalents() {
		await this.characterCreator.updateCharacterData();

		this.educationTalents = await this.talentManager.getAvailableTalentsForSkills(
			this.educationSkills
		);
	}

	async updateEducationData() {
		const skills = {};

		this.educationAttribute = CONFIG.CONAN.attributeLabels[
			this.education?.system?.attribute
		] ?? "";

		this.mandatorySkills = [];
		for (const skill of this.education?.system?.mandatorySkill?.choices ?? []) {
			skills[skill] = true;
			this.mandatorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.careerSkill = this.characterCreator.getCareerSkill();
		this.missingMandatoryCareerSkill = false;
		if (this.education?.system?.mandatorySkill?.career) {
			if (this.careerSkill) {
				skills[this.careerSkill] = true;

				this.mandatorySkills.push({
					label: CONFIG.CONAN.skills[this.careerSkill],
					skill: this.careerSkill,
				});
			}
			else {
				this.missingMandatoryCareerSkill = true;
			}
		}

		if (this.education?.system?.mandatorySkill?.randomCareer) {
			const archetypes = await conan.compendiums.archetypes();
			const archetype = await this.randomItem(archetypes);

			if (archetype) {
				const skill = archetype?.system?.careerSkill?.choices[0] ?? "";

				skills[skill] = true;

				this.mandatorySkills.push({
					label: CONFIG.CONAN.skills[skill],
					skill: skill,
				});
			}
		}

		this.mandatorySkills.sort((a, b) => a.label.localeCompare(b.label));

		this.electiveSkills = [];
		for (const skill of this.education?.system?.electiveSkill?.choices ?? []) {
			skills[skill] = true;
			this.electiveSkills.push({
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.missingElectiveCareerSkill = false;
		if (this.education?.system?.electiveSkill?.career) {
			if (this.careerSkill) {
				skills[this.careerSkill] = true;

				this.electiveSkills.push({
					bonus: 0,
					checked: false,
					label: CONFIG.CONAN.skills[this.careerSkill],
					skill: this.careerSkill,
				});
			}
			else {
				this.missingElectiveCareerSkill = true;
			}
		}

		if (this.education?.system?.electiveSkill?.randomCareer) {
			const archetypes = await conan.compendiums.archetypes();
			const archetype = await this.randomItem(archetypes);

			if (archetype) {
				const skill = archetype?.system?.careerSkill?.choices[0] ?? "";

				skills[skill] = true;

				this.electiveSkills.push({
					bonus: 0,
					checked: false,
					label: CONFIG.CONAN.skills[skill],
					skill: skill,
				});
			}
		}

		this.electiveSkills.sort((a, b) => a.label.localeCompare(b.label));

		this.selectedTalent = "";
		this.educationSkills = Object.keys(skills);

		await this.updateEducationTalents();
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.education && this.education.type === "education")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAnEducation")
			);
		}

		if (this.education) {
			if (this.missingMandatoryCareerSkill || this.missingElectiveCareerSkill) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAnArchetype")
				);
			}

			let electiveSkillCount = 0;
			for (const skill of this.electiveSkills) {
				if (skill.checked) electiveSkillCount++;
			}

			if (electiveSkillCount !== 2) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectTwoElectiveSkills")
				);
			}

			if (this.selectedTalent === "") {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectATalent")
				);
			}
		}
	}

}

class CharGenFortune extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "fortune";

		this.baseAttributes = [];
		this.attributes = [];

		this.baseSkills = [];
		this.skill = "";

		this.skillBonuses = {};

		this.fortuneSpend = "none";

		this.fortuneSpendOptions = {
			none: "No Fortune Spend",
			attribute: "Attribute +1",
			skill: "Skill +2",
		};

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.attributes.push({
				attribute,
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.attributeLabels[attribute],
			});
		});

		this.ancientBloodline = null;
		this.ancientBloodlineNeeded = false;
		this.ancientBloodlineUuid = "";

		this.validate();
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._onDeleteSkill(event));
	}

	async applyAttributeBonuses(attributes) {
		this.baseAttributes = foundry.utils.duplicate(attributes);
		this.ancientBloodlineNeeded = false;

		if (this.fortuneSpend !== "attribute") return;

		for (const attribute in attributes) {
			const bonus = this.attributes.find(a => a.attribute === attribute).bonus ?? 0;
			attributes[attribute].value += bonus;
			this.baseAttributes[attribute].value += bonus;

			if (attributes[attribute].value > 12) this.ancientBloodlineNeeded = true;
		}
	}

	async applySkillBonuses(skills) {
		this.baseSkills = foundry.utils.duplicate(skills);

		if (this.fortuneSpend !== "skill" || this.skill === "") return;

		skills[this.skill].focus.value += 2;
		skills[this.skill].expertise.value += 2;
	}

	async characterData() {
		const maxFortune = this.fortuneSpend === "none" ? 3 : 2;

		return {
			"system.resources.fortune.max": maxFortune,
			"system.resources.fortune.value": maxFortune,
		};
	}

	async formConfig() {
		const [selectedSkills, availableSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.skill ? [this.skill] : []
			);

		let [selectedAncientBloodlines, unselectedAncientBloodlines] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.bloodlineTalents(),
				this.ancientBloodlineUuid ? [this.ancientBloodlineUuid] : []
			);

		if (this.ancientBloodlineNeeded && this.ancientBloodline === null) {
			if (unselectedAncientBloodlines.length === 1) {
				this.ancientBloodline = unselectedAncientBloodlines[0];
				this.ancientBloodlineUuid = this.ancientBloodline.uuid;
				selectedAncientBloodlines = [this.ancientBloodline];
				await this.validate();
			}
		}

		let ancientBloodlineDescriptionHTML = "";

		if (this.ancientBloodline) {
			ancientBloodlineDescriptionHTML = await TextEditor.enrichHTML(
				this.ancientBloodline.system.description.value,
				{
					async: true,
				}
			);
		}

		const config = {
			...await super.formConfig(),
			ancientBloodline: this.ancientBloodline,
			ancientBloodlineDescriptionHTML,
			ancientBloodlineNeeded: this.ancientBloodlineNeeded,
			attributes: this.attributes,
			availableSkills,
			description: game.i18n.localize("CONAN.CharacterCreator.Fortune.description"),
			fortuneSpend: this.fortuneSpend,
			fortuneSpendOptions: this.fortuneSpendOptions,
			label: game.i18n.localize("CONAN.CharacterCreator.Fortune.label"),
			selectedAncientBloodlines,
			selectedSkills,
			showSkillTable: this.skill !== "",
			template: () => "apps/character-creator/fortune",
			unselectedAncientBloodlines,
		};

		return config;
	}

	async processAttributesSubmit(updateData) {
		const changes = {};
		for (const attribute of this.attributes) {
			changes[attribute.attribute] = {
				oldChecked: attribute.checked,
				newChecked: false,
			};

			attribute.bonus = 0;
			attribute.checked = false;
		}

		const updateKey = "fortune_attribute::";
		for (const key in updateData) {
			if (key.startsWith(updateKey)) {
				const [, attributeId] = key.split("::");
				const attributeChecked = updateData[key] === attributeId ? true : false;
				for (const attribute of this.attributes) {
					if (attributeChecked && attribute.attribute === attributeId) {
						attribute.checked = true;

						changes[attributeId].newChecked = true;
					}
				}
			}
		}

		const checkedAttributes = this.attributes.filter(a => a.checked) ?? [];
		let bonus = 0;
		if (checkedAttributes.length === 1) bonus = 1;

		for (const checkedAttribute of checkedAttributes) {
			checkedAttribute.bonus = bonus;
		}

		let changed = false;
		for (const attribute in changes) {
			const oldChecked = changes[attribute].oldChecked;
			const newChecked = changes[attribute].newChecked;

			if (oldChecked !== newChecked) {
				changed = true;
				break;
			}
		}

		if (changed) {
			await this.characterCreator.updateCharacterData();
		}

		return changed;
	}

	async processSubmit(updateData) {
		this.fortuneSpend = updateData.fortuneSpend;
		await this.processAttributesSubmit(updateData);
		await this.characterCreator.updateCharacterData();
		await this.validate();
		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "ancientBloodlineUuid") {
			this.ancientBloodlineUuid = updateData.uuid;
			this.ancientBloodline = await fromUuid(updateData.uuid);

			await this.validate();
		}

		if (updateData.name === "fortuneSkillUuid") {
			this.skill = updateData.uuid;
			await this.characterCreator.updateCharacterData();
			await this.validate();
		}
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		if (this.fortuneSpend === "attribute") {
			const checkedAttributes = (this.attributes.filter(a => a.checked) ?? []).length;

			if (checkedAttributes > 1) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MaxOneAttributes")
				);
			}

			if (checkedAttributes < 1) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Attributes.Errors.MinOneAttributes")
				);
			}

			if (this.ancientBloodlineNeeded && this.ancientBloodline === null) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.AncientBloodlineTalentNeeded")
				);
			}

			for (const attribute of Object.keys(this.baseAttributes)) {
				if (this.baseAttributes[attribute].value > 14) {
					this.valid = false;
					this.errors.push(
						game.i18n.localize("CONAN.CharacterCreator.Errors.AttributeExceedsMax")
					);

					break;
				}
			}
		}
		else if (this.fortuneSpend === "skill") {
			if (this.skill === "") {
				this.valid = false;

				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.Fortune.MustSelectSkill")
				);
			}
			else {
				const focus = (this.baseSkills[this.skill]?.focus?.value ?? 0) + 2;
				const expertise = (this.baseSkills[this.skill]?.expertise?.value ?? 0) + 2;

				if (focus > 3 || expertise > 3) {
					this.valid = false;

					this.errors.push(
						game.i18n.localize("CONAN.CharacterCreator.Errors.Fortune.SkillCannotExceedThree")
					);
				}
			}
		}
	}

	async _onDeleteSkill(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		this.skill = "";

		delete this.skillBonuses[deleteUuid];

		await this.validate();

		this.characterCreator.update();
	}
}

class CharGenHomeland extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "homeland";

		this.homeland = null;
		this.homelandTalent = null;

		this.language = null;
		this.languageChanged = false;
		this.languages = [];

		this.validate();
	}

	async _onRollHomeland(event) {
		event.preventDefault();

		const homelands = await conan.compendiums.homelands();
		this.homeland = await this.randomItem(homelands);

		const talentUuid = this.homeland?.system?.talent?.choices[0];

		this.homelandTalent = await fromUuid(talentUuid) ?? null;

		await this._updateLanguageChoices();

		this.validate();

		this.characterCreator.update();
	}

	async _updateLanguageChoices() {
		const languages = this.homeland?.system?.language?.choices ?? [];

		this.languages = [];
		for (const language of languages) {
			const languageObject = await fromUuid(language);

			this.languages.push({
				name: languageObject.name,
				value: language,
			});
		}

		this.languages.sort((a, b) => a.name.localeCompare(b.name));

		this.language = this.languages[0]?.value ?? "";
		this.languageChanged = true;
	}

	activateListeners(html) {
		html.find(".homeland-roll").click(event => this._onRollHomeland(event));
	}

	async characterData() {
		return {
			"system.background.homeland.value": this.homeland?.uuid ?? "",
			"system.background.languages": this.language ? [this.language] : [],
		};
	}

	async formConfig() {
		const homelandUuid = this.homeland?.uuid ?? "";

		const [selectedHomelands, unselectedHomelands] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.homelands(),
				homelandUuid ? [homelandUuid] : []
			);


		let talentDescriptionHTML = "";

		if (this.homelandTalent) {
			talentDescriptionHTML = await TextEditor.enrichHTML(
				this.homelandTalent.system.description.value,
				{
					async: true,
				}
			);
		}

		let languageItem = null;
		if (this.language) {
			languageItem = await fromUuid(this.language);
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Homeland.description"),
			homeland: this.homeland,
			homelandTalent: this.homelandTalent,
			label: game.i18n.localize("CONAN.CharacterCreator.Homeland.label"),
			language: this.language,
			languageItem,
			languages: this.languages,
			chooseLanguage: (this.languages ?? []).length > 1,
			selected: selectedHomelands,
			talentDescriptionHTML,
			template: () => "apps/character-creator/homeland",
			unselected: unselectedHomelands,
		};
	}

	async getHomelandLanguages() {
		return this.language ? [this.language] : [];
	}

	async getItems() {
		if (!this.homelandTalent) return;

		return [this.homelandTalent];
	}

	async processSubmit(updateData) {
		if (this.languageChanged) {
			this.languageChanged = false;
		}
		else {
			this.language = updateData.homelandLanguage;
		}

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "homelandUuid") {
			this.homeland = await fromUuid(updateData.uuid);

			const talentUuid = this.homeland?.system?.talent?.choices[0];

			this.homelandTalent = await fromUuid(talentUuid) ?? null;

			await this._updateLanguageChoices();

			this.validate();

			this.characterCreator.update();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.homeland && this.homeland.type === "homeland")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Homeland.Errors.YouMustSelectAHomeland")
			);
		}
	}

}

class CharGenLanguage extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "language";
		this.skills = {};

		this.selectedLanguages = [];

		this.validate();
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._onDeleteLanguage(event));
	}

	async applySkillBonuses(skills) {
		this.skills = foundry.utils.duplicate(skills);
	}

	async characterData() {
		return {
			"system.background.languages": this.selectedLanguages,
		};
	}

	async formConfig() {
		const homelandLanguages = await this.characterCreator.getHomelandLanguages();

		let [selected, unselected] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.languages(),
				[...homelandLanguages, ...this.selectedLanguages]
			);

		selected = selected.filter(
			language => !homelandLanguages.includes(language.uuid)
		);

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Languages.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Languages.label"),
			selected,
			template: () => "apps/character-creator/languages",
			unselected,
		};
	}

	async processSubmit(updateData) {
		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "languageUuid") {
			if (!this.selectedLanguages.includes(updateData.uuid)) {
				this.selectedLanguages.push(updateData.uuid);
			}

			this.validate();
		}
	}

	async setHomelandLanguages(languages) {
		this.homelandLanguages = languages;
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		const allowedLanguages = 1 + (this.skills?.lin?.focus?.value ?? 0);
		const selectedCount = this.selectedLanguages.length;

		if (selectedCount !== allowedLanguages) {
			this.valid = false;

			let i18nKey = "YouMustSelectMutliple";
			if (allowedLanguages === 1) {
				i18nKey = "YouMustSelectSingle";
			}

			this.errors.push(
				game.i18n.format(
					`CONAN.CharacterCreator.Languages.Errors.${i18nKey}`,
					{ num: allowedLanguages })
			);
		}
	}

	async _onDeleteLanguage(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		const languages = [];
		for (const language of this.selectedLanguages) {
			if (language === deleteUuid) continue;
			languages.push(language);
		}
		this.selectedLanguages = languages;

		await this.validate();

		this.characterCreator.update();
	}

}

class CharGenName extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "name";

		this.characterName = "";

		this.validate();
	}

	async characterData() {
		return {name: this.characterName};
	}

	async formConfig() {
		return {
			...await super.formConfig(),
			characterName: this.characterName,
			description: game.i18n.localize("CONAN.CharacterCreator.Name.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Name.label"),
			template: () => "apps/character-creator/name",
		};
	}

	async processSubmit(updateData) {
		this.characterName = updateData.characterName;

		this.validate();

		return updateData;
	}

	async validate() {
		this.errors = [];
		this.valid = typeof this.characterName === "string" && this.characterName.length > 0;

		if (!this.valid) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Name.Errors.NameCannotBeBlank")
			);
		}
	}

}

class CharGenNature extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "nature";

		this.nature = null;
		this.natureAttribute = "";

		this.natureTalents = [];
		this.selectedTalent = "";

		this.mandatorySkills = [];
		this.electiveSkills = [];

		this.validate();
	}

	async _onRollNature(event) {
		event.preventDefault();

		const natures = await conan.compendiums.natures();
		this.nature = await this.randomItem(natures);

		await this.updateNatureData();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".nature-roll").click(event => this._onRollNature(event));
	}

	async applyAttributeBonuses(attributes) {
		if (this.nature) {
			const key = this.nature.system.attribute;
			attributes[key].value += 1;
		}
	}

	async applySkillBonuses(skills) {
		if (this.nature) {
			for (const mandatorySkill of this.mandatorySkills) {
				const key = mandatorySkill.skill;
				skills[key].focus.value += 1;
				skills[key].expertise.value += 1;
			}

			for (const electiveSkill of this.electiveSkills) {
				const key = electiveSkill.skill;
				skills[key].focus.value += electiveSkill.bonus;
				skills[key].expertise.value += electiveSkill.bonus;
			}
		}
	}

	async characterData() {
		return {
			"system.background.nature.value": this.nature?.uuid ?? "",
		};
	}

	async formConfig() {
		const natureUuid = this.nature?.uuid ?? "";

		const [selectedNatures, unselectedNatures] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.natures(),
				natureUuid ? [natureUuid] : []
			);

		let natureDescriptionHTML = "";

		if (this.nature) {
			natureDescriptionHTML = await TextEditor.enrichHTML(
				this.nature.system.description.value,
				{
					async: true,
				}
			);
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Nature.description"),
			electiveSkills: this.electiveSkills,
			label: game.i18n.localize("CONAN.CharacterCreator.Nature.label"),
			mandatorySkills: this.mandatorySkills,
			nature: this.nature,
			natureAttribute: this.natureAttribute,
			natureDescriptionHTML,
			natureTalents: this.natureTalents,
			selected: selectedNatures,
			selectedTalent: this.selectedTalent,
			template: () => "apps/character-creator/nature",
			unselected: unselectedNatures,
		};
	}

	async getItems() {
		const items = [];

		if (this.selectedTalent !== "") {
			items.push(await fromUuid(this.selectedTalent));
		}

		return items;
	}

	async processSubmit(updateData) {
		const electiveChanged = await this.processElectiveSkillsSubmit(updateData);

		if (electiveChanged) {
			this.selectedTalent = "";
			await this.updateNatureTalents();
		}
		else {
			this.selectedTalent = updateData.nature_talent ?? "";
		}

		if (updateData.natureUuid !== "") {
			await this.selectorUuidUpdated(updateData);
		}

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "natureUuid") {
			this.nature = await fromUuid(updateData.uuid);

			this.updateNatureData();

			this.validate();
		}
	}

	async updateNatureTalents() {
		await this.characterCreator.updateCharacterData();

		this.natureTalents = await this.talentManager.getAvailableTalentsForSkills(
			this.natureSkills
		);
	}

	async updateNatureData() {
		const skills = {};

		this.mandatorySkills = [];
		for (const skill of this.nature?.system?.mandatorySkill?.choices ?? []) {
			skills[skill] = true;
			this.mandatorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.electiveSkills = [];
		for (const skill of this.nature?.system?.electiveSkill?.choices ?? []) {
			skills[skill] = true;
			this.electiveSkills.push({
				bonus: 0,
				checked: false,
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}

		this.selectedTalent = "";
		this.natureSkills = Object.keys(skills);

		this.natureAttribute = CONFIG.CONAN.attributeLabels[
			this.nature?.system?.attribute
		] ?? "";

		await this.updateNatureTalents();
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.nature && this.nature.type === "nature")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectANature")
			);
		}

		if (this.nature) {
			let electiveSkillCount = 0;
			for (const skill of this.electiveSkills) {
				if (skill.checked) electiveSkillCount++;
			}

			if (electiveSkillCount !== 2) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectTwoElectiveSkills")
				);
			}

			if (this.selectedTalent === "") {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectATalent")
				);
			}
		}
	}

}

class CharGenSkills extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "final skills";

		this.baseSkills = [];
		this.skills = [];
		this.skillBonuses = {};

		this.validate();
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._onDeleteSkill(event));
	}

	async applySkillBonuses(skills) {
		this.baseSkills = foundry.utils.duplicate(skills);
		for (const skill of this.skills) {
			const bonus = this.skillBonuses[skill] ?? 0;
			skills[skill].focus.value += bonus;
			skills[skill].expertise.value += bonus;
		}
	}

	async formConfig() {
		const [selectedSkills, availableSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.skills
			);

		for (const skill of selectedSkills) {
			skill.bonus = this.skillBonuses[skill.uuid] ?? 0;
		}

		const config = {
			...await super.formConfig(),
			showSkillTable: this.skills.length > 0,
			selectedSkills,
			availableSkills,
			skillBonuses: this.skillBonuses,
			description: game.i18n.localize("CONAN.CharacterCreator.Skills.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Skills.label"),
			template: () => "apps/character-creator/skills",
		};

		return config;
	}

	async processSubmit(updateData) {
		for (const key in updateData) {
			if (key.startsWith("finishing_skill::")) {
				const value = updateData[key];
				if (value === undefined) continue;
				const [skillId, selectedBonus] = value.split("::");
				this.skillBonuses[skillId] = Number(selectedBonus);
			}
		}

		await this.validate();
		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "finishingSkillUuid") {
			if (!this.skills.includes(updateData.uuid)) {
				this.skills.push(updateData.uuid);

				this.skillBonuses[updateData.uuid] = 1;

				this.skills.sort((a, b) => a.localeCompare(b));
			}
		}
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		const skillBonusTotal = Object.values(this.skillBonuses).reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0
		);

		if (skillBonusTotal < 3) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Skills.Errors.YouMustAssignThreeSkillPoints")
			);
		}
		else if (skillBonusTotal > 3) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Skills.Errors.MaximumThreeSkillPointsExceeded")
			);
		}

		for (const skill in this.baseSkills) {
			const bonus = this.skillBonuses[skill] ?? 0;
			const focus = (this.baseSkills[skill]?.focus?.value ?? 0) + bonus;
			const expertise = (this.baseSkills[skill]?.expertise?.value ?? 0) + bonus;

			if (focus > 5 || expertise > 5) {
				this.valid = false;

				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.Errors.Fortune.SkillExceededMax")
				);
			}
		}
	}

	async _onDeleteSkill(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		const newSkills = [];
		for (const skill of this.skills) {
			if (skill === deleteUuid) continue;
			newSkills.push(skill);
		}
		this.skills = newSkills;

		delete this.skillBonuses[deleteUuid];

		await this.validate();

		this.characterCreator.update();
	}
}

class CharGenStartingAttributes extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "starting attributes";

		this.attributes = {};

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.attributes[attribute] = {
				attribute,
				label: CONFIG.CONAN.attributeLabels[attribute],
				tooltip: CONFIG.CONAN.attributeTooltips[attribute],
				value: 7,
			};
		});

		this.increased = 0;
		this.decreased = 0;

		this.validate();
	}

	activateListeners(html) {
		const me = this;

		html.find(".starting-attributes .quantity-grid")
			.each(function() {
				const spinner = $(this);
				const input = spinner.find("input[type=\"number\"]");
				const btnUp = spinner.find(".quantity-up");
				const btnDown = spinner.find(".quantity-down");
				const attribute = input.attr("data-attribute");

				input.on("wheel", ev => {
					ev.preventDefault();
					if (ev.originalEvent.deltaY < 0) {
						me._inc_attribute(input, attribute);
					}
					else if (ev.originalEvent.deltaY > 0) {
						me._dec_attribute(input, attribute);
					}
				});

				btnUp.click(ev => {
					ev.preventDefault();
					me._inc_attribute(input, attribute);
				});

				btnDown.click(ev => {
					ev.preventDefault();
					me._dec_attribute(input, attribute);
				});
			});
	}

	async applyAttributeBonuses(attributes) {
		for (const attribute in attributes) {
			const attributeBonus = this.attributes[attribute].value - attributes[attribute].value;
			attributes[attribute].value += attributeBonus;
		}
	}

	async formConfig() {
		const config = {
			...await super.formConfig(),
			attributes: this.attributes,
			description: game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.label"),
			template: () => "apps/character-creator/starting-attributes",
		};

		return config;
	}

	async processSubmit(updateData) {
		this.validate();
		return updateData;
	}

	async validate() {
		this.valid = true;
		this.errors = [];

		this.reduced = 0;
		this.increased = 0;

		for (const attributeId of Object.keys(this.attributes)) {
			const attribute = this.attributes[attributeId];

			if (attribute.value === 6) this.reduced++;
			if (attribute.value === 8) this.increased++;

			if (attribute.value < 6) {
				this.errors.push(
					game.i18n.format("CONAN.CharacterCreator.StartingAttributes.Errors.OutOfBoundsLow",
						{attributeName: attribute.label}
					)
				);
			}
			else if (attribute.value > 8) {
				this.errors.push(
					game.i18n.format("CONAN.CharacterCreator.StartingAttributes.Errors.OutOfBoundsHigh",
						{attributeName: attribute.label}
					)
				);
			}

		}

		if (this.reduced > 2) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.Errors.MaxTwoReduced")
			);
		}

		if (this.increased > 2) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.Errors.MaxTwoIncreased")
			);
		}

		if (this.reduced !== this.increased) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.StartingAttributes.Errors.SameNumberOfAttributes")
			);
		}

		if (this.errors.length > 0) this.valid = false;
	}

	_dec_attribute(input, attribute) {
		let value = this.attributes[attribute].value;
		value--;
		if (value < 6) value = 6;

		this.attributes[attribute].value = value;

		this.validate();
		this.characterCreator.update();
	}

	_inc_attribute(input, attribute) {
		let value = this.attributes[attribute].value;
		value++;
		if (value > 8) value = 8;

		this.attributes[attribute].value = value;

		this.validate();
		this.characterCreator.update();
	}
}

class CharGenStory extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "story";

		this.caste = null;
		this.casteUuid = "";

		this.story = null;

		this.validate();
	}

	async _onRollStory(event) {
		event.preventDefault();

		if (!this.caste) return;

		const stories = new Collection();
		for (const storyUuid of this.caste.system.story.choices) {
			const story = await fromUuid(storyUuid);
			stories.set(story.id, story);
		}

		this.story = await this.randomItem(stories);

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".story-roll").click(event => this._onRollStory(event));
	}

	async characterData() {
		return {
			"system.background.story.value": this.story?.uuid ?? "",
			"system.background.trait.value": this.story?.system.trait ?? "",
		};
	}

	async formConfig() {

		const casteUuid = this.characterCreator.getCasteUuid();

		if (casteUuid !== this.casteUuid) {
			// The caste has been changed, some data is probably not valid now
			this.casteUuid = casteUuid;

			this.story = null;

			if (typeof casteUuid === "string" && casteUuid !== "") {
				// Load the new caste
				this.caste = await fromUuid(casteUuid);
			}

			this.validate();
		}

		let selectedStories = [];
		let unselectedStories = [];

		if (this.caste) {
			const storyUuid = this.story?.uuid ?? "";

			const allStoryUuids = this.caste?.system?.story?.choices ?? [];
			let docs = [];
			for (const uuid of allStoryUuids) {
				docs.push(await fromUuid(uuid));
			}
			docs = Array.from(new Set(docs)).sort((a, b) => a.name.localeCompare(b.name));
			const allStories = new Collection();
			for (let d of docs) {
				allStories.set(d.id, d);
			}

			[selectedStories, unselectedStories] =
				await conan.utils.getDedupedSelectedItems(
					allStories,
					storyUuid ? [storyUuid] : []
				);
		}

		const storyLabel = this.caste
			? `${this.caste.name} ${game.i18n.localize("CONAN.CharacterCreator.Story.label")}`
			: game.i18n.localize("CONAN.CharacterCreator.Story.label");

		let storyDescriptionHTML = "";

		if (this.story) {
			storyDescriptionHTML = await TextEditor.enrichHTML(
				this.story.system.description.value,
				{
					async: true,
				}
			);
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Story.description"),
			story: this.story,
			caste: this.caste ?? false,
			label: game.i18n.localize("CONAN.CharacterCreator.Story.label"),
			selected: selectedStories,
			storyLabel,
			storyDescriptionHTML,
			template: () => "apps/character-creator/story",
			unselected: unselectedStories,
		};
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "storyUuid") {
			this.story = await fromUuid(updateData.uuid);
			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.caste && this.caste.type === "caste")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Story.Errors.YouMustSelectACasteFirst")
			);
		}
		else if (!(this.story && this.story.type === "story")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Story.Errors.YouMustSelectAStory")
			);
		}
	}

}

class CharGenTalent extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "talent";

		this.selectedTalent = "";

		this.validate();
	}

	async formConfig() {
		const availableTalents = await this.talentManager.getAvailableSkillTalents();

		return {
			...await super.formConfig(),
			availableTalents,
			description: game.i18n.localize("CONAN.CharacterCreator.FinalTalent.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Talent.label"),
			selectedTalent: this.selectedTalent,
			template: () => "apps/character-creator/talent",
		};
	}

	async getItems() {
		const items = [];

		if (this.selectedTalent !== "") {
			items.push(await fromUuid(this.selectedTalent));
		}

		return items;
	}

	async processSubmit(updateData) {
		this.selectedTalent = updateData.final_talent ?? "";

		this.validate();

		return updateData;
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (this.selectedTalent === "") {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectATalent")
			);
		}
	}

}

class CharGenWarStory extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "war story";

		this.warStory = null;
		this.warStorySkills = [];

		this.validate();
	}

	async _onRollWarStory(event) {
		event.preventDefault();

		const warStories = await conan.compendiums.warStories();
		this.warStory = await this.randomItem(warStories);

		await this.updateWarStoryData();

		this.validate();

		this.characterCreator.update();
	}

	async updateWarStoryData() {
		this.warStorySkills = [];

		for (const skill of this.warStory?.system?.skills?.choices ?? []) {
			this.warStorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}
	}

	activateListeners(html) {
		html.find(".war-story-roll").click(event => this._onRollWarStory(event));
	}

	async applySkillBonuses(skills) {
		if (this.warStory) {
			for (const skill of this.warStorySkills) {
				const key = skill.skill;
				skills[key].focus.value += 1;
				skills[key].expertise.value += 1;
			}
		}
	}

	async characterData() {
		return {
			"system.background.warstory.value": this.warStory?.uuid ?? "",
		};
	}

	async formConfig() {
		const warStoryUuid = this.warStory?.uuid;

		const [selectedWarStories, unselectedWarStories] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.warStories(),
				warStoryUuid ? [warStoryUuid] : []
			);

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.WarStory.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.WarStory.label"),
			selected: selectedWarStories,
			unselected: unselectedWarStories,
			warStory: this.warStory,
			warStorySkills: this.warStorySkills,
			template: () => "apps/character-creator/war-story",
		};
	}

	async processSubmit(updateData) {
		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "warStoryUuid") {
			this.warStory = await fromUuid(updateData.uuid);

			await this.updateWarStoryData();

			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.warStory && this.warStory.type === "warstory")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAWarStory")
			);
		}
	}

}

class CharGenBelongings extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "belongings";

		this.belonging = null;
		this.garment = null;
		this.weapon = null;
		this.provenance = "";

		this.validate();
	}

	activateListeners(html) {
		html.find(".belonging-roll").click(event => this._onRollBelonging(event));
		html.find(".garment-roll").click(event => this._onRollGarment(event));
		html.find(".weapon-roll").click(event => this._onRollWeapon(event));
	}

	async formConfig() {
		return {
			...await super.formConfig(),
			belonging: this.belonging,
			garment: this.garment,
			weapon: this.weapon,
			provenance: this.provenance,
			characterName: this.characterName,
			description: game.i18n.localize("CONAN.CharacterCreator.Belongings.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Belongings.label"),
			template: () => "apps/character-creator/belongings",
		};
	}

	async getItems() {
		const items = [];

		if (this.belonging !== null) {
			items.push(this.belonging.toObject());
		}
		if (this.garment !== null) {
			items.push(this.garment.toObject());
		}
		if (this.weapon !== null) {
			const weapon = this.weapon.toObject();

			weapon.system.description.value += `<p><b>${this.provenance}</b></p>`;

			items.push(weapon);
		}

		return items;
	}

	async getProvenance() {
		const table = await this.getRollTable("provenance");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		return draw.results[0].text ?? "";
	}

	async processSubmit(updateData) {
		this.validate();
		return updateData;
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (this.belonging === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.Belongings.RollForBelonging")
			);
		}
		if (this.garment === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.Belongings.RollForGarment")
			);
		}
		if (this.weapon === null) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.Belongings.RollForWeapon")
			);
		}
	}

	async _onRollBelonging(event) {
		event.preventDefault();

		const table = await this.getRollTable("personal belongings");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		this.belonging = await this.getItemFromResult(draw.results[0]);

		this.validate();

		this.characterCreator.update();
	}

	async _onRollGarment(event) {
		event.preventDefault();

		const table = await this.getRollTable("garments");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		this.garment = await this.getItemFromResult(draw.results[0]);

		this.validate();

		this.characterCreator.update();
	}

	async _onRollWeapon(event) {
		event.preventDefault();

		const table = await this.getRollTable("weapon");
		const draw = await table.draw() ?? null;

		if (draw === null) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTable")
			);
		}

		this.weapon = await this.getItemFromResult(draw.results[0]);

		this.provenance = await this.getProvenance();

		this.validate();

		this.characterCreator.update();
	}
}

class ConanDice {
	static async rollHitLocation() {
		let locationRoll = await new Roll("1d20").roll();
		const newLocation = parseInt(locationRoll.result);

		let locationId;
		if (newLocation >= 1 && newLocation <= 2) {
			locationId = "head";
		}
		else if (newLocation >= 3 && newLocation <= 5) {
			locationId = "rarm";
		}
		else if (newLocation >= 6 && newLocation <= 8) {
			locationId = "larm";
		}
		else if (newLocation >= 9 && newLocation <= 14) {
			locationId = "torso";
		}
		else if (newLocation >= 15 && newLocation <= 17) {
			locationId = "rleg";
		}
		else {
			locationId = "lleg";
		}

		return locationId;
	}

	static async calculateCombatDiceRoll(rollData) {
		// rollData = {
		//   base: {
		//     numDice: 1,
		//   },
		//   bonus: {
		//     attribute: 0,
		//   },
		//   damage: {
		//     location: null,
		//     type: null,
		//   },
		//   spends: {
		//     doom: 0,
		//     momentum: 0,
		//   },
		//   actorId: null,
		//   fixedResults: [],
		//   isReroll: false,
		//   itemId: null,
		//   numDice: 1,
		//   title: "Combat Dice Roll",
		// }

		const results = {
			total: 0,
			effects: 0,
			location: null,
			locationId: null,
			rolls: [],
		};

		// Total number to roll doesn"t include any fixed results from a reroll
		const numDice = rollData.numDice - rollData.fixedResults.length;

		const rollInstance = new Roll(`${numDice}dp`);
		let combatDiceRolls = await rollInstance.roll();

		if (game.dice3d) {
			await ConanDice.showDiceSoNice(
				rollInstance,
				game.settings.get("core", "rollMode")
			);
		}

		results.rolls = combatDiceRolls.terms[0].results;

		// Populate each roll with its display value and a null index which will
		// be set correctly after any reroll merges have occured.
		//
		results.rolls.forEach((roll, index) => {
			roll.index = null;
			roll.display = combatDiceRolls.terms[0].resultValues[index];
		});

		// If we"re performing a reroll, then merge the rerolled dice into the
		// correct slots in the original results which makes it more obvious how
		// the new roll performed rather than shifting the position of all results
		//
		if (rollData.isReroll) {
			results.rolls = await this._mergeRerolls(
				results.rolls,
				rollData.fixedResults
			);
		}

		// Go through all rolls and index their placement for future use.
		//
		results.rolls.forEach((roll, index) => {
			roll.index = index;
			results.effects += roll.effect ? 1 : 0;
			results.total += roll.result <= 2 ? roll.result : 0;
		});

		// Add momentum/doom spend damage at a 1-for-1 level
		//
		// NOTE: PCs cannot use Doom to increase damage, but this is taken into
		// account by the Roller interface
		results.total += rollData.spends.doom + rollData.spends.momentum;

		// Effects usually count as 1 damage, unless the wepon is improvised.
		//
		// Total damage will be reduced by the Apply Damage interface if the
		// weapon has the Improvised quality, so we'll include the extra 1
		// here for each effect
		results.improvisedTotal = results.total;
		results.total += results.effects;

		// Get a hit location if this isn"t a reroll, otherwise used the previous
		// hit location value.  Mental damage types don"t use hit locations.
		//
		let hitLocation = rollData.damage.location;
		const damageType = rollData.damage.type || "";
		if (!hitLocation && damageType.toLowerCase() !== "mental") {
			const locationId = await ConanDice.rollHitLocation();

			rollData.damage.locationId = locationId;
			rollData.damage.location = CONFIG.CONAN.coverageTypes[locationId];
		}

		results.location = rollData.damage.location;

		return results;
	}

	static async calculateSkillRoll(rollData) {
		// rollData = {
		//   actor: null,
		//   assists: {
		//     complication: 20,
		//     focus: 0,
		//     numDice: 0,
		//     tn: 7,
		//   },
		//   bonus: {
		//     dice: 0,
		//     inhuman: 0,
		//     momentum: 0,
		//     successes: 0,
		//   },
		//   difficulty: {
		//     base: 1,
		//     display: "&nbsp;",
		//     increase: 0,
		//   },
		//   skill: {
		//     complication: 20,
		//     display: "&nbsp;",
		//     expertise: 0,
		//     focus: 0,
		//     tn: 7,
		//   },
		//   spends: {
		//     doom: 0,
		//     fortune: 0,
		//     momentum: 0,
		//   },
		//   fixedResults: [],
		//   title: "Skill Test",
		//   isAssist: false,
		//   isReroll: false,
		//   item: null,
		//   numDice: CONFIG.BASE_2D20_DICE,
		// };

		const results = {
			successes: 0,
			crits: 0,
			momentum: 0,
			complications: 0,
			rolls: [],
		};

		let skillDiceToRoll;
		if (rollData.isReroll) {
			skillDiceToRoll = rollData.numDice
				+ rollData.assists.numDice
				- rollData.fixedResults.length;
		}
		else {
			skillDiceToRoll = rollData.numDice - rollData.spends.fortune;
		}

		skillDiceToRoll = skillDiceToRoll >= 0 ? skillDiceToRoll : 0;

		let skillRollInstance = new Roll(
			`${skillDiceToRoll}d20cs<=${rollData.skill.tn}cf>=${rollData.skill.complication}`
		);

		let skillRolls = await skillRollInstance.roll();

		if (game.dice3d) {
			await ConanDice.showDiceSoNice(
				skillRollInstance,
				game.settings.get("core", "rollMode")
			);
		}

		if (!rollData.isReroll) {
			// Hard code the requested fortune dice as successes
			//
			for (let i = 0; i < rollData.spends.fortune; i++) {
				let critical = rollData.skill.focus > 0 ? true : false;

				results.rolls.unshift({
					assist: false,
					complication: false,
					critical,
					result: 1,
					success: true,
					fortuneSpend: true,
				});
			}
		}

		skillRolls.terms[0].results.forEach(roll => {
			results.rolls.push({
				assist: false,
				complication: roll.failure || false,
				critical: roll.result <= rollData.skill.focus,
				result: roll.result,
				success: roll.success || false,
			});
		});

		// Roll assists seperately, as it"s possible that there are different TN and
		// expertise values required for the test
		//
		if (rollData.assists.numDice > 0 && !rollData.isReroll) {
			let assistSkillDiceToRoll = rollData.assists.numDice;

			let assistRollInstance = new Roll(
				`${assistSkillDiceToRoll}d20cs<=${rollData.assists.tn}cf>=${rollData.assists.complication}`
			);
			let assistRolls = await assistRollInstance.roll();

			if (game.dice3d) {
				await ConanDice.showDiceSoNice(
					assistRollInstance,
					game.settings.get("core", "rollMode")
				);
			}

			assistRolls.terms[0].results.forEach(roll => {
				results.rolls.push({
					assist: true,
					complication: roll.failure || false,
					critical: roll.result <= rollData.assists.focus,
					result: roll.result,
					success: roll.success || false,
					fortuneSpend: false,
				});
			});
		}

		// If we"re performing a reroll, then merge the rerolled dice into the
		// correct slots in the original results which makes it more obvious how
		// the new roll performed rather than shifting the position of all results
		//
		if (rollData.isReroll) {
			results.rolls = await this._mergeRerolls(
				results.rolls,
				rollData.fixedResults
			);
		}

		// Go through all rolls and index their placement for future use.
		// Also flag criticals, complications and successes so they can be
		// identified for display purposes.
		//
		results.rolls.forEach((roll, i) => {
			roll.index = i;

			if (roll.complication) {
				results.complications++;
			}

			if (roll.critical) {
				results.crits++;
				results.successes++;
			}

			if (roll.success) {
				results.successes++;
			}
		});

		// Work out if the roll was a success and add any bonuses that may apply
		// if it was.
		//
		const totalDifficulty =
			rollData.difficulty.base + rollData.difficulty.increase;

		// Inhuman bonus successes always apply
		results.successes += rollData.bonus.inhuman;

		results.result = "failure";

		if (results.successes > 0) {
			results.successes += rollData.bonus.successes;

			if (results.successes >= totalDifficulty) {
				results.momentum = results.successes - totalDifficulty;

				// add any bonus momentum
				results.momentum += rollData.bonus.momentum;

				results.result = "success";
			}

			if (rollData.actorId) {
				const actor = game.actors.get(rollData.actorId);
				const updateActorData = {};
				updateActorData["system.momentum"] = results.momentum;
				actor.update(updateActorData);
			}
		}

		return results;
	}

	static getDefaultCombatDiceRollOptions() {
		return {
			base: {
				numDice: 1,
			},
			bonus: {
				attribute: 0,
				other: 0,
				reloads: 0,
				talent: 0,
			},
			damage: {
				location: null,
				type: null,
			},
			spends: {
				doom: 0,
				momentum: 0,
			},
			actorId: null,
			fixedResults: [],
			isReroll: false,
			itemId: null,
			numDice: 1,
			title: game.i18n.localize("CONAN.CombatDice"),
		};
	}

	// TODO Document Method
	static async triggerReroll(message) {
		const actor = game.actors.get(message.speaker.actor);
		const messageData = message.flags.data;
		const type = messageData.type;

		// find all dice that have been selected for reroll
		const rerolls = [];
		$(message.content)
			.children(".selected")
			.each(function() {
				const rollIndex = this.id;
				rerolls.push(messageData.results.rolls[rollIndex]);
			});

		// now go through all dice in the result and remove those that are selected
		// to be rerolled which leaves us with the fixed results
		let norolls = messageData.results.rolls;

		rerolls.forEach(reroll => {
			for (let i = 0; i < norolls.length; i++) {
				if (reroll.index === norolls[i].index) {
					norolls.splice(i, 1);
					break;
				}
			}
		});

		const diceQty = rerolls.length;

		if (diceQty === 0) {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.NoDiceSelectedForReroll")
			);
		}

		// update the rollData settings with the fixed results and ensure it is
		// flagged as a reroll
		//
		messageData.rollData.fixedResults = norolls;
		messageData.rollData.isReroll = true;

		conan.chat.rerollNotification(diceQty, actor);

		const rerollText = game.i18n.localize("CONAN.reroll");
		messageData.rollData.title += ` (${rerollText})`;

		let results;
		if (type === "skill") {
			results = await ConanDice.calculateSkillRoll(messageData.rollData);
		}
		else {
			results = await ConanDice.calculateCombatDiceRoll(
				messageData.rollData
			);
		}

		const cardData = {
			actor: actor,
			item: messageData.item,
			results,
			rollData: messageData.rollData,
			type,
		};

		switch (type) {
			case "combatDice":
				conan.chat.renderCombatDiceRollCard(cardData);
				break;
			case "damage":
				conan.chat.renderDamageRollCard(cardData);
				break;
			case "skill":
				conan.chat.renderSkillTestCard(cardData);
				break;
			case "soak":
				conan.chat.renderSoakDiceRollCard(cardData);
				break;
			default:
				console.error(`Unknown roll type: ${type}`);
		}
	}

	/**
	 * Add support for the Dice So Nice module
	 * @param {Object} roll
	 * @param {String} rollMode
	 */
	static async showDiceSoNice(roll, rollMode) {
		if (game.modules.get("dice-so-nice")
			&& game.modules.get("dice-so-nice").active
		) {
			let whisper = null;
			let blind = false;
			switch (rollMode) {
				case "blindroll": {
					blind = true;
					break;
				}
				case "gmroll": {
					const gmList = game.users.filter(user => user.isGM);
					const gmIDList = [];
					gmList.forEach(gm => gmIDList.push(gm.id));
					whisper = gmIDList;
					break;
				}
				case "roll": {
					const userList = game.users.filter(user => user.active);
					const userIDList = [];
					userList.forEach(user => userIDList.push(user.id));
					whisper = userIDList;
					break;
				}
				case "selfroll": {
					whisper = [game.user.id];
					break;
				}
			}
			await game.dice3d.showForRoll(roll, game.user, true, whisper, blind);
		}
	}

	/**
	 * Merge new rolls and the preserved old rolls submitted to a reroll request
	 */
	static async _mergeRerolls(newRolls, oldRolls) {
		const mergedRolls = [];

		let x = 0;
		for (let i = 0; i < oldRolls.length; i += 1) {
			const mergeRoll = oldRolls[i];
			if (mergeRoll.index === x) {
				mergedRolls.push(mergeRoll);
				x++;
				continue;
			}

			while (x < mergeRoll.index) {
				let newRoll = newRolls.shift();
				newRoll.index = x;
				mergedRolls.push(newRoll);
				x++;
			}

			mergedRolls.push(mergeRoll);
			x++;
		}

		// Now make sure we merge any left over rolls
		return [...mergedRolls, ...newRolls];
	}
}

class ConanActor extends Actor {

	get canRollSkillChecks() {
		return ["character", "npc", "mount"].includes(this.type);
	}

	get canTakeDamage() {
		return this.type !== "transport";
	}

	get canTakeResolveDamage() {
		return ["character", "npc", "mount"].includes(this.type);
	}

	get canTakeVigorDamage() {
		return ["character", "npc", "mount", "watercraft"].includes(this.type);
	}

	get isNPC() {
		return ["mount", "npc"].includes(this.type);
	}

	get isNotNPC() {
		return !this.isNPC;
	}

	get isNotWatercraft() {
		return !this.isWatercraft;
	}

	get isWatercraft() {
		return this.type === "watercraft";
	}

	/**
	 *
	 * Set initial actor data based on type
	 *
	 */
	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);

		// If prototypeToken already exists in data then we are copying an
		// actor and really shouldn't mess with any values
		//
		if (data.prototypeToken) return;

		const prototypeToken = {
			bar1: {attribute: "health.physical"}, // Default Bar 1 to Vigor
			bar2: {attribute: "health.mental"}, // Default Bar 2 to Resolve
			disposition: CONST.TOKEN_DISPOSITIONS.FRIENDLY,
			name: data.name, // Set token name to actor name
			texture: foundry.utils.duplicate(this.prototypeToken.texture),
		};

		if (["character", "mount"].includes(data.type)) {
			prototypeToken.actorLink = true;
			prototypeToken.sight = { enabled: true };
		}

		if (["mount", "transport", "watercraft"].includes(data.type)) {
			prototypeToken.disposition = CONST.TOKEN_DISPOSITIONS.NEUTRAL;
		}

		if (data.type === "npc") {
			prototypeToken.actorLink = false;
			prototypeToken.disposition = CONST.TOKEN_DISPOSITIONS.HOSTILE;
		}

		const update = {prototypeToken};

		if (!data.img) {
			const image = CONFIG.CONAN.defaultActorTokenImages[data.type];

			if (image) {
				update.img = image;
				update.prototypeToken.texture = {
					src: image,
				};
			}
		}

		const copyActionsEnabled = game.settings.get(
			SYSTEM_ID, "addActionsToNewCharacters"
		);

		if (data.type === "character" && copyActionsEnabled) {
			// If the Actor data already contains Action items then this is an
			// Actor being duplicated and we don't want to touch their
			// items at all
			//
			const alreadyHasActions = Array.isArray(data.items)
				&& data.items.filter(i => i.type === "action").length > 0;

			if (!alreadyHasActions) {
				const packActions =
					await game.packs.get("conan2d20.actions-core").getDocuments();

				update.items = this.items.map(i => i.toObject());

				packActions.forEach(s => {
					update.items.push(s.toObject());
				});
			}
		}

		await this.updateSource(update);
	}

	async applyDamage(damage, qualities) {
		const me = this;

		damage.ignoreSoak = damage.penetration;
		damage.intense = false;
		damage.vigorIntenseApplied = false;
		damage.resolveIntenseApplied = false;
		damage.nonlethal = false;

		const spread = [];
		const spreadLocalized = [];
		let spreadDamage = 0;

		const qualitiesApplied = [];
		if (damage.effects > 0) {
			for (const quality of qualities) {
				const effectBonus = quality.value * damage.effects;

				switch (quality.type) {
					case "blinding":
						this.addCondition("blind");

						const options =
							ConanDice.getDefaultCombatDiceRollOptions();

						options.numDice = 3;
						options.title = "Blinding: Mental Damage";

						const mentalDamage =
							await ConanDice.calculateCombatDiceRoll(options);

						damage.resolve += mentalDamage.total;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.blinding",
								{mentalDamage: mentalDamage.total}
							),
						});

						break;
					case "cavalryx":
						if (damage.vigor > 0) damage.vigor += effectBonus;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.cavalryx",
								{ value: effectBonus }
							),
						});
						break;
					case "fearsomex":
						damage.resolve += effectBonus;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.fearsomex",
								{ value: effectBonus }
							),
						});
						break;
					case "grappling":
						this.addCondition("grappled");

						const difficulty = CONFIG.CONAN.rollDifficultyLevels[damage.effects];

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.grappling",
								{ difficulty }
							),
						});

						break;
					case "improvised":
						if (!qualities.find(q => q.type === "visciousx")) {
							damage.vigor -= damage.effects;

							qualitiesApplied.push({
								name: CONFIG.CONAN.weaponQualities[quality.type],
								text: game.i18n.format(
									"CONAN.QualityDamageAdjust.improvised",
									{ value: damage.effects }
								),
							});

						}
						break;
					case "incendiaryx":
						this.addCondition("burningx", damage.effects);

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.incendiaryx",
								{ value: damage.effects }
							),
						});

						break;
					case "intense":
						damage.intense = true;
						break;
					case "knockdown":
						this.addCondition("prone");

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.knockdown",
								{ value: damage.effects }
							),
						});

						break;
					case "nonlethal":
						this.addCondition("dazed");
						damage.nonlethal = true;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.localize(
								"CONAN.QualityDamageAdjust.nonlethal"
							),
						});

						break;
					case "persistentx":
						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.persistentx",
								{ value: damage.effects }
							),
						});

						break;
					case "piercingx":
						damage.ignoreSoak += effectBonus;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.piercingx",
								{ value: effectBonus }
							),
						});
						break;
					case "spreadx":
						for (let i = 0; i < damage.effects; i++) {
							const locationId = await ConanDice.rollHitLocation();
							spread.push(locationId);
							spreadLocalized.push(CONFIG.CONAN.coverageTypes[locationId]);
						}
						break;
					case "stun":
						this.addCondition("staggered");

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.stun",
								{ value: damage.effects }
							),
						});

						break;
					case "unforgivingx":
						damage.intense = true;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.localize(
								"CONAN.QualityDamageAdjust.unforgivingx"
							),
						});

						if (damage.vigor > 0) damage.vigor += effectBonus;
						if (damage.resolve > 0) damage.resolve += effectBonus;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities.viciousx,
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.viciousx",
								{ value: effectBonus }
							),
						});
						break;
					case "viciousx":
						if (damage.vigor > 0) damage.vigor += effectBonus;
						if (damage.resolve > 0) damage.resolve += effectBonus;

						qualitiesApplied.push({
							name: CONFIG.CONAN.weaponQualities[quality.type],
							text: game.i18n.format(
								"CONAN.QualityDamageAdjust.viciousx",
								{ value: effectBonus }
							),
						});
						break;
				}
			}
		}

		const damageTaken = {
			mob: {
				vigor: 0,
				resolve: 0,
				wounds: 0,
				traumas: 0,
				deaths: 0,
			},
			vigor: 0,
			resolve: 0,
			wounds: 0,
			traumas: 0,
		};

		async function _applyDamage() {
			const actorUpdate = {};

			if (me.system.isMob) {
				let mobUpdate = {};
				[damage, mobUpdate] = await me._applyMobDamage(damage);

				if (!foundry.utils.isEmpty(mobUpdate)) {
					mobUpdate["system.grouping.members"].forEach((member, index) => {
						const currentMember = me.system.grouping.members[index];

						damageTaken.mob.vigor +=
							currentMember.vigor.value - member.vigor.value;

						const newWounds = (
							member.vigor.wounds.filter(w => w.active)
						).length;

						const currentWounds = (
							currentMember.vigor.wounds.filter(w => w.active)
						).length;

						damageTaken.mob.wounds += newWounds - currentWounds;

						damageTaken.mob.resolve +=
							currentMember.resolve.value - member.resolve.value;

						const newTraumas = (
							member.resolve.traumas.filter(w => w.active)
						).length;

						const currentTraumas = (
							currentMember.resolve.traumas.filter(w => w.active)
						).length;

						damageTaken.mob.wounds += newTraumas - currentTraumas;
					});

					const currentDead = (
						me.system.grouping.members.filter(m => m.dead)
					).length;

					const newDead = (
						mobUpdate["system.grouping.members"].filter(m => m.dead)
					).length;

					damageTaken.mob.deaths += newDead - currentDead;

					foundry.utils.mergeObject(actorUpdate, mobUpdate);
				}
			}

			if (damage.vigor > 0 && me.canTakeVigorDamage) {
				const vigorUpdates = await me._applyVigorDamage(damage);

				if (!foundry.utils.isEmpty(vigorUpdates)) {
					damageTaken.vigor += me.getCurrentVigor() - vigorUpdates["system.health.physical.value"];
					damageTaken.wounds += vigorUpdates["system.health.physical.wounds.value"] - me.getCurrentWounds();

					foundry.utils.mergeObject(actorUpdate, vigorUpdates);
				}
			}

			if (damage.resolve > 0 && me.canTakeResolveDamage) {
				const resolveUpdates = await me._applyResolveDamage(damage);

				if (!foundry.utils.isEmpty(resolveUpdates)) {
					damageTaken.resolve += me.getCurrentResolve() - resolveUpdates["system.health.mental.value"];
					damageTaken.traumas += resolveUpdates["system.health.mental.traumas.value"] - me.getCurrentTraumas();

					foundry.utils.mergeObject(actorUpdate, resolveUpdates);
				}
			}

			return actorUpdate;
		}

		if (spread.length > 0) {
			spreadDamage = Math.ceil(damage.vigor / 2);
			qualitiesApplied.push({
				name: CONFIG.CONAN.weaponQualities.spreadx,
				text: game.i18n.format(
					"CONAN.QualityDamageAdjust.spreadx",
					{
						value: spreadDamage,
						locations: spreadLocalized.sort().join(", "),
					}
				),
			});
		}

		const initialDamage = foundry.utils.duplicate(damage);

		let actorUpdate;

		actorUpdate = await _applyDamage();
		await this.update(actorUpdate);

		// Now apply and spread damage
		for (const location of spread) {
			damage.vigor = spreadDamage;
			damage.location = location;

			actorUpdate = await _applyDamage();
			await this.update(actorUpdate);
		}

		if (damage.vigorIntenseApplied) {
			const text = this.isWatercraft
				? game.i18n.localize("CONAN.QualityDamageAdjust.intense.wound")
				: game.i18n.localize("CONAN.QualityDamageAdjust.intense.break");

			qualitiesApplied.push({
				name: CONFIG.CONAN.weaponQualities.intense,
				text,
			});
		}
		if (damage.resolveIntenseApplied) {
			qualitiesApplied.push({
				name: CONFIG.CONAN.weaponQualities.intense,
				text: game.i18n.localize("CONAN.QualityDamageAdjust.intense.trauma"),
			});
		}

		if (this.isDead()) {
			this._setDefeated();

			ui.notifications.info(
				game.i18n.format(
					"CONAN.AppliedDamageToActorDefeated",
					{
						actorName: this.name,
					}
				)
			);
		}
		else {
			ui.notifications.info(
				game.i18n.format(
					"CONAN.AppliedDamageToActor",
					{
						actorName: this.name,
					}
				)
			);
		}

		qualitiesApplied.sort((a, b) => a.name.localeCompare(b.name));

		const chatData = {
			actor: this,
			damageTaken,
			hasQualities: qualitiesApplied.length > 0,
			initialDamage,
			isDead: this.isDead(),
			isMob: this.system.isMob,
			isWatercraft: this.isWatercraft,
			qualitiesApplied,
		};

		return chatData;
	}

	async bankMomentum() {
		const banked = this.system.momentum;

		const poolType = this.isNPC ? "doom" : "momentum";

		if (banked > 0) {
			conan.apps.Counter.changeCounter(banked, poolType);
			this.update({"system.momentum": 0});

			let html = `<h2>${game.i18n.localize("CONAN.rollMomentumBanked")}</h2><div>`;

			html += `<p>${game.i18n.format("CONAN.momentumBankedChatText", {
				character: `<b>${this.name}</b>`,
				banked: `<b>${banked}</b>`,
				poolType: `<b>${poolType}</b>`,
			})}</p></div>`;

			const chatData = {
				user: game.user.id,
				content: html,
			};

			ChatMessage.create(chatData);
		}
	}

	_calculateStowage(actorData) {
		let currentStowage = 0;
		for (const item of this.items) {
			if (item.system.encumbrance) {
				const quantity = parseInt(item.system.quantity) ?? 1;
				const encumbrance = parseInt(item.system.encumbrance) ?? 0;

				currentStowage += encumbrance * quantity;
			}
		}

		actorData.stowage.value = currentStowage;
	}

	canOwnItemType(type) {
		const config = CONFIG.CONAN.itemPermissions[type]?.canOwn ?? [];
		return config.includes(this.type);
	}

	canUseItemType(type) {
		const config = CONFIG.CONAN.itemPermissions[type]?.canUse ?? [];
		return config.includes(this.type);
	}

	async getArmor(armorLocation) {
		if (["mount", "npc", "watercraft"].includes(this.type)) {
			return this.system.armor;
		}
		else if (this.type === "character") {
			return await this.sheet.getArmor(armorLocation);
		}
		else {
			return 0;
		}
	}

	async getAvailableDoom() {
		return game.settings.get("conan2d20", "doom");
	}

	async getAvailableFortune() {
		if (this.isNPC) {
			const doom = game.settings.get("conan2d20", "doom");
			return Math.floor(doom / 3);
		}
		else {
			return this.system.resources.fortune.value;
		}
	}

	async getAvailableMomentum() {
		return this.system.momentum + game.settings.get("conan2d20", "momentum");
	}

	getCourage() {
		return this.system.health.courage;
	}

	getCurrentResolve() {
		return this.system.health.mental.value;
	}

	getCurrentTraumas() {
		return this.system.health.mental.traumas.value;
	}

	getCurrentVigor() {
		return this.system.health.physical.value;
	}

	getCurrentWounds() {
		return this.system.health.physical.wounds.value;
	}

	getDifficultyIncrease(attribute) {
		const mentalSkill = ["int", "per", "wil"].includes(attribute);

		if (mentalSkill) {
			return this.getCurrentTraumas();
		}
		else {
			return this.getCurrentWounds();
		}
	}

	// return an item owned by the user with the specified name, or null.
	getItemByName(itemName) {
		return this.items.find(item => item.name === itemName) || null;
	}

	getKits() {
		return this.collections.items.filter(entry => entry.type === "kit");
	}

	getMaxResolve() {
		return (this.system.attributes.wil.value
			+ this.system.skills.dis.expertise.value
			- this.system.health.mental.despair
			+ this.system.health.mental.bonus
		);
	}

	getMaxTraumas() {
		return this.system.health.mental.traumas.max;
	}

	getMaxWounds() {
		return this.system.health.physical.wounds.max;
	}

	getMaxVigor() {
		return (this.system.attributes.bra.value
			+ this.system.skills.res.expertise.value
			- this.system.health.physical.fatigue
			+ this.system.health.physical.bonus
		);
	}

	getMergedReloads() {
		const reloads = this.getReloads();

		const availableReloads = {};

		for (let reload of reloads) {
			if (!availableReloads[reload.name]) {
				availableReloads[reload.name] = {
					name: reload.name,
					uses: parseInt(reload.uses),
					max: parseInt(reload.max),
					ids: [reload.id],
				};
			}
			else {
				availableReloads[reload.name].uses += parseInt(reload.uses);
				availableReloads[reload.name].max += parseInt(reload.max);
				availableReloads[reload.name].ids.push(reload.id);
			}
		}

		let mergedReloads = [];
		/* eslint-disable-next-line no-unused-vars */
		for (const [key, value] of Object.entries(availableReloads)) {
			mergedReloads.push(availableReloads[key]);
		}

		return mergedReloads;
	}

	getTags() {
		const tags = [];

		for (const tag of this.system.tags?.value ?? []) {
			switch (this.type) {
				case "mount":
					tags.push({
						name: CONFIG.CONAN.MOUNT_CAPABILITIES[tag],
						tooltip: CONFIG.CONAN.MOUNT_CAPABILITY_TOOLTIPS[tag],
					});
					break;
				case "npc":
					tags.push({
						name: CONFIG.CONAN.NPC_CATEGORIES[tag],
						tooltip: CONFIG.CONAN.NPC_CATEGORY_TOOLTIPS[tag],
					});
					break;
				case "watercraft":
					tags.push({
						name: CONFIG.CONAN.WATERCRAFT_QUALITIES[tag],
						tooltip: CONFIG.CONAN.WATERCRAFT_QUALITY_TOOLTIPS[tag],
					});
					break;
				default:
					tags.push({
						name: tag,
						tooltip: tag,
					});
			}
		}

		return tags.sort((a, b) => a.name.localeCompare(b.name));
	}

	getReloads() {
		return this.items
			.filter(i => i.system.kitType === "reload")
			.map(
				i =>
					({
						id: i.id,
						name: i.name,
						uses: i.system.uses.value,
						max: i.system.uses.max,
					} || [])
			)
			.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
	}

	getSkillTargetNumberAndFocus(attribute, skillKey, expertiseKey) {
		const actorSkills = this.system.skills;

		let skillTn = parseInt(this.system.attributes[attribute].value) || 0;
		let skillFocus = 0;
		let skillExpertise = 0;

		if (this.isNPC) {
			skillFocus = skillExpertise =
				parseInt(actorSkills[expertiseKey].value) || 0;
			skillTn += skillExpertise;
		}
		else {
			skillExpertise = parseInt(actorSkills[skillKey].expertise.value) || 0;
			skillFocus = parseInt(actorSkills[skillKey].focus.value) || 0;
			skillTn += skillExpertise;
		}

		return [skillTn, skillExpertise, skillFocus];
	}

	getTreatedTraumas() {
		let treatedTraumas = 0;
		if (this.isCharacter()) {
			for (let i = 0; i < 5; i++) {
				const dot = this.system.health.mental.traumas.dots[i];
				if (dot.status === "treated") treatedTraumas++;
			}
		}
		return treatedTraumas;
	}

	getStartingGold() {
		return this.system.attributes.per.value + this.system.skills.soc.expertise.value;
	}

	getTreatedWounds() {
		let treatedWounds = 0;
		if (this.isCharacter()) {
			for (let i = 0; i < 5; i++) {
				const dot = this.system.health.physical.wounds.dots[i];
				if (dot.status === "treated") treatedWounds++;
			}
		}
		return treatedWounds;
	}

	getWatercraftQualities() {
		const qualities = {};

		for (const quality of this.system.categories.value) {
			qualities[quality] = CONFIG.CONAN.WATERCRAFT_QUALITIES[quality];
		}

		return qualities;
	}

	/**
	 * Augment the basic actor data with additional dynamic data
	 */
	prepareData() {
		super.prepareData();

		// Get the Actor"s data object
		const actorData = this.system;

		// Prepare Character data
		if (this.type === "character") {
			this.talentManager = new TalentManager({ignoreCost: false});
			this._prepareCharacterData(actorData);
			this._prepareTalentManager();
		}

		if (["mount", "npc"].includes(this.type)) {
			this._prepareNPCData(actorData);
		}

		if (["mount", "transport", "watercraft"].includes(this.type)) {
			this._calculateStowage(actorData);
		}

		if (actorData.qualities !== undefined) {
			const map = {};
			for (const [t] of Object.entries(map)) {
				const quality = actorData.qualities[t];
				if (quality === undefined) {
					continue;
				}
			}
		}

		// Return the prepared Actor data
		return actorData;
	}

	async _applyMobDamage(damage) {
		conan.logger.debug("Applying damage to Mob/Squad members");
		const mobMembers = foundry.utils.duplicate(this.system.grouping.members);

		if (damage.vigor > 0) {
			for (const member of mobMembers) {
				if (this.isMobMemberDead(member)) continue;
				if (damage.vigor <= 0) break;

				const soak = Math.max(0, member.armor - damage.ignoreSoak);

				damage.vigor -= soak;

				let newWounds = 0;

				if (!damage.nonlethal && damage.vigor >= 5) newWounds++;

				if (damage.vigor >= member.vigor.value) {
					damage.vigor -= member.vigor.value;
					member.vigor.value = 0;

					if (!damage.nonlethal) newWounds++;
				}
				else {
					member.vigor.value -= damage.vigor;
					damage.vigor = 0;
				}

				if (newWounds > 0) {
					if (damage.intense && !damage.vigorIntenseApplied) {
						if (!damage.nonlethal) newWounds++;
						damage.vigorIntenseApplied = true;
					}

					for (let i = 0; i < member.vigor.wounds.length; i++) {
						if (newWounds <= 0) break;
						if (!member.vigor.wounds[i].active) {
							member.vigor.wounds[i].active = true;
							newWounds--;
						}
					}
				}

				if (this.isMobMemberDead(member)) member.dead = true;
			}
		}

		if (damage.resolve > 0) {
			for (const member of mobMembers) {
				if (this.isMobMemberDead(member)) continue;
				if (damage.resolve <= 0) break;

				const soak = Math.max(0, member.courage - damage.ignoreSoak);
				damage.resolve -= soak;

				let newTraumas = 0;

				if (!damage.nonlethal && damage.resolve >= 5) newTraumas++;

				if (damage.resolve >= member.resolve.value) {
					damage.resolve -= member.resolve.value;
					member.resolve.value = 0;
					if (!damage.nonlethal) newTraumas++;
				}
				else {
					member.resolve.value -= damage.resolve;
					damage.resolve = 0;
				}

				if (newTraumas > 0) {
					if (damage.intense && !damage.resolveIntenseApplied) {
						if (!damage.nonlethal) newTraumas++;
						damage.resolveIntenseApplied = true;
					}

					for (let i = 0; i < member.resolve.traumas.length; i++) {
						if (newTraumas <= 0) break;
						if (!member.resolve.traumas[i].active) {
							member.resolve.traumas[i].active = true;
							newTraumas--;
						}
					}
				}

				if (this.isMobMemberDead(member)) member.dead = true;
			}
		}

		return [damage, {"system.grouping.members": mobMembers}];
	}

	async _applyResolveDamage(damage) {
		conan.logger.debug("Applying Resolve damage");
		const actorUpdate = {};

		if (this.isDead()) return actorUpdate;

		const courage = await this.getCourage();

		const maxTraumas = this.getMaxTraumas();
		let resolveRemaining = this.getCurrentResolve();
		let currentTraumas = this.getCurrentTraumas();
		let treatedTraumas = this.getTreatedTraumas();

		// Reduce the damage by the amount of soak
		const soak = Math.max(0, courage - damage.ignoreSoak);

		let damageRemaining = damage.resolve - soak;

		if (damageRemaining <= 0) return actorUpdate;

		// five or more damage at once causes a wound automatically
		let newWounds = 0;

		if (!damage.nonlethal) {
			newWounds = damageRemaining >= 5 ? 1 : 0;
		}

		if (resolveRemaining > 0) {
			resolveRemaining -= damageRemaining;

			// If Vigor drops to zero or below then a wound is caused
			if (resolveRemaining <= 0) {
				resolveRemaining = 0;

				if (!damage.nonlethal) newWounds++;
			}
		}
		else if (!damage.nonlethal) {
			// Damage when at zero Vigor always causes a wound
			newWounds++;
		}

		if (newWounds > 0) {
			if (damage.intense && !damage.resolveIntenseApplied) {
				if (!damage.nonlethal) newWounds++;

				damage.resolveIntenseApplied = true;
			}

			currentTraumas += treatedTraumas + newWounds;
			currentTraumas = Math.min(5, currentTraumas);

			if (this.isCharacter()) {
				let woundsToAdd = newWounds;
				const woundDots = foundry.utils.duplicate(this.system.health.mental.traumas.dots);
				for (let i = 0; i < 5; i++) {
					switch (woundDots[i].status) {
						case "healed":
							if (woundsToAdd <= 0) continue;

							woundDots[i].status = "wounded";
							woundDots[i].icon = "fas fa-skull";
							woundsToAdd--;
							break;
						case "treated":
							// Having a new wound causes any treated ones to re-open
							woundDots[i].status = "wounded";
							woundDots[i].icon = "fas fa-skull";
							break;
					}
				}

				actorUpdate["system.health.mental.traumas.dots"] = woundDots;
			}
			else {
				currentTraumas = currentTraumas > maxTraumas ? maxTraumas : currentTraumas;
			}
		}

		actorUpdate["system.health.mental.value"] = resolveRemaining;
		actorUpdate["system.health.mental.traumas.value"] = currentTraumas;

		return actorUpdate;
	}

	async _applyVigorDamage(damage) {
		conan.logger.debug("Applying Vigor damage");
		const actorUpdate = {};

		if (this.isDead()) return actorUpdate;

		const armor = await this.getArmor(damage.location);

		// Armor values are stored differently depending on whether the Actor is
		// an NPC or Character
		//
		let soak = 0;
		if (this.isCharacter()) {
			soak = armor.soak[0] ?? 0;
		}
		else {
			soak = armor;
		}

		const maxWounds = this.getMaxWounds();
		let vigorRemaining = this.getCurrentVigor();
		let currentWounds = this.getCurrentWounds();
		let treatedWounds = this.getTreatedWounds();

		// Reduce the damage by the amount of armor soak
		soak = Math.max(0, soak - damage.ignoreSoak);
		let damageRemaining = damage.vigor - soak;

		if (damageRemaining <= 0) return actorUpdate;

		let newWounds = 0;

		// five or more damage at once causes a wound automatically
		if (!damage.nonlethal) {
			newWounds = damageRemaining >= 5 ? 1 : 0;
		}

		if (vigorRemaining > 0) {
			vigorRemaining -= damageRemaining;

			// If Vigor drops to zero or below then a wound is caused
			if (vigorRemaining <= 0) {
				vigorRemaining = 0;
				if (!damage.nonlethal) newWounds++;
			}
		}
		else if (!damage.nonlethal) {
			// Damage when at zero Vigor always causes a wound
			newWounds++;
		}

		if (newWounds > 0) {
			if (damage.intense && !damage.vigorIntenseApplied) {
				if (!damage.nonlethal) newWounds++;

				damage.vigorIntenseApplied = true;
			}

			currentWounds += treatedWounds + newWounds;

			if (this.isCharacter()) {
				let woundsToAdd = newWounds;
				const woundDots = foundry.utils.duplicate(this.system.health.physical.wounds.dots);
				for (let i = 0; i < 5; i++) {
					switch (woundDots[i].status) {
						case "healed":
							if (woundsToAdd <= 0) continue;

							woundDots[i].status = "wounded";
							woundDots[i].icon = "fas fa-skull";
							woundsToAdd--;
							break;
						case "treated":
							// Having a new wound causes any treated ones to re-open
							woundDots[i].status = "wounded";
							woundDots[i].icon = "fas fa-skull";
							break;
					}
				}

				actorUpdate["system.health.physical.wounds.dots"] = woundDots;
			}
			else {
				currentWounds = currentWounds > maxWounds ? maxWounds : currentWounds;
			}
		}

		actorUpdate["system.health.physical.value"] = vigorRemaining;
		actorUpdate["system.health.physical.wounds.value"] = currentWounds;

		return actorUpdate;
	}

	/* -------------------------------------------- */

	/**
	 * Prepare Character type specific data
	 */
	_prepareCharacterData(actorData) {
		// Calculate Vigor
		if (isNaN(actorData.health.physical.bonus)
			|| actorData.health.physical.bonus === null
		) {
			actorData.health.physical.bonus = 0;
		}

		actorData.health.physical.max =
			actorData.attributes.bra.value
				+ actorData.skills.res.expertise.value
				- actorData.health.physical.fatigue
				+ actorData.health.physical.bonus;

		if (actorData.health.physical.value === null) {
			actorData.health.physical.value =
				actorData.attributes.bra.value
					+ actorData.skills.res.expertise.value;
		}
		else if (actorData.health.physical.value > actorData.health.physical.max) {
			actorData.health.physical.value = actorData.health.physical.max;
		}
		else if (actorData.health.physical.value < 0) {
			actorData.health.physical.value = 0;
		}

		// Calculate Resolve
		if (isNaN(actorData.health.mental.bonus)
			|| actorData.health.mental.bonus === null
		) {
			actorData.health.mental.bonus = 0;
		}

		actorData.health.mental.max =
			actorData.attributes.wil.value
				+ actorData.skills.dis.expertise.value
				- actorData.health.mental.despair
				+ actorData.health.mental.bonus;

		if (actorData.health.mental.value === null) {
			actorData.health.mental.value =
				actorData.attributes.wil.value + actorData.skills.dis.expertise.value;
		}
		else if (actorData.health.mental.value > actorData.health.mental.max) {
			actorData.health.mental.value = actorData.health.mental.max;
		}
		else if (actorData.health.mental.value < 0) {
			actorData.health.mental.value = 0;
		}

		// Set TN for Skills
		for (const [s, skl] of Object.entries(actorData.skills)) {
			const tn = skl.expertise.value + actorData.attributes[skl.attribute].value;

			actorData.skills[s].tn = {
				value: tn,
			};

			if (actorData.skills[s].expertise.value > 0) {
				actorData.skills[s].trained = true;
			}
		}

		// Prepare Upkeep Cost
		actorData.resources.upkeep.value =
			3 + actorData.background.standing.value - actorData.background.renown;
		if (actorData.resources.upkeep.value < 0) {
			actorData.resources.upkeep.value = 0;
		}

		// Automatic Actions
		actorData.actions = [];

		// Sync Wounds & Traumas from Dots
		let wounds = 0;
		let traumas = 0;
		for (let i = 0; i < 5; i++) {
			const woundDot = actorData.health.physical.wounds.dots[i];
			if (woundDot.status === "wounded") wounds++;
			const traumaDot = actorData.health.mental.traumas.dots[i];
			if (traumaDot.status === "wounded") traumas++;
		}
		actorData.health.physical.wounds.value = wounds;
		actorData.health.mental.traumas.value = traumas;

		actorData.resources.xp.available =
			actorData.resources.xp.value - actorData.resources.xp.spent;
	}

	async _prepareCharacterDerivedData() {}

	/* -------------------------------------------- */

	/**
	 * Prepare Character type specific data
	 */
	_prepareNPCData(actorData) {
		if (actorData.isMob) {
			let mobMembersAlive = actorData.grouping.members.length;
			for (const member of actorData.grouping.members) {
				if (this.isMobMemberDead(member)) {
					mobMembersAlive--;
				}
			}

			if (this.isAlive()) {
				mobMembersAlive++;
			}

			actorData.mobMembersAlive = {
				value: mobMembersAlive,
				max: CONFIG.CONAN.DEFAULT_MOB_SIZE,
			};
		}
		else {
			actorData.mobMembersAlive = {
				value: 0,
				max: 0,
			};
		}
	}

	_prepareTalentManager() {
		this.talentManager.setActorAttributes(
			foundry.utils.duplicate(this.system.attributes)
		);

		this.talentManager.setActorSkills(
			foundry.utils.duplicate(this.system.skills)
		);

		this.talentManager.setActorXp(this.system.resources.xp.available);

		const knownTalents = [];

		for (const item of this.items) {
			if (item.type === "talent") {
				knownTalents.push({
					identifier: item.system.talentIdentifier,
					rank: item.system.rank.value,
				});
			}
		}

		this.talentManager.setKnownTalents(knownTalents);
	}

	async payDoom(doomSpend) {
		if (doomSpend <= 0) return;

		await conan.apps.Counter.changeCounter(Number(`${doomSpend}`), "doom");

		let html = `<h2>${game.i18n.localize("CONAN.rollDoomPaid")}</h2><div>`;

		html += `<p>${game.i18n.format("CONAN.rollDoomPaidChatText", {
			character: `<b>${this.name}</b>`,
			spent: `<b>${doomSpend}</b>`,
		})}</p></div>`;

		const chatData = {
			user: game.user.id,
			content: html,
		};

		ChatMessage.create(chatData);
	}

	spendFortune(fortuneSpend) {
		if (fortuneSpend <= 0) return;

		const newValue = this.system.resources.fortune.value - fortuneSpend;

		if (newValue < 0) {
			const error = "Fortune spend would exceed available fortune points.";
			throw error;
		}
		else {
			const updateActorData = {
				"system.resources.fortune.value": newValue,
			};

			this.update(updateActorData);
		}
	}

	async buyFortune(numFortune) {
		if (numFortune <= 0) return;
		if (!this.isNPC) return;

		const doomCost = numFortune * 3;
		const newValue = game.settings.get("conan2d20", "doom") - doomCost;

		if (newValue < 0) {
			const error = "Doom cost of Fortune would exceed available Doom points.";
			throw error;
		}
		else {
			await conan.apps.Counter.changeCounter(-`${doomCost}`, "doom");
		}

		let html = `<h2>${game.i18n.localize("CONAN.rollFortuneBought")}</h2><div>`;

		html += `<p>${game.i18n.format("CONAN.rollFortuneBoughtChatText", {
			character: `<b>${this.name}</b>`,
			spent: `<b>${doomCost}</b>`,
			fortune: `<b>${numFortune}</b>`,
		})}</p></div>`;

		const chatData = {
			user: game.user.id,
			content: html,
		};

		ChatMessage.create(chatData);
	}

	async spendDoom(doomSpend) {
		if (doomSpend <= 0) return;

		const newValue = game.settings.get("conan2d20", "doom") - doomSpend;

		if (newValue < 0) {
			const error = "Doom spend would exceed available doom points.";
			throw error;
		}
		else {
			await conan.apps.Counter.changeCounter(-`${doomSpend}`, "doom");
		}

		let html = `<h2>${game.i18n.localize("CONAN.rollDoomSpent")}</h2><div>`;

		html += `<p>${game.i18n.format("CONAN.rollDoomSpentChatText", {
			character: `<b>${this.name}</b>`,
			spent: `<b>${doomSpend}</b>`,
		})}</p></div>`;

		const chatData = {
			user: game.user.id,
			content: html,
		};

		ChatMessage.create(chatData);
	}

	async spendMomentum(momentumSpend) {
		if (momentumSpend <= 0) return;

		let playerMomentum = this.system.momentum;
		let poolMomentum = game.settings.get("conan2d20", "momentum");

		const availableMomentum = poolMomentum + playerMomentum;

		if (momentumSpend > availableMomentum) {
			const error = "Momentum spend would exceed available momentum points.";
			throw error;
		}
		else {
			let newPoolMomentum = poolMomentum;

			playerMomentum -= momentumSpend;

			if (playerMomentum < 0) {
				newPoolMomentum += playerMomentum;
				playerMomentum = 0;
			}

			this.update({"system.momentum": playerMomentum});
			await conan.apps.Counter.setCounter(`${newPoolMomentum}`, "momentum");

			let html = `<h2>${game.i18n.localize(
				"CONAN.rollMomentumSpent"
			)}</h2><div>`;

			html += `<p>${game.i18n.format("CONAN.rollMomentumSpentChatText", {
				character: `<b>${this.name}</b>`,
				spent: `<b>${momentumSpend}</b>`,
			})}</p></div>`;

			const chatData = {
				user: game.user.id,
				content: html,
			};

			ChatMessage.create(chatData);
		}
	}

	async spendReloads(reload, quantity) {
		while (quantity > 0 && reload.ids.length > 0) {
			const id = reload.ids.pop();
			const reloadItem = this.getEmbeddedDocument("Item", id);

			const remaining = reloadItem.system.uses.value;

			let useCount = 0;
			if (remaining > 0) {
				if (quantity >= remaining) {
					useCount = remaining;
					quantity -= remaining;
				}
				else {
					useCount = quantity;
				}

				this.updateEmbeddedDocuments("Item", [
					{
						_id: id,
						"system.uses.value": remaining - useCount,
					},
				]);
			}
		}
	}

	_executeAttack(itemId) {
		const weapon = this.getEmbeddedDocument("Item", itemId);

		let weaponSkill = weapon.skillToUse(this.type);

		this._rollSkillCheck(weaponSkill, weapon);
	}

	_attackBonuses() {
		const isNpc = this.isNPC;

		return {
			threaten: isNpc ? 0 : this._attributeBonus("per"),
			melee: isNpc ? 0 : this._attributeBonus("bra"),
			ranged: isNpc ? 0 : this._attributeBonus("awa"),
		};
	}

	_attributeBonus(attribute) {
		const attributeValue = this.system.attributes[attribute].value;

		if (attributeValue <= 8) return 0;
		if (attributeValue <= 9) return 1;
		if (attributeValue <= 11) return 2;
		if (attributeValue <= 13) return 3;
		if (attributeValue <= 15) return 4;
		if (attributeValue >= 16) return 5;
	}

	async _rollSkillCheck(skill, item = null, bonusDice = 0) {
		let attribute;

		if (this.isNPC && item?.type === "npcattack") {
			switch (item.system.attackType) {
				case "melee":
					attribute = "agi";
					break;
				case "ranged":
					attribute = "coo";
					break;
				case "threaten":
					attribute = "per";
					break;
			}
		}
		else {
			attribute = this.isNPC
				? CONFIG.CONAN.expertiseAttributeMap[skill]
				: CONFIG.CONAN.skillAttributeMap[skill];
		}

		const skillData = {
			attribute,
			bonusDice,
			skill: this.isNPC ? null : skill,
			expertise: this.isNPC ? skill : null,
			item,
		};

		new conan.apps.SkillRoller(this, skillData).render(true);
	}

	async _setDefeated() {
		// If this actor is in a combat tracker, then set them as defeated and
		// add the "dead" effect icon to the token in the scene
		//
		for (const combat of game.combats) {
			for (const combatant of combat.combatants) {

				// Make sure we"re matching on the correct id depending on whether we"re
				// a linked actor, or just a token
				//
				const matchFound = this.isToken
					? combatant.tokenId === this.token.id
					: combatant.actorId === this.id;

				if (!matchFound) continue;

				combatant.update({defeated: true});

				const token = combatant.token;

				if (!token) return;

				// Push the defeated status to the token
				/* eslint-disable no-loop-func */
				const statusEffect = CONFIG.CONAN.statusEffects.find(
					e => e.id === CONFIG.CONAN.specialStatusEffects.DEFEATED
				);
				/* eslint-enable no-loop-func */

				if (!statusEffect && !token.object) return;

				const effect = token.actor && statusEffect
					? statusEffect
					: CONFIG.CONAN.controlIcons.defeated;

				if (token.object) {
					await token.object.toggleEffect(
						effect,
						{
							overlay: true,
							active: true,
						}
					);
				}
				else {
					await token.toggleActiveEffect(
						effect,
						{
							overlay: true,
							active: true,
						}
					);
				}
			}
		}
	}

	async getRollOptions(rollNames) {
		const flag = this.getFlag(game.system.id, "rollOptions") ?? {};
		return rollNames
			.flatMap(rollName =>
				// convert flag object to array containing the names of all
				// fields with a truthy value
				Object.entries(flag[rollName] ?? {}).reduce(
					(opts, [key, value]) => opts.concat(value ? key : []),
					[]
				)
			)
			.reduce((unique, option) => {
				// ensure option entries are unique
				return unique.includes(option) ? unique : unique.concat(option);
			}, []);
	}

	async addCondition(effect, value = 1) {
		if (typeof effect === "string") {
			effect = foundry.utils.duplicate(
				CONFIG.CONAN.statusEffects.find(e => e.id === effect)
			);
		}

		if (!effect) return "No Effect Found";

		if (!effect.id) return "Conditions require an id field";

		effect.label = game.i18n.localize(effect.label);

		// eslint-disable-next-line prefer-const
		let existing = this.hasCondition(effect.id);
		if (existing && existing.flags.conan2d20.value === null) {
			return existing;
		}

		if (existing) {
			existing = foundry.utils.duplicate(existing);
			existing.flags.conan2d20.value += value;
			return this.updateEmbeddedDocuments("ActiveEffect", [existing]);
		}

		if (!existing) {
			if (Number.isNumeric(effect.flags.conan2d20.value)) {
				effect.flags.conan2d20.value = value;
			}

			const statuses = effect.statuses ?? [];
			statuses.push(effect.id);
			effect.statuses = statuses;
		}
		return this.createEmbeddedDocuments("ActiveEffect", [effect]);
	}

	isAlive() {
		return !this.isDead();
	}

	isDead() {
		const wounds = this.system.health.physical.wounds;
		const woundsFull = wounds.value >= wounds.max;

		const traumas = this.system.health.mental.traumas;
		const traumasFull = traumas.value >= traumas.max;

		return woundsFull || traumasFull;
	}

	isMobMemberDead(mobMemberData) {
		let woundsFull = true;
		for (const wound of mobMemberData.vigor.wounds) {
			if (!wound.active) {
				woundsFull = false;
				break;
			}
		}

		let traumasFull = true;
		for (const trauma of mobMemberData.resolve.traumas) {
			if (!trauma.active) {
				traumasFull = false;
				break;
			}
		}

		return woundsFull || traumasFull;
	}

	isCharacter() {
		return this.type === "character";
	}

	async removeCondition(effect, value = 1) {
		effect = foundry.utils.duplicate(
			CONFIG.CONAN.statusEffects.find(e => e.id === effect)
		);
		if (!effect) {
			return "No Effect Found";
		}
		if (!effect.id) {
			return "Conditions require an id field";
		}

		// eslint-disable-next-line prefer-const
		let existing = this.hasCondition(effect.id);
		if (existing) {
			const duplicated = foundry.utils.duplicate(existing);
			duplicated.flags.conan2d20.value -= value;

			if (duplicated.flags.conan2d20.value <= 0) {
				return this.deleteEmbeddedDocuments("ActiveEffect", [existing.id]);
			}

			return this.updateEmbeddedDocuments("ActiveEffect", [duplicated]);
		}
	}

	hasCondition(conditionKey) {
		return this.effects.find(
			i => i.statuses.has(conditionKey)
		);
	}

	// Return the type of the current actor
	get actorType() {
		return this.type;
	}

	async useKit(itemId) {
		const item = this.getEmbeddedDocument("Item", itemId);

		const totalUses = item.system.uses.value;
		const availableUses = totalUses > 3 ? 3 : totalUses;

		if (availableUses <= 0) {
			return ui.notifications.warn(
				game.i18n.format("CONAN.KitHasNoUsesAvailable", {kitName: item.name})
			);
		}

		renderTemplate(
			"systems/conan2d20/templates/dialog/use-kit-dialog.hbs",
			{
				availableUses,
				totalUses,
				kitName: item.name,
			}
		).then(html => {
			new Dialog({
				title: "Confirm Kit Use",
				content: html,
				buttons: {
					Yes: {
						icon: "<i class=\"fa fa-check\"></i>",
						label: "Yes",
						callback: async formData => {
							const input = $(formData).find(".chosen-uses")[0];
							const uses = Number.parseInt(input.value);
							if (Number.isInteger(uses)) {
								if (uses > 0 && uses <= availableUses) {
									const remainingUses = item.system.uses.value - uses;

									item.update({"system.uses.value": remainingUses});

									let chatHtml = `<h2>${game.i18n.localize("CONAN.kitChargesUsed")}</h2><div>`;

									chatHtml += `<p>${game.i18n.format("CONAN.usedKitChargesChatText", {
										actorName: `<b>${this.name}</b>`,
										itemName: `<b>${item.name}</b>`,
										uses: `<b>${uses}</b>`,
									})}</p></div>`;

									const chatData = {
										user: game.user.id,
										content: chatHtml,
									};

									ChatMessage.create(chatData);

									this._rollSkillCheck(item.system.skill, item, uses);
								}
								else {
									return ui.notifications.error(`Bad Use Value: ${uses} (${availableUses} available)`);
								}
							}
							else {
								return ui.notifications.error(`Bad Use Value: ${uses} (${availableUses} available)`);
							}
						},
					},
					Cancel: {
						icon: "<i class=\"fa fa-times\"></i>",
						label: "Cancel",
					},
				},
				default: "Yes",
			}).render(true);
		});
	}
}

class ConanProgress {
	label = "";

	max = 100;

	value = 0;

	constructor(max, label) {
		this.label = label ?? "";
		this.max = max ?? 100;
	}

	advance(amount = 1, label = "") {
		if (this.value >= this.max) return;

		this.value += Math.abs(amount);

		const percent = Math.floor((this.value / this.max) * 100);

		SceneNavigation.displayProgressBar({label, pct: percent});
	}

	finished(label = "") {
		SceneNavigation.displayProgressBar({label, pct: 100});
	}
}

class CharacterCreator extends FormApplication {

	constructor(object={}, options={}) {
		super(object, options);

		this.baseAttributes = {};

		CONFIG.CONAN.attributeIds.forEach(attribute => {
			this.baseAttributes[attribute] = {
				value: 7,
			};
		});

		this.baseSkills = {};

		CONFIG.CONAN.skillIds.forEach(skill => {
			this.baseSkills[skill] = {
				attribute: CONFIG.CONAN.skillAttributeMap[skill],
				expertise: {
					value: 0,
				},
				focus: {
					value: 0,
				},
			};
		});

		this.firstGetData = true;

		this.characterData = {};
		this.characterItems = [];

		this.errors = [];

		this.stages = [
			new CharGenName(this),
			new CharGenHomeland(this),
			new CharGenStartingAttributes(this),
			new CharGenAttributeAspects(this),
			new CharGenCaste(this),
			new CharGenStory(this),
			new CharGenArchetype(this),
			new CharGenNature(this),
			new CharGenEducation(this),
			new CharGenWarStory(this),
			new CharGenAttributes(this),
			new CharGenSkills(this),
			new CharGenTalent(this),
			new CharGenLanguage(this),
			new CharGenFortune(this),
			new CharGenBelongings(this),
		];
	}

	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "character-creator"],
			template: "systems/conan2d20/templates/apps/character-creator.hbs",
			width: 860,
			height: "auto",
			resizable: true,
			submitOnChange: true,
			tabs: [
				{
					navSelector: ".sheet-navigation",
					contentSelector: ".sheet-content",
					initial: "name",
				},
			],
		});
	}

	/** @inheritdoc */
	get title() {
		return `${game.i18n.localize("CONAN.CharacterCreator.title")}`;
	}

	/** @inheritdoc */
	activateListeners(html) {
		for (const stage of this.stages) {
			stage.activateListeners(html);
		}

		html.find(".create-character-button").click(event => this._createCharacter(event));

		html.on("input", "input[data-is-item='true']", event => this._onChangeInput(event));

		return super.activateListeners(html);
	}

	async addStockItems() {
		const compendiumUuid = game.settings.get("conan2d20", "characterCreationItemPack");
		const pack = game.packs.find(pack => pack.metadata.id === compendiumUuid);

		if (pack) {
			for (const itemIndex of pack.index) {
				const doc = await pack.getDocument(itemIndex._id);
				if (doc) this.characterItems.push(doc.toObject());
			}
		}
		else {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindItemPack"),
				{permanent: true}
			);
		}
	}

	static async createActorFromData(characterData, characterItems, userId) {
		if (!game.user.isGM) return;

		const newActor = await ConanActor.create(characterData);

		if (!newActor) return;

		// Ensure both health values are at max after creation
		await newActor.update({"system.health.mental.value": newActor.getMaxResolve()});
		await newActor.update({"system.health.physical.value": newActor.getMaxVigor()});
		await newActor.update({"system.resources.gold.value": newActor.getStartingGold()});

		await newActor.createEmbeddedDocuments("Item", characterItems);

		if (userId !== game.userId) {
			const ownership = newActor.ownership;
			ownership[userId] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;

			await newActor.update({ownership});

			const user = game.users.get(userId);

			if (user && !user.character) {
				// User doesn't have a character assigned, so assign this new
				// one they just created
				user.update({character: newActor.id});
			}

			game.socket.emit("system.conan2d20", {
				type: "openNewCharacter",
				payload: {actorId: newActor.id, userId},
			});
		}
		else {
			newActor.sheet.render(true);

			return ui.notifications.info(
				game.i18n.localize("CONAN.CharacterCreator.Created.message"),
				{permanent: true}
			);
		}
	}

	getCasteUuid() {
		for (const stage of this.stages) {
			if (stage.name === "caste") {
				return stage.getCasteUuid();
			}
		}
	}

	getCareerSkill() {
		for (const stage of this.stages) {
			if (stage.name === "archetype") {
				return stage.getCareerSkill();
			}
		}
	}

	/** @inheritdoc */
	async getData(options) {
		const data = super.getData(options);

		data.CONFIG = CONFIG.CONAN;

		let progress;
		if (this.firstGetData) {
			progress = new ConanProgress((this.stages.length * 2) + 1);
			// populate stages with starting data
			await this.updateCharacterData();
			if (progress) progress.advance();
		}

		data.stages = [];

		data.characterValid = true;
		for (const stage of this.stages) {
			await stage.validate();
			if (progress) progress.advance();
			data.stages.push(await stage.formConfig());
			if (!stage.valid) data.characterValid = false;
			if (progress) progress.advance();
		}

		if (this.errors.length > 0) data.characterValid = false;
		data.errors = this.errors;

		data.characterData = this.characterData;

		data.attributes = foundry.utils.duplicate(data.characterData["system.attributes"]);
		for (const attribute in data.attributes) {
			data.attributes[attribute].label = CONFIG.CONAN.attributeLabels[attribute];
			data.attributes[attribute].skills = [];
		}

		const skills = foundry.utils.duplicate(data.characterData["system.skills"]);
		for (const skillId in skills) {
			const skill = skills[skillId];
			skill.label = CONFIG.CONAN.skills[skillId];
			const attributeScore = data.attributes[skill.attribute].value;

			skill.tn = attributeScore + skill.expertise.value;

			data.attributes[skill.attribute].skills.push(skill);
		}

		data.talents = this.talents;

		if (this.firstGetData) this.firstGetData = false;

		if (progress) progress.finished();
		return data;
	}

	async getHomelandLanguages() {
		const homelandStage = this.stages.find(stage => stage.name === "homeland");
		return await homelandStage.getHomelandLanguages();
	}

	async getRollTables(prefix) {
		const compendiumUuid = game.settings.get("conan2d20", "characterCreationRolltablePack");
		const pack = game.packs.find(pack => pack.metadata.id === compendiumUuid);

		if (pack) {
			const ids = pack.index.filter(
				d => (d.name.toLowerCase()).startsWith(prefix)
			).map(d => d._id);

			const matchingTables = [];

			for (const id of ids) {
				const doc = await pack.getDocument(id);
				if (doc) matchingTables.push(doc);
			}

			return matchingTables;
		}
		else {
			return ui.notifications.warn(
				game.i18n.localize("CONAN.CharacterCreator.Errors.UnableToFindRollTablePack"),
				{permanent: true}
			);
		}
	}

	async update() {
		await this.updateCharacterData();
		this.render(true);
	}

	async updateCharacterData() {
		const characterDataParts = [{
			type: "character",
		}];

		const attributes = foundry.utils.duplicate(this.baseAttributes);
		const skills = foundry.utils.duplicate(this.baseSkills);

		const characterItems = [];
		const characterTalents = [];

		for (const stage of this.stages) {
			// Contains any Talents selected up to but not including this stage
			stage.talentManager.setKnownTalents(characterTalents);

			const stageData = await stage.characterData();
			if (stageData) characterDataParts.push(stageData);

			await stage.applyAttributeBonuses(attributes);
			await stage.applySkillBonuses(skills);

			const stageItems = await stage.getItems();
			for (const item of stageItems ?? []) {
				if (item.type === "talent") {
					const identifier = item.system.talentIdentifier;

					const existingIndex = characterTalents.findIndex(
						t => t.identifier === identifier
					);

					if (existingIndex >= 0) {
						const currentTalent = characterTalents[existingIndex];
						const rank = currentTalent.rank;

						characterTalents[existingIndex] = {
							identifier,
							item,
							rank: rank + 1,
						};
					}
					else {
						characterTalents.push({
							identifier,
							item,
							rank: 1,
						});
					}
				}
				else {
					characterItems.push(item);
				}

			}

			// These values contain the running values so far, in case they are
			// required by any of the stages
			stage.talentManager.setActorAttributes(
				foundry.utils.duplicate(attributes)
			);

			stage.talentManager.setActorSkills(foundry.utils.duplicate(skills));
		}

		this.talents = [];
		for (const talent of characterTalents) {
			const itemData = talent.item.toObject();

			itemData.system.rank.value = talent.rank;
			characterItems.push(itemData);

			const dupe = foundry.utils.duplicate(itemData);
			dupe.system.multiRank = talent.item.system.multiRank;
			dupe.uuid = talent.item.uuid;

			this.talents.push(dupe);
		}

		this.talents.sort((a, b) => a.name.localeCompare(b.name));

		this.characterItems = characterItems;

		characterDataParts.push({"system.attributes": attributes});
		characterDataParts.push({"system.skills": skills});

		this.characterData = conan.utils.deepMerge(...characterDataParts);

		await this.validate();
	}

	async validate() {
		this.errors = [];

		const skills = this.characterData["system.skills"];

		let numHighSkills = 0;
		for (const skill in skills) {
			const value = skills[skill].expertise.value;
			if (value > 3) numHighSkills++;
		}

		if (numHighSkills > 3) {
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.TooManySkillsTooHigh")
			);
		}
	}

	async _createCharacter(event) {
		event.preventDefault();
		event.stopPropagation();

		console.log("Creating Character");

		await this.updateCharacterData();

		await this.addStockItems();

		if (game.user.isGM) {
			CharacterCreator.createActorFromData(
				this.characterData,
				this.characterItems,
				game.userId
			);
		}
		else {
			game.socket.emit("system.conan2d20", {
				type: "createCharacter",
				payload: {
					characterData: this.characterData,
					characterItems: this.characterItems,
					userId: game.userId,
				},
			});
		}

		this.close();
	}

	async _onChangeInput(event) {
		event.preventDefault();
		event.stopPropagation();
		const isItem = event.currentTarget.dataset.isItem === "true";

		// We only have to do something special if we're handling a multi-choice
		// datalist
		//
		if (event.target.list && isItem) {
			const options = event.target.list.options;
			const value = event.target.value;

			const name = event.target.name;

			let uuid = null;
			for (const option of options) {
				if (option.value === value) {
					uuid = option.getAttribute("data-uuid");
					break;
				}
			}

			if (uuid === null) return;

			for (const stage of this.stages) {
				await stage.selectorUuidUpdated({name, uuid});
			}
		}

		return this._onSubmit(event);
	}

	/** @inheritdoc */
	async _onSubmit(event) {
		let updateData = this._getSubmitData();

		for (const stage of this.stages) {
			updateData = await stage.processSubmit(updateData);
		}

		this.update();
	}

	/** @inheritdoc */
	async _updateObject(event, formData) {
		console.log(formData);
	}

}

class CharacterUpgrade extends FormApplication {
	constructor(object={}, options={}) {
		super(object, options);
		this.actor = object;
	}


	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "character-upgrade"],
			template: "systems/conan2d20/templates/apps/character-upgrade.hbs",
			width: 580,
			height: "auto",
			resizable: true,
			submitOnChange: false,
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-content",
					initial: "attributes",
				},
			],
		});
	}


	get actorData() {
		return this.actor.system;
	}


	get availableXp() {
		return this.actor.system.resources.xp.available;
	}


	get title() {
		return `${game.i18n.localize("CONAN.CharacterUpgrade.title")} [${this.actor.name}]`;
	}


	/** @inheritdoc */
	activateListeners(html) {
		html.find(".purchase-talent-link").click(event => this._onPurchaseTalent(event));
		html.find(".upgrade-attribute-link").click(event => this._onUpgradeAttribute(event));
		html.find(".upgrade-skill-link").click(event => this._onUpgradeSkill(event));

		return super.activateListeners(html);
	}


	async getData(options) {
		const progress = new ConanProgress(8);
		const data = super.getData(options);
		progress.advance();

		data.availableTalents = await this.actor.talentManager.getPurchasableTalents();
		progress.advance();

		data.attributes = await this.getAttributeUpgradeData();
		progress.advance();
		data.skills = await this.getSkillUpgradeData();
		progress.advance();
		data.skillLabels = CONFIG.CONAN.skills;
		progress.advance();
		data.availableXp = this.availableXp;
		progress.advance();
		data.talentsAvailable = data.availableTalents.size > 0;
		progress.advance();
		data.logEntries = await this._parseLogEntries();
		progress.finished();

		return data;
	}


	async getAttributeUpgradeData() {
		const attributes = [];
		for (const id in this.actor.system.attributes) {
			const value = this.actor.system.attributes[id].value;

			const attribute = {
				id: id,
				label: CONFIG.CONAN.attributeLabels[id],
				value,
				newValue: value + 1,
				cost: (value + 1) * 100,
				canUpgrade: true,
				atMaximum: false,
			};

			if (attribute.cost > this.availableXp) attribute.canUpgrade = false;

			if (value >= 14) {
				attribute.canUpgrade = false;
				attribute.atMaximum = true;
			}

			attributes.push(attribute);
		}

		attributes.sort((a, b) => a.label.localeCompare(b.label));

		return attributes;
	}


	async getSkillUpgradeData() {
		const skills = [];
		for (const id in this.actor.system.skills) {
			const skill = foundry.utils.duplicate(this.actor.system.skills[id]);

			skill.id = id;
			skill.label = CONFIG.CONAN.skills[id];

			for (const valueType of ["expertise", "focus"]) {
				const value = skill[valueType].value;
				const cost = (value + 1) * 200;

				skill[valueType].newValue = value + 1;
				skill[valueType].cost = cost;
				skill[valueType].canUpgrade = value < 5 && cost <= this.availableXp;
				skill[valueType].atMaximum = value === 5;
			}

			skills.push(skill);
		}

		skills.sort((a, b) => a.label.localeCompare(b.label));

		return skills;
	}


	async _confirmXpPurchase(message, callback) {
		new Dialog({
			title: `${game.i18n.localize("CONAN.CharacterUpgrade.ConfirmXpSpend.label")}`,
			content: message,
			buttons: {
				Yes: {
					icon: "<i class=\"fa fa-check\"></i>",
					label: `${game.i18n.localize("CONAN.popupAcceptButton")}`,
					callback,
				},
				Cancel: {
					icon: "<i class=\"fa fa-times\"></i>",
					label: `${game.i18n.localize("CONAN.popupDeclineButton")}`,
				},
			},
			default: "Yes",
		}).render(true);
	}


	_createLogMessage(type, cost, data) {
		const date = new Date().toISOString();
		return `${date}|${type}|${cost}|${data}`;
	}


	async _onPurchaseTalent(event) {
		event.preventDefault();

		const talentIdentifier = event.currentTarget.dataset.id;
		const newRank = event.currentTarget.dataset.rank;

		const isFortuneTalent = talentIdentifier.startsWith("fortune::");
		const isSkillTalent = talentIdentifier.startsWith("skill_");

		const currentTalent = this.actor.items.filter(
			i => i.type === "talent"
		).find(
			t => t.system.talentIdentifier === talentIdentifier
		);

		let talent;
		if (isFortuneTalent) {
			talent = (await conan.compendiums.fortuneTalents()).find(
				t => t.system.talentIdentifier === talentIdentifier
			);
		}
		else {
			talent = (await conan.compendiums.skillTalents()).find(
				t => t.system.talentIdentifier === talentIdentifier
			);
		}

		const talentName = talent.system.multiRank
			? `${talent.name} (Rank ${newRank})`
			: talent.name;

		const actorSkill = isSkillTalent
			? this.actor.system.skills[talent.system.linkedSkill]
			: "";

		const discount = isSkillTalent
			? Number(actorSkill.focus.value) * 25
			: 0;

		const cost = Number(talent.system.cost) - discount;

		if (cost <= this.availableXp) {
			const newSpent = this.actor.system.resources.xp.spent + cost;

			const updateData = {
				"system.resources.xp.spent": newSpent,
			};

			const message = game.i18n.format(
				"CONAN.CharacterUpgrade.ConfirmXpSpend.talent",
				{
					cost,
					name: talentName,
				}
			);

			const me = this;

			return this._confirmXpPurchase(`<p>${message}</p>`, async () => {
				let logMessage;

				if (currentTalent) {
					await me.actor.updateEmbeddedDocuments("Item", [
						{
							_id: currentTalent._id,
							"system.rank.value": Number(newRank),
						},
					]);

					logMessage = this._createLogMessage(
						"talentRank",
						cost,
						`${currentTalent.link}|${newRank - 1}|${newRank}`
					);
				}
				else {
					const newTalent = (await fromUuid(talent.uuid)).toObject();

					newTalent["system.rank.value"] = Number(newRank);

					const [newTalentItem] =
						await me.actor.createEmbeddedDocuments("Item", [newTalent]);

					logMessage = this._createLogMessage(
						"talent",
						cost,
						newTalentItem.link
					);
				}


				await me._updateActor(updateData, logMessage);
			});
		}
		else {
			return ui.notifications.warn(game.i18n.localize("CONAN.CharacterUpgrade.Error.NotEnoughExperience"));
		}
	}


	async _onUpgradeAttribute(event) {
		event.preventDefault();

		const attribute = event.currentTarget.dataset.id;
		const newValue = event.currentTarget.dataset.value;

		const cost = newValue * 100;

		if (cost <= this.availableXp) {
			const newSpent = this.actor.system.resources.xp.spent + cost;

			const updateData = {
				"system.resources.xp.spent": newSpent,
			};

			updateData[`system.attributes.${attribute}.value`] = Number(newValue);

			const attributeName = CONFIG.CONAN.attributeLabels[attribute];
			const message = game.i18n.format(
				"CONAN.CharacterUpgrade.ConfirmXpSpend.attribute",
				{
					cost,
					name: attributeName,
					value: newValue,
				}
			);

			const me = this;

			return this._confirmXpPurchase(`<p>${message}</p>`, async () => {
				const logMessage = this._createLogMessage(
					"attribute",
					cost,
					`${attributeName}|${newValue - 1}|${newValue}`
				);

				await me._updateActor(updateData, logMessage);
			});
		}
		else {
			return ui.notifications.warn(game.i18n.localize("CONAN.CharacterUpgrade.Error.NotEnoughExperience"));
		}
	}


	async _updateActor(updateData, logMessage) {
		const logMessages = this.actorData?.resources?.xp?.log ?? [];
		logMessages.push(logMessage);

		updateData["system.resources.xp.log"] = logMessages;

		await this.actor.update(updateData);
	}


	async _onUpgradeSkill(event) {
		event.preventDefault();

		const skill = event.currentTarget.dataset.id;
		const newValue = event.currentTarget.dataset.value;
		const type = event.currentTarget.dataset.type;

		const cost = newValue * 200;

		if (cost <= this.availableXp) {
			const newSpent = this.actor.system.resources.xp.spent + cost;

			const updateData = {
				"system.resources.xp.spent": newSpent,
			};

			updateData[`system.skills.${skill}.${type}.value`] = Number(newValue);

			const skillName = CONFIG.CONAN.skills[skill];

			const message = game.i18n.format(
				`CONAN.CharacterUpgrade.ConfirmXpSpend.${type}`,
				{
					cost,
					name: skillName,
					value: newValue,
				}
			);

			const me = this;

			return this._confirmXpPurchase(`<p>${message}</p>`, async () => {
				const logMessage = this._createLogMessage(
					type,
					cost,
					`${skillName}|${newValue - 1}|${newValue}`
				);

				await me._updateActor(updateData, logMessage);
			});
		}
		else {
			return ui.notifications.warn(game.i18n.localize("CONAN.CharacterUpgrade.Error.NotEnoughExperience"));
		}
	}


	async _parseLogEntries() {
		const parsedLogEntries = [];

		let index = -1;
		for (const entry of (this.actorData.resources?.xp?.log ?? [])) {
			index++;
			const fields = entry.split("|");

			const date = new Date(fields.shift());
			const type = fields.shift();
			const spend = Number(fields.shift());

			const parsedEntry = {
				canDelete: false,
				date,
				dateString: date.toLocaleString(),
				index,
				spend,
				type,
			};

			let message;
			switch (parsedEntry.type) {
				case "talent":
					message = game.i18n.format(
						"CONAN.CharacterUpgrade.LogEntry.talent",
						{ talent: fields.shift() }
					);
					break;
				case "talentRank":
					message = game.i18n.format(
						"CONAN.CharacterUpgrade.LogEntry.talentRank",
						{
							talent: fields.shift(),
							from: fields.shift(),
							to: fields.shift(),
						}
					);
					break;
				case "attribute":
				case "expertise":
				case "focus":
					message = game.i18n.format(
						`CONAN.CharacterUpgrade.LogEntry.IncreaseValue.${parsedEntry.type}`,
						{
							name: fields.shift(),
							from: fields.shift(),
							to: fields.shift(),
						}
					);
					break;
			}

			parsedEntry.message = await TextEditor.enrichHTML(
				message,
				{
					async: true,
				}
			);

			parsedLogEntries.push(parsedEntry);
		}

		if (parsedLogEntries.length > 0) {
			parsedLogEntries.sort((a, b) => b.date.getTime() - a.date.getTime());
			parsedLogEntries[0].canDelete = true;
		}

		return parsedLogEntries;
	}

}

class CombatDiceRoller extends Application {
	constructor(actor, options={}) {
		super(actor, options);

		this.actor = null;

		this.rollData = conan.dice.getDefaultCombatDiceRollOptions();

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;
		}

		this.isActorRoll = this.actor ? true : false;

		this.isNpc = false;
		this.isPc = false;

		if (this.isActorRoll) {
			this.isNpc = this.actor.isNPC;
			this.isPc = !this.isNpc;
		}
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "combat-dice-roller"],
			template: "systems/conan2d20/templates/apps/combat-dice-roller.hbs",
			width: 200,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.CombatDice");
		if (this.actor) {
			return `${title}: ${this.actor.name}`;
		}
		else {
			return title;
		}
	}

	activateListeners(html) {
		super.activateListeners(html);
		const me = this;

		// Submit button
		html.find(".roll-dice").click(this._onSubmit.bind(this));

		// Quantity buttons
		html.find(".combat-dice-roller .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			const [section, type] = quantityType.split(".");

			input.on("change", ev => {
				ev.preventDefault();
				me[`_change_${section}_${type}`](input);
			});

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me[`_inc_${section}_${type}`](input);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_dec_${section}_${type}`](input);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me[`_inc_${section}_${type}`](input);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me[`_dec_${section}_${type}`](input);
			});
		});
	}

	async getData() {
		const data = {
			actorData: foundry.utils.duplicate(this.actor),
			isActorRoll: this.isActorRoll,
			isNpc: this.isNpc,
			isPc: this.isPc,
			rollData: this.rollData,
		};

		return data;
	}

	async _dec_base_numDice(input) {
		let currentValue = parseInt(input.val());
		currentValue--;

		if (currentValue < 1) currentValue = 1;

		this.rollData.base.numDice = currentValue;

		input.val(this.rollData.base.numDice);
	}

	async _inc_base_numDice(input) {
		this.rollData.base.numDice++;

		input.val(this.rollData.base.numDice);
	}

	async _onSubmit() {
		this._rollDice();
	}

	async _rollDice() {
		this.close();

		this.rollData.numDice =
			this.rollData.base.numDice + this.rollData.bonus.attribute;

		// Do the actual dice rolls
		const results = await conan.dice.calculateCombatDiceRoll(this.rollData);

		this._showResults(results);
	}

	async _showResults(results) {
		conan.chat.renderCombatDiceRollCard({
			actor: this.actor,
			results,
			rollData: this.rollData,
			type: "combatDice",
		});
	}

	async _updateAllFormValues() {
		const me = this;

		this.element.find(".quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			let type = input.attr("data-quantity-type");
			type = type.split(".");
			const dataSection = me.rollData[type[0]] || {};
			input.val(dataSection[type[1]]);
		});
	}
}

/**
 * Counter Application for 2d20 metacurrencies
 * @type {FormApplication}
 */
class Counter extends Application {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "counter";
		options.classes = [SYSTEM_ID];
		options.template = "systems/conan2d20/templates/apps/counter.hbs";
		options.width = "auto";
		options.height = 300;
		options.popOut = false;
		return options;
	}

	/* -------------------------------------------- */
	/**
	 * Provide data to the HTML template for rendering
	 * @type {Object}
	 */
	getData() {
		const data = super.getData();
		data.momentum = game.settings.get(SYSTEM_ID, "momentum");
		data.doom = game.settings.get(SYSTEM_ID, "doom");
		data.canEdit =
			game.user.isGM || game.settings.get(SYSTEM_ID, "playerCounterEdit");

		return data;
	}

	activateListeners(html) {
		super.activateListeners(html);

		// Call setCounter when input is used
		html.find("input").change(async ev => {
			const type = $(ev.currentTarget).parents(".counter").attr("data-type");
			await Counter.setCounter(ev.target.value, type);
		});

		// Call changeCounter when +/- is used
		html.find(".incr,.decr").click(async ev => {
			const type = $(ev.currentTarget).parents(".counter").attr("data-type");
			const multiplier = $(ev.currentTarget).hasClass("incr") ? 1 : -1;
			await Counter.changeCounter(multiplier, type);
		});
	}

	// ************************* STATIC FUNCTIONS ***************************

	/**
	 * Set the counter of (type) to (value)
	 * @param value Value to set counter to
	 * @param type  Type of counter, "momentum" or "doom"
	 */
	static async setCounter(value, type) {
		Counter.checkCounterUpdate(value, type);
		value = Math.round(value);

		if (!game.user.isGM) {
			game.socket.emit("system.conan2d20", {
				type: "setCounter",
				payload: {value, type},
			});
			return;
		}

		if (value > 6 && type === "momentum") {
			await game.settings.set(SYSTEM_ID, type, 6);
			conan.counter.render(true);
		}
		else if (value < 0) {
			await game.settings.set(SYSTEM_ID, type, 0);
			conan.counter.render(true);
		}
		else {
			await game.settings.set(SYSTEM_ID, type, value);
			conan.counter.render(true);
		}

		// Emit socket event for users to rerender their counters
		game.socket.emit("system.conan2d20", {type: "updateCounter"});
	}

	/**
	 * Change the counter of (type) by (value)
	 * @param diff How much to change the counter
	 * @param type  Type of counter, "momentum" or "doom"
	 */
	static async changeCounter(diff, type) {
		Counter.checkCounterUpdate(diff, type);
		let value = game.settings.get(SYSTEM_ID, type);
		if (value + diff > 6 && type === "momentum") {
			await Counter.setCounter(6, type);
		}
		else if (value + diff < 0) {
			await Counter.setCounter(0, type);
		}
		else {
			value += diff;
			await Counter.setCounter(value, type);
		}
	}

	// Check user entry. Rerender if error is detected to reset to the correct value
	static checkCounterUpdate(value, type) {
		const updateError = {
			counter: "Conan 2D20 | Error updating Counter: Invalid Counter Type",
			value: "Conan 2D20 | Error updating Counter: Invalid Value Type",
		};

		if (type !== "doom" && type !== "momentum") {
			ui.notifications.error("Error updating Counter: Invalid Counter Type");
			conan.counter.render(true);
			throw updateError.counter;
		}

		if (Number.isNaN(value)) {
			ui.notifications.error("Error updating Counter: Invalid Value Type");
			conan.counter.render(true);
			throw updateError.value;
		}
	}
}

class DamageRoller extends Application {

	constructor(actor, options={}) {
		super(actor, options);

		this.rollData = conan.dice.getDefaultCombatDiceRollOptions();

		this.actor = null;
		this.item = options?.item ? options.item : null;

		this.attackType = options?.attackType || "melee";

		this.reloads = [];
		this.selectedReload = "";

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;

			this.reloads = this.actor.getMergedReloads();
		}

		if (options?.item) {
			this.item = options.item;

			this.rollData.improvised = this.item.getQuality("improvised")
				? true
				: false;
		}

		this.isImpactDamage = options?.isImpactDamage ?? false;

		if (options?.numDice) {
			this.rollData.base.numDice = options.numDice;
		}

		this.isActorRoll = this.actor ? true : false;

		if (this.item) {
			this.rollData.base.numDice =
				parseInt(this.item.system?.damage?.dice) || 1;

			if (this.item.type === "npcattack") {
				this.attackType = this.item.system.attackType;
			}
			else if (this.item.type === "display") {
				this.attackType = "threaten";
			}
			else if (this.item.type === "weapon") {
				this.attackType = this.item.system.weaponType;
			}
		}

		this.damageTypes = [
			{
				type: "melee",
				active: this.attackType === "melee" ? true : false,
				name: "Melee",
			},
			{
				type: "ranged",
				active: this.attackType === "ranged" ? true : false,
				name: "Ranged",
			},
			{
				type: "threaten",
				active: this.attackType === "threaten" ? true : false,
				name: "Threaten",
			},
		];

		this._updateDamageType();
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "damage-roller"],
			template: "systems/conan2d20/templates/apps/damage-roller.hbs",
			width: 280,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.damageRollerTitle");
		if (this.actor) {
			return `${title}: ${this.actor.name}`;
		}
		else {
			return title;
		}
	}

	activateListeners(html) {
		super.activateListeners(html);
		const me = this;

		// Reload selector
		html
			.find(".damage-roller select")
			.on("change", this._onChangeLoad.bind(this));

		// Submit button
		html.find(".roll-dice").click(this._onSubmit.bind(this));

		// Damage Type buttons
		html
			.find(".damage-roller .damage-type")
			.on("click", this._onClickTypeButton.bind(this));

		// Quantity buttons
		html.find(".damage-roller .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			const [section, type] = quantityType.split(".");

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me[`_inc_${section}_${type}`](input);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_dec_${section}_${type}`](input);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me[`_inc_${section}_${type}`](input);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me[`_dec_${section}_${type}`](input);
			});
		});
	}

	async getData() {
		const data = {
			actorData: foundry.utils.duplicate(this.actor),
			itemData: foundry.utils.duplicate(this.item),
			damageTypes: this.damageTypes,
			hasPlayerOwner: this.actor?.hasPlayerOwner ?? false,
			isActorRoll: this.isActorRoll,
			isImpactDamage: this.isImpactDamage,
			rollData: this.rollData,
			reloads: this.reloads,
			disableReloads: this._disableReloads(),
			reloadsAvailable: this.reloads.length > 0,
		};

		return data;
	}

	async _dec_base_numDice(input) {
		let currentValue = parseInt(input.val());
		currentValue--;

		if (currentValue < 1) currentValue = 1;

		this.rollData.base.numDice = currentValue;

		input.val(this.rollData.base.numDice);
	}

	async _dec_bonus_other(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.other--;

		input.val(this.rollData.bonus.other);
	}

	async _dec_bonus_reloads(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.reloads--;

		input.val(this.rollData.bonus.reloads);
	}

	async _dec_bonus_talent(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.talent--;

		input.val(this.rollData.bonus.talent);
	}

	async _dec_spends_doom(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.doom--;

		input.val(this.rollData.spends.doom);
	}

	async _dec_spends_momentum(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.momentum--;

		input.val(this.rollData.spends.momentum);
	}

	_disableReloads() {
		return this.attackType !== "ranged" || this.reloads.length === 0;
	}

	async _inc_base_numDice(input) {
		this.rollData.base.numDice++;

		input.val(this.rollData.base.numDice);
	}

	async _inc_bonus_other(input) {
		this.rollData.bonus.other++;

		input.val(this.rollData.bonus.other);
	}

	async _inc_bonus_reloads(input) {
		const reload = this.reloads.find(
			element => element.name === this.selectedReload
		);

		if (this.rollData.bonus.reloads < reload.uses) {
			this.rollData.bonus.reloads++;
			input.val(this.rollData.bonus.reloads);
		}
	}

	async _inc_bonus_talent(input) {
		this.rollData.bonus.talent++;

		input.val(this.rollData.bonus.talent);
	}

	async _inc_spends_doom(input) {
		let currentValue = parseInt(input.val());
		let numAvailableDoom = 0;

		if (this.actor) {
			numAvailableDoom = await this.actor.getAvailableDoom();
		}
		else {
			numAvailableDoom = game.settings.get("conan2d20", "doom");
		}

		let doomAvailable = numAvailableDoom - currentValue;

		if (doomAvailable > 0) {
			this.rollData.spends.doom++;

			input.val(this.rollData.spends.doom);
		}
	}

	async _inc_spends_momentum(input) {
		let currentValue = parseInt(input.val());

		let numAvailableMomentum = 0;
		if (this.actor) {
			numAvailableMomentum = await this.actor.getAvailableMomentum();
		}
		else {
			numAvailableMomentum = game.settings.get("conan2d20", "momentum");
		}

		const momentumAvailable = numAvailableMomentum - currentValue;

		if (momentumAvailable > 0) {
			this.rollData.spends.momentum++;

			input.val(this.rollData.spends.momentum);
		}
	}

	async _onChangeLoad(event) {
		const selector = $(event.target);
		const value = selector.val();

		const reloadQuantity = this.element.find(".reload-quantity");

		if (value !== "") {
			reloadQuantity.removeClass("disable-entry");
		}
		else {
			reloadQuantity.addClass("disable-entry");
		}

		this._setReloadsQuantity(0);

		this.selectedReload = value;
	}

	async _onClickTypeButton(event) {
		event.preventDefault();

		const button = $(event.target);

		const attackType = button.attr("data-damage-type");

		if (attackType === this.attackType) return;

		this.attackType = attackType;

		button.siblings().removeClass("active");
		button.addClass("active");

		if (this.item) {
			if (attackType === "ranged" && this.item.system.weaponType !== "melee") {
				const reloadChoice = this.element.find(".reload-choice");
				reloadChoice.removeClass("disable-entry");

				const selectedValue = reloadChoice.find(":selected").val();

				if (selectedValue !== "") {
					this.element.find(".reload-quantity").removeClass("disable-entry");
				}
			}
			else {
				const reloadQuantity = this.element.find(".reload-quantity");
				reloadQuantity.addClass("disable-entry");

				this._setReloadsQuantity(0);

				this.element.find(".reload-choice").addClass("disable-entry");
			}
		}

		if (this.actor) {
			this._updateDamageType();
		}
	}

	async _onSubmit() {
		if (this.item) {
			this.rollData.itemData = await this.item.getChatData();
		}
		this._rollDice();
	}

	async _rollDice() {
		this.close();

		this.rollData.numDice = this.rollData.base.numDice
			+ this.rollData.bonus.attribute
			+ this.rollData.bonus.other
			+ this.rollData.bonus.reloads
			+ this.rollData.bonus.talent;

		if (this.actor) {
			this.actor.spendMomentum(this.rollData.spends.momentum);
			this.actor.spendDoom(this.rollData.spends.doom);

			if (this.rollData.bonus.reloads > 0) {
				const reload = this.reloads.find(
					element => element.name === this.selectedReload
				);

				this.actor.spendReloads(reload, this.rollData.bonus.reloads);
			}
		}
		else {
			conan.apps.Counter.changeCounter(-`${this.rollData.spends.momentum}`, "momentum");
			conan.apps.Counter.changeCounter(-`${this.rollData.spends.doom}`, "doom");
		}

		// Do the actual dice rolls
		const results = await conan.dice.calculateCombatDiceRoll(this.rollData);

		if (this.attackType === "threaten") {
			results.location = null;
		}

		this._showResults(results);
	}

	async _setReloadsQuantity(value) {
		const reloadValue = this.element
			.find(".reload-quantity")
			.find("input[type=\"number\"]");

		reloadValue.val(value);
		this.rollData.bonus.reloads = value;
	}

	async _showResults(results) {
		conan.chat.renderDamageRollCard({
			actor: this.actor,
			isImpactDamage: this.isImpactDamage,
			item: this.item,
			results,
			rollData: this.rollData,
			type: "damage",
		});
	}

	async _updateDamageType() {
		if (this.actor && this.actor.isNotWatercraft) {
			const bonuses = this.actor._attackBonuses();
			this.rollData.bonus.attribute = bonuses[this.attackType];
		}

		if (this.attackType === "threaten") {
			this.rollData.damage.type = "mental";
		}
		else {
			this.rollData.damage.type = "physical";
		}

		const damageRollText = game.i18n.localize("CONAN.damageRollerTitle");
		const attackTypeText = game.i18n.localize(
			`CONAN.attackTypes.${this.attackType}`
		);

		this.rollData.title = `${attackTypeText} ${damageRollText}`;
	}
}

// A form used to spend or bank personal momentum generated by skill tests.
//
class MomentumBanker extends FormApplication {
	constructor(object, options={}) {
		super(object, options);

		this.actor = object;
		this.toBank = this.actor.system.momentum;

		this.bankType = options.bankType
			? options.bankType
			: this.actor.type === "character" ? "momentum" : "doom";

		this.toSpend = 0;
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "momentum-banker",
			classes: ["conan2d20", "momentum-banker"],
			template: "systems/conan2d20/templates/apps/momentum-banker.hbs",
			width: 400,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		return `${game.i18n.localize("CONAN.rollMomentumSpendTitle")}`;
	}

	activateListeners(html) {
		super.activateListeners(html);

		html.find("#momentumSpend").on("input", event => {
			this.toSpend = parseInt(event.target.value);
			this.toBank = this.actor.system.momentum - this.toSpend;
			const buttonText = `Spend: ${this.toSpend}, Bank: ${this.toBank}`;
			html.find("#spendBankButton").html(buttonText);
		});

		html.find("#spendBankButton").click(() => {
			if (this.bankType === "momentum") {
				conan.apps.Counter.changeCounter(this.toBank, "momentum");
			}
			else {
				conan.apps.Counter.changeCounter(this.toBank, "doom");
			}

			this.momentumChatMessage(this.bankType);

			// Now reset the unbanked momentum to zero as it has been spent
			this.actor.update({"system.momentum": 0});

			this.close();
		});
	}

	getData() {
		const data = {
			personalMomentum: this.actor.system.momentum,
		};

		return data;
	}

	momentumChatMessage(poolType) {
		let html = `<h2>${game.i18n.localize(
			"CONAN.rollMomentumBanked"
		)}</h2><div>`;

		html += `<p>${game.i18n.format("CONAN.rollMomentumBankedChatText", {
			character: `<b>${this.actor.name}</b>`,
			spent: `<b>${this.toSpend}</b>`,
			banked: `<b>${this.toBank}</b>`,
			poolType: `<b>${poolType}</b>`,
		})}</p></div>`;

		const chatData = {
			user: game.user.id,
			content: html,
		};

		ChatMessage.create(chatData);
	}
}

class SkillRoller extends Application {
	constructor(actor, options={}) {
		super(actor, options);

		this.actor = null;
		this.showBonuses = false;

		// default data
		this.rollData = {
			actorId: null,
			assists: {
				complication: 20,
				focus: 0,
				numDice: 0,
				tn: 7,
			},
			bankType: null,
			bonus: {
				dice: 0,
				momentum: 0,
				successes: 0,
				inhuman: 0,
			},
			difficulty: {
				assistDisplay: "&nbsp;",
				base: (options.difficulty ?? 1),
				display: "&nbsp;",
				increase: 0,
			},
			skill: {
				complication: 20,
				expertise: 0,
				focus: 0,
				tn: 7,
			},
			spends: {
				doom: 0,
				fortune: 0,
				momentum: 0,
			},
			fixedResults: [],
			ignoreDifficultyIncrease: false,
			isAssist: false,
			isReroll: false,
			item: null,
			numDice: CONFIG.CONAN.BASE_2D20_DICE,
			title: "Skill Test",
		};

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;

			this.attribute = options.attribute;
			this.expertise = options.expertise;
			this.skill = options.skill;

			this.rollData.bonus.inhuman =
				this.actor.system.attributes[options.attribute]?.inhuman ?? 0;

			this.rollData.item = options.item ?? null;
			this.rollData.bonus.dice = options.bonusDice ?? 0;
		}

		this.isActorRoll = this.actor ? true : false;

		this.isNpc = false;
		this.playerOwnedActor = false;
		this.playerOwnedNpc = false;
		this.rollData.bankType = "doom";

		if (this.isActorRoll) {
			this.isNpc = this.actor.isNPC;
			this.playerOwnedActor = this.actor.hasPlayerOwner;
			this.playerOwnedNpc = this.isNpc && this.playerOwnedActor;
			this.rollData.bankType = this.playerOwnedActor ? "momentum" : "doom";
		}

		this.difficulties = [
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.0"),
			},
			{
				active: false,
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

		this.difficulties[this.rollData.difficulty.base].active = true;

		this.maxDice = CONFIG.CONAN.MAX_2D20_DICE;
		let numDice = (this.baseDice = CONFIG.CONAN.BASE_2D20_DICE);
		if (this.isNpc && this.actor.system.type === "minion") {
			// Minions only roll one die and you can only purcase up to 3 dice,
			// so the maximum a minion can roll is 4 dice.
			//
			numDice = this.rollData.numDice = this.baseDice = 1;
			this.maxDice = CONFIG.CONAN.MAX_2D20_DICE - 1;
		}

		numDice += this.rollData.bonus.dice;
		this.rollData.numDice = numDice;

		this.dice = [];

		for (let i = 0; i < CONFIG.CONAN.MAX_2D20_DICE; i++) {
			this.dice.push({active: i < numDice});
		}

		this.rollData.isAssist =
			numDice === CONFIG.ASSIST_2D20_DICE
				&& this.baseDice !== CONFIG.ASSIST_2D20_DICE;
	}

	get assistActor() {
		let assistActor = null;

		if (this.isNpc && this.actor.system.isMob) {
			const mobData = this.actor.system.grouping;

			const numMinions = mobData.members.length || 0;
			this.rollData.assists.numDice = numMinions;

			if (mobData.baseActorId) {
				assistActor = game.actors.get(mobData.baseActorId);
			}
		}

		return assistActor;
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "skill-roller"],
			template: "systems/conan2d20/templates/apps/skill-roller.hbs",
			width: 320,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.skillRollerTitle");
		if (this.actor) {
			return `${title}: ${this.actor.name}`;
		}
		else {
			return title;
		}
	}

	activateListeners(html) {
		super.activateListeners(html);
		const me = this;

		html.find(".toggle-show-bonuses").click(event => {
			this.showBonuses = !this.showBonuses;
			this.render();
		});

		// Difficulty setting buttons
		html
			.find(".skill-roller .difficulty")
			.on("click", this._onClickDifficultyButton.bind(this));

		// Dice icons
		html
			.find(".skill-roller .dice")
			.on("click", this._onClickDiceIcon.bind(this));

		// Quantity buttons
		html.find(".skill-roller .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			const [section, type] = quantityType.split(".");

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me[`_inc_${section}_${type}`](input);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_dec_${section}_${type}`](input);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me[`_inc_${section}_${type}`](input);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me[`_dec_${section}_${type}`](input);
			});
		});

		// Attribute, Skill and Experise selectors
		html.find(".skill-roller select").on("change", function() {
			const selector = $(this);
			const value = selector.val();
			const selectorName = selector.attr("name");

			switch (selectorName) {
				case "attribute":
					me._updateAttribute(value);
					break;
				case "expertise":
					me._updateExpertise(value);
					break;
				case "skill":
					me._updateSkill(value);
					break;
				default:
					console.error(`Unknown selector ${selectorName}`);
			}
		});

		// Submit button
		html.find(".roll-skill-check").click(this._rollSkillCheck.bind(this));

		html.find("#isPlayerOwned").on("change", function() {
			me.playerOwnedActor = !me.playerOwnedActor;
			me.playerOwnedNpc = me.isNpc && me.playerOwnedActor;
			me.rollData.bankType = me.playerOwnedActor ? "momentum" : "doom";

			me.rollData.bonus = {
				dice: 0,
				momentum: 0,
				successes: 0,
				inhuman: 0,
			};
			me.rollData.spends = {
				doom: 0,
				fortune: 0,
				momentum: 0,
			};
			me.rollData.fixedResults = [];
			me.rollData.numDice = me.baseDice;

			me.render(true);
		});

		html.find("#ignoreDifficultyIncrease").on("change", function() {
			me.rollData.ignoreDifficultyIncrease = !me.rollData.ignoreDifficultyIncrease;

			me.render(true);
		});
	}

	async getData() {
		this.attribute =
			this.attribute !== undefined
				? this.attribute
				: this._sortedAttributes()[0].key;

		this.expertise =
			this.expertise !== undefined
				? this.expertise
				: this._sortedExpertiseFields()[0].key;

		this.skill =
			this.skill !== undefined ? this.skill : this._sortedSkills()[0].key;

		await this._updateDifficulties();
		await this._updateTestDetails();

		const data = {
			actorData: foundry.utils.duplicate(this.actor),
			attributes: this._sortedAttributes(),
			dice: this.dice,
			difficulties: this.difficulties,
			difficultyIncreased: false,
			expertiseFields: this._sortedExpertiseFields(),
			ignoreDifficultyIncrease: this.rollData.ignoreDifficultyIncrease,
			isActorRoll: this.isActorRoll,
			isGM: game.user.isGM,
			isNpc: this.isNpc,
			isPlayerOwned: this.playerOwnedActor,
			isPlayerOwnedNpc: this.playerOwnedNpc,
			rollData: this.rollData,
			selectedAttribute: this.attribute,
			selectedExpertise: this.expertise,
			selectedSkill: this.skill,
			showBonuses: this.showBonuses,
			skills: this._sortedSkills(),
		};

		if (this.isActorRoll) {
			data.difficultyIncreased = this.rollData.ignoreDifficultyIncrease
				? 0
				: this.actor.getDifficultyIncrease(this.attribute) > 0;
		}

		return data;
	}

	/* ----------------------------------------------------------------------- */

	async _adjustBoughtDice(numDice) {
		// We special case things if a single dice is selected, as this is an
		// assist roll
		//
		if (this.isAssist) {
			// Assist roll.  No additional dice can be purchased for those, and no
			// bonuses apply
			//
			this.rollData.bonus.dice = 0;
			this.rollData.bonus.momentum = 0;
			this.rollData.bonus.successes = 0;
			this.rollData.spends.doom = 0;
			this.rollData.spends.fortune = 0;
			this.rollData.spends.momentum = 0;

			this.rollData.numDice = numDice;

			await this._updateAllFormValues();

			return true;
		}

		// fixedDice is the base 2d20 dice, plus any fortune and bonus d20s
		// already entered.
		//
		const fixedDice =
			this.baseDice + this.rollData.bonus.dice + this.rollData.spends.fortune;

		// If the requested amount of dice is below this then we can't adjust the
		// dice until either the number of bonus d20s and/or number of fortune
		// spent has been reduced.
		//
		if (numDice < fixedDice) return false;

		let availableToSpend = 0;
		if (this.playerOwnedActor) {
			availableToSpend = await this.actor.getAvailableMomentum();
		}
		else {
			availableToSpend = await this.actor.getAvailableDoom();
			availableToSpend -= this.rollData.spends.fortune * 3;
		}

		let newDoom = 0;
		let newMomentum = 0;

		// make sure we don"t allocate more dice than we have available spends for
		numDice = numDice > this.maxDice ? this.maxDice : numDice;

		let diceToAllocate = numDice - fixedDice;
		let allocatedDice = 0;

		while (diceToAllocate > 0) {
			if (this.playerOwnedActor && availableToSpend > 0) {
				availableToSpend--;
				newMomentum++;
				allocatedDice++;
			}
			else if (this.isNpc && availableToSpend > 0) {
				availableToSpend--;
				newDoom++;
				allocatedDice++;
			}
			else if (this.playerOwnedActor) {
				newDoom++;
				allocatedDice++;
			}

			diceToAllocate--;
		}

		this.rollData.numDice = fixedDice + allocatedDice;

		this.rollData.spends.doom = newDoom;
		this.rollData.spends.momentum = newMomentum;

		this._updateAllFormValues();

		return true;
	}

	async _checkFortuneSpends() {
		let fortuneSuccesses = this.rollData.spends.fortune;

		const difficulty =
			this.rollData.difficulty.base + this.rollData.difficulty.increase;

		if (this.rollData.skill.focus > 0) {
			fortuneSuccesses *= 2;
		}

		return fortuneSuccesses >= difficulty;
	}

	async _dec_bonus_dice(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.dice--;
		this.rollData.numDice--;

		input.val(this.rollData.bonus.dice);

		await this._updateDiceIcons();
	}

	async _dec_bonus_momentum(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.momentum--;
		this._updateAllFormValues();
	}

	async _dec_bonus_inhuman(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.inhuman--;
		this._updateAllFormValues();
	}

	async _dec_bonus_successes(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.successes--;
		this._updateAllFormValues();
	}

	async _dec_skill_complication(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.skill.complication--;
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _dec_skill_focus(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.skill.focus--;
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _dec_skill_tn(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.skill.tn--;
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _dec_spends_doom(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.doom--;
		this.rollData.numDice--;

		input.val(this.rollData.spends.doom);

		await this._updateDiceIcons();
	}

	async _dec_spends_fortune(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.fortune--;
		this.rollData.numDice--;

		input.val(this.rollData.spends.fortune);

		await this._updateDiceIcons();
	}

	async _dec_spends_momentum(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.momentum--;
		this.rollData.numDice--;

		input.val(this.rollData.spends.momentum);

		await this._updateDiceIcons();
	}

	_getTestDifficulty() {
		if (this.actor) {
			[
				this.rollData.skill.tn,
				this.rollData.skill.expertise,
				this.rollData.skill.focus,
			] = this.actor.getSkillTargetNumberAndFocus(
				this.attribute,
				this.skill,
				this.expertise
			);

			if (this.rollData.ignoreDifficultyIncrease) {
				this.rollData.difficulty.increase = 0;
			}
			else {
				this.rollData.difficulty.increase =
					this.actor.getDifficultyIncrease(
						this.attribute
					);
			}
		}
		else {
			this.rollData.skill.expertise = 0;
			this.rollData.skill.focus = this.element.find("#skill-focus").val() || 0;
			this.rollData.skill.tn = this.element.find("#skill-tn").val() || 7;
		}

		let difficultyCalc =
			this.rollData.difficulty.base + this.rollData.difficulty.increase;

		difficultyCalc = difficultyCalc > 5 ? 5 : difficultyCalc;

		const difficulty = game.i18n.localize(
			`CONAN.skillRollDifficultyLevels.${difficultyCalc}`
		);

		const labelTN = game.i18n.localize("CONAN.SkillRoll.TN.label");
		const labelFocus = game.i18n.localize("CONAN.SkillRoll.Focus.label");
		const labelCompShort = game.i18n.localize("CONAN.SkillRoll.Complication.Short.label");

		let testDetails = `${labelTN} ${this.rollData.skill.tn}, `;
		testDetails += `${labelFocus} ${this.rollData.skill.focus}, `;
		testDetails += `${labelCompShort} ${this.rollData.skill.complication}`;

		if (this.rollData.item && this.rollData.item.type === "weapon") {
			const item = this.rollData.item;

			let rangeLabel = "";
			let rangeValue = item.system.range;

			if (item.system.weaponType === "melee") {
				rangeLabel = game.i18n.localize("CONAN.Item.Weapon.Reach.label");
			}
			else {
				rangeLabel = game.i18n.localize("CONAN.Item.Weapon.Range.label");
				rangeValue = CONFIG.CONAN.weaponRanges[rangeValue] ?? "";
			}

			testDetails += `, ${rangeLabel} ${rangeValue}`;
		}

		if (this.isAssist) {
			const assistLabel = game.i18n.localize("CONAN.Assist");
			testDetails = `${assistLabel}, ${testDetails}`;
		}
		else {
			testDetails = `${difficulty}, ${testDetails}`;
		}

		this.rollData.difficulty.display = testDetails;

		if (this.assistActor) {
			const labelExpertise = game.i18n.localize("CONAN.SkillRoll.Expertise.label");

			let assistDetails = game.i18n.localize("CONAN.Assist");
			assistDetails += ` ${labelTN}  ${this.rollData.assists.tn}, `;
			assistDetails += `${labelExpertise} ${this.rollData.assists.focus}, `;
			assistDetails += `${labelCompShort} ${this.rollData.assists.complication}`;
			this.rollData.difficulty.assistDisplay = assistDetails;
		}

		return testDetails;
	}

	async _inc_bonus_dice(input) {
		if (this.rollData.numDice < this.maxDice) {
			this.rollData.bonus.dice++;
			this.rollData.numDice++;

			input.val(this.rollData.bonus.dice);

			await this._updateDiceIcons();
		}
	}

	async _inc_bonus_inhuman() {
		this.rollData.bonus.inhuman++;
		this._updateAllFormValues();
	}

	async _inc_bonus_momentum() {
		this.rollData.bonus.momentum++;
		this._updateAllFormValues();
	}

	async _inc_bonus_successes() {
		this.rollData.bonus.successes++;
		this._updateAllFormValues();
	}

	async _inc_skill_complication() {
		if (this.rollData.skill.complication < 20) {
			this.rollData.skill.complication++;
			this._updateAllFormValues();
			this._updateTestDetails();
		}
	}

	async _inc_skill_focus() {
		if (this.rollData.skill.focus < 5) {
			this.rollData.skill.focus++;
			this._updateAllFormValues();
			this._updateTestDetails();
		}
	}

	async _inc_skill_tn() {
		if (this.rollData.skill.tn < 20) {
			this.rollData.skill.tn++;
			this._updateAllFormValues();
			this._updateTestDetails();
		}
	}

	async _inc_spends_doom(input) {
		let currentValue = parseInt(input.val());
		let numAvailableDoom = await this.actor.getAvailableDoom();

		let doomAvailable = true; // default for non-NPCs

		if (this.isNpc) {
			// Fortune used by NPCs costs 3 Doom per Fortune
			numAvailableDoom -= this.rollData.spends.fortune * 3;
			doomAvailable = currentValue < numAvailableDoom;
		}

		if (doomAvailable && this.rollData.numDice < this.maxDice) {
			this.rollData.spends.doom++;
			this.rollData.numDice++;

			input.val(this.rollData.spends.doom);

			await this._updateDiceIcons();
		}
	}

	async _inc_spends_fortune(input) {
		let currentValue = parseInt(input.val());
		const numAvailableFortune = await this.actor.getAvailableFortune();

		const fortuneAvailable = numAvailableFortune - currentValue;

		if (fortuneAvailable > 0 && this.rollData.numDice < this.maxDice) {
			this.rollData.spends.fortune++;
			this.rollData.numDice++;

			input.val(this.rollData.spends.fortune);

			await this._updateDiceIcons();
		}
	}

	async _inc_spends_momentum(input) {
		let currentValue = parseInt(input.val());
		let numAvailableMomentum = await this.actor.getAvailableMomentum();

		const momentumAvailable = numAvailableMomentum - currentValue;

		if (momentumAvailable > 0 && this.rollData.numDice < this.maxDice) {
			this.rollData.spends.momentum++;
			this.rollData.numDice++;

			input.val(this.rollData.spends.momentum);

			await this._updateDiceIcons();
		}
	}

	async _onClickDiceIcon(event) {
		event.preventDefault();

		const diceIcon = $(event.currentTarget);

		const numDice = parseInt(diceIcon.attr("data-dice-number")) + 1;
		const prevNumDice = this.rollData.numDice;

		if (numDice === prevNumDice) return; // Nothing has changed

		if (numDice === 1 && this.actor) {
			this.isAssist = true;

			if (this.isActorRoll && this.isNpc) {
				// Minions roll 1 dice by default, make sure we don"t set them as an
				// assist
				this.isAssist = this.actor.system.type !== "minion";
			}
		}
		else {
			this.isAssist = false;
		}

		// We only need to adjust the bought dice values if this is an Actor based
		// check.
		//
		// For the simple skill checks we do not adjust any momentum/doom/fortune,
		// and just roll the number of selected dice.
		//
		let diceAdjusted = true;
		if (this.isActorRoll) {
			diceAdjusted = await this._adjustBoughtDice(numDice, prevNumDice);
		}
		else {
			this.rollData.numDice = numDice;
		}

		if (diceAdjusted) {
			// Hide dice difficulty, purchasing and bonus sections if there is only
			// one dice selected, as this will be an assistance roll which can"t use
			// those bonuses.
			//
			if (this.isAssist) {
				this.element.find(".extra-dice-hideable").addClass("disable-entry");
				this.element.find(".difficulty-settings").addClass("disable-entry");
			}
			else {
				this.element.find(".extra-dice-hideable").removeClass("disable-entry");
				this.element.find(".difficulty-settings").removeClass("disable-entry");
			}

			await this._updateTestDetails();
			await this._updateDiceIcons();
		}
	}

	async _onClickDifficultyButton(event) {
		event.preventDefault();

		const button = $(event.currentTarget);

		const difficulty = parseInt(button.attr("data-difficulty"));

		if (difficulty === this.rollData.difficulty.base) return;

		this.rollData.difficulty.base = difficulty;

		button.siblings().removeClass("active");
		button.addClass("active");

		this._updateTestDetails();
	}

	async _performRoll() {
		const results = await conan.dice.calculateSkillRoll(this.rollData);

		conan.chat.renderSkillTestCard({
			actor: this.actor,
			item: this.rollData.item,
			results,
			rollData: this.rollData,
			type: "skill",
		});
	}

	async _rollSkillCheck() {
		this.close();

		if (this.actor) {
			if (this.isNpc && this.actor.system.isMob) {
				// Work out how many Assist Rolls are needed
				const mobData = this.actor.system.grouping;

				let numLiveMobMembers = mobData.members.length ?? 0;

				// exclude dead mob members from assist dice total
				for (const mobMember of mobData.members ?? []) {
					if (mobMember.dead) numLiveMobMembers--;
				}

				this.rollData.assists.numDice = numLiveMobMembers;
			}
		}

		// TODO: Combine all spends into a single chat message, or just include
		// them in the Skill Roll result message?
		//
		if (this.isActorRoll) {
			if (this.playerOwnedActor) {
				await this.actor.payDoom(this.rollData.spends.doom);
				await this.actor.spendFortune(this.rollData.spends.fortune);
				await this.actor.spendMomentum(this.rollData.spends.momentum);
			}
			else {
				await this.actor.buyFortune(this.rollData.spends.fortune);
				await this.actor.spendDoom(this.rollData.spends.doom);
			}
		}

		const fortuneWouldSucceed = await this._checkFortuneSpends();

		if (fortuneWouldSucceed && this.rollData.difficulty.base > 0) {
			const template =
				"systems/conan2d20/templates/apps/fortune-roll-dialogue.hbs";

			const html = await renderTemplate(template, {});

			new Dialog({
				content: html,
				title: game.i18n.localize("CONAN.RollRemainingDice"),
				buttons: {
					yes: {
						label: game.i18n.localize("CONAN.rollYesLabel"),
						callback: () => {
							this._performRoll();
						},
					},
					no: {
						label: game.i18n.localize("CONAN.rollNoLabel"),
						callback: () => {
							this.rollData.numDice = 0;
							this._performRoll();
						},
					},
				},
				default: "yes",
			}).render(true);
		}
		else {
			this._performRoll();
		}
	}

	_sortedAttributes() {
		return this._sortObjectsByName(CONFIG.CONAN.attributeLabels);
	}

	_sortedExpertiseFields() {
		return this._sortObjectsByName(CONFIG.CONAN.expertiseFields);
	}

	_sortedSkills() {
		return this._sortObjectsByName(CONFIG.CONAN.skills);
	}

	_sortObjectsByName(object) {
		const sortedData = [];
		for (let item in object) {
			sortedData.push({
				key: item,
				name: object[item],
			});
		}

		sortedData.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		return sortedData;
	}

	async _updateAllFormValues() {
		const me = this;

		this.element.find(".quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			let type = input.attr("data-quantity-type");
			type = type.split(".");
			const dataSection = me.rollData[type[0]] || {};
			input.val(dataSection[type[1]]);
		});
	}

	async _updateAttribute(value) {
		this.attribute = value;

		this.rollData.difficulty.increase = this.actor.getDifficultyIncrease(value);

		this.rollData.bonus.inhuman =
			this.actor.system.attributes[this.attribute]?.inhuman ?? 0;

		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _updateDiceIcons() {
		const numDice = this.rollData.numDice;
		const me = this;

		this.element.find(".dice").each(function() {
			const icon = $(this);
			const iconNum = parseInt(icon.attr("data-dice-number"));

			icon.removeClass("fortune selected unselected");

			if (iconNum < me.rollData.spends.fortune) {
				icon.addClass("fortune");
				icon.html("1");
			}
			else if (iconNum < numDice) {
				icon.addClass("selected");
				icon.html("?");
			}
			else {
				icon.addClass("unselected");
				icon.html("&nbsp;");
			}
		});
	}

	async _updateDifficulties() {
		// Updated the base actor skill targets
		if (this.actor) {
			[
				this.rollData.skill.tn,
				this.rollData.skill.expertise,
				this.rollData.skill.focus,
			] = this.actor.getSkillTargetNumberAndFocus(
				this.attribute,
				this.skill,
				this.expertise
			);

			if (this.rollData.ignoreDifficultyIncrease) {
				this.rollData.difficulty.increase = 0;
			}
			else {
				this.rollData.difficulty.increase =
					this.actor.getDifficultyIncrease(
						this.attribute
					);
			}
		}
		else {
			this.rollData.skill.expertise = 0;
			this.rollData.skill.focus = this.element.find("#skill-focus").val() || 0;
			this.rollData.skill.tn = this.element.find("#skill-tn").val() || 7;
		}

		const untrained =
			this.rollData.skill.expertise + this.rollData.skill.focus <= 0;

		this.rollData.skill.complication = untrained ? 19 : 20;

		// Updated assist actor targets if needed
		if (this.assistActor) {
			[
				this.rollData.assists.tn,
				this.rollData.assists.expertise,
				this.rollData.assists.focus,
			] = this.assistActor.getSkillTargetNumberAndFocus(
				this.attribute,
				this.skill,
				this.expertise
			);

			const untrainedAssist =
				this.rollData.assists.expertise + this.rollData.assists.focus <= 0;

			this.rollData.assists.complication = untrainedAssist ? 19 : 20;
		}
	}

	async _updateExpertise(value) {
		this.expertise = value;
		await this._updateDifficulties();
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _updateSkill(value) {
		this.skill = value;
		await this._updateDifficulties();
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _updateSkillDescription() {
		if (this.isActorRoll) {
			const attribute = CONFIG.CONAN.attributeLabels[this.attribute];

			let skill = CONFIG.CONAN.skills[this.skill];
			if (this.isNpc) {
				skill = CONFIG.CONAN.expertiseFields[this.expertise];
			}

			this.rollData.title = `${attribute} / ${skill}`;
		}
	}

	async _updateTestDetails() {
		const text = this._getTestDifficulty();
		await this._updateSkillDescription();
		this.element.find(".test-details").html(text);

		let difficultyText = game.i18n.localize(
			"CONAN.SkillRoll.DifficultyIncreased"
		);

		if (this.rollData.difficulty.increase > 0) {
			// *difficulty increased due to wounds/traumas
			this.element.find(".difficulty-increased").html(difficultyText);
		}
		else {
			this.element.find(".difficulty-increased").html("&nbsp;");
		}
	}
}

class SkillRollRequest extends Application {
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

class SoakDiceRoller extends Application {
	constructor(actor, options={}) {
		super(actor, options);

		this.actor = null;

		this.rollData = conan.dice.getDefaultCombatDiceRollOptions();

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;
		}

		this.isActorRoll = this.actor ? true : false;

		this.isNpc = false;
		this.isPc = false;

		if (this.isActorRoll) {
			this.isNpc = this.actor.isNPC;
			this.isPc = !this.isNpc;
		}

		this.soakType = options?.type || "cover";
		this.rollData.itemName = options?.itemName || null;
		this.rollData.base.numDice = options?.soak || 1;

		this.presetTitle = null;

		this.rollData.title = game.i18n.localize("CONAN.SoakDice");

		this.coverPresets = [
			{
				active: false,
				name: game.i18n.localize("CONAN.LightCover"),
				numDice: 2,
				tooltip: game.i18n.localize("CONAN.LightCoverTooltip"),
			},
			{
				active: false,
				name: game.i18n.localize("CONAN.HeavyCover"),
				numDice: 4,
				tooltip: game.i18n.localize("CONAN.HeavyCoverTooltip"),
			},
		];

		this.moralePresets = [
			{
				active: false,
				name: game.i18n.localize("CONAN.MinorMorale"),
				numDice: 2,
				tooltip: game.i18n.localize("CONAN.MinorMoraleTooltip"),
			},
			{
				active: false,
				name: game.i18n.localize("CONAN.MajorMorale"),
				numDice: 4,
				tooltip: game.i18n.localize("CONAN.MajorMoraleTooltip"),
			},
		];

		this.soakTypes = [
			{
				active: this.soakType === "cover" ? true : false,
				name: game.i18n.localize("CONAN.soakCover"),
				value: "cover",
				tooltip: game.i18n.localize("CONAN.SoakTypeCoverTooltip"),
			},
			{
				active: this.soakType === "morale" ? true : false,
				name: game.i18n.localize("CONAN.soakMorale"),
				value: "morale",
				tooltip: game.i18n.localize("CONAN.SoakTypeMoraleTooltip"),
			},
		];
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "soak-dice-roller"],
			template: "systems/conan2d20/templates/apps/soak-dice-roller.hbs",
			width: 200,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.SoakDice");
		if (this.actor) {
			return `${title}: ${this.actor.name}`;
		}
		else {
			return title;
		}
	}

	activateListeners(html) {
		super.activateListeners(html);
		const me = this;

		// Submit button
		html.find(".roll-dice").click(this._onSubmit.bind(this));

		// Soak Preset buttons
		html
			.find(".soak-dice-roller .soak-preset")
			.on("click", this._onClickPresetButton.bind(this));

		// Soak Type buttons
		html
			.find(".soak-dice-roller .soak-type")
			.on("click", this._onClickTypeButton.bind(this));

		// Quantity buttons
		html.find(".soak-dice-roller .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			const [section, type] = quantityType.split(".");

			input.on("wheel", ev => {
				ev.preventDefault();
				me._clearPresets();
				if (ev.originalEvent.deltaY < 0) {
					me[`_inc_${section}_${type}`](input);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_dec_${section}_${type}`](input);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me._clearPresets();
				me[`_inc_${section}_${type}`](input);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me._clearPresets();
				me[`_dec_${section}_${type}`](input);
			});
		});
	}

	async getData() {
		const data = {
			actorData: foundry.utils.duplicate(this.actor),
			coverPresets: this.coverPresets,
			isActorRoll: this.isActorRoll,
			isNpc: this.isNpc,
			isPc: this.isPc,
			itemName: this.rollData.itemName,
			moralePresets: this.moralePresets,
			rollData: this.rollData,
			soakType: this.soakType,
			soakTypes: this.soakTypes,
		};

		return data;
	}

	async _dec_base_numDice(input) {
		let currentValue = parseInt(input.val());
		currentValue--;

		if (currentValue < 1) currentValue = 1;

		this.rollData.base.numDice = currentValue;

		input.val(this.rollData.base.numDice);
	}

	async _inc_base_numDice(input) {
		this.rollData.base.numDice++;

		input.val(this.rollData.base.numDice);
	}

	async _clearPresets() {
		this.element.find(".soak-dice-roller .soak-preset").removeClass("active");
		this.presetTitle = null;

		this._updateTitle();
	}

	async _onClickPresetButton(event) {
		event.preventDefault();

		const button = $(event.target);

		const preset = parseInt(button.attr("data-preset"));

		if (!event.target.classList.contains("active")) {
			this.rollData.base.numDice = preset;
			this._updateAllFormValues();
			this.presetTitle = event.target.innerText;
		}
		else {
			this.presetTitle = null;
		}

		this.element.find(".soak-dice-roller .soak-preset").removeClass("active");
		button.toggleClass("active");
	}

	async _onClickTypeButton(event) {
		event.preventDefault();

		const button = $(event.target);

		const soakType = button.attr("data-soak-type");

		if (soakType === this.soakType) return;

		this.soakType = soakType;

		this.element.find(".cover-presets").toggle();
		this.element.find(".morale-presets").toggle();

		this.element.find(".soak-dice-roller .soak-preset").removeClass("active");

		button.siblings().removeClass("active");
		button.addClass("active");
	}

	async _onSubmit() {
		this._updateTitle();
		this._rollDice();
	}

	async _rollDice() {
		this.close();

		this.rollData.numDice =
			this.rollData.base.numDice + this.rollData.bonus.attribute;

		// Do the actual dice rolls
		const results = await conan.dice.calculateCombatDiceRoll(this.rollData);

		this._showResults(results);
	}

	async _showResults(results) {
		conan.chat.renderSoakDiceRollCard({
			actor: this.actor,
			item: this.rollData.item,
			results,
			rollData: this.rollData,
			type: "soak",
		});
	}

	async _updateAllFormValues() {
		const me = this;

		this.element.find(".quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			let type = input.attr("data-quantity-type");
			type = type.split(".");
			const dataSection = me.rollData[type[0]] || {};
			input.val(dataSection[type[1]]);
		});
	}

	async _updateTitle() {
		let soakType = null;

		if (this.soakType === "cover") {
			soakType = game.i18n.localize("CONAN.soakCover");
		}
		else if (this.soakType === "morale") {
			soakType = game.i18n.localize("CONAN.soakMorale");
		}

		let presetTitle = this.presetTitle;
		const soakDiceTitle = game.i18n.localize("CONAN.Soak");

		let title = `${soakType}`;
		if (presetTitle) {
			title = `${presetTitle} ${title}`;
		}

		this.rollData.title = `${title} ${soakDiceTitle}`;
	}
}

class SourceFilterSettings extends FormApplication {
	constructor(object, options) {
		super(object, options);

		this.filtered = game.settings.get("conan2d20", "sourceFilters") ?? [];
	}

	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			// classes: ["conan2d20", "character-upgrade"],
			classes: ["conan2d20", "item", "sheet"],
			title: game.i18n.localize("CONAN.Form.BookSourceFilters.title"),
			template: "systems/conan2d20/templates/settings/source-filter.hbs",
			width: 300,
			height: "auto",
			resizable: false,
			closeOnSubmit: true,
		});
	}

	static registerSetting() {
		game.settings.register("conan2d20", "sourceFilters", {
			name: game.i18n.localize("CONAN.Form.BookSourceFilters.title"),
			hint: game.i18n.localize("CONAN.Form.BookSourceFilters.hint"),
			config: false,
			scope: "world",
			type: Array,
			requiresReload: true,
			default: [],
		});
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._deleteChoiceItem(event));

		super.activateListeners(html);
	}

	async getData() {
		const data = await super.getData();

		const sources = CONFIG.CONAN.sortedSources;

		data.selectedSources = this.filtered.map(
			choice => ({uuid: choice, name: CONFIG.CONAN.sources[choice]})
		);

		data.hasSelectedSources = data.selectedSources.length > 0;

		data.unselectedSources = sources.map(
			({key, name}) => ({name, uuid: key})
		).filter(source => !this.filtered.includes(source.uuid));

		return data;
	}

	async _deleteChoiceItem(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		const newChoices = [];
		for (const itemUuid of this.filtered) {
			if (itemUuid === deleteUuid) continue;
			newChoices.push(itemUuid);
		}

		this.filtered = newChoices;

		return this.render(true);
	}

	async _onChangeInput(event) {
		const options = event.target.list.options;
		const value = event.target.value;

		let uuid = null;
		for (const option of options) {
			if (option.value === value) {
				uuid = option.getAttribute("data-uuid");
				break;
			}
		}

		if (uuid === null) return;

		if (this.filtered.includes(uuid)) return; // No duplicates

		this.filtered.push(uuid);

		this.filtered.sort((a, b) => a.localeCompare(b));

		return this.render(true);
	}

	async _updateObject(event, data) {
		game.settings.set("conan2d20", "sourceFilters", this.filtered);
	}
}

// A form used to add and remove items from transportation items that have
// stowage and their own encumbrance limits.
//
class SendItem extends FormApplication {
	selectedActor = "";

	constructor(object, options={}) {
		super(object, options);
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "transport-stowage",
			classes: ["conan2d20", "item", "sheet"],
			template: "systems/conan2d20/templates/apps/send-item.hbs",
			width: "auto",
			height: "auto",
		});
	}

	get title() {
		return `${game.i18n.localize("CONAN.sendItemTitle")}`;
	}

	activateListeners(html) {
		super.activateListeners(html);

		html.find(".send-item").change(event => {
			this.selectedActor = event.target.value;
		});

		html.find(".send-item-save").click(event => this._onSave(event));

		html.find(".send-item-cancel").click(event => this._onCancel(event));
	}

	getData() {
		const data = {
			itemName: this.object.item.name,
			containers: [
				{
					id: "",
					name: "",
				},
			],
		};

		this.object.destinations.sort((a, b) => a.name.localeCompare(b.name));

		for (const destination of this.object.destinations) {
			data.containers.push({
				id: destination.uuid,
				name: destination.name,
			});
		}

		return data;
	}

	_onCancel() {
		this.close();
	}

	async _onSave() {
		if (this.selectedActor === "") return this.close();

		const selectedActor = await fromUuid(this.selectedActor);

		const itemData = this.object.item.toObject();

		if (itemData.system.equipped) {
			itemData.system.equipped = false;
		}

		await this.object.actor.deleteEmbeddedDocuments("Item", [this.object.item._id]);
		await selectedActor.createEmbeddedDocuments("Item", [itemData]);

		this.close();
	}
}

class TalentRequirementEditor extends FormApplication {

	constructor(object, options={}) {
		super(object, options);

		this.talent = object;

		this.edit = false;

		this.requiredTalents = [];
		this.requiredTalentNames = {};

		// Default to an expertise
		this.requirement = this._defaultRequirement("expertise");

		if (Number.isInteger(options.editIndex)) {
			const requirements = this.talent?.system?.requirements ?? [];
			if (options.editIndex >= 0 && options.editIndex < requirements.length) {
				this.editIndex = options.editIndex;
				this.requirement = requirements[options.editIndex];

				if (this.requirement.type === "talent") {
					for (const talent of this.requirement.talents) {
						let item;

						conan.compendiums.talents(undefined, false).then(talents => {
							item = talents.find(
								t => t.uuid === talent.uuid
							);
						});

						if (item) {
							this.requiredTalentNames[item.uuid] = item.name;
							this.requiredTalents.push(item);
						}
					}
				}

				this.edit = true;
			}
		}
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "talent-requirement-editor"],
			template: "systems/conan2d20/templates/apps/talent-requirement-editor.hbs",
			width: 300,
			height: 400,
			resizable: true,
		});
	}

	get title() {
		return `${game.i18n.localize("CONAN.Item.Talent.RequirementEditor.label")}`;
	}

	activateListeners(html) {
		html.find(".delete-talent").click(event => this._deleteTalentChoice(event));

		html.find(".requirement-save-button").click(
			event => this._onSaveRequirement(event)
		);

		super.activateListeners(html);
	}

	async getData(options) {
		const data = await super.getData(options);

		const [selectedTalents, unselectedTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.talents(undefined, false),
				(this.requirement?.talents ?? []).map(t => t.uuid)
			);

		const requirement = foundry.utils.duplicate(this.requirement);

		if (requirement.type === "talent") {
			for (const talent of requirement?.talents ?? []) {
				const requiredTalent = (await conan.compendiums.talents(undefined, false)).find(
					t => t.uuid === talent.uuid
				);

				talent.name = requiredTalent.name;
			}

			requirement.talents.sort((a, b) => a.name.localeCompare(b.name));
		}

		foundry.utils.mergeObject(data, {
			CONFIG: CONFIG.CONAN,
			appId: this.id,
			requiredTalent: this.requiredTalent,
			requirement,
			selected: selectedTalents,
			talent: this.talent,
			unselected: unselectedTalents,
		});

		return data;
	}

	_defaultRequirement(type) {
		switch (type) {
			case "expertise":
				return {
					skill: CONFIG.CONAN.sortedSkills[0].key,
					type: "expertise",
					value: 1,
				};
			case "focus":
				return {
					skill: CONFIG.CONAN.sortedSkills[0].key,
					type: "focus",
					value: 1,
				};
			case "special":
				return {
					value: "",
					type: "special",
				};
			case "talent":
				return {
					min: 1,
					type: "talent",
					talents: [],
				};
		}
	}

	async _deleteTalentChoice(event) {
		event.preventDefault();
		event.stopPropagation();

		const uuid = event.currentTarget.dataset.uuid;

		const newRequiredTalents = [];
		for (const talent of this.requiredTalents) {
			if (talent.uuid === uuid) continue;
			newRequiredTalents.push(talent);
		}
		this.requiredTalents = newRequiredTalents;

		const talents = [];
		for (const talent of this.requirement.talents) {
			if (talent.uuid === uuid) continue;
			talents.push(talent);
		}
		this.requirement.talents = talents;

		this.render(true);
	}

	async _onChangeInput(event) {
		event.preventDefault();
		event.stopPropagation();

		const isItem = event.currentTarget.dataset.isItem === "true";

		// We only have to do something special if we're handling a multi-choice
		// datalist
		//
		if (event.target.list && isItem) {
			const options = event.target.list.options;
			const value = event.target.value;

			// const name = event.target.name;

			let uuid = null;
			for (const option of options) {
				if (option.value === value) {
					uuid = option.getAttribute("data-uuid");
					break;
				}
			}

			if (uuid === null) return;

			const talent = await fromUuid(uuid);

			if (talent) {
				this.requiredTalents.push(talent);

				this.requirement.talents.push({
					rank: 1,
					uuid,
				});
			}
		}

		return this._onSubmit(event);
	}

	async _onSaveRequirement(event) {
		event.preventDefault();
		event.stopPropagation();

		const requirements = this.talent?.system?.requirements ?? [];

		let valid = true;
		switch (this.requirement.type) {
			case "expertise":
			case "focus":
				const value = Number.parseInt(this.requirement.value);
				valid = value >= 1 && value <= 5;

				if (this.requirement.skill === "") valid = false;

				break;
			case "special":
				if (this.requirement.value === "") valid = false;
				break;
			case "talent":
				const numTalents = (this.requirement?.talents ?? []).length;

				if (numTalents <= 0) {
					valid = false;
				}
				if (this.requirement.min <= 0 || this.requirement.min > numTalents) {
					valid = false;
				}

				for (const talent of this.requirement?.talents ?? []) {
					const required = await fromUuid(talent.uuid);
					if (talent.rank > required.system.rank.max) {
						valid = false;
					}
				}
		}

		if (valid) {
			if (this.edit) {
				requirements[this.editIndex] = this.requirement;
			}
			else {
				requirements.push(this.requirement);
			}

			requirements.sort((a, b) => a.type.localeCompare(b.type));

			await this.talent.update({"system.requirements": requirements});

			this.close();
		}
	}

	/** @inheritdoc */
	async _onSubmit(event) {
		let updateData = this._getSubmitData();

		if (this.requirement.type !== updateData.type) {
			this.requirement = this._defaultRequirement(updateData.type);
			return this.render(true);
		}

		switch (this.requirement.type) {
			case "expertise":
			case "focus":
				this.requirement.skill = updateData.skill;
				this.requirement.value = updateData[this.requirement.type];
				break;
			case "special":
				this.requirement.value = updateData.special;
				break;
			case "talent":
				this.requirement.min = updateData.talentMin;

				for (const talentRank of Object.keys(updateData)) {
					if (talentRank.startsWith("rank_")) {
						const uuid = talentRank.split("_")[1] ?? "";

						if (uuid !== "") {
							for (const talent of this.requirement.talents) {
								if (talent.uuid === uuid) {
									talent.rank = updateData[talentRank];
								}
							}
						}
					}
				}
				break;
		}

		this.render(true);
	}

	/** @inheritdoc */
	async _updateObject(event, formData) {
		console.log(formData);
	}
}

/* eslint-disable no-shadow, no-unused-vars */

/**
 * THIS MODULE IS TAKEN AND MODIFIED FROM THE D&D5E SYSTEM
 * Original code resides here: https://gitlab.com/foundrynet/dnd5e/-/blob/master/module/apps/trait-selector.js
/**
 * A specialized form used to select damage or condition types which apply to an Actor
 * @type {FormApplication}
 */
class TraitSelector extends FormApplication {
	constructor(object, options) {
		super(object, options);

		// Internal flags
		this.searchString = null;

		/**
		 * A filtering timeout function reference used to rate limit string filtering operations
		 * @type {number|null}
		 */
		this._filterTimeout = null;
	}

	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "trait-selector";
		options.classes = ["conan2d20"];
		options.title = "Actor Trait Selection";
		options.template = "systems/conan2d20/templates/apps/trait-selector.hbs";
		options.width = "auto";
		options.height = 700;
		options.scrollY = [".trait-list"];
		return options;
	}

	/* -------------------------------------------- */
	/**
	 * Return a reference to the target attribute
	 * @type {String}
	 */
	get attribute() {
		return this.options.name;
	}

	/* -------------------------------------------- */
	/**
	 * Provide data to the HTML template for rendering
	 * @type {Object}
	 */
	getData() {
		// Get current values
		const attr = foundry.utils.getProperty(this.object, this.attribute);
		if (typeof attr.value === "string") {
			attr.value = TraitSelector._backCompat(attr.value, this.options.choices);
		}

		if (!attr.value) attr.value = "";

		const {hasValues} = this.options;
		const choices = foundry.utils.duplicate(this.options.choices);

		// Populate choices
		if (hasValues) {
			const selected = [];
			for (const [_k, trait] of Object.entries(attr)) {
				selected[trait.type] = {
					value: trait.value,
				};
			}
			for (const [k, v] of Object.entries(choices)) {
				if (k in selected) {
					choices[k] = {
						label: v,
						chosen: true,
						value: selected[k].value || "",
					};
				}
				else {
					choices[k] = {
						label: v,
						chosen: false,
					};
				}
			}
		}
		else {
			for (const [k, v] of Object.entries(choices)) {
				choices[k] = {
					label: v,
					chosen: attr.value.includes(k),
				};
			}
		}

		const orderedChoices = {};
		Object.keys(choices)
			.sort((a, b) => {
				return choices[a].label.localeCompare(choices[b].label);
			})
			.forEach(key => {
				orderedChoices[key] = choices[key];
			});

		return {
			orderedChoices,
			hasValues,
			searchString: this.searchString,
		};
	}

	/**
	 * Filter the potential traits to only show ones which match a provided search string
	 * @param {string} searchString    The search string to match
	 */
	search(searchString) {
		const query = new RegExp(RegExp.escape(searchString), "i");
		this.element.find("li.trait-item").each((i, li) => {
			const name = li.getElementsByClassName("trait-label")[0].textContent;
			li.style.display = query.test(name) ? "flex" : "none";
		});
		this.searchString = searchString;
	}

	activateListeners(html) {
		super.activateListeners(html);

		// Search filtering
		html.find("input[name=\"search\"]").keyup(this._onFilterResults.bind(this));
		if (this.searchString) {
			this.search(this.searchString);
		}

		if (this.options.hasValues) {
			html.find("input[id^=input_value]").focusin(ev => {
				const {name} = ev.currentTarget;
				html.find(`input[type=checkbox][name="${name}"]`).prop("checked", true);
			});
			if (!this.options.allowEmptyValues) {
				html.find("input[id^=input_value]").focusout(ev => {
					const input = ev.currentTarget;

					if (input.value === "") {
						html
							.find(`input[type=checkbox][name="${input.name}"]`)
							.prop("checked", false);
					}
				});
			}
		}
	}

	/**
	 * Handle trait filtering through search field
	 * Toggle the visibility of indexed trait entries by name match
	 * @private
	 */
	_onFilterResults(event) {
		event.preventDefault();
		const input = event.currentTarget;
		if (this._filterTimeout) {
			clearTimeout(this._filterTimeout);
			this._filterTimeout = null;
		}
		this._filterTimeout = setTimeout(() => this.search(input.value), 100);
	}

	/* -------------------------------------------- */

	/**
	 * Support backwards compatibility for old-style string separated traits
	 * @private
	 */
	static _backCompat(current, choices) {
		if (!current || current.length === 0) return [];
		current = current.split(/[\s,]/).filter(t => !!t);
		return current
			.map(val => {
				for (const [k, v] of Object.entries(choices)) {
					if (val === v) return k;
				}
				return null;
			})
			.filter(val => !!val);
	}

	/* -------------------------------------------- */

	/**
	 * Update the Actor object with new trait data processed from the form
	 * @private
	 */
	async _updateObject(event, formData) {
		const choices = [];
		if (this.options.hasValues) {
			for (const [k, v] of Object.entries(formData)) {
				if (v.length > 1 && v[0]) {
					if (
						(!Number.isNaN(v[1]) && v[1] !== "")
							|| this.options.allowEmptyValues
					) {
						choices.push({type: k, value: v[1]});
					}
				}
			}
			await this.object.update({[`${this.attribute}`]: choices});
			await this.object.sheet.render(true);
		}
		else {
			for (const [k, v] of Object.entries(formData)) {
				if (k !== "search" && v) choices.push(k);
			}
			await this.object.update({
				[`${this.attribute}.value`]: choices,
			});
			await this.object.sheet.render(true);
		}
	}
}

var apps = /*#__PURE__*/Object.freeze({
	__proto__: null,
	ApplyDamage: ApplyDamage,
	CharacterCreator: CharacterCreator,
	CharacterUpgrade: CharacterUpgrade,
	CombatDiceRoller: CombatDiceRoller,
	Counter: Counter,
	DamageRoller: DamageRoller,
	MomentumBanker: MomentumBanker,
	SendItem: SendItem,
	SkillRollRequest: SkillRollRequest,
	SkillRoller: SkillRoller,
	SoakDiceRoller: SoakDiceRoller,
	SourceFilterSettings: SourceFilterSettings,
	TalentRequirementEditor: TalentRequirementEditor,
	TraitSelector: TraitSelector
});

class ConanItem extends Item {

	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);

		if (this.type === "transportation") {
			ui.notifications.warn(
				"Transportation items are deprecated and will be removed with the next system release, please use the relevant new actor types instead.",
				{permanent: true}
			);
		}

		if (data.img) return; // Already had an image set so we won't change it

		const baseDir = "systems/conan2d20/assets/icons/compendiums";
		let img = null;
		switch (this.type) {
			case "archetype":
			case "aspect":
			case "caste":
			case "display":
			case "education":
			case "homeland":
			case "language":
			case "nature":
			case "npcaction":
			case "story":
			case "talent":
			case "warstory":
				img = "icon-talent-books.png";
				break;
			case "action":
				if (this.system.actionType) {
					img = `icon-action-${this.system.actionType}.png`;
				}
				else {
					img = "icon-action-standard.png";
				}
				break;
			case "armor":
				img = "icon-armor.png";
				break;
			case "enchantment":
				img = "icon-enchantment.png";
				break;
			case "kit":
				img = "icon-tools.png";
				break;
			case "npcattack":
				if (this.system.attackType === "threaten") {
					img = "icon-display-power.png";
				}
				else {
					img = "icon-weapon.png";
				}
				break;
			case "spell":
				img = "icon-spells.png";
				break;
			case "transportation":
				img = "icon-ride.png";
				break;
			case "weapon":
				img = "icon-weapon.png";
				break;
		}

		if (img) {
			img = `${baseDir}/${img}`;
			this.updateSource({img});
		}
	}


	prepareData() {
		super.prepareData();

		this.prepareQualities();
		this.prepareEffects();

		if (this.type === "talent") {
			this.prepareTalentData();
		}

	}


	prepareEffects() {
		if (!this.type === "enchantment") return;
		if (!this.system.effects) return;

		// These are technically qualities, although referred to as effects in
		// the source books
		for (const quality of this.system.effects.value ?? []) {
			quality.value = Number(quality.value);

			quality.label = game.i18n.localize(
				CONFIG.CONAN.weaponQualities[quality.type]
			);

			if (quality.value) {
				const regex = /X$/i;
				quality.label = quality.label.replace(regex, `${quality.value}`);
			}

			quality.description = game.i18n.localize(
				CONFIG.CONAN.qualitiesDescriptions[quality.type]
			);
		}
	}


	prepareQualities() {
		if (!this.system.qualities) return;

		if (this.type === "weapon") this.system.isShield = this.isShield();

		for (const quality of this.system.qualities.value ?? []) {
			quality.value = Number(quality.value);

			if (this.type === "armor") {
				quality.label = game.i18n.localize(
					CONFIG.CONAN.armorQualities[quality.type]
				);
			}
			else if (["display", "npcattack", "weapon"].includes(this.type)) {
				quality.label = game.i18n.localize(
					CONFIG.CONAN.weaponQualities[quality.type]
				);
			}

			if (quality.value) {
				const regex = /X$/i;
				quality.label = quality.label.replace(regex, `${quality.value}`);
			}

			quality.description = game.i18n.localize(
				CONFIG.CONAN.qualitiesDescriptions[quality.type]
			);
		}
	}


	prepareTalentData() {
		this.system.talentIdentifier = conan.utils.generateTalentIdentifier(this);
		this.system.multiRank = this.system.rank.max > 1;
	}


	async postItem() {
		const templateData = {
			actorId: "",
			canUseItem: false,
			data: await this.getChatData(),
			item: this.toObject(false),
		};

		let tokenId = "";

		// Actor doesn't exist if the Post button is used to post the item to chat
		if (this.actor) {
			templateData.actorId = this.actor.id;
			templateData.canUseItem = this.actor.canUseItemType(this.type);

			if (this.actor.isToken) {
				tokenId = this.actor.token.id;
			}
		}

		const template = `systems/conan2d20/templates/chat/${this.type}-card.hbs`;
		const html = await renderTemplate(template, templateData);

		const messageStyles = conan.utils.getMessageStyles();

		const chatData = {
			user: game.user.id,
			speaker: null,
			type: messageStyles.OTHER,
			content: html,
		};

		// Actor doesn"t exist if the Post button is used to post the item to chat
		if (this.actor) {
			chatData.speaker = ChatMessage.getSpeaker({
				actor: this.actor,
				token: this.actor.token,
			});
		}

		ChatMessage.create(chatData, {displaySheet: false}).then(msg => {
			msg.setFlag("conan2d20", "itemId", this._id);
			msg.setFlag("conan2d20", "tokenId", tokenId);
		});
	}

	async getChatData(htmlOptions = {}) {
		const itemType = this.type;

		const data = this[`_${itemType}ChatData`]();

		htmlOptions = {...htmlOptions, async: true};

		if (data) {
			data.description.value = await TextEditor.enrichHTML(
				data.description.value,
				htmlOptions
			);
		}

		return data;
	}

	canCauseDamage() {
		return (this.type === "weapon"
				|| this.type === "npcattack"
				|| this.type === "display"
		);
	}

	getQuality(name) {
		const data = foundry.utils.duplicate(this.system);

		return (data.qualities.value ?? []).find(q => q.type === name);
	}

	getSoak() {
		const quality = this.getQuality("shieldx");
		const soak = quality !== undefined ? parseInt(quality.value) : 0;
		return soak;
	}

	isShield() {
		return this.getQuality("shieldx") ? true : false;
	}

	triggerDamageRoll() {
		const options = {
			item: this,
		};

		new conan.apps.DamageRoller(this.actor, options).render(true);
	}

	triggerSoakRoll() {
		const options = {
			type: "cover",
			itemName: this.name,
			soak: this.getSoak(),
		};

		new conan.apps.SoakDiceRoller(this.actor, options).render(true);
	}

	skillToUse(actorType) {
		// TODO This could be reworked into a more generic method for returning
		// the default skill used for any item
		if (actorType === "npc") {
			if (this.system.attackType === "melee") {
				return "cmb";
			}
			else if (this.system.attackType === "ranged") {
				return "cmb";
			}
			else if (this.system.attackType === "threaten") {
				return "scl";
			}
		}

		if (actorType === "character") {
			if (this.system.skillOverride && this.system.skillOverride !== "") {
				return this.system.skillOverride;
			}
			else if (this.system.weaponType === "melee") {
				return "mel";
			}
			else if (this.system.weaponType === "ranged") {
				return "ran";
			}
			else if (this.type === "display") {
				return this.system.skill;
			}
			else if (this.type === "spell") {
				return "sor";
			}
		}
	}

	/* -------------------------------------------- */

	_actionChatData() {
		if (this.type !== "action") {
			throw new Error(
				"tried to create an action chat data for a non-action item"
			);
		}

		const data = foundry.utils.duplicate(this.system);

		const props = [
			CONFIG.CONAN.actionTypes[data.actionType],
		];


		data.properties = props.filter(p => p);
		data.qualities = [];

		if (data.isMovementAction) {
			data.qualities.push({
				label: game.i18n.localize("CONAN.Item.Action.Movement.label"),
				description: game.i18n.localize("CONAN.Item.Action.Movement.tooltip"),
			});
		}

		return data;
	}

	_enchantmentChatData() {
		if (this.type !== "enchantment") {
			throw new Error("tried to create a spell chat data for a non-spell item");
		}

		const data = foundry.utils.duplicate(this.system);
		const effects = data.effects.value;
		const properties = [];
		const details = [];

		const qualities = [];
		if ((effects || []).length !== 0) {
			let effectsObject;
			for (let i = 0; i < effects.length; i += 1) {
				if (effects[i].value) {
					effectsObject = {
						label: `${effects[i].label} ${effects[i].value}`
							|| effects[i].label.charAt(0).toUpperCase()
								+ effects[i].label.slice(1),
						description:
							CONFIG.CONAN.qualitiesDescriptions[
								effects[i].label.replace(" ", "").toLowerCase()
							] || "",
					};
				}
				else {
					const labelN = effects[i].label;
					effectsObject = {
						label:
							CONFIG.CONAN.weaponQualities[labelN]
								|| effects[i].label.charAt(0).toUpperCase()
									+ effects[i].label.slice(1),
						description:
							CONFIG.CONAN.qualitiesDescriptions[
								effects[i].label.replace(" ", "").toLowerCase()
							] || "",
					};
				}
				qualities.push(effectsObject);
			}
		}
		const enchantmentType = {
			label: "CONAN.Item.Enchantment.Type.label",
			detail: CONFIG.CONAN.enchantmentTypes[data.enchantmentType],
		};
		details.push(enchantmentType);
		if (enchantmentType.detail === "Exploding Powder") {
			const enchantmentDamage = {
				label: "CONAN.Item.Enchantment.Damage.label",
				detail: `${data.damage.dice}`,
			};
			const enchantmentItem = {
				label: "CONAN.Item.Enchantment.Item.label",
				detail:
					CONFIG.CONAN.enchantmentExplodingItems[data.traits.explodingItem],
			};
			const enchantmentStrength = {
				label: "CONAN.Item.Enchantment.Strength.label",
				detail: CONFIG.CONAN.enchantmentStrengths[data.traits.strength],
			};
			details.push(enchantmentItem);
			details.push(enchantmentDamage);
			details.push(enchantmentStrength);
		}
		else if (enchantmentType.detail === "Blinding Powder") {
			const enchantmentDamage = {
				label: "CONAN.Item.Enchantment.Damage.label",
				detail: `${data.damage.dice}`,
			};
			const enchantmentStrength = {
				label: "CONAN.Item.Enchantment.Strength.label",
				detail: CONFIG.CONAN.enchantmentBlindingStrengths[data.traits.strength],
			};
			details.push(enchantmentStrength);
			details.push(enchantmentDamage);
		}
		else if (enchantmentType.detail === "Burning Liquid") {
			const enchantmentDamage = {
				label: "CONAN.Item.Enchantment.Damage.label",
				detail: `${data.damage.dice}`,
			};
			const enchantmentStrength = {
				label: "CONAN.Item.Enchantment.Volatility.label",
				detail: CONFIG.CONAN.enchantmentVolatilities[data.traits.volatility],
			};
			details.push(enchantmentDamage);
			details.push(enchantmentStrength);
		}
		else if (enchantmentType.detail === "Reinforced Fabric") {
			const enchantmentIngredients = {
				label: "CONAN.Item.Enchantment.Ingredients.label",
				detail: data.traits.ingredients,
			};
			const localize = game.i18n.localize.bind(game.i18n);
			if ((data.damage.hitLocation || []).length !== 0) {
				for (let i = 0; i < data.damage.hitLocation.value.length; i += 1) {
					properties.push(
						`${data.damage.hitLocation.value[i]} ${localize(
							"CONAN.Item.Armor.Coverage.label"
						)}`
					);
				}
			}
			data.properties = properties.filter(p => p !== null);
			details.push(enchantmentIngredients);
		}
		else if (enchantmentType.detail === "Upas-Glass") {
			const enchantmentCover = {
				label: "CONAN.Item.Enchantment.Cover.label",
				detail: `${data.damage.dice}`,
			};
			const enchantmentSize = {
				label: "CONAN.Item.Enchantment.Size.label",
				detail: CONFIG.CONAN.upasGlassSizes[data.traits.size],
			};
			details.push(enchantmentSize);
			details.push(enchantmentCover);
		}
		else if (enchantmentType.detail === "Talisman") {
			const talismanHindrance = {
				label: "CONAN.Item.Enchantment.Hindrance.label",
				detail: data.traits.hindrance,
			};
			const talismanType = {
				label: "CONAN.Item.Enchantment.Talisman.label",
				detail: CONFIG.CONAN.enchantmentTalismanTypes[data.traits.talismanType],
			};
			details.push(talismanHindrance);
			details.push(talismanType);
		}
		else {
			const enchantmentUse = {
				label: "CONAN.Item.Enchantment.LotusPollenUse.label",
				detail: CONFIG.CONAN.lotusPollenUses[data.traits.lotusPollenUse],
			};
			const enchantmentColor = {
				label: "CONAN.Item.Enchantment.LotusPollenColor.label",
				detail: CONFIG.CONAN.lotusPollenColors[data.traits.lotusPollenColor],
			};
			const enchantmentForm = {
				label: "CONAN.Item.Enchantment.LotusPollenForm.label",
				detail: CONFIG.CONAN.lotusPollenForms[data.traits.lotusPollenForm],
			};
			details.push(enchantmentUse);
			details.push(enchantmentColor);
			details.push(enchantmentForm);
		}

		data.itemDetails = details.filter(p => p !== null);
		data.qualities = qualities.filter(p => !!p);

		return data;
	}

	_homelandChatData() {
		if (this.type !== "homeland") {
			throw new Error(
				"tried to create homeland chat data for a non-homeland item"
			);
		}
		const data = foundry.utils.duplicate(this.system);
		return data;
	}

	_spellChatData() {
		if (this.type !== "spell") {
			throw new Error("tried to create a spell chat data for a non-spell item");
		}

		const data = foundry.utils.duplicate(this.system);
		const details = [];

		if (data.difficulty.includes) {
			const difficultyIncludes = {
				label: "CONAN.difficultyIncludesLabel",
				detail: data.difficulty.includes,
			};
			details.push(difficultyIncludes);
		}

		if (data.duration) {
			const duration = {
				label: "CONAN.spellDurationLabel",
				detail: data.duration,
			};
			details.push(duration);
		}

		if (data.cost) {
			const cost = {
				label: "CONAN.spellCostLabel",
				detail: data.cost,
			};
			details.push(cost);
		}

		if (data.notes) {
			const notes = {
				label: "CONAN.spellNotesHeader",
				detail: data.notes,
			};
			details.push(notes);
		}

		data.itemDetails = details.filter(p => p !== null);

		return data;
	}

	_armorChatData() {
		if (this.type !== "armor") {
			throw new Error(
				"tried to create an armor chat data for a non-armor item"
			);
		}

		const data = foundry.utils.duplicate(this.system);

		data.itemDetails = [];
		data.properties = [];
		data.qualities = data.qualities.value;

		data.itemDetails.push({
			label: "CONAN.Item.Armor.Type.label",
			detail: CONFIG.CONAN.armorTypes[data.armorType],
		});
		data.itemDetails.push({
			label: "CONAN.Item.Armor.Soak.label",
			detail: `${data.soak}`,
		});

		for (const location of data.coverage.value) {
			data.properties.push(CONFIG.CONAN.coverageTypes[location]);
		}

		return data;
	}

	_kitChatData() {
		if (this.type !== "kit") {
			throw new Error("tried to create a kit chat data for a non-kit item");
		}

		const localize = game.i18n.localize.bind(game.i18n);
		const data = foundry.utils.duplicate(this.system);

		data.kitTypeString = CONFIG.CONAN.kitTypes[data.kitType];

		data.properties = [
			data.kitTypeString,
			`${data.uses.value}/${data.uses.max} ${localize("CONAN.kitUsesLabel")}`,
		];
		data.qualities = [];

		data.hasCharges = data.uses.value >= 0;

		return data;
	}

	_transportationChatData() {
		if (this.type !== "transportation") {
			throw new Error(
				"tried to create a transportation chat data for a non-transpo item"
			);
		}

		const details = [];
		const data = foundry.utils.duplicate(this.system);

		if (data.category) {
			const category = {
				label: "CONAN.Item.Transportation.Category.label",
				detail: CONFIG.CONAN.transpoCategories[data.category],
			};
			details.push(category);
		}
		if (data.transpoType) {
			let ttype;
			if (data.category === "mounts") {
				ttype = {
					label: "CONAN.Item.Transportation.Type.label",
					detail: CONFIG.CONAN.transpoMountTypes[data.transpoType],
				};
			}
			else if (data.category === "carts") {
				ttype = {
					label: "CONAN.Item.Transportation.Type.label",
					detail: CONFIG.CONAN.transpoCartTypes[data.transpoType],
				};
			}
			else {
				ttype = {
					label: "CONAN.Item.Transportation.Type.label",
					detail: CONFIG.CONAN.transpoBoatTypes[data.transpoType],
				};
			}
			details.push(ttype);
		}
		if (data.passengers.max) {
			const capacity = {
				label: "CONAN.Item.Transportation.PassengerCapacity.label",
				detail: String(data.passengers.max),
			};
			details.push(capacity);
		}
		if (data.capabilities !== "") {
			const capabilities = {
				label: "CONAN.Item.Transportation.Capabilities.label",
				detail: CONFIG.CONAN.transpoCapabilities[data.capabilities],
			};
			details.push(capabilities);
		}
		if (data.animals !== "") {
			const animals = {
				label: "CONAN.Item.Transportation.Animals.label",
				detail: CONFIG.CONAN.transpoAnimals[data.animals],
			};
			details.push(animals);
		}

		data.itemDetails = details.filter(p => p !== null);

		return data;
	}

	_talentChatData() {
		if (this.type !== "talent") {
			throw new Error(
				"tried to create a talent chat data for a non-talent item"
			);
		}

		const data = foundry.utils.duplicate(this.system);

		const props = [
			data.talentType ? CONFIG.CONAN.talentTypes[data.talentType] : null,
			CONFIG.CONAN.skills[data.linkedSkill],
			data.rank.max > 1
				? `Rank ${data.rank.value || 1}/${data.rank.max || 1}`
				: null,
		];

		data.properties = props.filter(p => p);

		return data;
	}

	_weaponChatData() {
		if (this.type !== "weapon") {
			throw new Error(
				"tried to create a weapon chat data for a non-weapon item"
			);
		}

		const data = foundry.utils.duplicate(this.system);

		const qualities = data.qualities.value;
		const properties = [];
		const details = [];

		const shield = qualities.find(q => q.type === "shieldx");
		if (shield) {
			data.hasShieldSoak = true;
			data.shieldSoak = parseInt(shield.value) ?? 1;
		}

		const weaponDamage = {
			label: "CONAN.Item.Weapon.BaseDamage.label",
			detail: `${data.damage.dice}`,
		};
		details.push(weaponDamage);

		let weaponRange;
		if (data.weaponType === "ranged") {
			weaponRange = {
				label: "CONAN.Item.Weapon.Range.label",
				detail: CONFIG.CONAN.weaponRanges[data.range],
			};
		}
		else {
			weaponRange = {
				label: "CONAN.Item.Weapon.Reach.label",
				detail: CONFIG.CONAN.weaponReaches[data.range],
			};
		}
		details.push(weaponRange);

		if (data.size) {
			properties.push(CONFIG.CONAN.weaponSizes[data.size]);
		}

		data.properties = properties.filter(p => !!p);
		data.itemDetails = details.filter(p => p !== null);
		data.qualities = qualities.filter(p => !!p);

		return data;
	}

	_npcattackChatData() {
		if (this.type !== "npcattack") {
			throw new Error(
				"tried to create an NPC Attack chat data for an incorrect item"
			);
		}

		const data = foundry.utils.duplicate(this.system);
		const qualities = data.qualities.value;
		const details = [];

		for (const quality of qualities) {
			if (quality.type === "shieldx") {
				data.hasShieldSoak = true;
				data.shieldSoak = parseInt(quality.value) || 1;
			}
		}

		const attackDamage = {
			label: "CONAN.damageLabel",
			detail: `${data.damage.dice}`,
		};
		details.push(attackDamage);

		const attackType = {
			label: "CONAN.Item.NpcAttack.DamageType.label",
			detail: CONFIG.CONAN.damageTypes[data.damage.type],
		};
		details.push(attackType);

		let attackRange;
		if (data.attackType === "ranged") {
			attackRange = {
				label: "CONAN.rangeLabel",
				detail: CONFIG.CONAN.weaponRanges[data.range],
			};
		}
		else if (data.attackType === "threaten") {
			attackRange = {
				label: "CONAN.rangeLabel",
				detail: CONFIG.CONAN.weaponRanges[data.range],
			};
		}
		else {
			attackRange = {
				label: "CONAN.reachLabel",
				detail: CONFIG.CONAN.weaponReaches[data.range],
			};
		}
		details.push(attackRange);

		data.itemDetails = details.filter(p => p !== null);
		data.qualities = qualities.filter(p => !!p);

		return data;
	}

	_miscellaneousChatData() {
		if (this.type !== "miscellaneous") {
			throw new Error(
				"tried to create an miscellaneous chat data for a non-miscellaneous item"
			);
		}
		const data = foundry.utils.duplicate(this.system);
		return data;
	}

	_npcactionChatData() {
		if (this.type !== "npcaction") {
			throw new Error(
				"tried to create an npcaction chat data for a non-npcaction item"
			);
		}

		const data = foundry.utils.duplicate(this.system);

		const props = [CONFIG.CONAN.npcActionTypes[data.actionType]];

		data.properties = props.filter(p => p);
		data.qualities = [];

		return data;
	}

	_displayChatData() {
		if (this.type !== "display") {
			throw new Error(
				"tried to create a display chat data for a non-display item"
			);
		}

		const data = foundry.utils.duplicate(this.system);

		const qualities = data.qualities.value;
		const properties = [];
		const details = [];

		const displaySkill = {
			label: "CONAN.Item.Display.Skill.label",
			detail: CONFIG.CONAN.skills[data.skill],
		};
		details.push(displaySkill);

		const damageDice = data.damage.special
			? "X"
			: `${data.damage.dice}`;

		const displayDamage = {
			label: "CONAN.Item.Display.BaseDamage.label",
			detail: damageDice,
		};
		details.push(displayDamage);

		const displayRange = {
			label: "CONAN.rangeLabel",
			detail: CONFIG.CONAN.weaponRanges[data.range],
		};
		details.push(displayRange);

		data.properties = properties.filter(p => !!p);
		data.itemDetails = details.filter(p => p !== null);
		data.qualities = qualities.filter(p => !!p);

		return data;
	}
}

class ConanBaseItemSheet extends ItemSheet {

	/** @inheritdoc */
	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: options.classes.concat(["conan2d20", "item", "sheet"]),
			width: 700,
			height: 505,
			template: "systems/conan2d20/templates/items/item-sheet.hbs",
			resizable: false,
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-body",
					initial: "description",
				},
			],
			scrollY: [
				".requirement-table",
			],
		});
		return options;
	}

	/** @inheritdoc */
	get title() {
		return `[${this.item.type}] ${this.item.name}`;
	}

	/**
	 * Deletes an Item/Skill choice from this item, using the data stored
	 * on the target element
	 *
	 * @param {event} Event The triggered event
	 */
	_deleteChoiceItem(event) {
		if (!this.isEditable) return;

		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");
		const choicesKey = $(event.currentTarget).data("choices-key");

		const currentChoices = this.item.system[choicesKey].choices ?? [];

		const newChoices = [];
		for (const itemUuid of currentChoices) {
			if (itemUuid === deleteUuid) continue;
			newChoices.push(itemUuid);
		}

		const dataKey = `system.${choicesKey}.choices`;
		this.item.update({[dataKey]: newChoices});
	}

	/** @inheritdoc */
	_getHeaderButtons() {
		let buttons = super._getHeaderButtons();

		// Add "Post to chat" button
		buttons = [
			{
				label: "Post",
				class: "post",
				icon: "fas fa-comment",
				onclick: ev => this.item.postItem(ev),
			},
		].concat(buttons);

		return buttons;
	}

	_onAddTalentRequirement(event) {
		if (!this.isEditable) return;

		event.preventDefault();
		event.stopPropagation();

		new conan.apps.TalentRequirementEditor(this.item).render(true);
	}

	/** @inheritdoc */
	async _onChangeInput(event) {
		const choicesKey = $(event.currentTarget).data("choices-key");
		const isItem = $(event.currentTarget).data("is-item") === "true";

		// We only have to do something special if we're handling a multi-choice
		// datalist
		//
		if (event.target.list && choicesKey) {
			const options = event.target.list.options;
			const value = event.target.value;

			let uuid = null;
			for (const option of options) {
				if (option.value === value) {
					uuid = option.getAttribute("data-uuid");
					break;
				}
			}

			if (uuid === null) return;

			const currentChoices = this.item.system[choicesKey].choices ?? [];

			if (currentChoices.includes(uuid)) return; // No duplicates

			currentChoices.push(uuid);

			const choiceItems = [];
			for (const itemUuid of currentChoices) {
				if (isItem) {
					choiceItems.push(await fromUuid(itemUuid));
				}
				else {
					choiceItems.push(itemUuid);
				}
			}

			if (isItem) {
				choiceItems.sort((a, b) => a.name.localeCompare(b.name));
			}
			else {
				choiceItems.sort((a, b) => a.localeCompare(b));
			}

			const sortedChoiceUuids = isItem
				? choiceItems.map(item => item.uuid)
				: choiceItems;

			return this.item.update({[event.target.name]: sortedChoiceUuids});
		}

		return this._onSubmit(event);
	}

	async _onDeleteTalentRequirement(event) {
		if (this.item.type !== "talent") return;

		event.preventDefault();
		event.stopPropagation();

		const requirementIndex = Number(
			event.currentTarget.getAttribute("data-requirement-index")
		);

		if (Number.isInteger(requirementIndex)) {
			const requirements = this.item?.system?.requirements ?? [];
			const newRequirements = [];
			for (let i = 0; i < requirements.length; i++) {
				if (i === requirementIndex) continue;
				newRequirements.push(requirements[i]);
			}

			this.item.update({"system.requirements": newRequirements});
		}
	}

	async _onEditTalentRequirement(event) {
		if (this.item.type !== "talent") return;

		event.preventDefault();
		event.stopPropagation();

		const editIndex = Number(
			event.currentTarget.getAttribute("data-requirement-index")
		);

		if (Number.isInteger(editIndex)) {
			new conan.apps.TalentRequirementEditor(this.item, {editIndex}).render(true);
		}
	}

	/** @inheritdoc */
	_onSubmit(event) {
		switch (this.item.type) {
			case "archetype": {
				const updateData = this._getSubmitData();

				delete updateData["system.careerSkill.choices"];
				delete updateData["system.electiveSkill.choices"];
				delete updateData["system.mandatorySkill.choices"];
				delete updateData["system.careerTalent.choices"];

				this.item.update(updateData);
				break;
			}
			case "aspect": {
				const updateData = this._getSubmitData();

				delete updateData["system.mandatoryAttribute.choices"];
				delete updateData["system.optionalAttribute.choices"];

				this.item.update(updateData);
				break;
			}
			case "caste": {
				const updateData = this._getSubmitData();

				delete updateData["system.story.choices"];
				delete updateData["system.talent.choices"];

				this.item.update(updateData);
				break;
			}
			case "education": {
				const updateData = this._getSubmitData();

				delete updateData["system.electiveSkill.choices"];
				delete updateData["system.mandatorySkill.choices"];

				this.item.update(updateData);
				break;
			}
			case "homeland": {
				const updateData = this._getSubmitData();

				delete updateData["system.language.choices"];
				delete updateData["system.talent.choices"];

				this.item.update(updateData);
				break;
			}
			case "nature": {
				const updateData = this._getSubmitData();

				delete updateData["system.electiveSkill.choices"];
				delete updateData["system.mandatorySkill.choices"];

				this.item.update(updateData);
				break;
			}
			case "npcattack": {
				const updateData = this._getSubmitData();

				if (updateData["system.attackType"] === "threaten") {
					updateData["system.damage.type"] = "mental";
				}
				else {
					updateData["system.damage.type"] = "physical";
				}

				this.item.update(updateData);
				break;
			}
			case "warstory": {
				const updateData = this._getSubmitData();

				delete updateData["system.skills.choices"];

				this.item.update(updateData);
				break;
			}
			default:
				super._onSubmit(event);
		}
	}

	/** @inheritdoc */
	activateListeners(html) {
		// add row to spell alternate effects
		html.find(".alt-row-add").click(event => this.insertAltRow(event));

		// delete row from spell alternate effects
		html.find(".alt-row-delete").click(event => this.deleteAltRow(event));

		html.find(".delete-choice").click(event => this._deleteChoiceItem(event));

		// save checkbox changes
		html.find("input[type=\"checkbox\"]").change(event => this._onSubmit(event));

		// activate trait selector
		html.find(".trait-selector").click(event => this.onTraitSelector(event));

		// add row to spell momentum spends
		html.find(".spend-row-add").click(event => this.insertSpendRow(event));

		// delete row from spell momentum spends
		html.find(".spend-row-delete").click(event => this.deleteSpendRow(event));

		html.find(".add-talent-requirement").click(event => this._onAddTalentRequirement(event));
		html.find(".item-delete-requirement").click(event => this._onDeleteTalentRequirement(event));
		html.find(".item-edit-requirement").click(event => this._onEditTalentRequirement(event));

		super.activateListeners(html);
	}

	deleteAltRow(_event) {
		try {
			const table = document.getElementById("altEffects");
			const toDelete = table.rows.length - 1;
			const key = `system.effects.alternative.-=${[toDelete]}`;
			this.item.update({[key]: null});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	deleteSpendRow(_event) {
		try {
			const table = document.getElementById("spellSpends");
			const toDelete = table.rows.length - 1;
			const key = `system.effects.momentum.-=${[toDelete]}`;
			this.item.update({[key]: null});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	/** @inheritdoc */
	async getData(options) {
		const data = await super.getData(options);

		const {type} = this.item;

		foundry.utils.mergeObject(data, {
			CONFIG: CONFIG.CONAN,
			detailsTemplate: () => `items/${type}-details`,
			requirementsTemplate: () => `items/${type}-requirements`,
			sidebarTemplate: () => `items/${type}-sidebar`,
			hasNoDetails: [
				"language",
				"miscellaneous",
			].includes(type),
			hasRequirements: type === "talent",
			hasSidebar: [
				"armor",
				"kit",
				"miscellaneous",
				"transportation",
				"weapon",
			].includes(type),
		});

		data.descriptionHTML = await TextEditor.enrichHTML(
			this.item.system.description.value,
			{
				async: true,
			}
		);

		switch (type) {
			case "archetype": await this.getArchetypeConfigs(data); break;
			case "aspect": await this.getBackgroundAttributeConfigs(data); break;
			case "caste": await this.getCasteData(data); break;
			case "education": await this.getBackgroundSkillConfigs(data); break;
			case "homeland": await this.getHomelandData(data); break;
			case "nature": await this.getBackgroundSkillConfigs(data); break;
			case "talent": await this.getTalentData(data); break;
			case "warstory": await this.getSkillsConfig(data); break;
		}

		return data;
	}

	/**
	 * Creates the configurations required for some classes of items which
	 * have both Mandatory Skills and Elective Skill choices
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getArchetypeConfigs(data) {
		await this.getBackgroundSkillConfigs(data);

		// Elective Skills
		//
		const [selectedCareerSkills, availableCareerSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.careerSkill.choices ?? []
			);

		data.careerSkillsConfig = {
			availableItems: availableCareerSkills,
			choicesKey: "careerSkill",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.CareerSkill.label"),
			name: "system.careerSkill.choices",
			prompt: game.i18n.localize("CONAN.Item.CareerSkill.prompt"),
			selectedItems: selectedCareerSkills,
		};

		const [selectedTalents, availableTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.skillTalents(false),
				this.item.system.careerTalent.choices ?? []
			);

		data.careerTalentConfig = {
			availableItems: availableTalents,
			choicesKey: "careerTalent",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Archetype.CareerTalent.label"),
			name: "system.careerTalent.choices",
			prompt: game.i18n.localize("CONAN.Item.Archetype.CareerTalent.prompt"),
			selectedItems: selectedTalents,
		};
	}

	/**
	 * Creates configurations data required for caste item sheets
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getCasteData(data) {
		// Caste Talents
		const [selectedTalents, availableTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.casteTalents(false),
				this.item.system.talent.choices ?? []
			);

		data.casteTalentConfig = {
			availableItems: availableTalents,
			choicesKey: "talent",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Caste.Talents.label"),
			name: "system.talent.choices",
			prompt: game.i18n.localize("CONAN.Item.Caste.Talents.prompt"),
			selectedItems: selectedTalents,
		};

		// Caste Stories
		const [selectedStories, availableStories] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.stories(false),
				this.item.system.story.choices ?? []
			);

		data.casteStoriesConfig = {
			availableItems: availableStories,
			choicesKey: "story",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Caste.Stories.label"),
			name: "system.story.choices",
			prompt: game.i18n.localize("CONAN.Item.Caste.Stories.prompt"),
			selectedItems: selectedStories,
		};
	}

	/**
	 * Creates configurations data required for homeland item sheets
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getHomelandData(data) {
		// Homeland Talents
		const [selectedTalents, availableTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.homelandTalents(false),
				this.item.system.talent.choices ?? []
			);

		data.homelandTalentConfig = {
			availableItems: availableTalents,
			choicesKey: "talent",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Homeland.Talents.label"),
			name: "system.talent.choices",
			prompt: game.i18n.localize("CONAN.Item.Homeland.Talents.prompt"),
			selectedItems: selectedTalents,
		};

		// Homeland Languages
		const [selectedLanguages, availableLanguages] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.languages(false),
				this.item.system.language.choices ?? []
			);

		data.homelandLanguageConfig = {
			availableItems: availableLanguages,
			choicesKey: "language",
			isItem: true,
			label: game.i18n.localize("CONAN.Item.Homeland.Languages.label"),
			name: "system.language.choices",
			prompt: game.i18n.localize("CONAN.Item.Homeland.Languages.prompt"),
			selectedItems: selectedLanguages,
		};
	}

	/**
	 * Creates the configurations required for some classes of items which
	 * have both Mandatory and Optional Attribute choices
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getBackgroundAttributeConfigs(data) {
		// Optional Attributes
		//
		const [selectedOptionalAttributes, availableOptionalAttributes] =
			conan.utils.getDedupedSelectedAttributes(
				CONFIG.CONAN.sortedAttributes,
				this.item.system.optionalAttribute.choices ?? []
			);

		data.optionalAttributesConfig = {
			availableItems: availableOptionalAttributes,
			choicesKey: "optionalAttribute",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.OptionalAttributes.label"),
			name: "system.optionalAttribute.choices",
			prompt: game.i18n.localize("CONAN.Item.OptionalAttributes.prompt"),
			selectedItems: selectedOptionalAttributes,
		};

		// Mandatory Attributes
		//
		const [selectedMandatoryAttributes, availableMandatoryAttributes] =
			conan.utils.getDedupedSelectedAttributes(
				CONFIG.CONAN.sortedAttributes,
				this.item.system.mandatoryAttribute.choices ?? []
			);

		data.mandatoryAttributesConfig = {
			availableItems: availableMandatoryAttributes,
			choicesKey: "mandatoryAttribute",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.MandatoryAttributes.label"),
			name: "system.mandatoryAttribute.choices",
			prompt: game.i18n.localize("CONAN.Item.MandatoryAttributes.prompt"),
			selectedItems: selectedMandatoryAttributes,
		};
	}

	/**
	 * Creates the configurations required for some classes of items which
	 * have both Mandatory Skills and Elective Skill choices
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getBackgroundSkillConfigs(data) {
		// Elective Skills
		//
		const [selectedElectiveSkills, availableElectiveSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.electiveSkill.choices ?? []
			);

		data.electiveSkillsConfig = {
			availableItems: availableElectiveSkills,
			choicesKey: "electiveSkill",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.ElectiveSkills.label"),
			name: "system.electiveSkill.choices",
			prompt: game.i18n.localize("CONAN.Item.ElectiveSkills.prompt"),
			selectedItems: selectedElectiveSkills,
		};

		// Mandatory Skills
		//
		const [selectedMandatorySkills, availableMandatorySkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.mandatorySkill.choices ?? []
			);

		data.mandatorySkillsConfig = {
			availableItems: availableMandatorySkills,
			choicesKey: "mandatorySkill",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.MandatorySkills.label"),
			name: "system.mandatorySkill.choices",
			prompt: game.i18n.localize("CONAN.Item.MandatorySkills.prompt"),
			selectedItems: selectedMandatorySkills,
		};
	}

	/**
	 * Creates the configuration required for some classes of items which
	 * have a single Skill Improvement selector
	 *
	 * @param {data} Object Item Sheet context data being created by getData()
	 * @returns {Promise}
	 */
	async getSkillsConfig(data) {
		const [selectedSkills, availableSkills] =
			conan.utils.getDedupedSelectedSkills(
				CONFIG.CONAN.sortedSkills,
				this.item.system.skills.choices ?? []
			);

		data.skillImprovementsConfig = {
			availableItems: availableSkills,
			choicesKey: "skills",
			isItem: false,
			label: game.i18n.localize("CONAN.Item.SkillImprovements.label"),
			name: "system.skills.choices",
			prompt: game.i18n.localize("CONAN.Item.SkillImprovements.prompt"),
			selectedItems: selectedSkills,
		};
	}

	async getTalentData(data) {
		data.requirements = foundry.utils.duplicate(data.data?.system?.requirements ?? []);
		for (const requirement of data.requirements) {
			if (requirement.type === "talent") {
				requirement.showMin = requirement.talents.length > requirement.min;

				for (const talent of requirement.talents) {
					const requiredTalent = (await conan.compendiums.talents(undefined, false)).find(
						t => t.uuid === talent.uuid
					);

					if (!requiredTalent) {
						ui.notifications.error(
							game.i18n.format("CONAN.Item.Talent.Error.RequiredTalentMissing",
								{
									talentName: this.item.name,
									missingUuid: talent.uuid,
								}
							),
							{ permanent: true }
						);
					}

					talent.name = requiredTalent?.name ?? "ERROR: MISSING TALENT";
					talent.showRequiredRanks = talent.rank > 1;
				}
			}
		}
	}

	insertAltRow(_event) {
		try {
			const table = document.getElementById("altEffects");
			const itemId = this.item._id;
			const index = table.rows.length - 1;
			const key = `system.effects.alternative.${[index + 1]}`;
			this.item.update({
				id: itemId,
				[key]: {type: "", difficulty: "", effect: ""},
			});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	insertSpendRow(_event) {
		try {
			const table = document.getElementById("spellSpends");
			const itemId = this.item._id;
			const index = table.rows.length - 1;
			const key = `system.effects.momentum.${[index + 1]}`;
			this.item.update({
				id: itemId,
				[key]: {type: "", difficulty: "", effect: ""},
			});
		}
		catch(e) {
			ui.notifications.error(e);
		}
	}

	onTraitSelector(event) {
		event.preventDefault();
		const a = $(event.currentTarget);
		const options = {
			name: a.parents("label").attr("for"),
			title: a.parent().text().trim(),
			choices: CONFIG.CONAN[a.attr("data-options")],
			hasValues: a.attr("data-has-values") === "true",
			allowEmptyValues: a.attr("data-allow-empty-values") === "true",
		};
		new conan.apps.TraitSelector(this.item, options).render(true);
	}
}

class ConanBaseActorSheet extends ActorSheet {
	// Default non-attack action sections to be collapsed by default
	_hiddenTablesLut = {
		standard: true,
		minor: true,
		reaction: true,
		free: true,
	};

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			scrollY: [
				".sheet-sidebar",
				".skills-pane",
				".character-pane",
				".talents-pane",
				".inventory-pane",
				".actions-pane",
				".sheet-body",
			],
		});
	}

	/** @inheritdoc */
	get title() {
		return `[${this.actor.type}] ${this.actor.name}`;
	}

	async getData(options) {
		// The Actor"s data
		const source = this.actor.toObject();
		const actorData = this.actor.toObject(false);

		const context = {
			actor: actorData,
			attributes: CONFIG.CONAN.attributeLabels,
			conditions: CONFIG.CONAN.conditionTypes,
			CONFIG: CONFIG.CONAN,
			cssClass: this.actor.isOwner ? "editable" : "locked",
			editable: this.isEditable,
			hiddenTables: this._hiddenTablesLut,
			hasType: ["mount", "npc"].includes(this.actor.type),
			isCharacter: this.actor.type === "character",
			isGM: game.user.isGM,
			isMount: this.actor.type === "mount",
			isNPC: this.actor.type === "npc",
			isTransport: this.actor.type === "transport",
			items: actorData.items,
			limited: this.actor.limited,
			options: this.options,
			owner: this.actor.isOwner,
			source: source.system,
			system: actorData.system,
		};

		context.biographyHTML = await TextEditor.enrichHTML(
			context.system.details.biography.value,
			{
				secrets: this.actor.isOwner,
				async: true,
				relativeTo: this.actor,
			}
		);

		// Update Attribute labels
		if (context.system.attributes !== undefined) {
			for (const [a, atr] of Object.entries(context.system.attributes)) {
				atr.label = CONFIG.CONAN.attributeLabels[a];
				atr.tooltip = CONFIG.CONAN.attributeTooltips[a];
			}
		}

		if (context.system.skills !== undefined) {
			for (const [s, skill] of Object.entries(context.system.skills)) {
				skill.label = CONFIG.CONAN.skills[s];
				skill.tooltip = CONFIG.CONAN.skillTooltips[s];
			}
		}

		this._prepareItems(context);
		this._addConditionData(context);

		return context;
	}

	activateListeners(html) {
		// Pad field width
		html.find("[data-wpad]").each((i, e) => {
			const text = e.tagName === "INPUT" ? e.value : e.innerText;
			const w = (text.length * parseInt(e.getAttribute("data-wpad"), 10)) / 2;
			e.setAttribute("style", `flex: 0 0 ${w}px`);
		});

		// Item summaries
		html.find(".item .item-name h4").click(event => {
			event.preventDefault();
			const li = $(event.currentTarget).parent().parent();
			this._onItemSummary(li);
		});

		html
			.find(".item-control__attack")
			.click(event => this._onClickAttack(event));

		html
			.find(".item-control__damage")
			.click(event => this._onClickDamage(event));

		html.find(".item-control__shield").click(event => this._onClickSoak(event));

		// Hideable sections
		html.find(".hideable-items").click(event => {
			this._onHideSection(event, ".item-list", ".item-table");
		});
		html.find(".hideable-skills").click(event => {
			this._onHideSection(event, ".grid-container", ".skill-table");
		});

		html
			.find("[data-item-id].item .item-image")
			.click(event => this._onPostItem(event));

		// Toggle equip
		html.find(".item-toggle-equip").click(ev => {
			const f = $(ev.currentTarget);
			const itemId = f.parents(".item").attr("data-item-id");
			const active = f.hasClass("active");
			const equipped = !active;

			const item = this.actor.items.get(itemId);

			// if stowed, update stowage value in container as equipping an item
			// automatically removes it from stowage
			const stowedIn = item.system.stowedIn;
			if (stowedIn !== "") {
				let itemEncumbrance = parseInt(item.system.encumbrance) || 0;

				let originalStowageValue = this.actor.getEmbeddedDocument(
					"Item",
					stowedIn
				).system.stowage.value;

				let newStowage = originalStowageValue - itemEncumbrance;
				newStowage = newStowage < 0 ? 0 : newStowage;

				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: stowedIn,
						"system.stowage.value": newStowage,
					},
				]);
			}

			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.equipped": equipped,
					"system.stowedIn": "",
				},
			]);
		});

		html.find(".item-toggle-broken").click(ev => {
			const f = $(ev.currentTarget);
			const itemId = f.parents(".item").attr("data-item-id");
			const active = f.hasClass("active");
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.broken": !active,
				},
			]);
		});

		html.find(".trait-selector").click(ev => this._onTraitSelector(ev));

		html.find(".item-create").click(ev => this._onItemCreate(ev));

		html.find(".item-edit").click(ev => {
			const itemId = $(ev.currentTarget).parents(".item").attr("data-item-id");
			const item = this.actor.items.get(itemId);

			return item.sheet.render(true);
		});

		html.find(".add-gold").click(() => {
			const updateActorData = {};
			updateActorData["system.resources.gold.value"] =
				this.actor.system.resources.gold.value + 1;
			this.actor.update(updateActorData);
		});

		html.find(".subtract-gold").click(() => {
			const updateActorData = {};
			if (this.actor.system.resources.gold.value <= 0) {
				return;
			}
			updateActorData["system.resources.gold.value"] =
				this.actor.system.resources.gold.value - 1;
			this.actor.update(updateActorData);
		});

		html.find(".consumable-increase").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.uses.value": Number(item.system.uses.value) + 1,
				},
			]);
		});

		html.find(".consumable-decrease").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			if (Number(item.system.uses.value) > 0) {
				this.actor.updateEmbeddedDocuments("OwnedItem", [
					{
						_id: itemId,
						"system.uses.value": Number(item.system.uses.value) - 1,
					},
				]);
			}
		});
		html.find(".mount-increase-pass").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.passengers.value":
						Number(item.system.passengers.value) + 1,
				},
			]);
		});

		html.find(".mount-decrease-pass").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			if (Number(item.system.passengers.value) > 0) {
				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.passengers.value":
							Number(item.system.passengers.value) - 1,
					},
				]);
			}
		});
		html.find(".item-increase-quantity").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.quantity": Number(item.system.quantity) + 1,
				},
			]);

			// if stowed, update stowage value in container
			const stowedIn = item.system.stowedIn;
			if (stowedIn && stowedIn !== "") {
				let itemEncumbrance = parseInt(item.system.encumbrance) || 0;

				let originalStowageValue = this.actor.getEmbeddedDocument(
					"Item",
					stowedIn
				).system.stowage.value;

				let newStowage = originalStowageValue + itemEncumbrance;

				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: stowedIn,
						"system.stowage.value": newStowage,
					},
				]);
			}
		});

		html.find(".item-decrease-quantity").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			if (Number(item.system.quantity) > 0) {
				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.quantity": Number(item.system.quantity) - 1,
					},
				]);

				// if stowed, update stowage value in container
				const stowedIn = item.system.stowedIn;
				if (stowedIn && stowedIn !== "") {
					let itemEncumbrance = parseInt(item.system.encumbrance) || 0;

					let originalStowageValue = this.actor.getEmbeddedDocument(
						"Item",
						stowedIn
					).system.stowage.value;

					let newStowage = originalStowageValue - itemEncumbrance;
					newStowage = newStowage < 0 ? 0 : newStowage;

					this.actor.updateEmbeddedDocuments("Item", [
						{
							_id: stowedIn,
							"system.stowage.value": newStowage,
						},
					]);
				}
			}
		});

		html.find(".item-decrease-uses").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");

			const item = this.actor.getEmbeddedDocument("Item", itemId);

			let uses = Number(item.system.uses.value);

			if (uses > 0) {
				uses -= 1;

				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.uses.value": uses,
					},
				]);
			}
		});

		html.find(".item-increase-uses").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);

			let maxUses = parseInt(item.system.uses.max);

			if (isNaN(maxUses) || item.system.uses.value < maxUses) {
				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.uses.value": Number(item.system.uses.value) + 1,
					},
				]);
			}
		});

		html.find(".item-delete").click(event => {
			event.preventDefault();

			const li = $(event.currentTarget).parents(".item");
			const itemId = li.attr("data-item-id");

			this._onItemDelete(itemId);
		});

		html.find(".item-stowage-view").mouseup(event => this._onSendItem(event));

		html.find(".fa-dice-d20.rollable").click(event => {
			this._onRollSkillCheck(event);
		});

		html.find(".skill-name.rollable").click(event => {
			this._onRollSkillCheck(event);
		});

		html
			.find(".wounds")
			.on("click contextmenu", this._onClickWounded.bind(this));

		this._contextMenu(html);

		// Handle default listeners last so system listeners are triggered first
		super.activateListeners(html);
	}

	async _onApplyDamage(event) {
		event.preventDefault();
		event.stopPropagation();
		return new conan.apps.ApplyDamage({targets: [this.actor]}).render(true);
	}

	async _onClickAttack(event) {
		event.preventDefault();
		event.stopPropagation();
		const f = $(event.currentTarget);
		const itemId = f.parents(".item").attr("data-item-id");
		this.actor._executeAttack(itemId);
	}

	async _onClickDamage(event) {
		event.preventDefault();
		event.stopPropagation();
		const f = $(event.currentTarget);
		const itemId = f.parents(".item").attr("data-item-id");
		this._executeDamage(event, itemId);
	}

	async _onClickSoak(event) {
		event.preventDefault();
		const f = $(event.currentTarget);
		const itemId = f.parents(".item").attr("data-item-id");
		const shieldItem = this.actor.items.get(itemId);
		shieldItem.triggerSoakRoll();
	}

	_addConditionData(data) {
		data.conditions = foundry.utils.duplicate(CONFIG.CONAN.statusEffects);
		for (const condition of data.conditions) {
			const existing = this.actor.effects.find(
				e => e.statuses.has(condition.id)
			);

			if (existing) {
				condition.value = existing.flags.conan2d20.value;
				condition.existing = true;
			}
			else {
				condition.value = 0;
			}

			if (condition.flags.conan2d20.value === null) {
				condition.boolean = true;
			}
		}
	}

	_contextMenu(html) {
		ContextMenu.create(this, html, ".item", this._getItemContextOptions());
	}

	async _onClickWounded(event) {
		event.preventDefault();
		const field = $(event.currentTarget).parent().attr("data-target");
		const icon = $(event.currentTarget).attr("data-target");

		const actorData = foundry.utils.duplicate(this.actor);
		const dot = foundry.utils.getProperty(actorData, field);

		if (event.type === "click") {
			foundry.utils.setProperty(actorData, field, "wounded");
			foundry.utils.setProperty(actorData, icon, "fas fa-skull");
		}
		else if (event.type === "contextmenu") {
			if (dot === "wounded") {
				foundry.utils.setProperty(actorData, field, "treated");
				foundry.utils.setProperty(actorData, icon, "fas fa-star-of-life");
			}
			else if (dot === "treated") {
				foundry.utils.setProperty(actorData, field, "healed");
				foundry.utils.setProperty(actorData, icon, "far fa-circle");
			}
		}
		this.actor.update(actorData);
	}

	_getHeaderButtons() {
		const buttons = super._getHeaderButtons();

		if (this.actor.type !== "transport") {
			// Only have the Apply Damage button available on Token sheets, or
			// sheets with linked data
			//
			if (this.actor.isToken || this.actor.prototypeToken.actorLink) {
				buttons.unshift({
					class: "apply-damage",
					icon: "fa-solid fa-droplet",
					label: "Apply Damage",
					onclick: event => this._onApplyDamage(event),
				});
			}
		}

		return buttons;
	}

	_getItemContextOptions() {
		const me = this;

		const canEdit = function(li) {
			let result = false;
			const itemId = li.data("itemId");

			if (game.user.isGM) {
				result = true;
			}
			else {
				result = me.actor.items.find(item => item._id === itemId)
					? true
					: false;
			}

			return result;
		};

		return [
			{
				name: game.i18n.localize("CONAN.editItemTitle"),
				icon: "<i class=\"fas fa-edit\"></i>",
				condition: li => canEdit(li),
				callback: li => {
					const itemId = li.data("itemId");
					const item = this.actor.items.get(itemId);
					return item.sheet.render(true);
				},
			},
			{
				name: game.i18n.localize("CONAN.deleteItemTitle"),
				icon: "<i class=\"fas fa-trash\"></i>",
				condition: li => canEdit(li),
				callback: li => {
					const itemId = li.data("itemId");
					this._onItemDelete(itemId);
				},
			},
		];
	}

	async _onDropItem(event, data) {
		if ( !this.actor.isOwner ) return false;

		const item = await Item.implementation.fromDropData(data);
		const itemData = item.toObject();

		if (item.parent !== null) {
			if (item.parent.isOwner) item.delete();
		}

		return this._onDropItemCreate(itemData);
	}

	_onTraitSelector(event) {
		event.preventDefault();
		const a = $(event.currentTarget);
		const options = {
			name: a.parents("li").attr("for"),
			title: a.parent().parent().siblings("h4").text().trim(),
			choices: CONFIG.CONAN[a.attr("data-options")],
			hasValues: a.attr("data-has-values") === "true",
			allowEmptyValues: a.attr("data-allow-empty-values") === "true",
		};
		new conan.apps.TraitSelector(this.actor, options).render(true);
	}

	_onHideSection(event, holdingParent, toHide) {
		event.preventDefault();

		const hideableTable = $(event.currentTarget)
			.parentsUntil(holdingParent)
			.next(toHide);

		const iconElement = $(event.currentTarget).find("i");

		const hideableTableId = hideableTable.attr("data-hideable-table-id");

		if (this._hiddenTablesLut[hideableTableId]) {
			this._hiddenTablesLut[hideableTableId] =
				!this._hiddenTablesLut[hideableTableId];
		}
		else {
			this._hiddenTablesLut[hideableTableId] = true;
		}

		if (this._hiddenTablesLut[hideableTableId]) {
			hideableTable.slideUp(200);
		}
		else {
			hideableTable.slideDown(200);
		}
		iconElement.toggleClass("fa-caret-down");
		iconElement.toggleClass("fa-caret-right");
	}

	async _onItemCreate(event) {
		event.preventDefault();
		const header = event.currentTarget;
		const data = foundry.utils.duplicate(header.dataset);
		if (data.type === "talent") {
			data.name = `New ${data.talentType.capitalize()} ${data.type.capitalize()}`;
			foundry.utils.mergeObject(data, {"system.talentType": data.talentType});
		}
		else if (data.type === "action") {
			data.name = `New ${data.actionType.capitalize()}`;
			foundry.utils.mergeObject(data, {"system.actionType": data.actionType});
		}
		else if (data.type === "npcaction") {
			if (data.actionType === "doom") {
				data.name = `New ${game.i18n.localize("CONAN.doomSpendHeader")}`;
			}
			else if (data.actionType === "abilities") {
				data.name = `New ${game.i18n
					.localize("CONAN.specialAbilityHeader")
					.capitalize()}`;
			}
			foundry.utils.mergeObject(data, {"system.actionType": data.actionType});
		}
		else if (data.type === "npcattack") {
			data.name = `New ${game.i18n
				.localize("CONAN.attackHeader")
				.capitalize()}`;
			foundry.utils.mergeObject(data, {"system.actionType": data.actionType});
		}
		else {
			data.name = `New ${data.type.capitalize()}`;
		}
		const [newItem] = await this.actor.createEmbeddedDocuments("Item", [data]);
		newItem.sheet.render(true);
	}

	_onItemDelete(itemId) {
		const itemData = this.actor.getEmbeddedDocument("Item", itemId);

		renderTemplate(
			"systems/conan2d20/templates/dialog/delete-item-confirm.hbs",
			{name: itemData.name}
		).then(html => {
			new Dialog({
				title: game.i18n.localize("CONAN.Dialog.ConfirmItemDeletion.title"),
				content: html,
				buttons: {
					Yes: {
						icon: "<i class=\"fa fa-check\"></i>",
						label: "Yes",
						callback: async () => {
							await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
						},
					},
					Cancel: {
						icon: "<i class=\"fa fa-times\"></i>",
						label: "Cancel",
					},
				},
				default: "Yes",
			}).render(true);
		});
	}

	async _onSendItem(event, type) {
		event.preventDefault();
		const li = $(event.currentTarget).parents(".item");
		const itemId = li.attr("data-item-id");
		const item = this.actor.getEmbeddedDocument("Item", itemId);

		const destinations = game.actors.filter(
			a => a._id !== this.actor._id
				&& a.permission === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER
		);

		if (destinations.length > 0) {
			new conan.apps.SendItem({
				actor: this.actor,
				destinations,
				item,
			}).render(true);
		}
		else {
			ui.notifications.warn(
				game.i18n.localize("CONAN.sendItemNoDestinationsAvailable")
			);
		}
	}

	_onPostItem(event) {
		event.preventDefault();

		const itemId = $(event.currentTarget).parents(".item").attr("data-item-id");
		const item = this.actor.getEmbeddedDocument("Item", itemId);
		item.postItem(event);
	}

	_onRollSkillCheck(event) {
		event.preventDefault();

		const skill = $(event.currentTarget)
			.parents(".skill-entry-name")
			.attr("data-skill");

		this.actor._rollSkillCheck(skill);
	}

	async _onItemSummary(li) {
		const localize = game.i18n.localize.bind(game.i18n);
		const itemId = li.attr("data-item-id");
		const actionIndex = li.attr("data-action-index");

		let item;

		try {
			item = this.actor.getEmbeddedDocument("Item", itemId);
			if (!item.type) return;
		}
		catch(error) {
			conan.logger.error(error);
			return;
		}

		// Toggle summary
		if (li.hasClass("expanded")) {
			const summary = li.children(".item-summary");
			summary.slideUp(200, () => summary.remove());
		}
		else {
			let div;
			const chatData = await item.getChatData({secrets: this.actor.isOwner});
			if (!actionIndex) {
				div = $(
					`<div class="item-summary"><div class="item-description">${chatData.description.value}</div></div>`
				);
			}
			else {
				const flavor = conan.utils.getAttackDescription(item).description;
				div = $(
					`<div class="item-summary"><div class="item-description">${localize(
						flavor
					)}</div></div>`
				);
			}
			const details = $("<div class=\"item-details\"><br></div>");
			const props = $("<div class=\"item-properties tags\"></div>");

			if (chatData.itemDetails) {
				chatData.itemDetails.forEach(p => {
					const concat = `<div class="chat-item-detail"><b>${localize(
						p.label
					)}:</b> ${localize(p.detail)} </div>`;
					details.append(concat);
				});
				div.append(details);
			}
			div.append("</br>");
			if (chatData.properties) {
				chatData.properties
					.filter(p => typeof p === "string")
					.forEach(p => {
						props.append(
							`<span class="tag tag_secondary" data-tooltip="${localize(p)}">${localize(p)}</span>`
						);
					});
			}
			div.append(props);
			// append qualities (only style the tags if they contain description data)
			if (chatData.qualities && chatData.qualities.length) {
				chatData.qualities.forEach(p => {
					if (p.description) {
						props.append(
							`<span class="tag" data-tooltip="${localize(p.description)}">${localize(
								p.label
							)}</span>`
						);
					}
					else {
						props.append(`<span class="tag">${localize(p.label)}</span>`);
					}
				});
			}

			const buttons = $("<div class=\"item-buttons\"></div>");

			if (this.actor.canUseItemType(item.type)) {
				switch (item.type) {
					case "weapon":
						buttons.append(
							`<button class="tag weapon_damage execute-attack" data-action="weaponAttack">${localize(
								"CONAN.attackRollLabel"
							)}</button>`
						);
						buttons.append(
							`<button class="tag weapon_damage execute-damage" data-action="weaponDamage">${localize(
								"CONAN.damageRollLabel"
							)}</button>`
						);
						if (item.getSoak() > 0) {
							buttons.append(
								`<button class="tag weapon_soak execute-soak" data-action="shieldSoak">${localize(
									"CONAN.shieldSoakRollLabel"
								)}</button>`
							);
						}
						break;
					case "display":
						buttons.append(
							`<button class="tag weapon_damage execute-attack" data-action="weaponAttack">${localize(
								"CONAN.attackRollLabel"
							)}</button>`
						);
						buttons.append(
							`<button class="tag display_damage execute-damage" data-action="weaponDamage">${localize(
								"CONAN.damageRollLabel"
							)}</button>`
						);
						break;
					case "kit":
						if (chatData.hasCharges) {
							buttons.append(
								`<button class="use-kit" data-action="useKit">${localize(
									"CONAN.kitUseLabel"
								)}</button>`
							);
						}
						break;
					case "npcattack":
						buttons.append(
							`<button class="tag npc_damage execute-attack" data-action="npcAttack">${localize(
								"CONAN.attackRollLabel"
							)}</button>`
						);
						buttons.append(
							`<button class="tag npc_damage execute-damage" data-action="npcDamage">${localize(
								"CONAN.damageRollLabel"
							)}</button>`
						);
						if (item.getSoak() > 0) {
							buttons.append(
								`<button class="tag weapon_soak execute-soak" data-action="shieldSoak">${localize(
									"CONAN.shieldSoakRollLabel"
								)}</button>`
							);
						}
						break;
					case "spell":
						buttons.append(
							`<button class="tag spell_attack execute-attack" data-action="spellCast">${localize(
								"CONAN.spellCastLabel"
							)}</button>`
						);
						break;
				}
			}

			div.append(buttons);

			buttons.find("button").click(ev => {
				ev.preventDefault();
				ev.stopPropagation();

				// which function gets called depends on the type of button stored in
				// the dataset attribute action
				switch (ev.target.dataset.action) {
					case "useKit": {
						this.actor.useKit(itemId);
						break;
					}
					case "weaponDamage": {
						this._executeDamage(ev, itemId);
						break;
					}
					case "weaponAttack": {
						this.actor._executeAttack(itemId);
						break;
					}
					case "shieldSoak": {
						const shieldItem = this.actor.items.get(itemId);
						shieldItem.triggerSoakRoll();
						break;
					}
					case "spellCast": {
						const spell = this.actor.items.get(itemId);
						const skill = "sor";

						this.actor._rollSkillCheck(skill, spell);

						break;
					}
					case "npcDamage": {
						this._executeDamage(ev, itemId);
						break;
					}
					case "npcAttack": {
						this.actor._executeAttack(itemId);
						break;
					}
				}
			});

			li.append(div.hide());
			div.slideDown(200);
		}
		li.toggleClass("expanded");
	}

	_sortAllItems(context) {
		// Pre-sort all items so that when they are filtered into their relevant
		// categories they are already sorted alphabetically (case-sensitive)
		const allItems = [];
		(context.items ?? []).forEach(item => allItems.push(item));

		allItems.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		return allItems;
	}

	_executeDamage(ev, itemId) {
		const weapon = this.actor.getEmbeddedDocument("Item", itemId);

		weapon.triggerDamageRoll();
	}
}

class InventoryWeight {
	combinedEnc;

	encumberedAt;

	limit;

	constructor(combinedEnc, encumberedAt, limit) {
		this.combinedEnc = combinedEnc;
		this.encumberedAt = encumberedAt;
		this.limit = limit;
	}

	get encumberedPercentage() {
		const totalTimes10 = this.combinedEnc * 10;
		const limitTimes10 = this.limit * 10;
		return Math.floor((totalTimes10 / limitTimes10) * 100);
	}

	get limitPercentage() {
		const totalTimes10 = this.combinedEnc * 10;
		const limitTimes10 = this.limit * 10;
		return Math.floor((totalTimes10 / limitTimes10) * 100);
	}

	get limitPercentageMax() {
		if (this.limitPercentage > 100) {
			return 100;
		}
		return this.limitPercentage;
	}

	get isEncumbered() {
		return this.combinedEnc > this.encumberedAt;
	}

	get encumbranceFactor() {
		const pct = this.encumberedPercentage;
		const encObject = {
			carried: "",
			fatigue: "",
		};

		const carriedLabel = game.i18n.localize("CONAN.encumbranceCarriedRatingLabel");
		const fatigueLabel = game.i18n.localize("CONAN.encumbranceRatingFatigueLabel");

		if (pct < 60 && pct >= 40) {
			encObject.carried = `${carriedLabel}: x2`;
			encObject.fatigue = `${fatigueLabel}: +1`;
			return encObject;
		}
		if (pct < 80 && pct >= 60) {
			encObject.carried = `${carriedLabel}: x3`;
			encObject.fatigue = `${fatigueLabel}: +2`;
			return encObject;
		}
		if (pct < 100 && pct >= 80) {
			encObject.carried = `${carriedLabel}: x4`;
			encObject.fatigue = `${fatigueLabel}: +3`;
			return encObject;
		}
		if (pct < 120 && pct >= 100) {
			encObject.carried = `${carriedLabel}: x5`;
			encObject.fatigue = `${fatigueLabel}: +4`;
			return encObject;
		}
		if (pct < 140 && pct >= 120) {
			encObject.carried = `${carriedLabel}: x6`;
			encObject.fatigue = `${fatigueLabel}: +5`;
			return encObject;
		}
		if (pct < 160 && pct >= 140) {
			encObject.carried = `${carriedLabel}: x7`;
			encObject.fatigue = `${fatigueLabel}: +6`;
			return encObject;
		}
		if (pct >= 160) {
			encObject.carried = `${carriedLabel}: x8`;
			encObject.fatigue = `${fatigueLabel}: +7`;
			return encObject;
		}

		encObject.carried = `${carriedLabel}: ${game.i18n.localize("CONAN.encumbranceRatingLessLabel")}`;
		encObject.fatigue = `${fatigueLabel}: -`;

		return encObject;
	}

	get isOverLimit() {
		return this.combinedEnc > this.limit;
	}

	get enc() {
		return this.combinedEnc;
	}
}

function combinedEncumbrance(actorInventory) {
	let totalEnc = 0;

	for (const itemType in actorInventory) {
		if (itemType === "consumable") continue; // they don"t have encumbrance

		if (itemType === "transportation") continue;

		for (let x = 0; x < actorInventory[itemType].items.length; x++) {
			const item = actorInventory[itemType].items[x];
			const itemData = item.system;
			const equipped = item.canBeEquipped && itemData.equipped;

			// stowed items don"t count towards player encumbrance
			if (itemData.stowedIn !== "") continue;

			if (itemType === "armor" && equipped) {
				// equipped armor does"t count towards encumbrance as it has qualities
				// that apply when worn instead (see core rules p.157), but if the
				// armor is in a stack then we will include the encumbrance of the
				// additional armor sets
				const quantity = itemData.quantity || 1;

				if (quantity > 1) {
					totalEnc +=
						Number(itemData.encumbrance) * Number(itemData.quantity - 1);
				}
			}
			else {
				totalEnc += Number(itemData.encumbrance) * Number(itemData.quantity);
			}
		}
	}

	return totalEnc;
}

function calculateEncumbrance(actorInventory, actorBrawn) {
	actorBrawn = Number(actorBrawn);

	const combinedEnc = Math.floor(combinedEncumbrance(actorInventory));
	const encumberedAt = actorBrawn * 2;
	const limit = actorBrawn * 5;

	return new InventoryWeight(combinedEnc, encumberedAt, limit);
}

class CompendiumItemSelector extends FormApplication {

	closeOnSelection = false;

	maxChoices = 0;

	uuid = foundry.utils.randomID();

	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: ["conan2d20", "compendium-item-selector"],
			height: "auto",
			width: 320,
			closeOnSubmit: false,
			submitOnChange: true,
		});

		return options;
	}

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectCompendiumItem.prompt");
	}

	get template() {
		return "systems/conan2d20/templates/apps/compendium-item-selector.hbs";
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectCompendiumItem.title");
	}

	activateListeners(html) {
		html.find(".remove-item").click(event => this._onRemoveItem(event));

		super.activateListeners(html);
	}

	async getAllItemData() {
		this.availableItems = await this.getAvailableItems() ?? [];
		this.currentItemUuids = await this.getUuids() ?? [];
		this.currentItems = await this.getCurrentItems() ?? [];
	}

	async getCurrentItems() {
		const items = [];
		for (const uuid of this.currentItemUuids) {
			const item = await fromUuid(uuid);
			items.push(item);
		}

		return items.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}

	async getData() {
		await this.getAllItemData();

		const data = {
			currentItems: this.currentItems,
			itemChoices: [],
			prompt: this.prompt,
			uuid: this.uuid,
		};

		// Don"t include already selected items
		for (const item of this.availableItems) {
			if (!this.currentItemUuids.includes(item.uuid)) {
				data.itemChoices.push(item);
			}
		}

		return data;
	}

	async _onRemoveItem(event) {
		event.preventDefault();
		event.stopPropagation();

		let itemIndex = $(event.currentTarget).data("item-index");

		const newItemUuids = [];

		for (let i = 0; i < this.currentItems.length; i++) {
			if (itemIndex === i) continue;
			newItemUuids.push(this.currentItems[i].uuid);
		}

		await this._saveUuids(newItemUuids);
	}

	async _saveUuids(uuids) {
		await this.saveUuids(uuids);

		this.render(false);
	}

	async _updateObject(event, formData) {
		let newUuids = this.currentItemUuids;

		const currentItemCount = this.currentItemUuids.length;
		if (this.maxChoices === 1 && currentItemCount === 1 && formData["item-selected"] !== "") {
			for (const item of this.availableItems) {
				if (item.name === formData["item-selected"]) {
					newUuids = [item.uuid];
					break;
				}
			}

			await this._saveUuids(newUuids);
		}
		else if (this.maxChoices === 0 || this.maxChoices > currentItemCount) {
			for (const item of this.availableItems) {
				if (item.name === formData["item-selected"]) {
					newUuids.push(item.uuid);
					break;
				}
			}

			await this._saveUuids(newUuids);
		}
		else {
			ui.notifications.warn(
				game.i18n.format("CONAN.Form.SelectCompendiumItem.Error.MaxChoicesReached",
					{maxChoices: this.maxChoices}
				)
			);

			return this.render(true);
		}

		if (this.closeOnSelection) this.close();
	}
}

class ArchetypeSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectArchetype.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectArchetype.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.archetypes(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.archetype?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.archetype.value": uuid,
		});
	}
}

class CasteSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectCaste.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectCaste.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.castes(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.caste?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.caste.value": uuid,
		});
	}
}

class EducationSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectEducation.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectEducation.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.educations(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.education?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.education.value": uuid,
		});
	}
}

class HomelandSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectHomeland.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectHomeland.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.homelands(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.homeland?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.homeland.value": uuid,
		});
	}
}

class LanguageSelector extends CompendiumItemSelector {

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectLanguage.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectLanguages.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.languages(false);
	}

	async getUuids() {
		return this.object?.system?.background?.languages ?? [];
	}

	async saveUuids(uuids) {
		return this.object.update({
			"system.background.languages": uuids,
		});
	}
}

class NatureSelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectNature.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectNature.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.natures(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.nature?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.nature.value": uuid,
		});
	}
}

class StorySelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectStory.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectStory.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.stories(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.story?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.story.value": uuid,
		});
	}
}

class WarStorySelector extends CompendiumItemSelector {

	maxChoices = 1;

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectWarStory.prompt");
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectWarStory.title");
	}

	async getAvailableItems() {
		return await conan.compendiums.warStories(false);
	}

	async getUuids() {
		const uuid = this.object?.system?.background?.warstory?.value;

		return uuid !== "" ? [uuid] : [];
	}

	async saveUuids(uuids) {
		const uuid = uuids[0] ?? "";

		return this.object.update({
			"system.background.warstory.value": uuid,
		});
	}
}

class ConanCharacterSheet extends ConanBaseActorSheet {

	constructor(object, options={}) {
		super(object, options);

		this.characterUpgrade = new conan.apps.CharacterUpgrade(this.actor);
	}

	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: options.classes.concat([
				"conan2d20",
				"actor",
				"pc",
				"character-sheet",
			]),
			width: 730,
			height: 800,
			tabs: [
				{
					navSelector: ".sheet-navigation",
					contentSelector: ".sheet-content",
					initial: "character",
				},
			],
			dragDrop: [{dragSelector: ".item", dropSelector: null}],
			scrollY: [
				".tab.actions",
				".tab.skills",
				".talents-list",
				".inventory-list",
				".tab.sorcery",
			],
		});

		return options;
	}

	get template() {
		const path = "systems/conan2d20/templates/actors/";
		if (!game.user.isGM && this.actor.limited) {
			return `${path}character-sheet-readonly.hbs`;
		}
		else {
			return `${path}character-sheet.hbs`;
		}
	}

	async getData(options = {}) {
		const context = await super.getData(options);

		// Update skill labels
		if (context.system.skills !== undefined) {
			for (const [s, skl] of Object.entries(context.system.skills)) {
				skl.label = CONFIG.CONAN.skills[s];
			}
		}

		// Update Encumbrance Level
		context.system.encumbrance = calculateEncumbrance(
			context.inventory,
			context.system.attributes.bra.value
		);

		const shields = context.inventory.weapon.items.filter(
			i => i.system.isShield && i.isEquipped && !i.isBroken
		);

		context.system.armor = conan.utils.calculateArmor(
			context.inventory.armor.items,
			shields
		);

		context.skills = CONFIG.CONAN.skills;

		context.notesHTML = await TextEditor.enrichHTML(
			context.system.details.notes,
			{
				secrets: this.actor.isOwner,
				async: true,
				relativeTo: this.actor,
			}
		);

		context.biographySelectors = await this.getBiographySelectors();

		context.languages = [];
		for (const itemUuid of context.system.background.languages ?? []) {
			context.languages.push(await fromUuid(itemUuid));
		}
		context.languages.sort((a, b) => a.name.localeCompare(b.name));

		context.disableManualHealthEdit = game.settings.get(SYSTEM_ID, "disableManualHealthEdit");

		this.characterUpgrade.render(false);

		return context;
	}

	async getBiographySelectors() {
		const background = this.actor.system.background;

		const data = {
			archetype: {
				name: "archetype",
				label: game.i18n.localize("CONAN.Actor.Background.Archetype.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.Archetype.tooltip"),
				item: await fromUuid(background.archetype.value) ?? null,
			},
			caste: {
				name: "caste",
				label: game.i18n.localize("CONAN.Actor.Background.Caste.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.Caste.tooltip"),
				item: await fromUuid(background.caste.value) ?? null,
			},
			education: {
				name: "education",
				label: game.i18n.localize("CONAN.Actor.Background.Education.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.Education.tooltip"),
				item: await fromUuid(background.education.value) ?? null,
			},
			homeland: {
				name: "homeland",
				label: game.i18n.localize("CONAN.Actor.Background.Homeland.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.Homeland.tooltip"),
				item: await fromUuid(background.homeland.value) ?? null,
			},
			nature: {
				name: "nature",
				label: game.i18n.localize("CONAN.Actor.Background.Nature.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.Nature.tooltip"),
				item: await fromUuid(background.nature.value) ?? null,
			},
			story: {
				name: "story",
				label: game.i18n.localize("CONAN.Actor.Background.Story.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.Story.tooltip"),
				item: await fromUuid(background.story.value) ?? null,
			},
			warstory: {
				name: "warstory",
				label: game.i18n.localize("CONAN.Actor.Background.WarStory.label"),
				tooltip: game.i18n.localize("CONAN.Actor.Background.WarStory.tooltip"),
				item: await fromUuid(background.warstory.value) ?? null,
			},
		};

		return data;
	}


	async getArmor(armorLocation) {
		// TODO Code Smell: We shouldn't need to go through the character sheet
		// to get the Actor"s armor.  That should be a function on the Actor class
		//
		const context = await this.getData();
		return context.system.armor[armorLocation];
	}

	getMaxResolve(actorData) {
		return (actorData.system.attributes.wil.value
			+ actorData.system.skills.dis.expertise.value
			- actorData.system.health.mental.despair
			+ actorData.system.health.mental.bonus
		);
	}

	getMaxVigor(actorData) {
		return (actorData.system.attributes.bra.value
			+ actorData.system.skills.res.expertise.value
			- actorData.system.health.physical.fatigue
			+ actorData.system.health.physical.bonus
		);
	}

	/* -------------------------------------------- */

	/**
	 * Organize and classify Items for Character sheets
	 * @private
	 */

	_prepareItems(context) {
		const inventory = {
			armor: {
				standardHeader: true,
				canCreate: true,
				label: game.i18n.localize("CONAN.inventoryArmorHeader"),
				items: [],
			},
			weapon: {
				canCreate: true,
				standardHeader: true,
				label: game.i18n.localize("CONAN.inventoryWeaponsHeader"),
				items: [],
			},
			kit: {
				canCreate: true,
				standardHeader: false,
				label: game.i18n.localize("CONAN.inventoryKitsHeader"),
				items: [],
			},
			consumable: {
				canCreate: false,
				standardHeader: false,
				label: game.i18n.localize("CONAN.inventoryConsumablesHeader"),
				items: [],
			},
			miscellaneous: {
				canCreate: true,
				standardHeader: true,
				label: game.i18n.localize("CONAN.inventoryMiscHeader"),
				items: [],
			},
		};

		const talents = [];

		const sorcery = {
			enchantment: {
				label: game.i18n.localize("CONAN.sorceryEnchantmentHeader"),
				sorcery: [],
			},
			spell: {
				label: game.i18n.localize("CONAN.sorcerySpellHeader"),
				sorcery: [],
			},
		};

		// Actions
		const actions = {
			standard: {
				actions: [],
				label: game.i18n.localize("CONAN.Actor.ActionHeaders.StandardActions.label"),
				tooltip: game.i18n.localize("CONAN.Actor.ActionHeaders.StandardActions.tooltip"),
			},
			minor: {
				actions: [],
				label: game.i18n.localize("CONAN.Actor.ActionHeaders.MinorActions.label"),
				tooltip: game.i18n.localize("CONAN.Actor.ActionHeaders.MinorActions.tooltip"),
			},
			reaction: {
				actions: [],
				label: game.i18n.localize("CONAN.Actor.ActionHeaders.Reactions.label"),
				tooltip: game.i18n.localize("CONAN.Actor.ActionHeaders.Reactions.tooltip"),
			},
			free: {
				actions: [],
				label: game.i18n.localize("CONAN.Actor.ActionHeaders.FreeActions.label"),
				tooltip: game.i18n.localize("CONAN.Actor.ActionHeaders.FreeActions.tooltip"),
			},
		};

		const attacks = {
			display: [],
			weapon: [],
		};

		const allItems = this._sortAllItems(context);

		let talentTrees = {};

		for (const i of allItems) {
			i.img = i.img || DEFAULT_TOKEN;

			i.canBeStowed = true; // default for all
			i.isStowed = false;

			// Read-Only Equipment
			if (i.type === "armor" || i.type === "kit") {
				context.hasEquipment = true;
			}

			if (i.type === "armor" || i.type === "weapon") {
				i.canBeEquipped = true;
				i.canBeBroken = true;
			}
			else {
				i.canBeEquipped = false;
				i.canBeBroken = false;
			}

			i.isBroken = i.system.broken ? true : false;
			i.isEquipped = i.system.equipped ? true : false;

			// Filter all displays and equipped weapons into the relevant attack
			// arrays for display on the actions tab
			if (i.type === "display" || i.type === "weapon") {
				const action = {};
				action.imageUrl = i.img;
				action.name = i.name;
				action.type = "attack";

				action.isShield = i.system.qualities.value.find(
					q => q.type === "shieldx"
				) ? true : false;

				action.qualities = [{
					name: "attack",
					label: game.i18n.localize(CONFIG.CONAN.attacks[i.type]),
				}];

				if (i.type === "weapon") {
					action.qualities.push({
						name: "weaponType",
						label: CONFIG.CONAN.weaponTypes[i.system.weaponType],
					});
				}

				/* eslint-disable no-loop-func */
				i?.system?.qualities?.value?.forEach(quality => {
					const key = CONFIG.CONAN.weaponQualities[quality] ?? quality;

					let qualityLabel = "";
					if (key.value) {
						qualityLabel = `${game.i18n.localize(key.label)}(${key.value})`;
					}
					else {
						qualityLabel = `${game.i18n.localize(key.label)}`;
					}

					action.qualities.push({
						name: quality,
						label: qualityLabel,
						description: CONFIG.CONAN.qualitiesDescriptions[key.type] || "",
					});
				});
				/* eslint-enable no-loop-func */

				action.attack = {};
				action.attack.id = i._id;
				action.attack.type = i.type;
				action.weaponType = i.system.weaponType;

				if (i.type === "display" || (i.isEquipped && !i.isBroken)) {
					attacks[i.type].push(action);
				}
			}

			// Inventory
			if (Object.keys(inventory).includes(i.type)) {
				i.system.quantity = i.system.quantity || 0;
				i.system.encumbrance = i.system.encumbrance || 0;
				i.hasCharges = i.type === "kit" && i.system.uses.max > 0;

				if (i.canBeStowed && i.system.stowedIn && i.system.stowedIn !== "") {
					const container = this.actor.getEmbeddedDocument(
						"Item",
						i.system.stowedIn
					);

					i.stowedInName = container.name;
					i.isStowed = true;
				}

				inventory[i.type].items.push(i);
			}
			else if (i.type === "talent") {
				let itemsTalentTree = "";

				if (i.system.talentType === "skill") {
					itemsTalentTree = CONFIG.CONAN.skills[i.system.linkedSkill].toLowerCase();
				}
				else if (i.system.talentType === "other") {
					// If tree has been set use that, otherwise default to `other`
					itemsTalentTree = i.system.tree.toLowerCase() ?? "other";
				}
				else {
					itemsTalentTree = i.system.talentType;
				}

				if (!talentTrees[itemsTalentTree]) {
					talentTrees[itemsTalentTree] = {
						label: itemsTalentTree,
						ranks: 0,
						talentCount: 0,
						talents: [],
					};
				}

				talentTrees[itemsTalentTree].talents.push(i);
				talentTrees[itemsTalentTree].ranks += i.system.rank.value;
				talentTrees[itemsTalentTree].talentCount += 1;
			}
			else if (i.type === "spell") {
				sorcery[i.type].sorcery.push(i);
			}
			else if (i.type === "enchantment") {
				i.canBeStowed = false;
				sorcery[i.type].sorcery.push(i);
				inventory.consumable.items.push(i);
			}
			else if (i.type === "miscellaneous") {
				inventory.miscellaneous.items.push(i);
			}

			// Actions
			if (i.type === "action") {
				actions[i.system.actionType].actions.push(i);
			}
		}

		// Sort the discovered talent trees and add them to the talents data to
		// be stored in the context
		Object.keys(talentTrees)
			.sort()
			.forEach(talent => {
				talents.push(talentTrees[talent]);
			});

		// Assign and return
		context.actions = actions;
		context.attacks = attacks;
		context.inventory = inventory;
		context.sorcery = sorcery;
		context.talents = talents;
	}

	_adjustDespair(actorData, delta) {
		let currentMax = this.getMaxResolve(actorData);

		actorData.system.health.mental.despair += delta;
		currentMax -= delta;

		// clamp values if out of range
		if (actorData.system.health.mental.despair < 0) {
			actorData.system.health.mental.despair = 0;
		}
		else if (actorData.system.health.mental.value > currentMax) {
			actorData.system.health.mental.value = currentMax;
			actorData.system.health.mental.max = currentMax;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_adjustFatigue(actorData, delta) {
		let currentMax = this.getMaxVigor(actorData);

		actorData.system.health.physical.fatigue += delta;
		currentMax -= delta;

		// clamp values if out of range
		if (actorData.system.health.physical.fatigue < 0) {
			actorData.system.health.physical.fatigue = 0;
		}
		else if (actorData.system.health.physical.value > currentMax) {
			actorData.system.health.physical.value = currentMax;
			actorData.system.health.physical.max = currentMax;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_adjustResolve(actorData, delta) {
		const currentMax = this.getMaxResolve(actorData);

		actorData.system.health.mental.value += delta;

		// clamp values if out of range
		if (actorData.system.health.mental.value < 0) {
			actorData.system.health.mental.value = 0;
		}
		else if (actorData.system.health.mental.value > currentMax) {
			actorData.system.health.mental.value = currentMax;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_adjustResolveBonus(actorData, delta) {
		const currentMax = this.getMaxResolve(actorData);

		// don"t add a negative delta if the max value is already 0
		if (!(currentMax === 0 && delta < 0)) {
			actorData.system.health.mental.bonus += delta;

			// also apply the bonus immediately to the current health value
			actorData.system.health.mental.value += delta;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_adjustVigor(actorData, delta) {
		const currentMax = this.getMaxVigor(actorData);

		actorData.system.health.physical.value += delta;

		// clamp values if out of range
		if (actorData.system.health.physical.value < 0) {
			actorData.system.health.physical.value = 0;
		}
		else if (actorData.system.health.physical.value > currentMax) {
			actorData.system.health.physical.value = currentMax;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_adjustVigorBonus(actorData, delta) {
		const currentMax = this.getMaxVigor(actorData);

		// don"t add a negative delta if the max value is already 0
		if (!(currentMax === 0 && delta < 0)) {
			actorData.system.health.physical.bonus += delta;

			// also apply the bonus immediately to the current health value
			actorData.system.health.physical.value += delta;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	async _onDropItem(event, data) {
		const droppedItem = data?.uuid ? await fromUuid(data.uuid) : null;
		const type = droppedItem.type;

		if (type === "npcaction") return;

		if (type === "npcattack") {
			if (droppedItem.system.attackType === "threaten") return; // only create physical weapons

			const droppedItemData = foundry.utils.duplicate(droppedItem);

			// npcattack Items have any damage bonuses built in, so grab the NPCs
			// damage bonus as it needs to be deducted from the new Item"s damage
			// setting to allow for the player"s own damage bonuses to be applied
			let damageModifier = 0;
			if (droppedItem.system.attackType === "melee") {
				damageModifier = droppedItem.actor._attributeBonus("bra");
			}
			else if (droppedItem.system.attackType === "ranged") {
				damageModifier = droppedItem.actor._attributeBonus("awa");
			}

			const newItemData = {
				type: "weapon",
				name: droppedItemData.name,
				img: droppedItemData.img,
				system: {
					weaponType: droppedItemData.system.attackType,
					damage: droppedItemData.system.damage,
					description: droppedItemData.system.description,
					group: droppedItemData.system.group,
					qualities: droppedItemData.system.qualities,
					range: droppedItemData.system.range,
					size: droppedItemData.system.size,
				},
			};

			// deduct the previously built in damage bonus from the weapon"s base
			// damage
			newItemData.system.damage.dice =
				newItemData.system.damage.dice - damageModifier;

			return this.actor.createEmbeddedDocuments("Item", [newItemData]);
		}
		else if (CONFIG.CONAN.backgroundItems.includes(droppedItem.type)) {
			return this._onDroppedBackgroundItem(droppedItem);
		}
		else {
			super._onDropItem(event, data);
		}
	}

	async _onDroppedBackgroundItem(item) {
		if (!item.uuid.startsWith("Compendium.")) {
			return ui.notifications.error(
				game.i18n.localize("CONAN.Actor.Error.BackgroundItemNotFromCompendium")
			);
		}

		if (item.type === "language") {
			const languages = this.actor.system.background.languages;

			if (languages.includes(item.uuid)) {
				return ui.notifications.warn(
					game.i18n.localize("CONAN.Actor.Error.LanguageAlreadyKnown")
				);
			}

			languages.push(item.uuid);
			return this.actor.update({"system.background.languages": languages});
		}
		else {
			const updateData = {};
			updateData[`system.background.${item.type}.value`] = item.uuid;
			return this.actor.update(updateData);
		}
	}

	_resetDespair(actorData) {
		actorData.system.health.mental.despair = 0;

		game.actors.get(actorData._id).update(actorData);
	}

	_resetFatigue(actorData) {
		actorData.system.health.physical.fatigue = 0;

		game.actors.get(actorData._id).update(actorData);
	}

	_resetResolve(actorData) {
		const currentMax = this.getMaxResolve(actorData);

		actorData.system.health.mental.value = currentMax;

		game.actors.get(actorData._id).update(actorData);
	}

	_resetResolveBonus(actorData) {
		actorData.system.health.mental.bonus = 0;

		const currentMax = this.getMaxResolve(actorData);

		// clamp the current value to the max if it is higher than the new maximum
		if (actorData.system.health.mental.value > currentMax) {
			actorData.system.health.mental.value = currentMax;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_resetVigor(actorData) {
		const currentMax = this.getMaxVigor(actorData);

		actorData.system.health.physical.value = currentMax;

		game.actors.get(actorData._id).update(actorData);
	}

	_resetVigorBonus(actorData) {
		actorData.system.health.physical.bonus = 0;

		const currentMax = this.getMaxVigor(actorData);

		// clamp the current value to the max if it is higher than the new maximum
		if (actorData.system.health.physical.value > currentMax) {
			actorData.system.health.physical.value = currentMax;
		}

		game.actors.get(actorData._id).update(actorData);
	}

	_onItemSelector(event) {
		event.preventDefault();
		event.stopPropagation();

		let itemType = $(event.currentTarget).data("options");

		switch (itemType) {
			case "archetype":
				new ArchetypeSelector(this.actor).render(true);
				break;
			case "caste":
				new CasteSelector(this.actor).render(true);
				break;
			case "education":
				new EducationSelector(this.actor).render(true);
				break;
			case "homeland":
				new HomelandSelector(this.actor).render(true);
				break;
			case "language":
				new LanguageSelector(this.actor).render(true);
				break;
			case "nature":
				new NatureSelector(this.actor).render(true);
				break;
			case "story":
				new StorySelector(this.actor).render(true);
				break;
			case "warstory":
				new WarStorySelector(this.actor).render(true);
				break;
		}
	}

	activateListeners(html) {
		super.activateListeners(html);

		if (!this.options.editable) return;

		html.find(".value-mouse-adjust").mouseup(event => {
			event.preventDefault();

			if (!(window.event.ctrlKey || window.event.altKey)) return;

			const valueType = $(event.currentTarget).data("value-type");

			let functionPrefix = "_adjust";
			let delta = 0;

			if (window.event.altKey && event.button === 0) {
				functionPrefix = "_reset";
			}
			else if (event.button === 0) {
				delta = 1;
			}
			else if (event.button === 2) {
				delta = -1;
			}

			const functionName = `${functionPrefix}${valueType}`;

			const actorData = foundry.utils.duplicate(this.actor);

			this[functionName](actorData, delta);
		});

		html.find(".value-mouse-adjust").on("wheel", event => {
			event.preventDefault();

			if (!window.event.ctrlKey) return;

			const valueType = $(event.currentTarget).data("value-type");
			const functionName = `_adjust${valueType}`;

			let delta = 0;

			if (event.originalEvent.deltaY < 0) {
				delta = 1;
			}
			else if (event.originalEvent.deltaY > 0) {
				delta = -1;
			}

			const actorData = foundry.utils.duplicate(this.actor);

			this[functionName](actorData, delta);
		});

		html.find(".condition-value").mouseup(event => {
			event.preventDefault();

			const condKey = $(event.currentTarget)
				.parents(".sheet-condition")
				.attr("data-cond-id");
			if (event.button === 0) {
				this.actor.addCondition(condKey);
			}
			else if (event.button === 2) {
				this.actor.removeCondition(condKey);
			}
		});

		html.find(".item-selector").click(event => this._onItemSelector(event));

		html.find(".condition-toggle").mouseup(event => {
			event.preventDefault();
			const condKey = $(event.currentTarget)
				.parents(".sheet-condition")
				.attr("data-cond-id");

			if (
				CONFIG.CONAN.statusEffects.find(e => e.id === condKey).flags
					.conan2d20.value === null
			) {
				if (this.actor.hasCondition(condKey)) {
					this.actor.removeCondition(condKey);
				}
				else {
					this.actor.addCondition(condKey);
				}
				return;
			}

			if (event.button === 0) {
				this.actor.addCondition(condKey);
			}
			else if (event.button === 2) {
				this.actor.removeCondition(condKey);
			}
		});

		html.on("click", ".bank-momentum", event => {
			event.preventDefault();
			if (this.actor.isOwner || game.user.isGM) {
				if (this.actor.system.momentum <= 0) {
					ui.notifications.warn(game.i18n.localize("CONAN.noUnbankedMomentum"));
				}
				else {
					new conan.apps.MomentumBanker(this.actor).render(true);
				}
			}
		});

		html.on("click", ".character-upgrade", event => {
			event.preventDefault();
			this.characterUpgrade.render(true);
		});
	}
}

class ConanNPCSheet extends ConanBaseActorSheet {

	editInhumanAttributes = false;

	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: options.classes.concat([
				"conan2d20",
				"actor",
				"npc",
				"character-sheet",
			]),
			width: 600,
			height: 700,
			resizable: false,
			tabs: [
				{
					navSelector: ".npc-sheet-navigation",
					contentSelector: ".npc-sheet__body",
					initial: "npc-details",
				},
			],
			dragDrop: [{dragSelector: ".item", dropSelector: null}],
		});
		return options;
	}

	get template() {
		const path = "systems/conan2d20/templates/actors/";
		if (!game.user.isGM && this.actor.limited) {
			return `${path}npc-sheet-readonly.hbs`;
		}
		else {
			return `${path}npc-sheet.hbs`;
		}
	}

	activateListeners(html) {
		html.find(".isMob-checkbox").click(event => this._onToggleMob(event));

		html.find(".npc-edit-inhuman").click(event => {
			this.editInhumanAttributes = !this.editInhumanAttributes;
			this.render();
		});

		html.find(".npc-mob-count-minus")
			.click(event => this._onAlterMobCount(event, -1));

		html.find(".npc-mob-count-plus")
			.click(event => this._onAlterMobCount(event, 1));

		const me = this;
		html.find(".mob-wound").each(function() {
			const wound = $(this);
			const mobMemberId = wound.data("mob-member-id");
			const woundIndex = wound.data("wound-index");

			wound.click(ev => {
				ev.preventDefault();
				me._onToggleWound(mobMemberId, woundIndex);
			});
		});

		html.find(".mob-trauma").each(function() {
			const wound = $(this);
			const mobMemberId = wound.data("mob-member-id");
			const traumaIndex = wound.data("trauma-index");

			wound.click(ev => {
				ev.preventDefault();
				me._onToggleTrauma(mobMemberId, traumaIndex);
			});
		});

		html.find(".quantity-grid").each(function() {
			const spinner = $(this);
			const mobMemberId = spinner.data("mob-member-id");

			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me[`_mobInc${quantityType}`](mobMemberId);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_mobDec${quantityType}`](mobMemberId);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me[`_mobInc${quantityType}`](mobMemberId);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me[`_mobDec${quantityType}`](mobMemberId);
			});
		});

		this._mobMemberContextMenu(html);

		super.activateListeners(html);
	}

	async getData(options = {}) {
		const context = await super.getData(options);
		context.flags = context.actor.flags;

		// Update expertise fields labels
		if (context.system.skills !== undefined) {
			for (const [s, skl] of Object.entries(context.system.skills)) {
				skl.label = CONFIG.CONAN.expertiseFields[s];
			}
		}

		// context.npcTypes = CONFIG.CONAN.NPC_TYPES;

		context.skills = CONFIG.CONAN.expertiseFields;

		context.tags = this.actor.getTags();

		context.noMobMemberId = !this.actor.system.grouping.baseActorId;
		context.editInhumanAttributes = this.editInhumanAttributes;

		context.isPurchasable = ["mount", "transport", "watercraft"].includes(
			this.actor.type
		);

		context.isTransport = this.actor.type === "transport";
		context.isWatercraft = this.actor.type === "watercraft";

		return context;
	}

	async _clearMob() {
		const data = {
			"system.grouping.memberName": null,
			"system.grouping.members": [],
			"system.grouping.baseActorId": null,
			"system.grouping.memberImage": null,
			"system.grouping.memberToken": null,
			"system.grouping.type": null,
			"system.mobCount": 0,
			"system.isMob": false,
		};

		this.actor.update(data);
	}

	_createMobMemberData(mobActorId) {
		const mobActor = game.actors.get(mobActorId);
		const healthData = foundry.utils.duplicate(mobActor.system.health);

		let wounds = [];
		let traumas = [];

		// NPCs have the same amount of physical and mental wounds they can take
		for (let i = 0; i < healthData.physical.wounds.max; i++) {
			wounds.push({active: false});
			traumas.push({active: false});
		}

		const data = {
			armor: mobActor.system.armor,
			courage: mobActor.system.health.courage,
			dead: false,
			resolve: {
				value: healthData.mental.max,
				max: healthData.mental.max,
				traumas,
			},
			vigor: {
				value: healthData.physical.max,
				max: healthData.physical.max,
				wounds,
			},
		};

		return data;
	}

	_getMobMemberContextOptions() {
		return [
			{
				name: game.i18n.localize("CONAN.deleteMobMemberTitle"),
				icon: "<i class=\"fas fa-trash\"></i>",
				// condition: () => canEdit(),
				condition: () => {
					return game.user.isGM;
				},
				callback: element => {
					const mobMemberDelete = element.data("mob-member-id");
					this._onMobMemberDelete(mobMemberDelete);
				},
			},
		];
	}

	async _mobDecResolve(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentResolve = healthData[mobMemberId].resolve.value;

		if (currentResolve > 0) {
			healthData[mobMemberId].resolve.value = currentResolve - 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	async _mobDecVigor(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentVigor = healthData[mobMemberId].vigor.value;

		if (currentVigor > 0) {
			healthData[mobMemberId].vigor.value = currentVigor - 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	async _mobIncResolve(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentResolve = healthData[mobMemberId].resolve.value;

		if (currentResolve < healthData[mobMemberId].resolve.max) {
			healthData[mobMemberId].resolve.value = currentResolve + 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	async _mobIncVigor(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentVigor = healthData[mobMemberId].vigor.value;

		if (currentVigor < healthData[mobMemberId].vigor.max) {
			healthData[mobMemberId].vigor.value = currentVigor + 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	_mobMemberContextMenu(html) {
		ContextMenu.create(this, html, ".npc-mob-member", this._getMobMemberContextOptions());
	}

	async _onAlterMobCount(event, value) {
		event.preventDefault();

		if (!this.actor.system.grouping.baseActorId) {
			return ui.notifications.error(
				game.i18n.localize("CONAN.NoBaseNpcGroupMemberSet")
			);
		}

		const memberCount = this.actor.system.grouping.members.length;
		const newMemberCount = memberCount + value;

		if (newMemberCount <= 4 && newMemberCount >= 0) {
			const data = {
				"system.mobCount": newMemberCount,
			};

			let newMembers = [];

			if (newMemberCount > memberCount) {
				newMembers = this.actor.system.grouping.members;
				newMembers.push(this._createMobMemberData(this.actor.system.grouping.baseActorId));
			}
			else if (newMemberCount < memberCount) {
				if (newMemberCount > 0) {
					newMembers = this.actor.system.grouping.members.slice(0, newMemberCount);
				}
			}

			data["system.grouping.members"] = newMembers;

			this.actor.update(data);
		}
	}

	async _onDropItem(event, data) {
		const droppedItem = data?.uuid ? await fromUuid(data.uuid) : null;
		const type = droppedItem.type;

		if (!["npcattack", "npcaction", "weapon"].includes(type)) return;

		if (type === "weapon") {
			if (droppedItem.system.weaponType === "threaten") return; // only create physical weapons

			const droppedItemData = foundry.utils.duplicate(droppedItem);

			let damageModifier = 0;
			if (droppedItemData.system.weaponType === "melee") {
				damageModifier = this.actor._attributeBonus("bra");
			}
			else if (droppedItemData.system.weaponType === "ranged") {
				damageModifier = this.actor._attributeBonus("awa");
			}

			const newItemData = {
				type: "npcattack",
				name: droppedItemData.name,
				img: droppedItemData.img,
				system: {
					attackType: droppedItemData.system.weaponType,
					damage: droppedItemData.system.damage,
					description: droppedItemData.system.description,
					group: droppedItemData.system.group,
					qualities: droppedItemData.system.qualities,
					range: droppedItemData.system.range,
					size: droppedItemData.system.size,
				},
			};

			// NPC attacks have the damage modifier built in to the weapon"s base
			// damage
			newItemData.system.damage.dice =
				newItemData.system.damage.dice + damageModifier;

			return this.actor.createEmbeddedDocuments("Item", [newItemData]);
		}
		else {
			super._onDropItem(event, data);
		}
	}

	async _onDropActor(event, data) {
		// Only allow drops onto a Mob leader
		if (!this.actor.system.isMob) return;

		const droppedActor = data?.uuid ? await fromUuid(data.uuid) : null;

		// Only NPCs can be dropped
		if (droppedActor.type !== "npc") return;

		if (droppedActor) {
			this._populateMob(droppedActor.id);
		}
	}

	async _onEditInhuman(event) {
		event.preventDefault();
		console.log("_onEditInhuman");
	}

	async _onMobMemberDelete(mobMemberId) {
		const mobMembers = this.actor.system.grouping.members;
		const newMobMembers = [];

		for (let i = 0; i < mobMembers.length; i++) {
			if (i === mobMemberId) continue;

			newMobMembers.push(mobMembers[i]);
		}

		await this.actor.update({
			"system.grouping.members": newMobMembers,
			"system.mobCount": newMobMembers.length,
		});
	}

	/** @inheritdoc */
	_onSubmit(event) {
		const updateData = this._getSubmitData();

		// If NPC type has changed, set the default max wounds/trauma for that
		// type of NPC
		if (updateData["system.type"] !== this.actor.system.type) {
			let maxWounds = 1; // default minion maxWounds

			if (updateData["system.type"] === "toughened") {
				maxWounds = 2;
			}
			else if (updateData["system.type"] === "nemesis") {
				maxWounds = 5;
			}

			updateData["system.health.mental.traumas.max"] = maxWounds;
			updateData["system.health.physical.wounds.max"] = maxWounds;
		}

		this.actor.update(updateData);
	}

	async _onToggleMob(event) {
		const input = $(event.currentTarget);
		const enabled = input.is(":checked");

		if (enabled) {
			await this._populateMob();
		}
		else {
			await this._clearMob();
		}
	}

	async _onToggleWound(mobMemberId, woundIndex) {
		const mobMembers = this.actor.system.grouping.members;
		const woundStatus = mobMembers[mobMemberId].vigor.wounds[woundIndex].active;

		mobMembers[mobMemberId].vigor.wounds[woundIndex].active = !woundStatus;

		mobMembers[mobMemberId].dead = this.actor.isMobMemberDead(mobMembers[mobMemberId]);

		await this.actor.update({
			"system.grouping.members": mobMembers,
		});
	}

	async _onToggleTrauma(mobMemberId, traumaIndex) {
		const mobMembers = this.actor.system.grouping.members;
		const woundStatus = mobMembers[mobMemberId].resolve.traumas[traumaIndex].active;

		mobMembers[mobMemberId].resolve.traumas[traumaIndex].active = !woundStatus;

		mobMembers[mobMemberId].dead = this.actor.isMobMemberDead(mobMembers[mobMemberId]);

		await this.actor.update({
			"system.grouping.members": mobMembers,
		});
	}

	async _populateMob(mobActorId = null) {
		const baseActorType = this.actor.system.type;
		const baseActorId = this.actor._id;
		const baseActorIsMinion = baseActorType === "minion";

		const groupType = baseActorIsMinion ? "mob" : "squad";
		const mobActor = mobActorId ? game.actors.get(mobActorId) : this.actor;
		const mobActorIsMinion = mobActor.system.type === "minion";

		const allowOverpowered = game.settings.get(
			"conan2d20",
			"allowOverpoweredNpcGroups"
		);

		let populateAllowed = false;
		if (mobActorId) {
			if (!(allowOverpowered || mobActorIsMinion)) {
				return ui.notifications.error(
					game.i18n.localize("CONAN.NpcGroupMemberNotMinion")
				);
			}
			else {
				populateAllowed = true;
			}
		}
		else if (baseActorIsMinion) {
			populateAllowed = true;
		}

		if (populateAllowed) {
			const members = [];

			for (let i = 0; i < CONFIG.CONAN.DEFAULT_MOB_SIZE - 1; i++) {
				members.push(this._createMobMemberData(mobActorId ?? baseActorId));
			}

			const data = {
				"system.grouping.memberName": mobActor.name,
				"system.grouping.members": members,
				"system.grouping.baseActorId": mobActorId ?? baseActorId,
				"system.grouping.memberImage": mobActor.img,
				"system.grouping.memberToken": mobActor.prototypeToken?.texture?.src ?? mobActor.img,
				"system.grouping.type": groupType,
				"system.isMob": true,
				"system.mobCount": members.length,
			};

			this.actor.update(data);
		}
	}

	_prepareItems(context) {
		const attacks = {
			weapon: [],
			display: [],
		};

		const actions = {
			abilities: {
				label: game.i18n.localize("CONAN.Item.NpcAction.Types.SpecialAbility"),
				actions: [],
			},
			doom: {
				label: game.i18n.localize("CONAN.Item.NpcAction.Types.DoomSpend"),
				actions: [],
			},
		};

		const allItems = this._sortAllItems(context);

		// Get Attacks
		for (const i of allItems) {
			i.img = i.img || CONST.DEFAULT_TOKEN;

			if (i.type === "npcattack") {
				let item;
				try {
					item = this.actor.getEmbeddedDocument("Item", i._id);
					i.chatData = item.getChatData({secrets: this.actor.isOwner});
				}
				catch(error) {
					conan.logger.error(error);
				}

				if (i.system.attackType === "threaten") {
					attacks.display.push(i);
				}
				else {
					i.isShield = item.isShield();
					attacks.weapon.push(i);
				}
			}
			else if (i.type === "npcaction") {
				const actionType = i.system.actionType || "npcaction";
				actions[actionType].actions.push(i);
			}
		}

		context.actions = actions;
		context.attacks = attacks;
	}

	_onRollSkillCheck(event) {
		event.preventDefault();

		const skill = $(event.currentTarget)
			.parents(".npc-skills__item")
			.attr("data-skill");

		this.actor._rollSkillCheck(skill);
	}
}

class ConanTransportSheet extends ConanNPCSheet {

	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			height: 700,
		});
		return options;
	}

	get template() {
		return `systems/conan2d20/templates/actors/${this.actor.type}-sheet.hbs`;
	}

	activateListeners(html) {
		super.activateListeners(html);

		if (!this.options.editable) return;

		html.find(".impact-roll.rollable").click(event => {
			event.preventDefault();
			const options = {
				numDice: this.actor.system.impactDamage ?? 1,
				isImpactDamage: true,
			};

			new conan.apps.DamageRoller(this.actor, options).render(true);
		});
	}

	async getData(options={}) {
		const context = await super.getData(options);

		// Create list of NPC traits, including custom ones.
		//
		// this._prepareCapabilities(context);
		context.ownedByTransportActor = true;
		context.noMaxStowage = this.actor.system.stowage.max === null;
		context.isWatercraft = this.actor.isWatercraft;

		return context;
	}

	async _onDropItem(event, data) {
		if ( !this.actor.isOwner ) return false;

		const item = await Item.implementation.fromDropData(data);
		const type = item.type;

		if (!this.actor.canOwnItemType(type)) return;

		const itemData = item.toObject();

		if (item.parent !== null) {
			if (item.parent.isOwner) item.delete();
		}

		return this._onDropItemCreate(itemData);
	}

	_prepareItems(context) {
		super._prepareItems(context);

		const inventory = {
			armor: {
				standardHeader: true,
				canCreate: true,
				label: game.i18n.localize("CONAN.inventoryArmorHeader"),
				items: [],
			},
			weapon: {
				canCreate: true,
				standardHeader: true,
				label: game.i18n.localize("CONAN.inventoryWeaponsHeader"),
				items: [],
			},
			kit: {
				canCreate: true,
				standardHeader: false,
				label: game.i18n.localize("CONAN.inventoryKitsHeader"),
				items: [],
			},
			miscellaneous: {
				canCreate: true,
				standardHeader: true,
				label: game.i18n.localize("CONAN.inventoryMiscHeader"),
				items: [],
			},
		};

		const allItems = this._sortAllItems(context);

		for (const i of allItems) {
			i.img = i.img || DEFAULT_TOKEN;

			i.isBroken = i.system.broken ? true : false;
			i.canBeStowed = true;

			if (i.type === "armor" || i.type === "weapon") {
				i.canBeEquipped = true;
				i.canBeBroken = true;
			}
			else {
				i.canBeEquipped = false;
				i.canBeBroken = false;
			}

			// Inventory
			if (Object.keys(inventory).includes(i.type)) {
				i.system.quantity = i.system.quantity || 0;
				i.system.encumbrance = i.system.encumbrance || 0;
				i.hasCharges = i.type === "kit" && i.system.uses.max > 0;
				inventory[i.type].items.push(i);
			}
		}

		context.inventory = inventory;
	}
}

class Combat2d20 extends Combat {

	constructor(options) {
		super(options);

		this.flags.combatantsTurnDone = this.flags.combatantsTurnDone ?? [];
	}

	get combatantsTurnDone() {
		const combatantsTurnDone = this.flags.combatantsTurnDone ?? [];
		return combatantsTurnDone[this.round] ?? {};
	}

	get momentumLog() {
		const momentumLog = this.flags.momentumLog ?? [];
		return momentumLog[this.round] ?? {};
	}

	get shouldUpdateMomentum() {
		return game.settings.get(
			"conan2d20", "combatTrackerMomentumUpdate"
		);
	}

	async endCombat() {
		return Dialog.confirm({
			title: game.i18n.localize("COMBAT.EndTitle"),
			content: `<p>${game.i18n.localize("COMBAT.EndConfirmation")}</p>`,
			yes: () => {
				if (this.shouldUpdateMomentum && this.started) {
					conan.apps.Counter.changeCounter(-1, "momentum");

					ui.notifications.info(
						game.i18n.localize("CONAN.CombatEndMomentumPoolDecremented")
					);
				}
				this.delete();
			},
		});
	}

	async nextRound() {
		this.turn = null;

		if (this.shouldUpdateMomentum) {
			conan.apps.Counter.changeCounter(-1, "momentum");

			ui.notifications.info(
				game.i18n.localize("CONAN.CombatRoundMomentumPoolDecremented")
			);
		}

		let advanceTime = Math.max(this.turns.length - this.turn, 0) * CONFIG.time.turnTime;
		advanceTime += CONFIG.time.roundTime;
		let nextRound = this.round + 1;

		// Update the document, passing data through a hook first
		const updateData = {round: nextRound, turn: this.turn};
		const updateOptions = {advanceTime, direction: 1};
		Hooks.callAll("combatRound", this, updateData, updateOptions);
		return this.update(updateData, updateOptions);
	}

	async rollInitiative() {
		return this;
	}

	async setTurn(newTurn) {
		this.turn = newTurn;

		// Update the document, passing data through a hook first
		const updateData = {round: this.round, turn: newTurn};
		const updateOptions = {advanceTime: CONFIG.time.turnTime, direction: 1};
		Hooks.callAll("combatTurn", this, updateData, updateOptions);
		return this.update(updateData, updateOptions);
	}

	setupTurns() {
		// Determine the turn order and the current turn
		const turns = this.combatants.contents;

		// Sort alphabetically by name first
		turns.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		// Then make sure the player characters are first
		turns.sort(
			(a, b) => Number(b.hasPlayerOwner) - Number(a.hasPlayerOwner)
		);

		if (this.turn !== null) this.turn =
			Math.clamp(this.turn, 0, turns.length - 1);

		// Update state tracking
		let c = turns[this.turn];
		this.current = {
			round: this.round,
			turn: this.turn,
			combatantId: c ? c.id : null,
			tokenId: c ? c.tokenId : null,
		};

		// One-time initialization of the previous state
		if (!this.previous) this.previous = this.current;

		// Return the array of prepared turns
		return this.turns = turns;
	}

	async startCombat() {
		const updateData = {
			round: 1,
			turn: 0,
			"flags.combatantsTurnDone": [],
		};

		Hooks.callAll("combatStart", this, updateData);

		return this.update(updateData);
	}

	async toggleTurnDone(combatantId) {
		if (!game.user.isGM) return;
		if (!this.started) return;

		const combatantsTurnDone = this.combatantsTurnDone;

		const turnDone = !(combatantsTurnDone[combatantId] ?? false);
		combatantsTurnDone[combatantId] = turnDone;

		this.flags.combatantsTurnDone[this.round] = combatantsTurnDone;

		if (turnDone && this.shouldUpdateMomentum) {
			const actor = this.combatants.find(c => c.id === combatantId).actor;
			actor.bankMomentum();
		}

		return this.update({"flags.combatantsTurnDone": this.flags.combatantsTurnDone});
	}
}

class CombatDie extends foundry.dice.terms.DiceTerm {
	constructor(termData) {
		super(termData);
		this.faces = 6;
	}

	static DENOMINATION = "p";

	static values = {
		1: 1,
		2: 2,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	};

	/**
	 * @return the results as CombatDice values: 0,1,2,phoenix.
	 */
	static getResultLabel(result) {
		return result > 2 ? "&nbsp" : result;
	}

	/** @override */
	get total() {
		if (!this._evaluated) return null;
		return this.results.reduce((t, r) => {
			if (!r.active) return t;
			if (r.effect) return t + 1;
			if (r.count !== undefined) return t + r.count;
			return t + CombatDie.getValue(r.result);
		}, 0);
	}

	/** @override */
	async roll(options) {
		const roll = await super.roll(options);
		roll.effect = roll.result === 5 || roll.result === 6;
		return roll;
	}

	get resultValues() {
		return this.results.map(result => {
			return CombatDie.getResultLabel(result.result);
		});
	}

	static getValue(dieSide) {
		// 1 if Effect, otherwise take the value
		return typeof CombatDie.values[dieSide] === "string"
			? 1
			: CombatDie.values[dieSide];
	}
}

class CombatTracker2d20 extends CombatTracker {

	static get defaultOptions() {
		return {
			...super.defaultOptions,
			template: "systems/conan2d20/templates/combat/conan-combat-tracker.hbs",
		};
	}

	activateListeners(html) {
		const tracker = html.find("#combat-tracker");
		const combatants = tracker.find(".combatant");

		html.find(".conan-combatant-control").click(
			ev => this._onConanCombatantControl(ev)
		);

		combatants.click(this._onConanCombatantMouseDown.bind(this));

		super.activateListeners(html);
	}

	async getData(options) {
		const context = await super.getData(options);

		const combat = this.viewed;
		for (const turn of context.turns) {
			const combatantsTurnDone = combat.combatantsTurnDone;
			turn.turnDone = combatantsTurnDone[turn.id] ?? false;
		}

		return context;
	}

	async _onConanCombatantControl(event) {
		event.preventDefault();
		event.stopPropagation();

		if (!game.user.isGM) return;

		if (!this.viewed.started) {
			ui.notifications.warn(
				game.i18n.localize("CONAN.CombatHasNotStarted")
			);
			return;
		}

		const btn = event.currentTarget;
		const li = btn.closest(".combatant");
		const combatant = this.viewed.combatants.get(li.dataset.combatantId);

		if (combatant.isOwner) {
			this.viewed.toggleTurnDone(combatant.id);
		}
	}

	async _onConanCombatantMouseDown(event) {
		event.preventDefault();
		if (game.user.isGM && this.viewed.started) {
			const li = event.currentTarget;
			const combatantId = li.dataset.combatantId;

			const combat = this.viewed;

			const currentTurn = combat.turn ?? -1;

			let newTurn = currentTurn;

			for (let [i, turn] of combat.turns.entries() ) {
				if (turn.isDefeated) continue;
				if (turn.id === combatantId) {
					newTurn = i;
					break;
				}
			}

			if (newTurn !== currentTurn) {
				combat.setTurn(newTurn);
			}
		}
	}
}

class ConanChat {

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

class ConanCompendiums {

	static _collectionFromArray(array) {
		const collection = new Collection();
		for (let d of array) {
			collection.set(d._id, d);
		}
		return collection;
	}

	static async _documents(type, subtype=null, filterSources=true) {
		// let docs = game.collections.get(type).filter(d => d.type === subtype);
		let docs = [];
		let sources = [];

		if (filterSources) {
			sources = game.settings.get("conan2d20", "sourceFilters") ?? [];
		}

		const sourcesSet = sources.length > 0;

		// / Iterate through the Packs, adding them to the list
		for (let pack of game.packs) {
			if (pack.metadata.type !== type) continue;

			let documents = await pack.getIndex({fields: ["system"]});

			// filter by subtype
			if (subtype !== null) {
				documents = documents.filter(d => d.type === subtype);
			}

			for (const doc of documents) {
				docs.push(doc);
			}
		}

		// filter out non selected sources
		if (sourcesSet) {
			docs = docs.filter(
				d => {
					const source = d.system?.source?.title ?? "";
					return source === "" || sources.includes(source);
				}
			);
		}

		// Dedupe and sort the list alphabetically
		docs = Array.from(new Set(docs)).sort(
			(a, b) => a.name.localeCompare(b.name)
		);

		// return new collection
		return this._collectionFromArray(docs);
	}

	// static async documents(type, sources=[]) {
	// 	const noSources = sources.length === 0;

	// 	const documents = await ConanCompendiums.compendiumDocuments("Item", type);

	// 	if (noSources) {
	// 		return documents;
	// 	}
	// 	else {
	// 		const filteredDocuments = documents.filter(
	// 			document => {
	// 				const source = document.system.description.source.book;

	// 				return source === "" || sources.includes(source);
	// 			}
	// 		);

	// 		// re-create the collection from the filtered Items
	// 		const filteredCollection = new Collection();
	// 		for (let d of filteredDocuments) {
	// 			filteredCollection.set(d.id, d);
	// 		}

	// 		return filteredCollection;
	// 	}
	// }

	static async aspects(filterSources=true) {
		return ConanCompendiums._documents("Item", "aspect", filterSources);
	}

	static async archetypes(filterSources=true) {
		return ConanCompendiums._documents("Item", "archetype", filterSources);
	}

	static async bloodlineTalents(filterSources=true) {
		return ConanCompendiums.talents(["bloodline"], filterSources);
	}

	static async characterCreationRollTables() {
		const characterRolltableChoices = {};

		game.packs.filter(
			pack => pack.metadata.type === "RollTable"
		).sort(
			(a, b) => a.metadata.label.localeCompare(b.metadata.label)
		).forEach(
			pack => {
				characterRolltableChoices[pack.metadata.id] = pack.metadata.label;
			}
		);

		return characterRolltableChoices;
	}

	static async characterItemChoiceRollTables() {
		const characterItemChoices = {};

		game.packs.filter(
			pack => pack.metadata.type === "Item"
		).sort(
			(a, b) => a.metadata.label.localeCompare(b.metadata.label)
		).forEach(
			pack => {
				characterItemChoices[pack.metadata.id] = pack.metadata.label;
			}
		);

		return characterItemChoices;
	}

	static async castes(filterSources=true) {
		return ConanCompendiums._documents("Item", "caste", filterSources);
	}

	static async casteTalents(filterSources=true) {
		return ConanCompendiums.talents(["caste"], filterSources);
	}

	static async educations(filterSources=true) {
		return ConanCompendiums._documents("Item", "education", filterSources);
	}

	static async homelands(filterSources=true) {
		return ConanCompendiums._documents("Item", "homeland", filterSources);
	}

	static async fortuneTalents(filterSources=true) {
		return ConanCompendiums.talents(["fortune"], filterSources);
	}

	static async homelandTalents(filterSources=true) {
		return ConanCompendiums.talents(["homeland"], filterSources);
	}

	static async languages(filterSources=true) {
		return ConanCompendiums._documents("Item", "language", filterSources);
	}

	static async natures(filterSources=true) {
		return ConanCompendiums._documents("Item", "nature", filterSources);
	}

	static async otherTalents(filterSources=true) {
		return ConanCompendiums.talents(["other"], filterSources);
	}

	static async skillTalents(filterSources=true) {
		return ConanCompendiums.talents(["skill"], filterSources);
	}

	static async stories(filterSources=true) {
		return ConanCompendiums._documents("Item", "story", filterSources);
	}

	static async talents(subtypes, filterSources=true) {
		const documents =
			await ConanCompendiums._documents("Item", "talent", filterSources);

		if (!subtypes) {
			return documents;
		}

		return this._collectionFromArray(
			documents.filter(
				document => subtypes.includes(document.system.talentType)
			)
		);
	}

	static async warStories(filterSources=true) {
		return ConanCompendiums._documents("Item", "warstory", filterSources);
	}
}

const conanCharacterCreatorHooks = {
	attach: () => {
		conan.logger.log("Attaching conanCharacterCreatorHooks");

		Hooks.on("renderSidebarTab", async function(app, html) {
			if (app.options.classes.includes("actors-sidebar")) {
				conan.logger.debug(
					"Running conanCharacterCreatorHooks::renderSidebarTab hook"
				);

				const title = game.i18n.localize("CONAN.CharacterCreator.button.label");

				const button = $(
					await renderTemplate(
						"systems/conan2d20/templates/ui/character-creator-button.hbs",
						{ title }
					)
				);

				button.click(() => {
					new CharacterCreator().render(true);
				});

				html.find(".directory-footer").append(button);
			}
		});
	},
};

class ConanMenuLayer extends PlaceablesLayer {
	constructor() {
		super();
		this.objects = {};
	}

	static get layerOptions() {
		return foundry.utils.mergeObject(super.layerOptions, {
			name: "conan-menu",
			zIndex: 60,
		});
	}

	static get documentName() {
		return "Token";
	}

	get placeables() {
		return [];
	}
}

class ConanMenu {
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

const conanMenuHooks = {
	attach: () => {
		conan.logger.log("Attaching conanMenuHooks");

		Hooks.on("getSceneControlButtons", ConanMenu.getButtons);
		Hooks.on("renderSceneControls", ConanMenu.renderControls);
	},
};

class ConanUpdateBase {

	static version;

	version = this.constructor["version"]; // eslint-disable-line

	// Update the actor to the latest schema version.
	//
	async updateActor(actorData) {}

	// Update the item to the latest schema version.
	//
	async updateItem(itemData, actorData) {}

	// And updates required to system settings can be performed here.
	//
	async updateSettings() {}

}

class Update_031421 extends ConanUpdateBase {
	static version = 0.031421;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent" && itemData.system.skill) {
			conan.logger.log(
				"Found Talent Item from previous schema. Migrating Item schema."
			);

			if (!itemData.system.tree) {
				updateData["system.tree"] =
					game.i18n.localize(CONFIG.CONAN.skills[item.system.skill]) || "";
			}

			conan.logger.log("Removing unused field in Item schema.");

			updateData["system.-=skill"] = null;
		}

		return updateData;
	}
}

class Update_220106 extends ConanUpdateBase {
	static version = 0.220106;

	async updateActor(actorData) {
		const updateData = {};

		const physicalExists = Number.isInteger(
			actorData.system?.health?.physical?.bonus
		);

		const mentalExists = Number.isInteger(
			actorData.system?.health?.mental?.bonus
		);

		if (!physicalExists || !mentalExists) {
			conan.logger.log(
				"Found Actor missing health bonus from previous schema. Migrating Actor schema."
			);

			updateData["system.health.physical.bonus"] = 0;
			updateData["system.health.mental.bonus"] = 0;
		}

		return updateData;
	}
}

class Update_22040301 extends ConanUpdateBase {
	static version = 0.22040301;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "transportation") {
			if (
				typeof itemData.system.stowage === "number"
					|| typeof itemData.system.stowage === "string"
			) {
				conan.logger.log(
					"Found Item using old stowage schema. Migrating Item schema."
				);

				let currentStowage = parseInt(itemData.system.stowage);
				currentStowage = isNaN(currentStowage) ? 0 : currentStowage;

				updateData["system.stowage.max"] = currentStowage;
				updateData["system.stowage.value"] = currentStowage;
			}
		}

		return updateData;
	}

}

class Update_22081201 extends ConanUpdateBase {
	static version = 0.22081201;

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.type === "npc") {
			// Delete these unused fields
			updateData["system.-=isMinion"] = null;
			updateData["system.-=isToughened"] = null;
			updateData["system.-=isNemesis"] = null;

			const categories = actorData.system.categories.value;

			if (categories.includes("minion")) {
				updateData["system.type"] = "minion";
			}
			if (categories.includes("toughened")) {
				updateData["system.type"] = "toughened";
			}
			if (categories.includes("nemesis")) {
				updateData["system.type"] = "nemesis";
			}


			const newCategories = [];
			for (const category of actorData.system.categories.value) {
				if (category !== "minion"
					&& category !== "toughened"
					&& category !== "nemesis"
				) {
					newCategories.push(category);
				}
			}

			updateData["system.categories.value"] = newCategories;
		}

		return updateData;
	}
}

class Update_22102901 extends ConanUpdateBase {
	static version = 0.22102901;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.system.encumbrance === "1each") {
			conan.logger.log(
				"Found Item using old '1each' encumbrance value. Migrating Item."
			);

			updateData["system.encumbrance"] = 1;
		}

		return updateData;
	}

}

class Update_22110501 extends ConanUpdateBase {
	static version = 0.22110501;

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.system.health.mental.traumas.current) {
			updateData["system.health.mental.traumas.value"] =
				actorData.system.health.mental.traumas.current;

			updateData["system.health.mental.traumas.-=current"] = null;
			updateData["system.health.mental.traumas.-=treated"] = null;

			conan.logger.log("Conan2d20 System | Migrating Actor mental health");
		}

		return updateData;
	}
}

class Update_22120601 extends ConanUpdateBase {
	static version = 0.22120601;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "spell") {
			// Strip out any leading or trailing spaces for the effects on these
			// items caused by the template textarea issue
			//
			const regex = /^\s+|\s+$/g;

			const momentumSpends = [];

			for (const [, value] of Object.entries(itemData.system.effects.momentum)) {
				momentumSpends.push({
					difficulty: value.difficulty.replace(regex, ""),
					effect: value.effect.replace(regex, ""),
					spend: value.spend.replace(regex, ""),
					type: value.type.replace(regex, ""),
				});
			}

			updateData["system.effects.momentum"] = momentumSpends;

			const alternativeSpends = [];

			for (const [, value] of Object.entries(itemData.system.effects.alternative)) {
				alternativeSpends.push({
					difficulty: value.difficulty.replace(regex, ""),
					effect: value.effect.replace(regex, ""),
					spend: value.spend.replace(regex, ""),
					type: value.type.replace(regex, ""),
				});
			}

			updateData["system.effects.alternative"] = alternativeSpends;
		}

		return updateData;
	}
}

class Update_22122701 extends ConanUpdateBase {
	static version = 0.22122701;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "kit") {
			updateData["system.quantity"] = 1;
		}

		return updateData;
	}
}

// Remove dead/unused fields that were never removed previously due to
// limitations with the previous migration scripts

class Update_23061601 extends ConanUpdateBase {
	static version = 0.23061601;

	// A whole bunch of field deletions in previous schema update scripts did
	// not work correctly, so we will clean them up in this one.

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.type === "npc") {
			updateData["system.-=isMinion"] = null;
			updateData["system.-=isToughened"] = null;
			updateData["system.-=isNemesis"] = null;
		}

		updateData["system.health.mental.traumas.-=current"] = null;
		updateData["system.health.mental.traumas.-=treated"] = null;

		return updateData;
	}

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent" && itemData.system.skill) {
			conan.logger.log("Removing unused field in Item schema.");

			updateData["system.-=skill"] = null;
		}

		return updateData;
	}
}

// Migrates a character actor's homeland from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

class Update_23061901 extends ConanUpdateBase {
	static version = 0.23061901;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.homeland": {value: ""},
		};

		const currentHomeland = actorData.system?.background?.homeland?.value ?? "";

		if (currentHomeland !== "") {
			const itemLut = {};
			(await conan.compendiums.homelands(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const homelandItem = itemLut[currentHomeland.slugify()];

			if (homelandItem) {
				updateData["system.background.homeland"] = {value: homelandItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Homeland '{homeland}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							homeland: currentHomeland,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}

// Migrates a character actor's languages to uuid compendium links
//
// Attempts to match any custom values to a uuid compendium link if there is
// a match on the slugified names

class Update_23062001 extends ConanUpdateBase {
	static version = 0.23062001;

	async updateActor(actorData) {
		const updateData = {};

		const isCharacter = actorData.type === "character";

		if (!isCharacter) return;

		const hasLanguages = (Array.isArray(actorData.system.background.languages.value)
			&& actorData.system.background.languages.value.length > 0
		) || actorData.system.background.languages.custom !== "";

		const newLanguages = [];
		if (isCharacter && hasLanguages) {

			const languageLut = {};
			(await conan.compendiums.languages(false)).forEach(
				item => languageLut[item.name.slugify()] = item.uuid
			);

			for (const language of actorData.system.background.languages.value) {
				if (languageLut[language]) {
					newLanguages.push(languageLut[language]);
				}
			}

			// Custom languages can be separated by semicolon characters to allow for
			// more than one custom language
			let customLanguages = (actorData.system?.background?.languages?.custom ?? "").split(";");
			customLanguages = customLanguages.filter(e => e); // filter out empty strings

			for (const language of customLanguages) {
				const lutKey = language.slugify();

				if (languageLut[lutKey]) {
					newLanguages.push(languageLut[lutKey]);
				}
				else {
					ui.notifications.warn(
						game.i18n.format(
							"Language '{language}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
							{
								language,
								name: actorData.name,
							}
						),
						{permanent: true}
					);
				}
			}

		}
		updateData["system.background.languages"] = newLanguages;

		return updateData;
	}
}

// Removes unecessary field, and values from weapon and npcattack items

class Update_23062201 extends ConanUpdateBase {
	static version = 0.23062201;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "weapon" || itemData.type === "npcattack") {
			updateData["system.-=group"] = null;

			if (itemData.system.size === "none") {
				updateData["system.size"] = "";
			}
		}

		return updateData;
	}
}

// Migrates a character actor's caste from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

class Update_23062301 extends ConanUpdateBase {
	static version = 0.23062301;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.caste": {value: ""},
		};

		const currentValue = actorData.system?.background?.caste?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};
			(await conan.compendiums.castes(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.caste"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Caste '{caste}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							caste: currentValue,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}

// Removes some dead/unused fields and renames the "war-story" field to
// something less problematic.  Also extracts the trait value from the weird
// location it had got itself in and puts it in a better place

class Update_23062302 extends ConanUpdateBase {
	static version = 0.23062302;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const warStory = actorData.system?.background["war-story"]?.value ?? "";
		const trait = actorData.system?.background?.story?.trait?.value ?? "";

		// TODO If both trait and caste is set for this actor, attempt to
		// work out what the matching story is as we didn't previously use
		// that field

		const updateData = {
			"system.background.-=attribute-aspect": null,
			"system.background.-=war-story": null,
			"system.background.story.-=trait": null,
			"system.background.trait": {value: trait},
			"system.background.warstory": {value: warStory},
		};

		return updateData;
	}
}

// Migrates a character actor's nature from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

class Update_23062303 extends ConanUpdateBase {
	static version = 0.23062303;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.nature": {value: ""},
		};

		const currentValue = actorData.system?.background?.nature?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};
			(await conan.compendiums.natures(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.nature"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Nature '{nature}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							nature: currentValue,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}

// Removes some dead/unecessary fields from "action" item types and migrates
// the only needed information from actionCategory to a simple boolean

class Update_23062601 extends ConanUpdateBase {
	static version = 0.23062601;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "action") {
			updateData["system.-=actionCategory"] = null;
			updateData["system.-=actionCount"] = null;
			updateData["system.-=requirements"] = null;
			updateData["system.-=weapon"] = null;

			// In all the core actions but not in schema, so ditch them
			updateData["system.-=damage"] = null;
			updateData["system.-=qualities"] = null;

			if (itemData.system.actionCategory === "movement") {
				updateData["system.isMovementAction"] = true;
			}
		}

		return updateData;
	}
}

// Removes some dead/unecessary fields from "display" item types and migrates
// the only needed information from actionCategory to a simple boolean

class Update_23062602 extends ConanUpdateBase {
	static version = 0.23062602;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "display") {
			updateData["system.-=requirement"] = null;

			if (itemData.system.damage.dice === "x") {
				updateData["system.damage.dice"] = 0;
				updateData["system.damage.special"] = true;
			}
			else {
				let dice = Number.parseInt(itemData.system.damage.dice);

				if (isNaN(dice)) dice = 1;

				updateData["system.damage.dice"] = dice;
			}
		}

		return updateData;
	}
}

// Removes some dead/unecessary fields from "talent" item types

class Update_23062701 extends ConanUpdateBase {
	static version = 0.23062701;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent") {
			updateData["system.-=actionCategory"] = null;
			updateData["system.-=actionType"] = null;
			updateData["system.-=category"] = null;
			updateData["system.-=skill"] = null;
		}

		return updateData;
	}
}

// Rename schema fields for internal consistency

class Update_23062702 extends ConanUpdateBase {
	static version = 0.23062702;

	async updateItem(itemData, actorData) {
		const updateData = {};

		const max = itemData.system.capacity;
		const value = itemData.system.current;

		if (itemData.type === "transportation") {
			updateData["system.passengers.-=capacity"] = null;
			updateData["system.passengers.-=current"] = null;
			updateData["system.passengers.max"] = max;
			updateData["system.passengers.value"] = value;
		}

		return updateData;
	}
}

// Removes some dead/unecessary fields from "talent" item types

class Update_23062801 extends ConanUpdateBase {
	static version = 0.23062801;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "caste") {
			updateData["system.story.-=numAllowed"] = null;
			updateData["system.talent.-=numAllowed"] = null;
		}

		if (itemData.type === "homeland") {
			updateData["system.language.-=numAllowed"] = null;
			updateData["system.talent.-=numAllowed"] = null;
		}

		if (itemData.type === "nature") {
			updateData["system.electiveSkill.-=numAllowed"] = null;
			updateData["system.mandatorySkill.-=numAllowed"] = null;
		}

		return updateData;
	}
}

// Migrates a character actor's nature from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

class Update_23062901 extends ConanUpdateBase {
	static version = 0.23062901;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.education": {value: ""},
		};

		const currentValue = actorData.system?.background?.education?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};
			(await conan.compendiums.educations(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.education"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Education '{education}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							education: currentValue,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}

// Migrates a character actor's nature from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

class Update_23063001 extends ConanUpdateBase {
	static version = 0.23063001;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.warstory": {value: ""},
		};

		const currentValue = actorData.system?.background?.warstory?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};
			(await conan.compendiums.warStories(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.warstory"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"War Story '{warstory}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							warstory: currentValue,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}

// Removes unecessary legacy data entries from character templates as they
// are now calculated

class Update_23071301 extends ConanUpdateBase {
	static version = 0.23071301;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const skillKeys = [
			"acr",
			"alc",
			"ani",
			"ath",
			"com",
			"cou",
			"cra",
			"dis",
			"hea",
			"ins",
			"lin",
			"lor",
			"mel",
			"obs",
			"par",
			"per",
			"ran",
			"res",
			"sai",
			"soc",
			"sor",
			"ste",
			"sur",
			"thi",
			"war",
		];

		const updateData = {};

		skillKeys.forEach(key => {
			updateData[`system.skills.${key}.-=trained`] = null;
			updateData[`system.skills.${key}.-=tn`] = null;
		});

		return updateData;
	}
}

// The `archetype`, `education` and `nature` talent types don't really exist
// in the game, so retire them.  If any user has created talents of these types
// they will be moved to `other`
//
// Also, for skill related talents, attempt to set the linked skill from the
// tree name as this will be useful for the new Talent Manager that's being
// added

class Update_23071501 extends ConanUpdateBase {
	static version = 0.23071501;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent") {
			const talentType = itemData.system.talentType;

			const typesToMigrate = ["archetype", "education", "nature"];

			if (typesToMigrate.includes(talentType)) {
				updateData["system.talentType"] = "other";
			}
			else if (talentType === "skill") {
				updateData["system.tree"] = "";

				let foundSkill = false;
				const tree = (itemData.system.tree ?? "").trim();
				for (const [key, value] of Object.entries(CONFIG.CONAN.skills)) {
					if (tree === value) {
						foundSkill = true;
						updateData["system.linkedSkill"] = key;
						break;
					}
				}

				if (!foundSkill) {
					let message;

					// linkedSkill needs to be set to _something_ so just use
					// the first in the list and also warning that it needs to
					// be manually fixed should be good enough
					//
					updateData["system.linkedSkill"] = "acr";

					if (actorData) {
						message = game.i18n.format(
							"Unable to derive linked Skill for Talent '{talent}' belonging to Actor '{actorName}' from its configured Tree; you will need to update the linked Skill for this Talent manually.",
							{
								talent: itemData.name,
								actorName: actorData.name,
							}
						);
					}
					else {
						message = game.i18n.format(
							"Unable to derive linked Skill for Talent '{talent}' from its configured Tree; you will need to update the linked Skill for this Talent manually.",
							{
								talent: itemData.name,
							}
						);
					}

					ui.notifications.warn(message, {permanent: true});
				}
			}
			else if (talentType !== "other") {
				updateData["system.tree"] = "";
			}
		}

		return updateData;
	}
}

// Migrates a character actor's archetype from a free text field to a uuid
// compendium link
//
// Attempts to match any current value to a uuid compendium link if there is
// a match on the slugified names

class Update_23072101 extends ConanUpdateBase {
	static version = 0.23072101;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.background.archetype": {value: ""},
		};

		const currentValue = actorData.system?.background?.archetype?.value ?? "";

		if (currentValue !== "") {
			const itemLut = {};

			(await conan.compendiums.archetypes(false)).forEach(
				item => itemLut[item.name.slugify()] = item.uuid
			);

			const matchingItem = itemLut[currentValue.slugify()];

			if (matchingItem) {
				updateData["system.background.archetype"] = {value: matchingItem};
			}
			else {
				ui.notifications.warn(
					game.i18n.format(
						"Archetype '{archetype}' for Character '{name}' does not exist in a compendium; you will need to create this Item and update the Character manually.",
						{
							archetype: currentValue,
							name: actorData.name,
						}
					),
					{permanent: true}
				);
			}
		}

		return updateData;
	}
}

// Remove legacy 'prerequisites' field from Talents and irrelevant `xp.max`
// value from Actors

class Update_23081401 extends ConanUpdateBase {
	static version = 0.23081401;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const updateData = {
			"system.resources.xp.-=max": null,
		};

		return updateData;
	}

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "talent") {
			updateData["system.-=prerequisites"] = null;
		}

		return updateData;
	}
}

class Update_23091301 extends ConanUpdateBase {
	static version = 0.23091301;

	async updateItem(itemData, actorData) {
		const updateData = {};

		const qualityCleanTypes = ["display", "npcattack", "weapon"];

		if (qualityCleanTypes.includes(itemData.type)) {
			const qualities = itemData.system?.qualities?.value ?? [];

			for (const quality of qualities) {
				delete quality.exceptions;
				delete quality.label;
			}

			updateData["system.qualities.value"] = qualities;
		}
		else if (itemData.type === "armor") {
			const qualities = itemData.system?.qualities?.value ?? [];

			const newQualities = [];

			for (const quality of qualities) {
				newQualities.push({
					type: quality,
					value: "",
				});
			}

			updateData["system.qualities.value"] = newQualities;
		}

		return updateData;
	}
}

class Update_23100201 extends ConanUpdateBase {
	static version = 0.23100201;

	async updateActor(actorData) {
		const updateData = {};

		if (actorData.system.qualities) {
			updateData["system.qualities.-=custom"] = null;
		}

		if (actorData.system.categories) {
			updateData["system.categories.-=custom"] = null;
		}

		return updateData;
	}

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.system.qualities) {
			const newQualities = [];

			for (const quality of itemData.system.qualities?.value ?? []) {
				if (quality.type === "custom") continue;
				newQualities.push(quality);
			}

			updateData["system.qualities.value"] = newQualities;
			updateData["system.qualities.-=custom"] = null;
		}

		if (itemData.system.coverage) {
			updateData["system.coverage.-=custom"] = null;
		}

		return updateData;
	}
}

class Update_23100601 extends ConanUpdateBase {
	static version = 0.23100601;

	async updateItem(itemData, actorData) {
		const updateData = {};

		if (itemData.type === "armor" && itemData.system.qualities) {
			const newQualities = [];

			for (const quality of itemData.system.qualities?.value ?? []) {
				if (quality.type.hasOwnProperty("type")) {
					newQualities.push(quality.type);
				}
				else {
					newQualities.push(quality);
				}
			}

			updateData["system.qualities.value"] = newQualities;
		}

		return updateData;
	}
}

class Update_23111001 extends ConanUpdateBase {
	static version = 0.23111001;

	async updateActor(actorData) {
		if (actorData.type === "npc") return;

		const actor = game.actors.get(actorData._id);

		const bogusBackgroundItemIds = [];
		for (const item of actor.items) {
			if (CONFIG.CONAN.backgroundItems.includes(item.type)) {
				bogusBackgroundItemIds.push(item._id);
			}
		}

		if (bogusBackgroundItemIds.length > 0) {
			actor.deleteEmbeddedDocuments("Item", bogusBackgroundItemIds);
		}
	}

}

class Update_24012101 extends ConanUpdateBase {
	static version = 0.24012101;

	async updateActor(actorData) {
		if (actorData.type !== "npc") return;

		return {
			"system.-=description": null,
			"system.-=notes": null,
			"system.-=optional": null,
		};
	}

}

// Migrates any transportation items owned by actors to the new actor classes
// and then moves any stowed items into their inventory before deleting the
// items from the original actor
//
class Update_24012601 extends ConanUpdateBase {
	static version = 0.24012601;

	async updateItem(itemData, actorData) {
		if (!actorData) return;
		if (itemData.type !== "transportation") return;

		const actor = game.actors.get(actorData._id);
		const stowedItems = actor.items.filter(
			i => (i.system.stowedIn ?? "") === itemData._id
		);

		const animalsLut = {
			one: 1,
			onep: 1,
			two: 2,
			twop: 2,
			four: 4,
			fourp: 4,
		};

		const typeMapping = {
			boats: "watercraft",
			carts: "transport",
			mounts: "mount",
		};

		const mountCapabilities = {
			p: ["pack"],
			mp: ["mount", "pack"],
			bmp: ["battle", "mount", "pack"],
		};

		const system = {
			availability: itemData.system.availability ?? 1,
			cost: itemData.system.cost,
			details: {
				biography: {
					value: itemData.system.description?.value ?? "",
				},
			},
			passengers: {
				max: itemData.system.passengers?.max ?? 0,
				value: itemData.system.passengers?.value ?? 0,
			},
			stowage: {
				max: itemData.system.stowage?.max ?? 0,
			},
		};

		if (itemData.system.categories === "mounts") {
			system.tags = {
				value: mountCapabilities[itemData.system.capabilities] ?? [],
			};
		}
		if (itemData.system.categories === "carts") {
			system.animals = animalsLut[itemData.system.animals] ?? 0;
		}

		const newMountData = {
			type: typeMapping[itemData.system.categories] ?? "transport",
			name: itemData.name,
			img: itemData.img,
			ownership: actorData.ownership,
			system,
			prototypeToken: {
				bar1: {attribute: "health.physical"}, // Default Bar 1 to Vigor
				bar2: {attribute: "health.mental"}, // Default Bar 2 to Resolve
				displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
				displayName: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
				disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
				name: itemData.name, // Set token name to actor name
				texture: {
					src: itemData.img,
				},
			},
		};

		const newMount = await ConanActor.create(newMountData);

		if (newMount) {
			const itemsToDelete = [itemData._id];
			const newItems = [];

			for (const item of stowedItems) {
				const itemData = foundry.utils.duplicate(item);
				itemData.system.stowedIn = "";

				newItems.push(itemData);
				itemsToDelete.push(item._id);
			}

			await newMount.createEmbeddedDocuments("Item", newItems);
			await actor.deleteEmbeddedDocuments("Item", itemsToDelete);
		}
	}

}

class Update_24022401 extends ConanUpdateBase {
	static version = 0.24022401;

	async updateActor(actorData) {

		const categoryValues = actorData.system.categories?.value ?? [];

		const updateData = {
			"system.-=categories": null,
			"system.-=difficultyModifier": null,
			"system.-=skilldice": null,
			"system.-=spells": null,
			"system.-=spellslist": null,
			"system.tags.value": categoryValues,
		};

		return updateData;
	}

}

var migrations = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Update_031421: Update_031421,
	Update_220106: Update_220106,
	Update_22040301: Update_22040301,
	Update_22081201: Update_22081201,
	Update_22102901: Update_22102901,
	Update_22110501: Update_22110501,
	Update_22120601: Update_22120601,
	Update_22122701: Update_22122701,
	Update_23061601: Update_23061601,
	Update_23061901: Update_23061901,
	Update_23062001: Update_23062001,
	Update_23062201: Update_23062201,
	Update_23062301: Update_23062301,
	Update_23062302: Update_23062302,
	Update_23062303: Update_23062303,
	Update_23062601: Update_23062601,
	Update_23062602: Update_23062602,
	Update_23062701: Update_23062701,
	Update_23062702: Update_23062702,
	Update_23062801: Update_23062801,
	Update_23062901: Update_23062901,
	Update_23063001: Update_23063001,
	Update_23071301: Update_23071301,
	Update_23071501: Update_23071501,
	Update_23072101: Update_23072101,
	Update_23081401: Update_23081401,
	Update_23091301: Update_23091301,
	Update_23100201: Update_23100201,
	Update_23100601: Update_23100601,
	Update_23111001: Update_23111001,
	Update_24012101: Update_24012101,
	Update_24012601: Update_24012601,
	Update_24022401: Update_24022401
});

class ConanMigrationRunner {
	allMigrations;

	currentMigrationTask;

	latestVersion = 0;

	async buildMigrations() {
		const unsortedMigrations = [];

		for (const migration in migrations) {
			const migrationVersion = migrations[migration].version;

			this.latestVersion = migrationVersion > this.latestVersion
				? migrationVersion
				: this.latestVersion;

			if (migrationVersion > this.currentVersion) {
				unsortedMigrations.push(new migrations[migration]());
			}
		}

		this.allMigrations = unsortedMigrations.sort((a, b) => {
			return a.version - b.version;
		});
	}

	get currentVersion() {
		return game.settings.get(SYSTEM_ID, "worldSchemaVersion");
	}

	async migrateCompendium(pack) {
		const documentName = pack.documentName;

		if (!["Actor", "Item"].includes(documentName)) return;

		// Unlock the pack for editing
		const wasLocked = pack.locked;
		await pack.configure({locked: false});

		// Begin by requesting service-side migration
		await pack.migrate();
		const documents = await pack.getDocuments();

		// Iterate over compendium entries - apply migration functions
		for (let doc of documents) {
			let updateData = {};
			try {
				const objectData = doc.toObject();
				switch (documentName) {
					case "Actor":
						updateData = await this.currentMigrationTask.updateActor(objectData);
						break;
					case "Item":
						updateData = await this.currentMigrationTask.updateItem(objectData);
						break;
				}

				// Save the entry if data was updated
				if (foundry.utils.isEmpty(updateData)) continue;

				await doc.update(updateData);

				conan.logger.log(`Migrated ${documentName} document "${doc.name}" in Compendium "${pack.collection}"`);
			}
			catch(err) {
				err.message = `Failed system migration for document "${doc.name}" in pack "${pack.collection}": ${err.message}`;
				console.error(err);
			}
		}

		// Apply the original locked status for the pack
		await pack.configure({locked: wasLocked});

		conan.logger.log(`Migrated all "${documentName}" documents from Compendium "${pack.collection}"`);
	}

	async migrateSceneTokens(scene) {
		for (const token of scene.tokens) {
			try {
				// if the token is linked or has no actor, we don"t need to do anything
				if (token.actorLink || !game.actors.has(token.actorId)) continue;

				const actorData = foundry.utils.duplicate(game.actors.get(token.actorId));

				const delta = token.delta;

				if (delta?.system) {
					actorData.system = foundry.utils.mergeObject(
						actorData.system,
						delta.system,
						{inplace: false}
					);
				}

				const updateData = await this.currentMigrationTask.updateActor(actorData);

				if (!foundry.utils.isEmpty(updateData)) {
					conan.logger.log(`Migrating Token document "${token.name}"`);

					updateData._id = token.id;

					await scene.updateEmbeddedDocuments(
						"Token",
						[updateData],
						{enforceTypes: false}
					);
				}
			}
			catch(err) {
				err.message = `Failed system migration for Token "${token.name}": ${err.message}`;
				conan.logger.error(err);
			}
		}
	}

	async migrateSettings() {
		await this.currentMigrationTask.updateSettings();
	}

	get migrateSystemCompendiumsEnabled() {
		return game.settings.get(SYSTEM_ID, "migrateSystemCompendiums");
	}

	async migrateWorldCompendiums() {
		for (let pack of game.packs) {
			// Don't migrate system packs unless the proper debug setting is
			// enabled
			//
			if (!this.migrateSystemCompendiumsEnabled) {
				if (pack.metadata.packageType !== "world") continue;
			}

			await this.migrateCompendium(pack);
		}
	}

	async migrateWorldActors() {
		const actors = game.actors.map(a => [a, true])
			.concat(Array.from(game.actors.invalidDocumentIds).map(
				id => [game.actors.getInvalid(id), false]
			));

		for (const [actor, valid] of actors) {
			try {
				const actorSource = valid
					? actor.toObject()
					: game.actors.find(a => a._id === actor.id);

				const updateData = await this.currentMigrationTask.updateActor(actorSource);

				if (!foundry.utils.isEmpty(updateData)) {
					conan.logger.log(`Migrating Actor document "${actor.name}"`);
					await actor.update(updateData);
				}

				const items = actor.items.map(a => [a, true])
					.concat(Array.from(actor.items.invalidDocumentIds).map(
						id => [actor.items.getInvalid(id), false]
					));

				for (const [item, validItem] of items) {
					const itemSource = validItem
						? item.toObject()
						: actor.items.find(a => a._id === item.id);

					const updateData = await this.currentMigrationTask.updateItem(
						itemSource,
						actorSource
					);

					if (!foundry.utils.isEmpty(updateData)) {
						conan.logger.log(`Migrating Actor Item document "${item.name}"`);
						await item.update(updateData);
					}
				}
			}
			catch(err) {
				err.message = `Failed system migration for Actor "${actor.name}": ${err.message}`;
				console.error(err);
			}
		}
	}

	async migrateWorldItems() {
		const items = game.items.map(a => [a, true])
			.concat(Array.from(game.items.invalidDocumentIds).map(
				id => [game.items.getInvalid(id), false]
			));

		for (const [item, valid] of items) {
			try {
				const source = valid
					? item.toObject()
					: game.items.find(a => a._id === item.id);

				const updateData = await this.currentMigrationTask.updateItem(source);

				if (!foundry.utils.isEmpty(updateData)) {
					conan.logger.log(`Migrating Item document "${item.name}"`);
					item.update(updateData);
				}
			}
			catch(err) {
				err.message = `Failed system migration for Item "${item.name}": ${err.message}`;
				console.error(err);
			}
		}
	}

	async migrateWorldScenes() {
		for (const scene of game.scenes) {
			await this.migrateSceneTokens(scene);
		}
	}

	async migrateWorld() {
		const version = this.currentMigrationTask.version;

		const startMessage = game.i18n.format("CONAN.migration.begin_schema", {version});

		conan.logger.log(startMessage);
		ui.notifications.info(startMessage, {permanent: false});

		await this.migrateSettings();
		await this.migrateWorldActors();
		await this.migrateWorldItems();
		await this.migrateWorldScenes();
		await this.migrateWorldCompendiums();

		conan.logger.log(
			game.i18n.format("CONAN.migration.completed_schema", {version})
		);
	}

	needsMigration() {
		return this.latestVersion > this.currentVersion;
	}

	async run() {
		conan.logger.log(`Current schema version ${this.currentVersion}`);

		await this.buildMigrations();

		// If this is a brand new world then we don't need to do any migrations.
		//
		if (game.world.playtime === 0) {
			conan.logger.log(`Setting new world schema version to ${this.latestVersion}`);

			await game.settings.set(
				SYSTEM_ID, "worldSchemaVersion",
				this.latestVersion
			);
		}

		if (!this.needsMigration()) return;

		const startMessage = game.i18n.localize("CONAN.migration.begin_migration");

		conan.logger.log(startMessage);
		ui.notifications.info(startMessage, {permanent: false});

		for (const migration of this.allMigrations) {
			if (this.currentVersion < migration.version) {
				this.currentMigrationTask = migration;

				await this.migrateWorld();

				game.settings.set(SYSTEM_ID, "worldSchemaVersion", migration.version);
			}
		}

		const endMessage = game.i18n.localize("CONAN.migration.completed_migration");

		conan.logger.log(endMessage);
		ui.notifications.info(endMessage, {permanent: false});
	}
}

function foundryOverrides() {

	Token.prototype.decrementCondition = async function(
		effect,
		{active, overlay = false} = {}
	) {
		this.actor.removeCondition(effect.id);

		// Update the Token HUD
		if (this.hasActiveHUD) canvas.tokens.hud.refreshStatusIcons();

		return active;
	};

	Token.prototype.incrementCondition = async function(
		effect,
		{active, overlay = false} = {}
	) {
		const existing = this.actor.effects.find(e => e.statuses.has(effect.id));
		const numericValue = Number.isNumeric(
			foundry.utils.getProperty(existing, "flags.conan2d20.value")
		);

		if (!existing || numericValue) {
			this.actor.addCondition(effect.id);
		}
		else if (existing) {
			// Not numeric, toggle if existing
			this.actor.removeCondition(effect.id);
		}

		// Update the Token HUD
		if (this.hasActiveHUD) canvas.tokens.hud.refreshStatusIcons();

		return active;
	};

	TokenHUD.prototype._onToggleEffect = function(
		event,
		{overlay = false} = {}
	) {
		event.preventDefault();
		const img = event.currentTarget;
		const effect =
			img.dataset.statusId && this.object.actor
				? CONFIG.CONAN.statusEffects.find(e => e.id === img.dataset.statusId)
				: img.getAttribute("src");

		if (event.button === 0) return this.object.incrementCondition(effect);
		if (event.button === 2) return this.object.decrementCondition(effect);
	};
}

function listenOnSocket() {

	game.socket.on("system.conan2d20", event => {

		if (event.type === "createCharacter") {
			// only the GM should handle this event
			if (!game.user.isGM) return;

			conan.apps.CharacterCreator.createActorFromData(
				event.payload.characterData,
				event.payload.characterItems,
				event.payload.userId
			);
		}

		if (event.type === "openNewCharacter") {
			if (event.payload.userId === game.userId) {
				const actor = game.actors.get(event.payload.actorId);

				if (actor) actor.sheet.render(true);

				return ui.notifications.info(
					game.i18n.localize("CONAN.CharacterCreator.Created.message"),
					{permanent: true}
				);
			}
		}

		if (event.type === "setCounter" && game.user.isGM) {
			conan.apps.Counter.setCounter(event.payload.value, event.payload.type);
		}

		if (event.type === "updateCounter") {
			conan.counter.render(true);
		}

	});

}

async function registerSettings() {
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

const readyHook = {
	attach: () => {
		conan.logger.log("Attaching ready hook");

		Hooks.once("ready", async () => {
			conan.logger.log("Running ready hook");

			registerSettings();

			foundryOverrides();
			listenOnSocket();

			if (game.user.isGM) {
				await new ConanMigrationRunner().run();
			}

			conan.skillRollRequest = new conan.apps.SkillRollRequest();

			conan.counter.render(true);
			conan.utils.showNewReleaseNotes();
		});
	},
};

const setupHook = {
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

class ConanHooks {

	static attach() {
		const listeners = [
			conanCharacterCreatorHooks,
			conanMenuHooks,
			readyHook,
			setupHook,
		];

		for (const listener of listeners) {
			listener.attach();
		}
	}

}

class ConanMacros {
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

class ConanUtils {
	static addDots(data, woundMax = 0, valueAttribute = "status") {
		for (let i = 0; i < woundMax; i += 1) {
			if (data.dots[i].length === 0) {
				data.dots[i] = {
					status: "healed",
					icon: "far fa-circle",
				};
			}
		}
		return data;
	}

	static async copyToClipboard(text) {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
				return ui.notifications.info(
					game.i18n.localize("CONAN.CopyToClipboardSucceeded")
				);
			}
			else {
				const textArea = document.createElement("textarea");
				textArea.value = text;
				textArea.style.position = "fixed";
				textArea.style.left = "-999px";
				textArea.style.top = "-999px";
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				return new Promise((resolve, reject) => {
					/* eslint-disable-next-line no-unused-expressions */
					document.execCommand("copy")
						? resolve(
							ui.notifications.info(
								game.i18n.localize("CONAN.CopyToClipboardSucceeded")
							)
						)
						: reject(
							new Error(game.i18n.localize("CONAN.CopyToClipboardFailed"))
						);
					textArea.remove();
				}).catch(error => ui.notifications.error(error));
			}
		}
		catch(error) {
			conan.logger.error(error);
			ui.notifications.error(game.i18n.localize("CONAN.CopyToClipboardFailed"));
		}
	}

	static deepMerge(...objects) {
		function getType(object) {
			return Object.prototype.toString.call(object).slice(8, -1).toLowerCase();
		}

		function mergeObj(clone, object) {
			for (let [key, value] of Object.entries(object)) {
				let type = getType(value);

				if (clone[key] !== undefined
					&& getType(clone[key]) === type
					&& ["array", "object"].includes(type)
				) {
					clone[key] = ConanUtils.deepMerge(clone[key], value);
				}
				else {
					clone[key] = structuredClone(value);
				}
			}
		}

		let clone = structuredClone(objects.shift());

		for (let object of objects) {
			let type = getType(object);

			if (getType(clone) !== type) {
				clone = structuredClone(object);
				continue;
			}

			if (type === "array") {
				clone = [...clone, ...structuredClone(object)];
			}
			else if (type === "object") {
				mergeObj(clone, object);
			}
			else {
				clone = object;
			}
		}

		return clone;
	}


	static foundryMinVersion(version) {
		const majorVersion = parseInt(game.version.split(".")[0]);
		return majorVersion >= version;
	}


	static getAttackDescription(item) {
		const flavor = {
			description: "CONAN.attack.default.description",
		};

		const isImprovised = (item?.system?.qualities?.value ?? []).find(
			q => q.type === "improvised"
		) ? true : false;

		if (isImprovised || item.type === "display") {
			flavor.description = `${item?.system?.description?.value}`;
		}
		else if (item?.system?.weaponType === "melee") {
			flavor.description = "CONAN.attacks.melee.description";
		}
		else if (item?.system?.weaponType === "ranged") {
			flavor.description = "CONAN.attacks.ranged.description";
		}

		return flavor;
	}

	/**
	 * Creates de-duplicated lists of Selected and Unselected Items.
	 *
	 * @param {allItems} Array A list of all available skills
	 * @param {items} Array A list of currently selected skills
	 *
	 * @returns {Promise} Promise which represents an array containing both the
	 * selected and unselected skill arrays
	 */
	static async getDedupedSelectedItems(allItems, items) {
		const unselectedItems = [];
		const selectedItems = [];

		allItems.forEach(item => {
			if (!items.includes(item.uuid)) {
				unselectedItems.push(item);
			}
		});

		for (const itemUuid of items) {
			selectedItems.push(await fromUuid(itemUuid));
		}

		selectedItems.sort((a, b) => a.name.localeCompare(b.name));

		return [selectedItems, unselectedItems];
	}

	/**
	 * Creates de-duplicated lists of Selected and Unselected attributes and
	 * returns them in objects that map the skill's unique identifier to its
	 * i18n translated name for display in the interface.
	 *
	 * @param {allSkills} Array A list of all available skills
	 * @param {skills} Array A list of currently selected skills
	 * @returns {Array} Two arrays containing the selected and unselected skills
	 */
	static getDedupedSelectedAttributes(allAttributes, attributes) {
		const selectedAttributes = attributes.map(
			choice => ({uuid: choice, name: CONFIG.CONAN.attributeLabels[choice]})
		);

		const unselectedAttributes = allAttributes.map(
			({key, name}) => ({name, uuid: key})
		).filter(attribute => !attributes.includes(attribute.uuid));

		selectedAttributes.sort((a, b) => a.name.localeCompare(b.name));

		return [selectedAttributes, unselectedAttributes];
	}

	/**
	 * Creates de-duplicated lists of Selected and Unselected skills and returns
	 * them in objects that map the skill's unique identifier to its i18n
	 * translated name for display in the interface.
	 *
	 * @param {allSkills} Array A list of all available skills
	 * @param {skills} Array A list of currently selected skills
	 * @returns {Array} Two arrays containing the selected and unselected skills
	 */
	static getDedupedSelectedSkills(allSkills, skills) {
		const selectedSkills = skills.map(
			choice => ({uuid: choice, name: CONFIG.CONAN.skills[choice]})
		);

		const unselectedSkills = allSkills.map(
			({key, name}) => ({name, uuid: key})
		).filter(skill => !skills.includes(skill.uuid));

		selectedSkills.sort((a, b) => a.name.localeCompare(b.name));

		return [selectedSkills, unselectedSkills];
	}

	static calculateArmor(armorItems, shieldItems=[]) {

		const armor = {
			head: {
				soak: [0],
				qualities: [],
			},
			torso: {
				soak: [0],
				qualities: [],
			},
			larm: {
				soak: [0],
				qualities: [],
			},
			rarm: {
				soak: [0],
				qualities: [],
			},
			lleg: {
				soak: [0],
				qualities: [],
			},
			rleg: {
				soak: [0],
				qualities: [],
			},
			shield: {
				soak: [0],
			},
		};

		for (const shield of shieldItems) {
			const quality = shield.system.qualities.value.find(q => q.type === "shieldx");

			armor.shield.soak.push(
				parseInt(quality.value)
			);
		}

		for (const armorItem of armorItems) {
			if (armorItem.isEquipped && !armorItem.isBroken) {
				for (const cover of armorItem.system.coverage?.value ?? []) {
					armor[cover].soak.push(armorItem.system.soak);

					armor[cover].qualities.push(
						...armorItem.system.qualities.value
					);
				}
			}
		}

		const totalCounts = {
			heavy: 0,
			noisy: 0,
			vheavy: 0,
			displayQualities: [],
		};

		for (const entry in armor) {
			if (entry === "shield") continue;

			const armorLocation = armor[entry];

			armorLocation.soak.sort((a, b) => b - a);

			const qualities = armorLocation.qualities ?? [];

			armorLocation.qualities = [
				...new Map(
					qualities.map(q => [q.type, q])
				).values(),
			];

			const hasQuality = {
				heavy: false,
				noisy: false,
				vheavy: false,
			};

			const countQualities = ["heavy", "vheavy", "noisy"];
			for (const quality of countQualities) {
				const count = armorLocation.qualities.filter(
					q => q.type === quality
				).length;

				if (count > 0) {
					hasQuality[quality] = true;
				}

				totalCounts[quality] += count;
			}

			totalCounts.displayQualities.push(...armorLocation.qualities.filter(
				q => !countQualities.includes(q.type)
			));

			const wearingMultipleLayers = armorLocation.soak.length > 2;

			if (wearingMultipleLayers) {
				if (hasQuality.heavy && !hasQuality.vheavy) {
					totalCounts.vheavy++;
					totalCounts.heavy--;
				}
				else if (!(hasQuality.heavy || hasQuality.vheavy)) {
					totalCounts.heavy++;
				}
			}
		}

		if (totalCounts.vheavy > 0) {
			totalCounts.displayQualities.push({
				type: "vheavy",
				label: CONFIG.CONAN.armorQualities.vheavy,
				description: CONFIG.CONAN.qualitiesDescriptions.vheavy,
			});
		}
		else {
			if (totalCounts.heavy >= 3) {
				totalCounts.displayQualities.push({
					type: "heavy",
					label: CONFIG.CONAN.armorQualities.heavy,
					description: CONFIG.CONAN.qualitiesDescriptions.heavy,
				});
			}
			if (totalCounts.noisy >= 2) {
				totalCounts.displayQualities.push({
					type: "noisy",
					label: CONFIG.CONAN.armorQualities.noisy,
					description: CONFIG.CONAN.qualitiesDescriptions.noisy,
				});
			}
		}

		totalCounts.displayQualities = [
			...new Map(
				totalCounts.displayQualities.map(q => [q.type, q])
			).values(),
		];

		totalCounts.displayQualities.sort((a, b) => a.label.localeCompare(b.label));

		armor.qualityCount = totalCounts;

		return armor;
	}

	static getMessageStyles() {
		const messageStyles = this.foundryMinVersion(12)
			? CONST.CHAT_MESSAGE_STYLES
			: CONST.CHAT_MESSAGE_TYPES;

		return messageStyles;
	}

	// If this is a new release, show the release notes to the GM the first time
	// they login
	static async showNewReleaseNotes() {
		if (game.user.isGM) {
			const savedVersion = game.settings.get("conan2d20", "systemVersion");
			const systemVersion = game.system.version;

			if (systemVersion !== savedVersion) {
				Hotbar.toggleDocumentSheet(
					CONFIG.CONAN.JournalUuids.releaseNotes
				);

				game.settings.set(
					"conan2d20", "systemVersion",
					systemVersion
				);
			}
		}
	}


	static generateTalentIdentifier(talent) {
		let typeKey = talent.system.talentType;

		if (typeKey === "skill") {
			typeKey = `${typeKey}_${talent.system.linkedSkill}`;
		}

		return `${typeKey}::${talent.name.slugify()}`;
	}

}

class Logger {
	static DEBUG_ENABLED = null;

	static debug(...args) {
		if (this.DEBUG_ENABLED === null) {
			this.DEBUG_ENABLED = game.settings.get(SYSTEM_ID, "debugEnabled");
		}

		if (this.DEBUG_ENABLED) console.debug(`${SYSTEM_NAME} |`, ...args);
	}

	static error(...args) {
		console.error(`${SYSTEM_NAME} |`, ...args);
	}

	static log(...args) {
		console.log(`${SYSTEM_NAME} |`, ...args);
	}

	static warn(...args) {
		console.warn(`${SYSTEM_NAME} |`, ...args);
	}
}

async function preloadHandlebarsTemplates() {
	const partials = [
		"systems/conan2d20/templates/actors/_shared-partials/actions.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/attack.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/attacks.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/header.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/inline-tags.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/item.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/skills-readonly.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/tabs/abilities.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/tabs/details.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/tabs/notes.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/tabs/stowage.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/transport-details.hbs",
		"systems/conan2d20/templates/actors/_shared-partials/type.hbs",
		"systems/conan2d20/templates/actors/character-sheet.hbs",
		"systems/conan2d20/templates/actors/character/partials/armor.hbs",
		"systems/conan2d20/templates/actors/character/partials/biography-selector.hbs",
		"systems/conan2d20/templates/actors/character/partials/details.hbs",
		"systems/conan2d20/templates/actors/character/partials/header.hbs",
		"systems/conan2d20/templates/actors/character/partials/health.hbs",
		"systems/conan2d20/templates/actors/character/tabs/actions.hbs",
		"systems/conan2d20/templates/actors/character/tabs/biography.hbs",
		"systems/conan2d20/templates/actors/character/tabs/character.hbs",
		"systems/conan2d20/templates/actors/character/tabs/inventory.hbs",
		"systems/conan2d20/templates/actors/character/tabs/notes.hbs",
		"systems/conan2d20/templates/actors/character/tabs/skills.hbs",
		"systems/conan2d20/templates/actors/character/tabs/spells.hbs",
		"systems/conan2d20/templates/actors/character/tabs/talents.hbs",
		"systems/conan2d20/templates/actors/npc/partials/attributes.hbs",
		"systems/conan2d20/templates/actors/npc/partials/health.hbs",
		"systems/conan2d20/templates/actors/npc/partials/mob-member.hbs",
		"systems/conan2d20/templates/actors/npc/partials/skills.hbs",
		"systems/conan2d20/templates/actors/npc/partials/type-readonly.hbs",
		"systems/conan2d20/templates/actors/npc/tabs/mob.hbs",
		"systems/conan2d20/templates/actors/watercraft/partials/attributes.hbs",
		"systems/conan2d20/templates/actors/watercraft/partials/health.hbs",
		"systems/conan2d20/templates/actors/watercraft/partials/type.hbs",
		"systems/conan2d20/templates/actors/watercraft/tabs/abilities.hbs",
		"systems/conan2d20/templates/actors/watercraft/tabs/details.hbs",
		"systems/conan2d20/templates/apps/character-creator/archetype.hbs",
		"systems/conan2d20/templates/apps/character-creator/attribute-aspects.hbs",
		"systems/conan2d20/templates/apps/character-creator/attributes.hbs",
		"systems/conan2d20/templates/apps/character-creator/belongings.hbs",
		"systems/conan2d20/templates/apps/character-creator/caste.hbs",
		"systems/conan2d20/templates/apps/character-creator/education.hbs",
		"systems/conan2d20/templates/apps/character-creator/fortune.hbs",
		"systems/conan2d20/templates/apps/character-creator/homeland.hbs",
		"systems/conan2d20/templates/apps/character-creator/languages.hbs",
		"systems/conan2d20/templates/apps/character-creator/name.hbs",
		"systems/conan2d20/templates/apps/character-creator/nature.hbs",
		"systems/conan2d20/templates/apps/character-creator/skills.hbs",
		"systems/conan2d20/templates/apps/character-creator/starting-attributes.hbs",
		"systems/conan2d20/templates/apps/character-creator/story.hbs",
		"systems/conan2d20/templates/apps/character-creator/talent.hbs",
		"systems/conan2d20/templates/apps/character-creator/war-story.hbs",
		"systems/conan2d20/templates/apps/character-upgrade/attributes-tab.hbs",
		"systems/conan2d20/templates/apps/character-upgrade/log-tab.hbs",
		"systems/conan2d20/templates/apps/character-upgrade/skills-tab.hbs",
		"systems/conan2d20/templates/apps/character-upgrade/talents-tab.hbs",
		"systems/conan2d20/templates/apps/fortune-roll-dialogue.hbs",
		"systems/conan2d20/templates/apps/send-item.hbs",
		"systems/conan2d20/templates/combat/conan-combat-tracker.hbs",
		"systems/conan2d20/templates/items/action-details.hbs",
		"systems/conan2d20/templates/items/archetype-details.hbs",
		"systems/conan2d20/templates/items/armor-details.hbs",
		"systems/conan2d20/templates/items/armor-sidebar.hbs",
		"systems/conan2d20/templates/items/aspect-details.hbs",
		"systems/conan2d20/templates/items/caste-details.hbs",
		"systems/conan2d20/templates/items/display-details.hbs",
		"systems/conan2d20/templates/items/education-details.hbs",
		"systems/conan2d20/templates/items/enchantment-details.hbs",
		"systems/conan2d20/templates/items/homeland-details.hbs",
		"systems/conan2d20/templates/items/item-sheet.hbs",
		"systems/conan2d20/templates/items/kit-details.hbs",
		"systems/conan2d20/templates/items/kit-sidebar.hbs",
		"systems/conan2d20/templates/items/miscellaneous-sidebar.hbs",
		"systems/conan2d20/templates/items/nature-details.hbs",
		"systems/conan2d20/templates/items/npcaction-details.hbs",
		"systems/conan2d20/templates/items/npcattack-details.hbs",
		"systems/conan2d20/templates/items/partials/choice-selector.hbs",
		"systems/conan2d20/templates/items/spell-sheet.hbs",
		"systems/conan2d20/templates/items/story-details.hbs",
		"systems/conan2d20/templates/items/talent-details.hbs",
		"systems/conan2d20/templates/items/talent-requirements.hbs",
		"systems/conan2d20/templates/items/transportation-details.hbs",
		"systems/conan2d20/templates/items/transportation-sidebar.hbs",
		"systems/conan2d20/templates/items/warstory-details.hbs",
		"systems/conan2d20/templates/items/weapon-details.hbs",
		"systems/conan2d20/templates/items/weapon-sidebar.hbs",
		"systems/conan2d20/templates/partials/card-footer-properties.hbs",
	];

	const paths = {};
	for (const path of partials) {
		const [key] = path.split("/").slice(3).join("/").split(".");
		paths[key] = path;
	}

	return loadTemplates(paths);
}

function registerHandlebarsHelpers() {
	Handlebars.registerHelper("add", (a, b) => {
		return a + b;
	});

	Handlebars.registerHelper("fromConfig", function(arg1, arg2) {
		return CONFIG.CONAN[arg1][arg2] ? CONFIG.CONAN[arg1][arg2] : arg2;
	});

	Handlebars.registerHelper("if_all", function() {
		const args = [].slice.apply(arguments);
		const opts = args.pop();

		let {fn} = opts;
		for (let i = 0; i < args.length; i += 1) {
			if (args[i]) continue;
			fn = opts.inverse;
			break;
		}
		return fn(this);
	});

	Handlebars.registerHelper("ifCond", function(v1, operator, v2, options) {
		switch (operator) {
			case "==":
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case "===":
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case "!=":
				return v1 !== v2 ? options.fn(this) : options.inverse(this);
			case "!==":
				return v1 !== v2 ? options.fn(this) : options.inverse(this);
			case "<":
				return v1 < v2 ? options.fn(this) : options.inverse(this);
			case "<=":
				return v1 <= v2 ? options.fn(this) : options.inverse(this);
			case ">":
				return v1 > v2 ? options.fn(this) : options.inverse(this);
			case ">=":
				return v1 >= v2 ? options.fn(this) : options.inverse(this);
			case "&&":
				return v1 && v2 ? options.fn(this) : options.inverse(this);
			case "||":
				return v1 || v2 ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});

	Handlebars.registerHelper("ifEq", function(arg1, arg2, options) {
		return arg1 === arg2 ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("ifModZero", function(arg1, arg2, options) {
		return arg1 % arg2 === 0 ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("ifNeq", function(arg1, arg2, options) {
		return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("ifObjIndex", function(obj, index, options) {
		return obj[index] ? options.fn(this) : options.inverse(this);
	});

	Handlebars.registerHelper("multiply", (a, b) => {
		return a * b;
	});

	Handlebars.registerHelper("select", function(selected, options) {
		const escapedValue = RegExp.escape(Handlebars.escapeExpression(selected));
		const rgx = new RegExp(` value=["']${escapedValue}["']`);
		const html = options.fn(this);
		return html.replace(rgx, "$& selected");
	});
}

function registerTextEditorEnrichers() {

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

function initHook() {
	console.log(`${SYSTEM_NAME$1} | Running init hook`);

	globalThis.SYSTEM_ID = SYSTEM_ID$1;
	globalThis.SYSTEM_NAME = SYSTEM_NAME$1;

	CONFIG.CONAN = CONFIG$1;

	// Override the default status effects
	CONFIG.statusEffects = CONFIG.CONAN.statusEffects;

	globalThis.conan = {
		apps,
		chat: ConanChat,
		compendiums: ConanCompendiums,
		config: CONFIG$1,
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
	CONFIG.Actor.documentClass = ConanActor;
	CONFIG.Combat.documentClass = Combat2d20;
	CONFIG.Item.documentClass = ConanItem;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet(SYSTEM_ID$1, ConanCharacterSheet, {
		makeDefault: true,
		types: ["character"],
	});

	Actors.registerSheet(SYSTEM_ID$1, ConanTransportSheet, {
		makeDefault: true,
		types: ["mount", "transport", "watercraft"],
	});

	Actors.registerSheet(SYSTEM_ID$1, ConanNPCSheet, {
		makeDefault: true,
		types: ["npc"],
	});

	Items.registerSheet(SYSTEM_ID$1, ConanBaseItemSheet, {
		makeDefault: true,
	});
}

Hooks.once("init", initHook);
Hooks.once("diceSoNiceReady", diceSoNiceReadyHook);
//# sourceMappingURL=conan2d20-compiled.mjs.map
