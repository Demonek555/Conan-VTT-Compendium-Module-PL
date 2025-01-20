import { ConanUpdateBase } from "../ConanUpdateBase.mjs";

export default class Update_23111001 extends ConanUpdateBase {
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
