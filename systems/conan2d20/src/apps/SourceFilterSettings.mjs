export default class SourceFilterSettings extends FormApplication {
	constructor(object, options) {
		super(object, options);

		this.filtered = game.settings.get("conan2d20", "sourceFilters") ?? [];
	}

	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			// classes: ["conan2d20", "character-upgrade"],
			classes: ["conan2d20", "item", "sheet"],
			title: game.i18n.localize("CONAN.Form.BookSourceFilters.title"),
			template: "systems/conan2d20/templates/settings/source-filter.hbs",
			width: 300,
			height: "auto",
			resizable: false,
			closeOnSubmit: true,
		});
	}

	static registerSetting() {
		game.settings.register("conan2d20", "sourceFilters", {
			name: game.i18n.localize("CONAN.Form.BookSourceFilters.title"),
			hint: game.i18n.localize("CONAN.Form.BookSourceFilters.hint"),
			config: false,
			scope: "world",
			type: Array,
			requiresReload: true,
			default: [],
		});
	}

	activateListeners(html) {
		html.find(".delete-choice").click(event => this._deleteChoiceItem(event));

		super.activateListeners(html);
	}

	async getData() {
		const data = await super.getData();

		const sources = CONFIG.CONAN.sortedSources;

		data.selectedSources = this.filtered.map(
			choice => ({uuid: choice, name: CONFIG.CONAN.sources[choice]})
		);

		data.hasSelectedSources = data.selectedSources.length > 0;

		data.unselectedSources = sources.map(
			({key, name}) => ({name, uuid: key})
		).filter(source => !this.filtered.includes(source.uuid));

		return data;
	}

	async _deleteChoiceItem(event) {
		event.preventDefault();
		event.stopPropagation();

		const deleteUuid = $(event.currentTarget).data("uuid");

		const newChoices = [];
		for (const itemUuid of this.filtered) {
			if (itemUuid === deleteUuid) continue;
			newChoices.push(itemUuid);
		}

		this.filtered = newChoices;

		return this.render(true);
	}

	async _onChangeInput(event) {
		const options = event.target.list.options;
		const value = event.target.value;

		let uuid = null;
		for (const option of options) {
			if (option.value === value) {
				uuid = option.getAttribute("data-uuid");
				break;
			}
		}

		if (uuid === null) return;

		if (this.filtered.includes(uuid)) return; // No duplicates

		this.filtered.push(uuid);

		this.filtered.sort((a, b) => a.localeCompare(b));

		return this.render(true);
	}

	async _updateObject(event, data) {
		game.settings.set("conan2d20", "sourceFilters", this.filtered);
	}
}
