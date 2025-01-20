import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_22120601 extends ConanUpdateBase {
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
