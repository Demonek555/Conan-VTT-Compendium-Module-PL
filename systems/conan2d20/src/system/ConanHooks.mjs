import { conanCharacterCreatorHooks } from "../hooks/conanCharacterCreatorHooks.mjs";
import { conanMenuHooks } from "../hooks/conanMenuHooks.mjs";
import { readyHook } from "../hooks/readyHook.mjs";
import { setupHook } from "../hooks/setupHook.mjs";

export default class ConanHooks {

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
