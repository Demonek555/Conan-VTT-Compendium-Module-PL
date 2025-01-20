export default function foundryOverrides() {

	Token.prototype.decrementCondition = async function(
		effect,
		{active, overlay = false} = {}
	) {
		this.actor.removeCondition(effect.id);

		// Update the Token HUD
		if (this.hasActiveHUD) canvas.tokens.hud.refreshStatusIcons();

		return active;
	};

	Token.prototype.incrementCondition = async function(
		effect,
		{active, overlay = false} = {}
	) {
		const existing = this.actor.effects.find(e => e.statuses.has(effect.id));
		const numericValue = Number.isNumeric(
			foundry.utils.getProperty(existing, "flags.conan2d20.value")
		);

		if (!existing || numericValue) {
			this.actor.addCondition(effect.id);
		}
		else if (existing) {
			// Not numeric, toggle if existing
			this.actor.removeCondition(effect.id);
		}

		// Update the Token HUD
		if (this.hasActiveHUD) canvas.tokens.hud.refreshStatusIcons();

		return active;
	};

	TokenHUD.prototype._onToggleEffect = function(
		event,
		{overlay = false} = {}
	) {
		event.preventDefault();
		const img = event.currentTarget;
		const effect =
			img.dataset.statusId && this.object.actor
				? CONFIG.CONAN.statusEffects.find(e => e.id === img.dataset.statusId)
				: img.getAttribute("src");

		if (event.button === 0) return this.object.incrementCondition(effect);
		if (event.button === 2) return this.object.decrementCondition(effect);
	};
}
