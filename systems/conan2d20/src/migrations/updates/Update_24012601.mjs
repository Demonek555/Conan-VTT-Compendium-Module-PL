import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

import ConanActor from "../../documents/ConanActor.mjs";

// Migrates any transportation items owned by actors to the new actor classes
// and then moves any stowed items into their inventory before deleting the
// items from the original actor
//
export default class Update_24012601 extends ConanUpdateBase {
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
