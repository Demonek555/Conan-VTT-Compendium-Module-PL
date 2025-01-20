import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenAttributeAspects extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "attribute aspects";

		this.data = {
			aspectOneUuid: null,
			aspectTwoUuid: null,
		};

		this.aspectOne = null;
		this.aspectTwo = null;

		this.selectorOneChanged = true;
		this.selectorTwoChanged = true;

		this.mandatory = {};
		this.optional = {};

		this._updateManadatoryAttributeConfig();
		this._updateOptionalAttributeConfig();

		this.validate();
	}

	async _onRollAspect(event) {
		event.preventDefault();

		const aspectIndex = $(event.currentTarget).data("aspect-index");

		const aspects = await conan.compendiums.aspects();
		const result = await this.randomItem(aspects);

		if (aspectIndex === "one") {
			this.aspectOne = result;
			this.data.aspectOneUuid = result.uuid;
		}
		else if (aspectIndex === "two") {
			this.aspectTwo = result;
			this.data.aspectTwoUuid = result.uuid;
		}

		this._updateManadatoryAttributeConfig();
		this._updateOptionalAttributeConfig();

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".aspect-roll").click(event => this._onRollAspect(event));
	}

	async applyAttributeBonuses(attributes) {
		for (const mandatoryAttribute of this.mandatory.attributes) {
			const key = mandatoryAttribute.attribute;
			attributes[key].value += mandatoryAttribute.bonus;
		}

		for (const aspect of this.optional.aspects) {
			for (const optionalAttribute of aspect.attributes) {
				const key = optionalAttribute.attribute;
				attributes[key].value += optionalAttribute.bonus;
			}
		}
	}

	async formConfig() {
		const aspects = await conan.compendiums.aspects();

		const [selectedAspectOne, unselectedAspectOne] =
			await conan.utils.getDedupedSelectedItems(
				aspects,
				this.data.aspectOneUuid ? [this.data.aspectOneUuid] : []
			);

		const [selectedAspectTwo, unselectedAspectTwo] =
			await conan.utils.getDedupedSelectedItems(
				aspects,
				this.data.aspectTwoUuid ? [this.data.aspectTwoUuid] : []
			);

		return {
			...await super.formConfig(),
			aspects: [
				{
					aspectIndex: "one",
					label: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.One.label"),
					selected: selectedAspectOne[0],
					unselected: unselectedAspectOne,
				},
				{
					aspectIndex: "two",
					label: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Two.label"),
					selected: selectedAspectTwo[0],
					unselected: unselectedAspectTwo,
				},
			],
			description: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.label"),
			mandatory: this.mandatory,
			optional: this.optional,
			template: () => "apps/character-creator/attribute-aspects",
		};
	}

	processMandatoryAttributeUpdates(updateData) {
		if (updateData.mandatoryBest) {
			for (const entry of this.mandatory.attributes) {
				if (entry.id === updateData.mandatoryBest) {
					entry.best = true;
					entry.worst = false;
				}
				else {
					entry.best = false;
				}
			}
		}

		if (updateData.mandatoryWorst) {
			for (const entry of this.mandatory.attributes) {
				if (entry.id === updateData.mandatoryWorst) {
					entry.worst = true;
					entry.best = false;
				}
				else {
					entry.worst = false;
				}
			}
		}

		// Update bonuses
		for (const entry of this.mandatory.attributes) {
			if (entry.best) {
				entry.bonus = 3;
			}
			else if (entry.worst) {
				entry.bonus = 1;
			}
			else {
				entry.bonus = 2;
			}
		}
	}

	processOptionalAttributeUpdates(updateData) {
		if (updateData.aspectOptional_0) {
			for (const entry of this.optional.aspects[0].attributes) {
				if (entry.id === updateData.aspectOptional_0) {
					entry.checked = true;
					entry.bonus = 1;
				}
				else {
					entry.checked = false;
					entry.bonus = 0;
				}
			}
		}

		if (updateData.aspectOptional_1) {
			for (const entry of this.optional.aspects[1].attributes) {
				if (entry.id === updateData.aspectOptional_1) {
					entry.checked = true;
					entry.bonus = 1;
				}
				else {
					entry.checked = false;
					entry.bonus = 0;
				}
			}
		}
	}

	async processSubmit(updateData) {
		this.processMandatoryAttributeUpdates(updateData);

		this.processOptionalAttributeUpdates(updateData);

		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name.startsWith("aspect_")) {
			const aspect = await fromUuid(updateData.uuid);

			if (updateData.name.endsWith("_one")) {
				this.selectorOneChanged = true;
				this.data.aspectOneUuid = updateData.uuid;
				this.aspectOne = aspect;
			}
			else if (updateData.name.endsWith("_two")) {
				this.selectorTwoChanged = true;
				this.data.aspectTwoUuid = updateData.uuid;
				this.aspectTwo = aspect;
			}

			this._updateManadatoryAttributeConfig();
			this._updateOptionalAttributeConfig();

			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.aspectOne && this.aspectOne.type === "aspect")
			|| !(this.aspectTwo && this.aspectOne.type === "aspect")
		) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectBothAttributeAspects")
			);
		}
		else {
			const best = this.mandatory.attributes.find(e => e.best);
			if (!best) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectMandatoryBest")
				);
			}

			const worst = this.mandatory.attributes.find(e => e.worst);
			if (!worst) {
				this.valid = false;
				this.errors.push(
					game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectMandatoryWorst")
				);
			}

			if (best && worst) {
				if (best.attribute === worst.attribute) {
					this.valid = false;
					this.errors.push(
						game.i18n.localize("CONAN.CharacterCreator.AttributeAspect.Errors.BestAndWorstTheSame")
					);
				}
			}
		}

		this.optional.aspects.forEach(aspect => {
			if (!aspect.attributes.find(a => a.checked)) {
				this.valid = false;
				this.errors.push(
					game.i18n.format(
						"CONAN.CharacterCreator.AttributeAspect.Errors.YouMustSelectOneOptional",
						{aspectName: aspect.aspectName}
					)
				);
			}
		});
	}

	async _updateManadatoryAttributeConfig() {
		this.mandatory = {
			show: this.aspectOne !== null && this.aspectTwo !== null,
			attributes: [],
		};

		if (this.mandatory.show) {
			[this.aspectOne, this.aspectTwo].forEach(aspect => {
				const randomId = foundry.utils.randomID();

				aspect.system.mandatoryAttribute.choices.forEach(attribute => {
					this.mandatory.attributes.push({
						aspectName: aspect.name,
						attribute,
						best: false,
						id: `${attribute}_${randomId}`,
						name: CONFIG.CONAN.attributeLabels[attribute],
						worst: false,
						bonus: 2,
					});
				});
			});
		}
	}

	async _updateOptionalAttributeConfig() {
		this.optional = {
			show: this.aspectOne !== null && this.aspectTwo !== null,
			aspects: [],
		};

		if (this.optional.show) {
			let aspectIndex = 0;
			[this.aspectOne, this.aspectTwo].forEach(aspect => {
				const aspectId = aspect.name.slugify();
				const aspectData = {
					aspectId,
					aspectName: aspect.name,
					attributes: [],
				};

				aspect.system.optionalAttribute.choices.forEach(attribute => {
					const randomId = foundry.utils.randomID();

					aspectData.attributes.push({
						aspectId,
						attribute,
						bonus: 0,
						checked: false,
						dataName: `aspectOptional_${aspectIndex}`,
						id: `${attribute}_${randomId}`,
						name: CONFIG.CONAN.attributeLabels[attribute],
					});
				});

				this.optional.aspects.push(aspectData);

				aspectIndex++;
			});
		}
	}
}
