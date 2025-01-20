export default class SkillRoller extends Application {
	constructor(actor, options={}) {
		super(actor, options);

		this.actor = null;
		this.showBonuses = false;

		// default data
		this.rollData = {
			actorId: null,
			assists: {
				complication: 20,
				focus: 0,
				numDice: 0,
				tn: 7,
			},
			bankType: null,
			bonus: {
				dice: 0,
				momentum: 0,
				successes: 0,
				inhuman: 0,
			},
			difficulty: {
				assistDisplay: "&nbsp;",
				base: (options.difficulty ?? 1),
				display: "&nbsp;",
				increase: 0,
			},
			skill: {
				complication: 20,
				expertise: 0,
				focus: 0,
				tn: 7,
			},
			spends: {
				doom: 0,
				fortune: 0,
				momentum: 0,
			},
			fixedResults: [],
			ignoreDifficultyIncrease: false,
			isAssist: false,
			isReroll: false,
			item: null,
			numDice: CONFIG.CONAN.BASE_2D20_DICE,
			title: "Skill Test",
		};

		if (actor) {
			this.actor = actor;
			this.rollData.actorId = this.actor.id;

			this.attribute = options.attribute;
			this.expertise = options.expertise;
			this.skill = options.skill;

			this.rollData.bonus.inhuman =
				this.actor.system.attributes[options.attribute]?.inhuman ?? 0;

			this.rollData.item = options.item ?? null;
			this.rollData.bonus.dice = options.bonusDice ?? 0;
		}

		this.isActorRoll = this.actor ? true : false;

		this.isNpc = false;
		this.playerOwnedActor = false;
		this.playerOwnedNpc = false;
		this.rollData.bankType = "doom";

		if (this.isActorRoll) {
			this.isNpc = this.actor.isNPC;
			this.playerOwnedActor = this.actor.hasPlayerOwner;
			this.playerOwnedNpc = this.isNpc && this.playerOwnedActor;
			this.rollData.bankType = this.playerOwnedActor ? "momentum" : "doom";
		}

		this.difficulties = [
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.0"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.1"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.2"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.3"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.4"),
			},
			{
				active: false,
				tooltip: game.i18n.localize("CONAN.skillRollDifficultyLevels.5"),
			},
		];

		this.difficulties[this.rollData.difficulty.base].active = true;

		this.maxDice = CONFIG.CONAN.MAX_2D20_DICE;
		let numDice = (this.baseDice = CONFIG.CONAN.BASE_2D20_DICE);
		if (this.isNpc && this.actor.system.type === "minion") {
			// Minions only roll one die and you can only purcase up to 3 dice,
			// so the maximum a minion can roll is 4 dice.
			//
			numDice = this.rollData.numDice = this.baseDice = 1;
			this.maxDice = CONFIG.CONAN.MAX_2D20_DICE - 1;
		}

		numDice += this.rollData.bonus.dice;
		this.rollData.numDice = numDice;

		this.dice = [];

		for (let i = 0; i < CONFIG.CONAN.MAX_2D20_DICE; i++) {
			this.dice.push({active: i < numDice});
		}

		this.rollData.isAssist =
			numDice === CONFIG.ASSIST_2D20_DICE
				&& this.baseDice !== CONFIG.ASSIST_2D20_DICE;
	}

	get assistActor() {
		let assistActor = null;

		if (this.isNpc && this.actor.system.isMob) {
			const mobData = this.actor.system.grouping;

			const numMinions = mobData.members.length || 0;
			this.rollData.assists.numDice = numMinions;

			if (mobData.baseActorId) {
				assistActor = game.actors.get(mobData.baseActorId);
			}
		}

		return assistActor;
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "skill-roller"],
			template: "systems/conan2d20/templates/apps/skill-roller.hbs",
			width: 320,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		const title = game.i18n.localize("CONAN.skillRollerTitle");
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

		html.find(".toggle-show-bonuses").click(event => {
			this.showBonuses = !this.showBonuses;
			this.render();
		});

		// Difficulty setting buttons
		html
			.find(".skill-roller .difficulty")
			.on("click", this._onClickDifficultyButton.bind(this));

		// Dice icons
		html
			.find(".skill-roller .dice")
			.on("click", this._onClickDiceIcon.bind(this));

		// Quantity buttons
		html.find(".skill-roller .quantity-grid").each(function() {
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

		// Attribute, Skill and Experise selectors
		html.find(".skill-roller select").on("change", function() {
			const selector = $(this);
			const value = selector.val();
			const selectorName = selector.attr("name");

			switch (selectorName) {
				case "attribute":
					me._updateAttribute(value);
					break;
				case "expertise":
					me._updateExpertise(value);
					break;
				case "skill":
					me._updateSkill(value);
					break;
				default:
					console.error(`Unknown selector ${selectorName}`);
			}
		});

		// Submit button
		html.find(".roll-skill-check").click(this._rollSkillCheck.bind(this));

		html.find("#isPlayerOwned").on("change", function() {
			me.playerOwnedActor = !me.playerOwnedActor;
			me.playerOwnedNpc = me.isNpc && me.playerOwnedActor;
			me.rollData.bankType = me.playerOwnedActor ? "momentum" : "doom";

			me.rollData.bonus = {
				dice: 0,
				momentum: 0,
				successes: 0,
				inhuman: 0,
			};
			me.rollData.spends = {
				doom: 0,
				fortune: 0,
				momentum: 0,
			};
			me.rollData.fixedResults = [];
			me.rollData.numDice = me.baseDice;

			me.render(true);
		});

		html.find("#ignoreDifficultyIncrease").on("change", function() {
			me.rollData.ignoreDifficultyIncrease = !me.rollData.ignoreDifficultyIncrease;

			me.render(true);
		});
	}

	async getData() {
		this.attribute =
			this.attribute !== undefined
				? this.attribute
				: this._sortedAttributes()[0].key;

		this.expertise =
			this.expertise !== undefined
				? this.expertise
				: this._sortedExpertiseFields()[0].key;

		this.skill =
			this.skill !== undefined ? this.skill : this._sortedSkills()[0].key;

		await this._updateDifficulties();
		await this._updateTestDetails();

		const data = {
			actorData: foundry.utils.duplicate(this.actor),
			attributes: this._sortedAttributes(),
			dice: this.dice,
			difficulties: this.difficulties,
			difficultyIncreased: false,
			expertiseFields: this._sortedExpertiseFields(),
			ignoreDifficultyIncrease: this.rollData.ignoreDifficultyIncrease,
			isActorRoll: this.isActorRoll,
			isGM: game.user.isGM,
			isNpc: this.isNpc,
			isPlayerOwned: this.playerOwnedActor,
			isPlayerOwnedNpc: this.playerOwnedNpc,
			rollData: this.rollData,
			selectedAttribute: this.attribute,
			selectedExpertise: this.expertise,
			selectedSkill: this.skill,
			showBonuses: this.showBonuses,
			skills: this._sortedSkills(),
		};

		if (this.isActorRoll) {
			data.difficultyIncreased = this.rollData.ignoreDifficultyIncrease
				? 0
				: this.actor.getDifficultyIncrease(this.attribute) > 0;
		}

		return data;
	}

	/* ----------------------------------------------------------------------- */

	async _adjustBoughtDice(numDice) {
		// We special case things if a single dice is selected, as this is an
		// assist roll
		//
		if (this.isAssist) {
			// Assist roll.  No additional dice can be purchased for those, and no
			// bonuses apply
			//
			this.rollData.bonus.dice = 0;
			this.rollData.bonus.momentum = 0;
			this.rollData.bonus.successes = 0;
			this.rollData.spends.doom = 0;
			this.rollData.spends.fortune = 0;
			this.rollData.spends.momentum = 0;

			this.rollData.numDice = numDice;

			await this._updateAllFormValues();

			return true;
		}

		// fixedDice is the base 2d20 dice, plus any fortune and bonus d20s
		// already entered.
		//
		const fixedDice =
			this.baseDice + this.rollData.bonus.dice + this.rollData.spends.fortune;

		// If the requested amount of dice is below this then we can't adjust the
		// dice until either the number of bonus d20s and/or number of fortune
		// spent has been reduced.
		//
		if (numDice < fixedDice) return false;

		let availableToSpend = 0;
		if (this.playerOwnedActor) {
			availableToSpend = await this.actor.getAvailableMomentum();
		}
		else {
			availableToSpend = await this.actor.getAvailableDoom();
			availableToSpend -= this.rollData.spends.fortune * 3;
		}

		let newDoom = 0;
		let newMomentum = 0;

		// make sure we don"t allocate more dice than we have available spends for
		numDice = numDice > this.maxDice ? this.maxDice : numDice;

		let diceToAllocate = numDice - fixedDice;
		let allocatedDice = 0;

		while (diceToAllocate > 0) {
			if (this.playerOwnedActor && availableToSpend > 0) {
				availableToSpend--;
				newMomentum++;
				allocatedDice++;
			}
			else if (this.isNpc && availableToSpend > 0) {
				availableToSpend--;
				newDoom++;
				allocatedDice++;
			}
			else if (this.playerOwnedActor) {
				newDoom++;
				allocatedDice++;
			}

			diceToAllocate--;
		}

		this.rollData.numDice = fixedDice + allocatedDice;

		this.rollData.spends.doom = newDoom;
		this.rollData.spends.momentum = newMomentum;

		this._updateAllFormValues();

		return true;
	}

	async _checkFortuneSpends() {
		let fortuneSuccesses = this.rollData.spends.fortune;

		const difficulty =
			this.rollData.difficulty.base + this.rollData.difficulty.increase;

		if (this.rollData.skill.focus > 0) {
			fortuneSuccesses *= 2;
		}

		return fortuneSuccesses >= difficulty;
	}

	async _dec_bonus_dice(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.dice--;
		this.rollData.numDice--;

		input.val(this.rollData.bonus.dice);

		await this._updateDiceIcons();
	}

	async _dec_bonus_momentum(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.momentum--;
		this._updateAllFormValues();
	}

	async _dec_bonus_inhuman(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.inhuman--;
		this._updateAllFormValues();
	}

	async _dec_bonus_successes(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.bonus.successes--;
		this._updateAllFormValues();
	}

	async _dec_skill_complication(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.skill.complication--;
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _dec_skill_focus(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.skill.focus--;
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _dec_skill_tn(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.skill.tn--;
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _dec_spends_doom(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.doom--;
		this.rollData.numDice--;

		input.val(this.rollData.spends.doom);

		await this._updateDiceIcons();
	}

	async _dec_spends_fortune(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.fortune--;
		this.rollData.numDice--;

		input.val(this.rollData.spends.fortune);

		await this._updateDiceIcons();
	}

	async _dec_spends_momentum(input) {
		let currentValue = parseInt(input.val());

		if (currentValue === 0) return;

		this.rollData.spends.momentum--;
		this.rollData.numDice--;

		input.val(this.rollData.spends.momentum);

		await this._updateDiceIcons();
	}

	_getTestDifficulty() {
		if (this.actor) {
			[
				this.rollData.skill.tn,
				this.rollData.skill.expertise,
				this.rollData.skill.focus,
			] = this.actor.getSkillTargetNumberAndFocus(
				this.attribute,
				this.skill,
				this.expertise
			);

			if (this.rollData.ignoreDifficultyIncrease) {
				this.rollData.difficulty.increase = 0;
			}
			else {
				this.rollData.difficulty.increase =
					this.actor.getDifficultyIncrease(
						this.attribute
					);
			}
		}
		else {
			this.rollData.skill.expertise = 0;
			this.rollData.skill.focus = this.element.find("#skill-focus").val() || 0;
			this.rollData.skill.tn = this.element.find("#skill-tn").val() || 7;
		}

		let difficultyCalc =
			this.rollData.difficulty.base + this.rollData.difficulty.increase;

		difficultyCalc = difficultyCalc > 5 ? 5 : difficultyCalc;

		const difficulty = game.i18n.localize(
			`CONAN.skillRollDifficultyLevels.${difficultyCalc}`
		);

		const labelTN = game.i18n.localize("CONAN.SkillRoll.TN.label");
		const labelFocus = game.i18n.localize("CONAN.SkillRoll.Focus.label");
		const labelCompShort = game.i18n.localize("CONAN.SkillRoll.Complication.Short.label");

		let testDetails = `${labelTN} ${this.rollData.skill.tn}, `;
		testDetails += `${labelFocus} ${this.rollData.skill.focus}, `;
		testDetails += `${labelCompShort} ${this.rollData.skill.complication}`;

		if (this.rollData.item && this.rollData.item.type === "weapon") {
			const item = this.rollData.item;

			let rangeLabel = "";
			let rangeValue = item.system.range;

			if (item.system.weaponType === "melee") {
				rangeLabel = game.i18n.localize("CONAN.Item.Weapon.Reach.label");
			}
			else {
				rangeLabel = game.i18n.localize("CONAN.Item.Weapon.Range.label");
				rangeValue = CONFIG.CONAN.weaponRanges[rangeValue] ?? "";
			}

			testDetails += `, ${rangeLabel} ${rangeValue}`;
		}

		if (this.isAssist) {
			const assistLabel = game.i18n.localize("CONAN.Assist");
			testDetails = `${assistLabel}, ${testDetails}`;
		}
		else {
			testDetails = `${difficulty}, ${testDetails}`;
		}

		this.rollData.difficulty.display = testDetails;

		if (this.assistActor) {
			const labelExpertise = game.i18n.localize("CONAN.SkillRoll.Expertise.label");

			let assistDetails = game.i18n.localize("CONAN.Assist");
			assistDetails += ` ${labelTN}  ${this.rollData.assists.tn}, `;
			assistDetails += `${labelExpertise} ${this.rollData.assists.focus}, `;
			assistDetails += `${labelCompShort} ${this.rollData.assists.complication}`;
			this.rollData.difficulty.assistDisplay = assistDetails;
		}

		return testDetails;
	}

	async _inc_bonus_dice(input) {
		if (this.rollData.numDice < this.maxDice) {
			this.rollData.bonus.dice++;
			this.rollData.numDice++;

			input.val(this.rollData.bonus.dice);

			await this._updateDiceIcons();
		}
	}

	async _inc_bonus_inhuman() {
		this.rollData.bonus.inhuman++;
		this._updateAllFormValues();
	}

	async _inc_bonus_momentum() {
		this.rollData.bonus.momentum++;
		this._updateAllFormValues();
	}

	async _inc_bonus_successes() {
		this.rollData.bonus.successes++;
		this._updateAllFormValues();
	}

	async _inc_skill_complication() {
		if (this.rollData.skill.complication < 20) {
			this.rollData.skill.complication++;
			this._updateAllFormValues();
			this._updateTestDetails();
		}
	}

	async _inc_skill_focus() {
		if (this.rollData.skill.focus < 5) {
			this.rollData.skill.focus++;
			this._updateAllFormValues();
			this._updateTestDetails();
		}
	}

	async _inc_skill_tn() {
		if (this.rollData.skill.tn < 20) {
			this.rollData.skill.tn++;
			this._updateAllFormValues();
			this._updateTestDetails();
		}
	}

	async _inc_spends_doom(input) {
		let currentValue = parseInt(input.val());
		let numAvailableDoom = await this.actor.getAvailableDoom();

		let doomAvailable = true; // default for non-NPCs

		if (this.isNpc) {
			// Fortune used by NPCs costs 3 Doom per Fortune
			numAvailableDoom -= this.rollData.spends.fortune * 3;
			doomAvailable = currentValue < numAvailableDoom;
		}

		if (doomAvailable && this.rollData.numDice < this.maxDice) {
			this.rollData.spends.doom++;
			this.rollData.numDice++;

			input.val(this.rollData.spends.doom);

			await this._updateDiceIcons();
		}
	}

	async _inc_spends_fortune(input) {
		let currentValue = parseInt(input.val());
		const numAvailableFortune = await this.actor.getAvailableFortune();

		const fortuneAvailable = numAvailableFortune - currentValue;

		if (fortuneAvailable > 0 && this.rollData.numDice < this.maxDice) {
			this.rollData.spends.fortune++;
			this.rollData.numDice++;

			input.val(this.rollData.spends.fortune);

			await this._updateDiceIcons();
		}
	}

	async _inc_spends_momentum(input) {
		let currentValue = parseInt(input.val());
		let numAvailableMomentum = await this.actor.getAvailableMomentum();

		const momentumAvailable = numAvailableMomentum - currentValue;

		if (momentumAvailable > 0 && this.rollData.numDice < this.maxDice) {
			this.rollData.spends.momentum++;
			this.rollData.numDice++;

			input.val(this.rollData.spends.momentum);

			await this._updateDiceIcons();
		}
	}

	async _onClickDiceIcon(event) {
		event.preventDefault();

		const diceIcon = $(event.currentTarget);

		const numDice = parseInt(diceIcon.attr("data-dice-number")) + 1;
		const prevNumDice = this.rollData.numDice;

		if (numDice === prevNumDice) return; // Nothing has changed

		if (numDice === 1 && this.actor) {
			this.isAssist = true;

			if (this.isActorRoll && this.isNpc) {
				// Minions roll 1 dice by default, make sure we don"t set them as an
				// assist
				this.isAssist = this.actor.system.type !== "minion";
			}
		}
		else {
			this.isAssist = false;
		}

		// We only need to adjust the bought dice values if this is an Actor based
		// check.
		//
		// For the simple skill checks we do not adjust any momentum/doom/fortune,
		// and just roll the number of selected dice.
		//
		let diceAdjusted = true;
		if (this.isActorRoll) {
			diceAdjusted = await this._adjustBoughtDice(numDice, prevNumDice);
		}
		else {
			this.rollData.numDice = numDice;
		}

		if (diceAdjusted) {
			// Hide dice difficulty, purchasing and bonus sections if there is only
			// one dice selected, as this will be an assistance roll which can"t use
			// those bonuses.
			//
			if (this.isAssist) {
				this.element.find(".extra-dice-hideable").addClass("disable-entry");
				this.element.find(".difficulty-settings").addClass("disable-entry");
			}
			else {
				this.element.find(".extra-dice-hideable").removeClass("disable-entry");
				this.element.find(".difficulty-settings").removeClass("disable-entry");
			}

			await this._updateTestDetails();
			await this._updateDiceIcons();
		}
	}

	async _onClickDifficultyButton(event) {
		event.preventDefault();

		const button = $(event.currentTarget);

		const difficulty = parseInt(button.attr("data-difficulty"));

		if (difficulty === this.rollData.difficulty.base) return;

		this.rollData.difficulty.base = difficulty;

		button.siblings().removeClass("active");
		button.addClass("active");

		this._updateTestDetails();
	}

	async _performRoll() {
		const results = await conan.dice.calculateSkillRoll(this.rollData);

		conan.chat.renderSkillTestCard({
			actor: this.actor,
			item: this.rollData.item,
			results,
			rollData: this.rollData,
			type: "skill",
		});
	}

	async _rollSkillCheck() {
		this.close();

		if (this.actor) {
			if (this.isNpc && this.actor.system.isMob) {
				// Work out how many Assist Rolls are needed
				const mobData = this.actor.system.grouping;

				let numLiveMobMembers = mobData.members.length ?? 0;

				// exclude dead mob members from assist dice total
				for (const mobMember of mobData.members ?? []) {
					if (mobMember.dead) numLiveMobMembers--;
				}

				this.rollData.assists.numDice = numLiveMobMembers;
			}
		}

		// TODO: Combine all spends into a single chat message, or just include
		// them in the Skill Roll result message?
		//
		if (this.isActorRoll) {
			if (this.playerOwnedActor) {
				await this.actor.payDoom(this.rollData.spends.doom);
				await this.actor.spendFortune(this.rollData.spends.fortune);
				await this.actor.spendMomentum(this.rollData.spends.momentum);
			}
			else {
				await this.actor.buyFortune(this.rollData.spends.fortune);
				await this.actor.spendDoom(this.rollData.spends.doom);
			}
		}

		const fortuneWouldSucceed = await this._checkFortuneSpends();

		if (fortuneWouldSucceed && this.rollData.difficulty.base > 0) {
			const template =
				"systems/conan2d20/templates/apps/fortune-roll-dialogue.hbs";

			const html = await renderTemplate(template, {});

			new Dialog({
				content: html,
				title: game.i18n.localize("CONAN.RollRemainingDice"),
				buttons: {
					yes: {
						label: game.i18n.localize("CONAN.rollYesLabel"),
						callback: () => {
							this._performRoll();
						},
					},
					no: {
						label: game.i18n.localize("CONAN.rollNoLabel"),
						callback: () => {
							this.rollData.numDice = 0;
							this._performRoll();
						},
					},
				},
				default: "yes",
			}).render(true);
		}
		else {
			this._performRoll();
		}
	}

	_sortedAttributes() {
		return this._sortObjectsByName(CONFIG.CONAN.attributeLabels);
	}

	_sortedExpertiseFields() {
		return this._sortObjectsByName(CONFIG.CONAN.expertiseFields);
	}

	_sortedSkills() {
		return this._sortObjectsByName(CONFIG.CONAN.skills);
	}

	_sortObjectsByName(object) {
		const sortedData = [];
		for (let item in object) {
			sortedData.push({
				key: item,
				name: object[item],
			});
		}

		sortedData.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		return sortedData;
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

	async _updateAttribute(value) {
		this.attribute = value;

		this.rollData.difficulty.increase = this.actor.getDifficultyIncrease(value);

		this.rollData.bonus.inhuman =
			this.actor.system.attributes[this.attribute]?.inhuman ?? 0;

		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _updateDiceIcons() {
		const numDice = this.rollData.numDice;
		const me = this;

		this.element.find(".dice").each(function() {
			const icon = $(this);
			const iconNum = parseInt(icon.attr("data-dice-number"));

			icon.removeClass("fortune selected unselected");

			if (iconNum < me.rollData.spends.fortune) {
				icon.addClass("fortune");
				icon.html("1");
			}
			else if (iconNum < numDice) {
				icon.addClass("selected");
				icon.html("?");
			}
			else {
				icon.addClass("unselected");
				icon.html("&nbsp;");
			}
		});
	}

	async _updateDifficulties() {
		// Updated the base actor skill targets
		if (this.actor) {
			[
				this.rollData.skill.tn,
				this.rollData.skill.expertise,
				this.rollData.skill.focus,
			] = this.actor.getSkillTargetNumberAndFocus(
				this.attribute,
				this.skill,
				this.expertise
			);

			if (this.rollData.ignoreDifficultyIncrease) {
				this.rollData.difficulty.increase = 0;
			}
			else {
				this.rollData.difficulty.increase =
					this.actor.getDifficultyIncrease(
						this.attribute
					);
			}
		}
		else {
			this.rollData.skill.expertise = 0;
			this.rollData.skill.focus = this.element.find("#skill-focus").val() || 0;
			this.rollData.skill.tn = this.element.find("#skill-tn").val() || 7;
		}

		const untrained =
			this.rollData.skill.expertise + this.rollData.skill.focus <= 0;

		this.rollData.skill.complication = untrained ? 19 : 20;

		// Updated assist actor targets if needed
		if (this.assistActor) {
			[
				this.rollData.assists.tn,
				this.rollData.assists.expertise,
				this.rollData.assists.focus,
			] = this.assistActor.getSkillTargetNumberAndFocus(
				this.attribute,
				this.skill,
				this.expertise
			);

			const untrainedAssist =
				this.rollData.assists.expertise + this.rollData.assists.focus <= 0;

			this.rollData.assists.complication = untrainedAssist ? 19 : 20;
		}
	}

	async _updateExpertise(value) {
		this.expertise = value;
		await this._updateDifficulties();
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _updateSkill(value) {
		this.skill = value;
		await this._updateDifficulties();
		this._updateAllFormValues();
		this._updateTestDetails();
	}

	async _updateSkillDescription() {
		if (this.isActorRoll) {
			const attribute = CONFIG.CONAN.attributeLabels[this.attribute];

			let skill = CONFIG.CONAN.skills[this.skill];
			if (this.isNpc) {
				skill = CONFIG.CONAN.expertiseFields[this.expertise];
			}

			this.rollData.title = `${attribute} / ${skill}`;
		}
	}

	async _updateTestDetails() {
		const text = this._getTestDifficulty();
		await this._updateSkillDescription();
		this.element.find(".test-details").html(text);

		let difficultyText = game.i18n.localize(
			"CONAN.SkillRoll.DifficultyIncreased"
		);

		if (this.rollData.difficulty.increase > 0) {
			// *difficulty increased due to wounds/traumas
			this.element.find(".difficulty-increased").html(difficultyText);
		}
		else {
			this.element.find(".difficulty-increased").html("&nbsp;");
		}
	}
}
