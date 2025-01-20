/**
 * Counter Application for 2d20 metacurrencies
 * @type {FormApplication}
 */
export default class Counter extends Application {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "counter";
		options.classes = [SYSTEM_ID];
		options.template = "systems/conan2d20/templates/apps/counter.hbs";
		options.width = "auto";
		options.height = 300;
		options.popOut = false;
		return options;
	}

	/* -------------------------------------------- */
	/**
	 * Provide data to the HTML template for rendering
	 * @type {Object}
	 */
	getData() {
		const data = super.getData();
		data.momentum = game.settings.get(SYSTEM_ID, "momentum");
		data.doom = game.settings.get(SYSTEM_ID, "doom");
		data.canEdit =
			game.user.isGM || game.settings.get(SYSTEM_ID, "playerCounterEdit");

		return data;
	}

	activateListeners(html) {
		super.activateListeners(html);

		// Call setCounter when input is used
		html.find("input").change(async ev => {
			const type = $(ev.currentTarget).parents(".counter").attr("data-type");
			await Counter.setCounter(ev.target.value, type);
		});

		// Call changeCounter when +/- is used
		html.find(".incr,.decr").click(async ev => {
			const type = $(ev.currentTarget).parents(".counter").attr("data-type");
			const multiplier = $(ev.currentTarget).hasClass("incr") ? 1 : -1;
			await Counter.changeCounter(multiplier, type);
		});
	}

	// ************************* STATIC FUNCTIONS ***************************

	/**
	 * Set the counter of (type) to (value)
	 * @param value Value to set counter to
	 * @param type  Type of counter, "momentum" or "doom"
	 */
	static async setCounter(value, type) {
		Counter.checkCounterUpdate(value, type);
		value = Math.round(value);

		if (!game.user.isGM) {
			game.socket.emit("system.conan2d20", {
				type: "setCounter",
				payload: {value, type},
			});
			return;
		}

		if (value > 6 && type === "momentum") {
			await game.settings.set(SYSTEM_ID, type, 6);
			conan.counter.render(true);
		}
		else if (value < 0) {
			await game.settings.set(SYSTEM_ID, type, 0);
			conan.counter.render(true);
		}
		else {
			await game.settings.set(SYSTEM_ID, type, value);
			conan.counter.render(true);
		}

		// Emit socket event for users to rerender their counters
		game.socket.emit("system.conan2d20", {type: "updateCounter"});
	}

	/**
	 * Change the counter of (type) by (value)
	 * @param diff How much to change the counter
	 * @param type  Type of counter, "momentum" or "doom"
	 */
	static async changeCounter(diff, type) {
		Counter.checkCounterUpdate(diff, type);
		let value = game.settings.get(SYSTEM_ID, type);
		if (value + diff > 6 && type === "momentum") {
			await Counter.setCounter(6, type);
		}
		else if (value + diff < 0) {
			await Counter.setCounter(0, type);
		}
		else {
			value += diff;
			await Counter.setCounter(value, type);
		}
	}

	// Check user entry. Rerender if error is detected to reset to the correct value
	static checkCounterUpdate(value, type) {
		const updateError = {
			counter: "Conan 2D20 | Error updating Counter: Invalid Counter Type",
			value: "Conan 2D20 | Error updating Counter: Invalid Value Type",
		};

		if (type !== "doom" && type !== "momentum") {
			ui.notifications.error("Error updating Counter: Invalid Counter Type");
			conan.counter.render(true);
			throw updateError.counter;
		}

		if (Number.isNaN(value)) {
			ui.notifications.error("Error updating Counter: Invalid Value Type");
			conan.counter.render(true);
			throw updateError.value;
		}
	}
}
