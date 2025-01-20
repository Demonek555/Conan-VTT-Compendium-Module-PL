export default class ConanProgress {
	label = "";

	max = 100;

	value = 0;

	constructor(max, label) {
		this.label = label ?? "";
		this.max = max ?? 100;
	}

	advance(amount = 1, label = "") {
		if (this.value >= this.max) return;

		this.value += Math.abs(amount);

		const percent = Math.floor((this.value / this.max) * 100);

		SceneNavigation.displayProgressBar({label, pct: percent});
	}

	finished(label = "") {
		SceneNavigation.displayProgressBar({label, pct: 100});
	}
}
