export default class DamageRoller extends Application {

	constructor(actor, options={}) {
		super(actor, options);

		this.rollData = conan.dice.getDefaultCombatDiceRollOptions();

		this.actor = null;
		this.item = options?.item ? options.item : null;

		this.attackType = options?.attackType || "melee";

		this.reloads = [];
		this.selectedReload = "";

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;

			this.reloads = this.actor.getMergedReloads();
		}

		if (options?.item) {
			this.item = options.item;

			this.rollData.improvised = this.item.getQuality("improvised")
				? true
				: false;
		}

		this.isImpactDamage = options?.isImpactDamage ?? false;

		if (options?.numDice) {
			this.rollData.base.numDice = options.numDice;
		}

		this.isActorRoll = this.actor ? true : false;

		if (this.item) {
			this.rollData.base.numDice =
				parseInt(this.item.system?.damage?.dice) || 1;

			if (this.item.type === "npcattack") {
				this.attackType = this.item.system.attackType;
			}
			else if (this.item.type === "display") {
				this.attackType = "threaten";
			}
			else if (this.item.type === "weapon") {
				this.attackType = this.item.system.weaponType;
			}
		}

		this.damageTypes = [
			{
				type: "melee",
				active: this.attackType === "melee" ? true : false,
				name: "Melee",
			},
			{
				type: "ranged",
				active: this.attackType === "ranged" ? true : false,
				name: "Ranged",
			},
			{
				type: "threaten",
				active: this.attackType === "threaten" ? true : false,
				name: "Threaten",
			},
		];

