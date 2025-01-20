export default class TalentRequirementEditor extends FormApplication {

	constructor(object, options={}) {
		super(object, options);

		this.talent = object;

		this.edit = false;

		this.requiredTalents = [];
		this.requiredTalentNames = {};

		// Default to an expertise
		this.requirement = this._defaultRequirement("expertise");

		if (Number.isInteger(options.editIndex)) {
			const requirements = this.talent?.system?.requirements ?? [];
			if (options.editIndex >= 0 && options.editIndex < requirements.length) {
				this.editIndex = options.editIndex;
				this.requirement = requirements[options.editIndex];

				if (this.requirement.type === "talent") {
					for (const talent of this.requirement.talents) {
						let item;

						conan.compendiums.talents(undefined, false).then(talents => {
							item = talents.find(
								t => t.uuid === talent.uuid
							);
						});

						if (item) {
							this.requiredTalentNames[item.uuid] = item.name;
							this.requiredTalents.push(item);
						}
					}
				}

				this.edit = true;
			}
		}
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["conan2d20", "talent-requirement-editor"],
			template: "systems/conan2d20/templates/apps/talent-requirement-editor.hbs",
			width: 300,
			height: 400,
			resizable: true,
		});
	}

	get title() {
		return `${game.i18n.localize("CONAN.Item.Talent.RequirementEditor.label")}`;
	}

	activateListeners(html) {
		html.find(".delete-talent").click(event => this._deleteTalentChoice(event));

		html.find(".requirement-save-button").click(
			event => this._onSaveRequirement(event)
		);

		super.activateListeners(html);
	}

	async getData(options) {
		const data = await super.getData(options);

		const [selectedTalents, unselectedTalents] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.talents(undefined, false),
				(this.requirement?.talents ?? []).map(t => t.uuid)
			);

		const requirement = foundry.utils.duplicate(this.requirement);

		if (requirement.type === "talent") {
			for (const talent of requirement?.talents ?? []) {
				const requiredTalent = (await conan.compendiums.talents(undefined, false)).find(
					t => t.uuid === talent.uuid
				);

				talent.name = requiredTalent.name;
			}

			requirement.talents.sort((a, b) => a.name.localeCompare(b.name));
		}

		foundry.utils.mergeObject(data, {
			CONFIG: CONFIG.CONAN,
			appId: this.id,
			requiredTalent: this.requiredTalent,
			requirement,
			selected: selectedTalents,
			talent: this.talent,
			unselected: unselectedTalents,
		});

		return data;
	}

	_defaultRequirement(type) {
		switch (type) {
			case "expertise":
				return {
					skill: CONFIG.CONAN.sortedSkills[0].key,
					type: "expertise",
					value: 1,
				};
			case "focus":
				return {
					skill: CONFIG.CONAN.sortedSkills[0].key,
					type: "focus",
					value: 1,
				};
			case "special":
				return {
					value: "",
					type: "special",
				};
			case "talent":
				return {
					min: 1,
					type: "talent",
					talents: [],
				};
		}
	}

	async _deleteTalentChoice(event) {
		event.preventDefault();
		event.stopPropagation();

		const uuid = event.currentTarget.dataset.uuid;

		const newRequiredTalents = [];
		for (const talent of this.requiredTalents) {
			if (talent.uuid === uuid) continue;
			newRequiredTalents.push(talent);
		}
		this.requiredTalents = newRequiredTalents;

		const talents = [];
		for (const talent of this.requirement.talents) {
			if (talent.uuid === uuid) continue;
			talents.push(talent);
		}
		this.requirement.talents = talents;

		this.render(true);
	}

	async _onChangeInput(event) {
		event.preventDefault();
		event.stopPropagation();

		const isItem = event.currentTarget.dataset.isItem === "true";

		// We only have to do something special if we're handling a multi-choice
		// datalist
		//
		if (event.target.list && isItem) {
			const options = event.target.list.options;
			const value = event.target.value;

			// const name = event.target.name;

			let uuid = null;
			for (const option of options) {
				if (option.value === value) {
					uuid = option.getAttribute("data-uuid");
					break;
				}
			}

			if (uuid === null) return;

			const talent = await fromUuid(uuid);

			if (talent) {
				this.requiredTalents.push(talent);

				this.requirement.talents.push({
					rank: 1,
					uuid,
				});
			}
		}

		return this._onSubmit(event);
	}

	async _onSaveRequirement(event) {
		event.preventDefault();
		event.stopPropagation();

		const requirements = this.talent?.system?.requirements ?? [];

		let valid = true;
		switch (this.requirement.type) {
			case "expertise":
			case "focus":
				const value = Number.parseInt(this.requirement.value);
				valid = value >= 1 && value <= 5;

				if (this.requirement.skill === "") valid = false;

				break;
			case "special":
				if (this.requirement.value === "") valid = false;
				break;
			case "talent":
				const numTalents = (this.requirement?.talents ?? []).length;

				if (numTalents <= 0) {
					valid = false;
				}
				if (this.requirement.min <= 0 || this.requirement.min > numTalents) {
					valid = false;
				}

				for (const talent of this.requirement?.talents ?? []) {
					const required = await fromUuid(talent.uuid);
					if (talent.rank > required.system.rank.max) {
						valid = false;
					}
				}
		}

		if (valid) {
			if (this.edit) {
				requirements[this.editIndex] = this.requirement;
			}
			else {
				requirements.push(this.requirement);
			}

			requirements.sort((a, b) => a.type.localeCompare(b.type));

			await this.talent.update({"system.requirements": requirements});

			this.close();
		}
	}

	/** @inheritdoc */
	async _onSubmit(event) {
		let updateData = this._getSubmitData();

		if (this.requirement.type !== updateData.type) {
			this.requirement = this._defaultRequirement(updateData.type);
			return this.render(true);
		}

		switch (this.requirement.type) {
			case "expertise":
			case "focus":
				this.requirement.skill = updateData.skill;
				this.requirement.value = updateData[this.requirement.type];
				break;
			case "special":
				this.requirement.value = updateData.special;
				break;
			case "talent":
				this.requirement.min = updateData.talentMin;

				for (const talentRank of Object.keys(updateData)) {
					if (talentRank.startsWith("rank_")) {
						const uuid = talentRank.split("_")[1] ?? "";

						if (uuid !== "") {
							for (const talent of this.requirement.talents) {
								if (talent.uuid === uuid) {
									talent.rank = updateData[talentRank];
								}
							}
						}
					}
				}
				break;
		}

		this.render(true);
	}

	/** @inheritdoc */
	async _updateObject(event, formData) {
		console.log(formData);
	}
}
