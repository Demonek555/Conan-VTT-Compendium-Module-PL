export default class ConanItem extends Item {

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
