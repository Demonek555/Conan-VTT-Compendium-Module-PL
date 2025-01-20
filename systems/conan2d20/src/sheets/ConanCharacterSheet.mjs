import ConanBaseActorSheet from "./ConanBaseActorSheet.mjs";

import { calculateEncumbrance } from "../utils/encumbrance.mjs";

import * as backgroundSelectors from "../apps/CompendiumItemSelectors/_module.mjs";

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
				new backgroundSelectors.ArchetypeSelector(this.actor).render(true);
				break;
			case "caste":
				new backgroundSelectors.CasteSelector(this.actor).render(true);
				break;
			case "education":
				new backgroundSelectors.EducationSelector(this.actor).render(true);
				break;
			case "homeland":
				new backgroundSelectors.HomelandSelector(this.actor).render(true);
				break;
			case "language":
				new backgroundSelectors.LanguageSelector(this.actor).render(true);
				break;
			case "nature":
				new backgroundSelectors.NatureSelector(this.actor).render(true);
				break;
			case "story":
				new backgroundSelectors.StorySelector(this.actor).render(true);
				break;
			case "warstory":
				new backgroundSelectors.WarStorySelector(this.actor).render(true);
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

export default ConanCharacterSheet;
