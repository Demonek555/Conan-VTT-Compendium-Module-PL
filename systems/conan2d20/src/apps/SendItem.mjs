// A form used to add and remove items from transportation items that have
// stowage and their own encumbrance limits.
//
export default class SendItem extends FormApplication {
	selectedActor = "";

	constructor(object, options={}) {
		super(object, options);
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "transport-stowage",
			classes: ["conan2d20", "item", "sheet"],
			template: "systems/conan2d20/templates/apps/send-item.hbs",
			width: "auto",
			height: "auto",
		});
	}

	get title() {
		return `${game.i18n.localize("CONAN.sendItemTitle")}`;
	}

	activateListeners(html) {
		super.activateListeners(html);

		html.find(".send-item").change(event => {
			this.selectedActor = event.target.value;
		});

		html.find(".send-item-save").click(event => this._onSave(event));

		html.find(".send-item-cancel").click(event => this._onCancel(event));
	}

	getData() {
		const data = {
			itemName: this.object.item.name,
			containers: [
				{
					id: "",
					name: "",
				},
			],
		};

		this.object.destinations.sort((a, b) => a.name.localeCompare(b.name));

		for (const destination of this.object.destinations) {
			data.containers.push({
				id: destination.uuid,
				name: destination.name,
			});
		}

		return data;
	}

	_onCancel() {
		this.close();
	}

	async _onSave() {
		if (this.selectedActor === "") return this.close();

		const selectedActor = await fromUuid(this.selectedActor);

		const itemData = this.object.item.toObject();

		if (itemData.system.equipped) {
			itemData.system.equipped = false;
		}

		await this.object.actor.deleteEmbeddedDocuments("Item", [this.object.item._id]);
		await selectedActor.createEmbeddedDocuments("Item", [itemData]);

		this.close();
	}
}
