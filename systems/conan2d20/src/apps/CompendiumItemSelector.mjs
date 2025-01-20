export default class CompendiumItemSelector extends FormApplication {

	closeOnSelection = false;

	maxChoices = 0;

	uuid = foundry.utils.randomID();

	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: ["conan2d20", "compendium-item-selector"],
			height: "auto",
			width: 320,
			closeOnSubmit: false,
			submitOnChange: true,
		});

		return options;
	}

	get prompt() {
		return game.i18n.localize("CONAN.Form.SelectCompendiumItem.prompt");
	}

	get template() {
		return "systems/conan2d20/templates/apps/compendium-item-selector.hbs";
	}

	get title() {
		return game.i18n.localize("CONAN.Form.SelectCompendiumItem.title");
	}

	activateListeners(html) {
		html.find(".remove-item").click(event => this._onRemoveItem(event));

		super.activateListeners(html);
	}

	async getAllItemData() {
		this.availableItems = await this.getAvailableItems() ?? [];
		this.currentItemUuids = await this.getUuids() ?? [];
		this.currentItems = await this.getCurrentItems() ?? [];
	}

	async getCurrentItems() {
		const items = [];
		for (const uuid of this.currentItemUuids) {
			const item = await fromUuid(uuid);
			items.push(item);
		}

		return items.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}

	async getData() {
		await this.getAllItemData();

		const data = {
			currentItems: this.currentItems,
			itemChoices: [],
			prompt: this.prompt,
			uuid: this.uuid,
		};

		// Don"t include already selected items
		for (const item of this.availableItems) {
			if (!this.currentItemUuids.includes(item.uuid)) {
				data.itemChoices.push(item);
			}
		}

		return data;
	}

	async _onRemoveItem(event) {
		event.preventDefault();
		event.stopPropagation();

		let itemIndex = $(event.currentTarget).data("item-index");

		const newItemUuids = [];

		for (let i = 0; i < this.currentItems.length; i++) {
			if (itemIndex === i) continue;
			newItemUuids.push(this.currentItems[i].uuid);
		}

		await this._saveUuids(newItemUuids);
	}

	async _saveUuids(uuids) {
		await this.saveUuids(uuids);

		this.render(false);
	}

	async _updateObject(event, formData) {
		let newUuids = this.currentItemUuids;

		const currentItemCount = this.currentItemUuids.length;
		if (this.maxChoices === 1 && currentItemCount === 1 && formData["item-selected"] !== "") {
			for (const item of this.availableItems) {
				if (item.name === formData["item-selected"]) {
					newUuids = [item.uuid];
					break;
				}
			}

			await this._saveUuids(newUuids);
		}
		else if (this.maxChoices === 0 || this.maxChoices > currentItemCount) {
			for (const item of this.availableItems) {
				if (item.name === formData["item-selected"]) {
					newUuids.push(item.uuid);
					break;
				}
			}

			await this._saveUuids(newUuids);
		}
		else {
			ui.notifications.warn(
				game.i18n.format("CONAN.Form.SelectCompendiumItem.Error.MaxChoicesReached",
					{maxChoices: this.maxChoices}
				)
			);

			return this.render(true);
		}

		if (this.closeOnSelection) this.close();
	}
}
