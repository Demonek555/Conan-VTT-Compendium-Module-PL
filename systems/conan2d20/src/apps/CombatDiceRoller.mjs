export default class CombatDiceRoller extends Application {
	constructor(actor, options={}) {
		super(actor, options);

		this.actor = null;

		this.rollData = conan.dice.getDefaultCombatDiceRollOptions();

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;
		}

		this.isActorRoll = this.actor ? true : false;

		this.isNpc = false;
		this.isPc = false;

		if (this.isActorRoll) {
			this.isNpc = this.actor.isNPC;
			this.isPc = !this.isNpc;
		}
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "combat-dice-roller"],
			template: "systems/conan2d20/templates/apps/combat-dice-roller.hbs",
			width: 200,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.CombatDice");
		if (this.actor) {
			return `${title}: ${this.actor.name}`;
		}
		else {
			return title;
		}
	}

	activateListeners(html) {
		super.activateListeners(html);
		const me = this;

		// Submit button
		html.find(".roll-dice").click(this._onSubmit.bind(this));

		// Quantity buttons
		html.find(".combat-dice-roller .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			const [section, type] = quantityType.split(".");

			input.on("change", ev => {
				ev.preventDefault();
				me[`_change_${section}_${type}`](input);
			});

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me[`_inc_${section}_${type}`](input);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_dec_${section}_${type}`](input);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me[`_inc_${section}_${type}`](input);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me[`_dec_${section}_${type}`](input);
			});
		});
	}

	async getData() {
		const data = {
			actorData: foundry.utils.duplicate(this.actor),
			isActorRoll: this.isActorRoll,
			isNpc: this.isNpc,
			isPc: this.isPc,
			rollData: this.rollData,
		};

		return data;
	}

	async _dec_base_numDice(input) {
		let currentValue = parseInt(input.val());
		currentValue--;

		if (currentValue < 1) currentValue = 1;

		this.rollData.base.numDice = currentValue;

		input.val(this.rollData.base.numDice);
	}

	async _inc_base_numDice(input) {
		this.rollData.base.numDice++;

		input.val(this.rollData.base.numDice);
	}

	async _onSubmit() {
		this._rollDice();
	}

	async _rollDice() {
		this.close();

		this.rollData.numDice =
			this.rollData.base.numDice + this.rollData.bonus.attribute;

		// Do the actual dice rolls
		const results = await conan.dice.calculateCombatDiceRoll(this.rollData);

		this._showResults(results);
	}

	async _showResults(results) {
		conan.chat.renderCombatDiceRollCard({
			actor: this.actor,
			results,
			rollData: this.rollData,
			type: "combatDice",
		});
	}

	async _updateAllFormValues() {
		const me = this;

		this.element.find(".quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			let type = input.attr("data-quantity-type");
			type = type.split(".");
			const dataSection = me.rollData[type[0]] || {};
			input.val(dataSection[type[1]]);
		});
	}
}