		this._updateDamageType();
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "damage-roller"],
			template: "systems/conan2d20/templates/apps/damage-roller.hbs",
			width: 280,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.damageRollerTitle");
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

		// Reload selector
		html
			.find(".damage-roller select")
			.on("change", this._onChangeLoad.bind(this));

		// Submit button
		html.find(".roll-dice").click(this._onSubmit.bind(this));

		// Damage Type buttons
		html
			.find(".damage-roller .damage-type")
			.on("click", this._onClickTypeButton.bind(this));

		// Quantity buttons
		html.find(".damage-roller .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			const [section, type] = quantityType.split(".");

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
			itemData: foundry.utils.duplicate(this.item),
			damageTypes: this.damageTypes,
			hasPlayerOwner: this.actor?.hasPlayerOwner ?? false,
			isActorRoll: this.isActorRoll,
			isImpactDamage: this.isImpactDamage,
			rollData: this.rollData,
			reloads: this.reloads,
			disableReloads: this._disableReloads(),
			reloadsAvailable: this.reloads.length > 0,
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

	async _dec_bonus_other(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.other--;

		input.val(this.rollData.bonus.other);
	}

	async _dec_bonus_reloads(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.reloads--;

		input.val(this.rollData.bonus.reloads);
	}

	async _dec_bonus_talent(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.talent--;

		input.val(this.rollData.bonus.talent);
	}

	async _dec_spends_doom(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.doom--;

		input.val(this.rollData.spends.doom);
	}

	async _dec_spends_momentum(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.momentum--;

		input.val(this.rollData.spends.momentum);
	}

	_disableReloads() {
		return this.attackType !== "ranged" || this.reloads.length === 0;
	}

	async _inc_base_numDice(input) {
		this.rollData.base.numDice++;

		input.val(this.rollData.base.numDice);
	}

	async _inc_bonus_other(input) {
		this.rollData.bonus.other++;

		input.val(this.rollData.bonus.other);
	}

	async _inc_bonus_reloads(input) {
		const reload = this.reloads.find(
			element => element.name === this.selectedReload
		);

		if (this.rollData.bonus.reloads < reload.uses) {
			this.rollData.bonus.reloads++;
			input.val(this.rollData.bonus.reloads);
		}
	}

	async _inc_bonus_talent(input) {
		this.rollData.bonus.talent++;

		input.val(this.rollData.bonus.talent);
	}

	async _inc_spends_doom(input) {
		let currentValue = parseInt(input.val());
		let numAvailableDoom = 0;

		if (this.actor) {
			numAvailableDoom = await this.actor.getAvailableDoom();
		}
		else {
			numAvailableDoom = game.settings.get("conan2d20", "doom");
		}

		let doomAvailable = numAvailableDoom - currentValue;

		if (doomAvailable > 0) {
			this.rollData.spends.doom++;

			input.val(this.rollData.spends.doom);
		}
	}

	async _inc_spends_momentum(input) {
		let currentValue = parseInt(input.val());

		let numAvailableMomentum = 0;
		if (this.actor) {
			numAvailableMomentum = await this.actor.getAvailableMomentum();
		}
		else {
			numAvailableMomentum = game.settings.get("conan2d20", "momentum");
		}

		const momentumAvailable = numAvailableMomentum - currentValue;

		if (momentumAvailable > 0) {
			this.rollData.spends.momentum++;

			input.val(this.rollData.spends.momentum);
		}
	}

	async _onChangeLoad(event) {
		const selector = $(event.target);
		const value = selector.val();

		const reloadQuantity = this.element.find(".reload-quantity");

		if (value !== "") {
			reloadQuantity.removeClass("disable-entry");
		}
		else {
			reloadQuantity.addClass("disable-entry");
		}

		this._setReloadsQuantity(0);

		this.selectedReload = value;
	}

	async _onClickTypeButton(event) {
		event.preventDefault();

		const button = $(event.target);

		const attackType = button.attr("data-damage-type");

		if (attackType === this.attackType) return;

		this.attackType = attackType;

		button.siblings().removeClass("active");
		button.addClass("active");

		if (this.item) {
			if (attackType === "ranged" && this.item.system.weaponType !== "melee") {
				const reloadChoice = this.element.find(".reload-choice");
				reloadChoice.removeClass("disable-entry");

				const selectedValue = reloadChoice.find(":selected").val();

				if (selectedValue !== "") {
					this.element.find(".reload-quantity").removeClass("disable-entry");
				}
			}
			else {
				const reloadQuantity = this.element.find(".reload-quantity");
				reloadQuantity.addClass("disable-entry");

				this._setReloadsQuantity(0);

				this.element.find(".reload-choice").addClass("disable-entry");
			}
		}

		if (this.actor) {
			this._updateDamageType();
		}
	}

	async _onSubmit() {
		if (this.item) {
			this.rollData.itemData = await this.item.getChatData();
		}
		this._rollDice();
	}

	async _rollDice() {
		this.close();

		this.rollData.numDice = this.rollData.base.numDice
			+ this.rollData.bonus.attribute
			+ this.rollData.bonus.other
			+ this.rollData.bonus.reloads
			+ this.rollData.bonus.talent;

		if (this.actor) {
			this.actor.spendMomentum(this.rollData.spends.momentum);
			this.actor.spendDoom(this.rollData.spends.doom);

			if (this.rollData.bonus.reloads > 0) {
				const reload = this.reloads.find(
					element => element.name === this.selectedReload
				);

				this.actor.spendReloads(reload, this.rollData.bonus.reloads);
			}
		}
		else {
			conan.apps.Counter.changeCounter(-`${this.rollData.spends.momentum}`, "momentum");
			conan.apps.Counter.changeCounter(-`${this.rollData.spends.doom}`, "doom");
		}

		// Do the actual dice rolls
		const results = await conan.dice.calculateCombatDiceRoll(this.rollData);

		if (this.attackType === "threaten") {
			results.location = null;
		}

		this._showResults(results);
	}

	async _setReloadsQuantity(value) {
		const reloadValue = this.element
			.find(".reload-quantity")
			.find("input[type=\"number\"]");

		reloadValue.val(value);
		this.rollData.bonus.reloads = value;
	}

	async _showResults(results) {
		conan.chat.renderDamageRollCard({
			actor: this.actor,
			isImpactDamage: this.isImpactDamage,
			item: this.item,
			results,
			rollData: this.rollData,
			type: "damage",
		});
	}

	async _updateDamageType() {
		if (this.actor && this.actor.isNotWatercraft) {
			const bonuses = this.actor._attackBonuses();
			this.rollData.bonus.attribute = bonuses[this.attackType];
		}

		if (this.attackType === "threaten") {
			this.rollData.damage.type = "mental";
		}
		else {
			this.rollData.damage.type = "physical";
		}

		const damageRollText = game.i18n.localize("CONAN.damageRollerTitle");
		const attackTypeText = game.i18n.localize(
			`CONAN.attackTypes.${this.attackType}`
		);

		this.rollData.title = `${attackTypeText} ${damageRollText}`;
	}
}
