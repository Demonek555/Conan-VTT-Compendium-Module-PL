export default class CombatDie extends foundry.dice.terms.DiceTerm {
	constructor(termData) {
		super(termData);
		this.faces = 6;
	}

	static DENOMINATION = "p";

	static values = {
		1: 1,
		2: 2,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	};

	/**
	 * @return the results as CombatDice values: 0,1,2,phoenix.
	 */
	static getResultLabel(result) {
		return result > 2 ? "&nbsp" : result;
	}

	/** @override */
	get total() {
		if (!this._evaluated) return null;
		return this.results.reduce((t, r) => {
			if (!r.active) return t;
			if (r.effect) return t + 1;
			if (r.count !== undefined) return t + r.count;
			return t + CombatDie.getValue(r.result);
		}, 0);
	}

	/** @override */
	async roll(options) {
		const roll = await super.roll(options);
		roll.effect = roll.result === 5 || roll.result === 6;
		return roll;
	}

	get resultValues() {
		return this.results.map(result => {
			return CombatDie.getResultLabel(result.result);
		});
	}

	static getValue(dieSide) {
		// 1 if Effect, otherwise take the value
		return typeof CombatDie.values[dieSide] === "string"
			? 1
			: CombatDie.values[dieSide];
	}
}
