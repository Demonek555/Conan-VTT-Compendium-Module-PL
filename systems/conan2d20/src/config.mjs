export const SYSTEM_ID = "conan2d20";
export const SYSTEM_NAME = "Conan 2d20";

export const CONFIG = {};

CONFIG.DEFAULT_MOB_SIZE = 5;

CONFIG.ASSIST_2D20_DICE = 1;
CONFIG.BASE_2D20_DICE = 2;
CONFIG.MAX_2D20_DICE = 5;
CONFIG.MAX_2D20_PURCHASE = 3;

CONFIG.actionTypes = {
	free: "CONAN.Item.Action.Types.Free",
	minor: "CONAN.Item.Action.Types.Minor",
	reaction: "CONAN.Item.Action.Types.Reaction",
	standard: "CONAN.Item.Action.Types.Standard",
};

CONFIG.armorQualities = {
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

CONFIG.armorTypes = {
	heavyArmor: "CONAN.Item.Armor.Types.HeavyArmor",
	heavyCloth: "CONAN.Item.Armor.Types.HeavyClothing",
	lightArmor: "CONAN.Item.Armor.Types.LightArmor",
	veryHeavyArmor: "CONAN.Item.Armor.Types.VeryHeavyArmor",
};

CONFIG.attributeIds = [
	"agi",
	"awa",
	"bra",
	"coo",
	"int",
	"per",
	"wil",
];

CONFIG.attributeLabels = {
	bra: "CONAN.Actor.Attribute.Brawn.label",
	agi: "CONAN.Actor.Attribute.Agility.label",
	awa: "CONAN.Actor.Attribute.Awareness.label",
	coo: "CONAN.Actor.Attribute.Coordination.label",
	int: "CONAN.Actor.Attribute.Intelligence.label",
	wil: "CONAN.Actor.Attribute.Will.label",
	per: "CONAN.Actor.Attribute.Personality.label",
};

CONFIG.attributeTooltips = {
	bra: "CONAN.Actor.Attribute.Brawn.tooltip",
	agi: "CONAN.Actor.Attribute.Agility.tooltip",
	awa: "CONAN.Actor.Attribute.Awareness.tooltip",
	coo: "CONAN.Actor.Attribute.Coordination.tooltip",
	int: "CONAN.Actor.Attribute.Intelligence.tooltip",
	wil: "CONAN.Actor.Attribute.Will.tooltip",
	per: "CONAN.Actor.Attribute.Personality.tooltip",
};

CONFIG.backgroundItems = [
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

CONFIG.coverageTypes = {
	head: "CONAN.Item.Armor.Coverage.Head",
	torso: "CONAN.Item.Armor.Coverage.Torso",
	larm: "CONAN.Item.Armor.Coverage.LeftArm",
	rarm: "CONAN.Item.Armor.Coverage.RightArm",
	lleg: "CONAN.Item.Armor.Coverage.LeftLeg",
	rleg: "CONAN.Item.Armor.Coverage.RightLeg",
};

CONFIG.defaultActorTokenImages = {
	character: "systems/conan2d20/assets/tokens/conan-default-actor-green.webp",
	mount: "systems/conan2d20/assets/tokens/conan-default-actor-purple.webp",
	npc: "systems/conan2d20/assets/tokens/conan-default-actor-red.webp",
	transport: "systems/conan2d20/assets/tokens/conan-default-actor-brown.webp",
	watercraft: "systems/conan2d20/assets/tokens/conan-default-actor-blue.webp",
};

CONFIG.JournalUuids = {
	releaseNotes: "Compendium.conan2d20.documentation.JournalEntry.g7Ur47STfj45yX7k",
};

CONFIG.skillIds = [
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

CONFIG.skills = {
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

CONFIG.skillsEnglish = {
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

CONFIG.skillAttributeMap = {
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

CONFIG.skillTooltips = {
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

CONFIG.talentRequirementTypes = {
	expertise: "CONAN.Talent.RequirementTypes.Expertise.label",
	focus: "CONAN.Talent.RequirementTypes.Focus.label",
	special: "CONAN.Talent.RequirementTypes.Special.label",
	talent: "CONAN.Talent.RequirementTypes.Talent.label",
};

CONFIG.enchantmentExplodingItems = {
	flashPaper: "CONAN.enchantmentExplodingItems.fla",
	smallFireworks: "CONAN.enchantmentExplodingItems.sma",
	loudFireworks: "CONAN.enchantmentExplodingItems.lou",
	largeFireworks: "CONAN.enchantmentExplodingItems.lar",
	smallExplosives: "CONAN.enchantmentExplodingItems.sme",
	largeExplosives: "CONAN.enchantmentExplodingItems.lex",
};

CONFIG.enchantmentStrengths = {
	weak: "CONAN.enchantmentStrengths.wea",
	average: "CONAN.enchantmentStrengths.ave",
	potent: "CONAN.enchantmentStrengths.pot",
	dangerous: "CONAN.enchantmentStrengths.dan",
	extraordinary: "CONAN.enchantmentStrengths.ext",
	devastationg: "CONAN.enchantmentStrengths.dev",
};

CONFIG.enchantmentBlindingStrengths = {
	regular: "CONAN.enchantmentBlindingStrengths.reg",
	dry: "CONAN.enchantmentBlindingStrengths.dry",
	fine: "CONAN.enchantmentBlindingStrengths.fin",
	perfumed: "CONAN.enchantmentBlindingStrengths.per",
	burning: "CONAN.enchantmentBlindingStrengths.bur",
};

CONFIG.enchantmentTalismanTypes = {
	animal: "CONAN.enchantmentTalismanTypes.ani",
	chasme: "CONAN.enchantmentTalismanTypes.cha",
	hamsa: "CONAN.enchantmentTalismanTypes.ham",
	nazar: "CONAN.enchantmentTalismanTypes.naz",
	pictish: "CONAN.enchantmentTalismanTypes.pic",
};

CONFIG.enchantmentTypes = {
	blindingPowder: "CONAN.enchantmentTypes.bli",
	burningLiquid: "CONAN.enchantmentTypes.bur",
	explodingPowder: "CONAN.enchantmentTypes.exp",
	lotusPollen: "CONAN.enchantmentTypes.lot",
	reinforcedFabric: "CONAN.enchantmentTypes.rei",
	talisman: "CONAN.enchantmentTypes.tal",
	upasGlass: "CONAN.enchantmentTypes.upa",
};

CONFIG.upasGlassSizes = {
	resilient: "CONAN.upasGlassSizes.res",
	strengthened: "CONAN.upasGlassSizes.str",
	unbreakable: "CONAN.upasGlassSizes.unb",
};

CONFIG.enchantmentVolatilities = {
	burningAlcohol: "CONAN.enchantmentVolatilities.bur",
	explodingLiquor: "CONAN.enchantmentVolatilities.exp",
	volatileSpirits: "CONAN.enchantmentVolatilities.vol",
	hellishBrimstone: "CONAN.enchantmentVolatilities.hel",
};

CONFIG.expertiseFields = {
	mov: "CONAN.expertiseFields.mov",
	cmb: "CONAN.expertiseFields.cmb",
	frt: "CONAN.expertiseFields.frt",
	knw: "CONAN.expertiseFields.knw",
	scl: "CONAN.expertiseFields.scl",
	sns: "CONAN.expertiseFields.sns",
};

// Hard-coded so we can always use the English versions in the text enrichers
// as a fallback
CONFIG.expertiseFieldsEnglish = {
	mov: "Movement",
	cmb: "Combat",
	frt: "Fortitude",
	knw: "Knowledge",
	scl: "Social",
	sns: "Senses",
};

CONFIG.expertiseAttributeMap = {
	mov: "agi",
	cmb: "agi",
	frt: "bra",
	knw: "int",
	scl: "per",
	sns: "awa",
};

CONFIG.rollDifficultyLevels = {
	0: "CONAN.skillRollDifficultyLevels.0",
	1: "CONAN.skillRollDifficultyLevels.1",
	2: "CONAN.skillRollDifficultyLevels.2",
	3: "CONAN.skillRollDifficultyLevels.3",
	4: "CONAN.skillRollDifficultyLevels.4",
	5: "CONAN.skillRollDifficultyLevels.5",
};

CONFIG.skillRollResourceSpends = {
	momentum: "CONAN.skillRollResourceSpends.mome",
	doom: "CONAN.skillRollResourceSpends.doom",
};

CONFIG.rollResults = {
	success: "CONAN.SkillRoll.Success.label",
	failure: "CONAN.SkillRoll.Failure.label",
};

CONFIG.attacks = {
	weapon: "CONAN.attackTypes.weapon",
	display: "CONAN.attackTypes.display",
};

CONFIG.attackTypes = {
	melee: "CONAN.attackTypes.melee",
	ranged: "CONAN.attackTypes.ranged",
	threaten: "CONAN.attackTypes.threaten",
};

CONFIG.damageTypes = {
	mental: "CONAN.damageTypes.mental",
	physical: "CONAN.damageTypes.physical",
};

CONFIG.MOUNT_CAPABILITIES = {
	pack: "CONAN.mount.capabilties.pack.name",
	mount: "CONAN.mount.capabilties.mount.name",
	battle: "CONAN.mount.capabilties.battle.name",
};

CONFIG.MOUNT_CAPABILITY_TOOLTIPS = {
	pack: "CONAN.mount.capabilties.pack.description",
	mount: "CONAN.mount.capabilties.mount.description",
	battle: "CONAN.mount.capabilties.battle.description",
};

CONFIG.npcActionTypes = {
	abilities: "CONAN.Item.NpcAction.Types.SpecialAbility",
	doom: "CONAN.Item.NpcAction.Types.DoomSpend",
};

CONFIG.NPC_CATEGORIES = {
	horror: "CONAN.npc.categories.horror.name",
	undead: "CONAN.npc.categories.undead.name",
};

CONFIG.NPC_CATEGORY_TOOLTIPS = {
	horror: "CONAN.npc.categories.horror.description",
	undead: "CONAN.npc.categories.undead.description",
};

CONFIG.npcAttackTypes = {
	melee: "CONAN.npcAttackTypes.melee",
	ranged: "CONAN.npcAttackTypes.ranged",
	threaten: "CONAN.npcAttackTypes.threaten",
};

CONFIG.NPC_TYPES = {
	minion: "CONAN.npc.type.minion",
	toughened: "CONAN.npc.type.toughened",
	nemesis: "CONAN.npc.type.nemesis",
};

CONFIG.availabilityTypes = {
	0: "CONAN.skillRollDifficultyLevels.0",
	1: "CONAN.skillRollDifficultyLevels.1",
	2: "CONAN.skillRollDifficultyLevels.2",
	3: "CONAN.skillRollDifficultyLevels.3",
	4: "CONAN.skillRollDifficultyLevels.4",
	5: "CONAN.skillRollDifficultyLevels.5",
};

CONFIG.conditionTypes = {
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

CONFIG.itemPermissions = {
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

CONFIG.kitTypes = {
	facility: "CONAN.kitTypes.fac",
	kit: "CONAN.kitTypes.kit",
	library: "CONAN.kitTypes.lib",
	reload: "CONAN.kitTypes.rel",
	resource: "CONAN.kitTypes.res",
	tool: "CONAN.kitTypes.too",
};

CONFIG.kitUses = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	inf: "&infin;",
};

CONFIG.lotusPollenColors = {
	black: "CONAN.lotusPollenColors.black",
	purple: "CONAN.lotusPollenColors.purple",
	yellow: "CONAN.lotusPollenColors.yellow",
	green: "CONAN.lotusPollenColors.green",
	gray: "CONAN.lotusPollenColors.gray",
	golden: "CONAN.lotusPollenColors.golden",
};

CONFIG.lotusPollenDifficulty = {
	per: "CONAN.lotusPollenDifficulty",
};

CONFIG.lotusPollenForms = {
	gas: "CONAN.lotusPollenForms.gas",
	powder: "CONAN.lotusPollenForms.pow",
	liquid: "CONAN.lotusPollenForms.liq",
};

CONFIG.lotusPollenUses = {
	opiate: "CONAN.lotusPollenUses.opi",
	poison: "CONAN.lotusPollenUses.poi",
	paralytic: "CONAN.lotusPollenUses.par",
	hallucinogenic: "CONAN.lotusPollenUses.hal",
	enchantment: "CONAN.lotusPollenUses.enc",
	anger: "CONAN.lotusPollenUses.ang",
	madness: "CONAN.lotusPollenUses.mad",
};

CONFIG.WATERCRAFT_QUALITIES = {
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

CONFIG.WATERCRAFT_QUALITY_TOOLTIPS = {
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

CONFIG.sources = {
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

CONFIG.statusEffects = [
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

CONFIG.transpoAnimals = {
	one: "CONAN.transpoAnimals.1",
	onep: "CONAN.transpoAnimals.1p",
	two: "CONAN.transpoAnimals.2",
	twop: "CONAN.transpoAnimals.2p",
	four: "CONAN.transpoAnimals.4",
	fourp: "CONAN.transpoAnimals.4p",
};

CONFIG.transpoBoatTypes = {
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

CONFIG.transpoCapabilities = {
	p: "CONAN.transpoCapabilities.p",
	mp: "CONAN.transpoCapabilities.mp",
	bmp: "CONAN.transpoCapabilities.bmp",
};

CONFIG.transpoCartTypes = {
	carriage: "CONAN.transpoCartTypes.carriage",
	cart: "CONAN.transpoCartTypes.cart",
	hchar: "CONAN.transpoCartTypes.hchar",
	lchar: "CONAN.transpoCartTypes.lchar",
	litter: "CONAN.transpoCartTypes.litter",
	wagon: "CONAN.transpoCartTypes.wagon",
	pwagon: "CONAN.transpoCartTypes.pwagon",
};

CONFIG.transpoCategories = {
	mounts: "CONAN.transpoCategories.mounts",
	carts: "CONAN.transpoCategories.carts",
	boats: "CONAN.transpoCategories.boats",
};

CONFIG.transpoMountTypes = {
	buffalo: "CONAN.transpoMountTypes.buffalo",
	camel: "CONAN.transpoMountTypes.camel",
	donkey: "CONAN.transpoMountTypes.donkey",
	dhorse: "CONAN.transpoMountTypes.dhorse",
	rhorse: "CONAN.transpoMountTypes.rhorse",
	whorse: "CONAN.transpoMountTypes.whorse",
};

CONFIG.talentTypes = {
	bloodline: "CONAN.talentTypes.bloodline",
	caste: "CONAN.talentTypes.caste",
	fortune: "CONAN.talentTypes.fortune",
	homeland: "CONAN.talentTypes.homeland",
	other: "CONAN.talentTypes.other",
	skill: "CONAN.talentTypes.skill",
};

CONFIG.weaponQualities = {
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

CONFIG.weaponTypes = {
	melee: "CONAN.weaponTypes.melee",
	ranged: "CONAN.weaponTypes.ranged",
};

CONFIG.weaponSizes = {
	crew: "CONAN.Item.Weapon.Sizes.crew",
	fixed: "CONAN.Item.Weapon.Sizes.fixed",
	monstrous: "CONAN.Item.Weapon.Sizes.monstrous",
	oneHanded: "CONAN.Item.Weapon.Sizes.oneHanded",
	twoHanded: "CONAN.Item.Weapon.Sizes.twoHanded",
	unbalanced: "CONAN.Item.Weapon.Sizes.unbalanced",
	unwieldy: "CONAN.Item.Weapon.Sizes.unwieldy",
};

CONFIG.weaponReaches = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
};

CONFIG.weaponRanges = {
	close: "CONAN.Item.Weapon.Ranges.close",
	medium: "CONAN.Item.Weapon.Ranges.medium",
	long: "CONAN.Item.Weapon.Ranges.long",
};

CONFIG.soakValue = {
	light: "CONAN.SoakLight",
	heavy: "CONAN.SoakHeavy",
};

CONFIG.qualitiesDescriptions = {
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

export function generateSortedData() {
	CONFIG.sortedAttributes = [];
	for (let attribute in CONFIG.attributeLabels) {
		CONFIG.sortedAttributes.push({
			key: attribute,
			name: CONFIG.attributeLabels[attribute],
		});
	}
	CONFIG.sortedAttributes.sort((a, b) => a.name.localeCompare(b.name));

	CONFIG.sortedSkills = [];
	for (let skill in CONFIG.skills) {
		CONFIG.sortedSkills.push({
			key: skill,
			name: CONFIG.skills[skill],
		});
	}
	CONFIG.sortedSkills.sort((a, b) => a.name.localeCompare(b.name));

	CONFIG.sortedSources = [];
	for (let source in CONFIG.sources) {
		CONFIG.sortedSources.push({
			key: source,
			name: CONFIG.sources[source],
		});
	}
	CONFIG.sortedSources.sort((a, b) => a.name.localeCompare(b.name));

	CONFIG.sortedWeaponQualities = [];
	for (let quality in CONFIG.weaponQualities) {
		CONFIG.sortedWeaponQualities.push({
			key: quality,
			name: CONFIG.weaponQualities[quality],
		});
	}
	CONFIG.sortedWeaponQualities.sort((a, b) => a.name.localeCompare(b.name));
}
