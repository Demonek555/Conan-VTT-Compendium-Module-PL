export default class CombatTracker2d20 extends CombatTracker {

	static get defaultOptions() {
		return {
			...super.defaultOptions,
			template: "systems/conan2d20/templates/combat/conan-combat-tracker.hbs",
		};
	}

	activateListeners(html) {
		const tracker = html.find("#combat-tracker");
		const combatants = tracker.find(".combatant");

		html.find(".conan-combatant-control").click(
			ev => this._onConanCombatantControl(ev)
		);

		combatants.click(this._onConanCombatantMouseDown.bind(this));

		super.activateListeners(html);
	}

	async getData(options) {
		const context = await super.getData(options);

		const combat = this.viewed;
		for (const turn of context.turns) {
			const combatantsTurnDone = combat.combatantsTurnDone;
			turn.turnDone = combatantsTurnDone[turn.id] ?? false;
		}

		return context;
	}

	async _onConanCombatantControl(event) {
		event.preventDefault();
		event.stopPropagation();

		if (!game.user.isGM) return;

		if (!this.viewed.started) {
			ui.notifications.warn(
				game.i18n.localize("CONAN.CombatHasNotStarted")
			);
			return;
		}

		const btn = event.currentTarget;
		const li = btn.closest(".combatant");
		const combatant = this.viewed.combatants.get(li.dataset.combatantId);

		if (combatant.isOwner) {
			this.viewed.toggleTurnDone(combatant.id);
		}
	}

	async _onConanCombatantMouseDown(event) {
		event.preventDefault();
		if (game.user.isGM && this.viewed.started) {
			const li = event.currentTarget;
			const combatantId = li.dataset.combatantId;

			const combat = this.viewed;

			const currentTurn = combat.turn ?? -1;

			let newTurn = currentTurn;

			for (let [i, turn] of combat.turns.entries() ) {
				if (turn.isDefeated) continue;
				if (turn.id === combatantId) {
					newTurn = i;
					break;
				}
			}

			if (newTurn !== currentTurn) {
				combat.setTurn(newTurn);
			}
		}
	}
}
