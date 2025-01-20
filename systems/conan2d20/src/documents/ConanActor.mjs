import TalentManager from "../system/TalentManager.mjs";
import ConanDice from "../system/ConanDice.mjs";

export default class ConanActor extends Actor {

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
