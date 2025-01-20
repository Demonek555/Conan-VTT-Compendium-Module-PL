export default class ConanMenuLayer extends PlaceablesLayer {
	constructor() {
		super();
		this.objects = {};
	}

	static get layerOptions() {
		return foundry.utils.mergeObject(super.layerOptions, {
			name: "conan-menu",
			zIndex: 60,
		});
	}

	static get documentName() {
		return "Token";
	}

	get placeables() {
		return [];
	}
}
