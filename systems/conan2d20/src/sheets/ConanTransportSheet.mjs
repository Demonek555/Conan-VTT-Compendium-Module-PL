import ConanNPCSheet from "./ConanNPCSheet.mjs";

export default class ConanTransportSheet extends ConanNPCSheet {

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
