export default class ApplyDamage extends Application {

	constructor(options) {
		super(options);

		this.supported_qualities = [
			"blinding",
			"cavalryx",
			"fearsomex",
			"grappling",
			"improvised",
			"incendiaryx",
			"intense",
			"knockdown",
			"nonlethal",
			"persistentx",
			"piercingx",
			"spreadx",
			"stun",
			"unforgivingx",
			"viciousx",
		];

		// Transport actors can't take damage
		this.targets = (options.targets ?? [])
			.filter(actor => actor.canTakeDamage);

		if (this.targets.length <= 0) {
			ui.notifications.warn(
				game.i18n.localize("CONAN.ApplyDamage.Error.NoTokensSelected.message"),
				{permanent: false}
			);
		}

		this.isWatercraft =
			(this.targets.filter(t => t.isWatercraft)).length === this.targets.length;

		this.damage = options.damage ?? {
			effects: 0,
			location: "head",
			resolve: 0,
			vigor: 0,
		};

		this.damage.penetration = 0;

		this.item = options.item ?? undefined;

		this.qualities = null;
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "apply-damage"],
			template: "systems/conan2d20/templates/apps/apply-damage.hbs",
			width: 280,
			height: "auto",
			submitOnChange: false,
		});
	}

	get title() {
		if (this.item) {
			return `${this.item.name} ${game.i18n.localize("CONAN.Damage")}`;
		}
		else {
			return `${game.i18n.localize("CONAN.ApplyDamage.title")}`;
		}
	}

	activateListeners(html) {
		const me = this;

		html.find(".apply-damage-button").click(async event => {
			event.preventDefault();
			this.applyDamage();
			this.close();
		});

		html.find(".character").click(async event => {
			event.preventDefault();
			const index = $(event.currentTarget).data("actor-index");
			const target = this.targets[index];
			target.sheet.render(true);
		});

		html.find(".character").contextmenu(async event => {
			event.preventDefault();
			const index = $(event.currentTarget).data("actor-index");
			const newTargetList = [];

			for (let i = 0; i < this.targets.length; i++) {
				if (index === i) continue;
				newTargetList.push(this.targets[i]);
			}

			if (newTargetList.length > 0) {
				this.targets = newTargetList;
				this.render(false);
			}
			else {
				this.close();
			}
		});

		html.find(".apply-damage .quantity-grid").each(function() {
			const spinner = $(this);
			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me.damage[quantityType] += 1;
				}
				else if (ev.originalEvent.deltaY > 0) {
					me.damage[quantityType] -= 1;
					me.damage[quantityType] = me.damage[quantityType] >= 0
						? me.damage[quantityType]
						: 0;
				}
				me.render(false);
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me.damage[quantityType] += 1;
				me.render(false);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me.damage[quantityType] -= 1;
				me.damage[quantityType] = me.damage[quantityType] >= 0
					? me.damage[quantityType]
					: 0;
				me.render(false);
			});
		});

		html.find(".apply-damage select").on("change", function() {
			const selector = $(this);
			const value = selector.val();
			me.damage.location = value;
		});

		html.find(".quality-tag").click(event => {
			event.preventDefault();
			let qualitySlug = $(event.currentTarget).data("quality");

			for (const quality of this.qualities) {
				if (quality.slug === qualitySlug) {
					quality.enabled = !quality.enabled;
					break;
				}
			}

			me.render(true);
		});

		super.activateListeners(html);
	}

	async applyDamage() {
		const qualities = (this.qualities ?? []).filter(q => q.enabled && q.supported);
		this.damage.locationLocalized = CONFIG.CONAN.coverageTypes[this.damage.location];
		for (const target of this.targets) {
			const damage = foundry.utils.duplicate(this.damage);
			const results = await target.applyDamage(damage, qualities);

			conan.chat.renderApplyDamageResultCard(results);
		}
	}

	async getData() {
		if (this.qualities === null && this.item) {
			const itemData = await this.item.getChatData();

			this.qualities = itemData.qualities;

			for (const quality of this.qualities) {
				quality.supported = this.supported_qualities.includes(quality.type);
				quality.enabled = true;
				quality.slug = quality.label.slugify();
			}
		}

		const selectedTargets = await this.getSelectedTargetsData();

		const context = {
			damage: this.damage,
			hasQualities: this.item && this.qualities.length > 0,
			isWatercraft: this.isWatercraft,
			item: this.item,
			qualities: this.qualities,
			locations: CONFIG.CONAN.coverageTypes,
			selectedTargets,
		};

		return context;
	}

	async getSelectedTargetsData() {
		const selectedTargets = [];

		this.targets.forEach((target, index) => {
			let name;
			let img;

			if (target.isToken) {
				name = target.token.name;
				img = target.token.texture.src;
			}
			else {
				name = target.name;
				img = target.prototypeToken.texture.src;
			}

			selectedTargets.push({
				img,
				index,
				name,
			});
		});

		if (selectedTargets.length > 1) {
			selectedTargets.sort((a, b) => a.name.localeCompare(b.name));
		}

		return selectedTargets;
	}
}
