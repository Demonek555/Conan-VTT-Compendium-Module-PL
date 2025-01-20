export class InventoryWeight {
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

export function combinedEncumbrance(actorInventory) {
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

export function calculateEncumbrance(actorInventory, actorBrawn) {
	actorBrawn = Number(actorBrawn);

	const combinedEnc = Math.floor(combinedEncumbrance(actorInventory));
	const encumberedAt = actorBrawn * 2;
	const limit = actorBrawn * 5;

	return new InventoryWeight(combinedEnc, encumberedAt, limit);
}
