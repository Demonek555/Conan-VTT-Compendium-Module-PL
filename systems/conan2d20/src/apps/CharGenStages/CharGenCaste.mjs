import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenCaste extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "caste";

		this.caste = null;
		this.casteSkill = "";
		this.casteTalents = [];

		this.validate();
	}

	async _onRollCaste(event) {
		event.preventDefault();

		const castes = await conan.compendiums.castes();
		this.caste = await this.randomItem(castes);

		await this.updateCasteData();

		this.validate();

		this.characterCreator.update();
	}

	async updateCasteData() {
		this.casteTalents = [];

		for (const talentUuid of this.caste?.system?.talent?.choices ?? []) {
			this.casteTalents.push(await fromUuid(talentUuid));
		}

		this.casteSkill = CONFIG.CONAN.skills[this.caste?.system?.skill] ?? "";

	}

	activateListeners(html) {
		html.find(".caste-roll").click(event => this._onRollCaste(event));
	}

	async applySkillBonuses(skills) {
		if (!this.caste) return;

		const skill = this.caste.system.skill;
		skills[skill].focus.value += 1;
		skills[skill].expertise.value += 1;
	}

	async characterData() {
		return {
			"system.background.caste.value": this.caste?.uuid ?? "",
			"system.background.standing.value": this.caste?.system?.socialStanding ?? 0,
		};
	}

	async formConfig() {
		const casteUuid = this.caste?.uuid ?? "";

		const [selectedCastes, unselectedCastes] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.castes(),
				casteUuid ? [casteUuid] : []
			);

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Caste.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.Caste.label"),
			selected: selectedCastes,
			unselected: unselectedCastes,
			caste: this.caste,
			casteTalents: this.casteTalents,
			casteSkill: this.casteSkill,
			casteStory: this.casteStory,
			template: () => "apps/character-creator/caste",
		};
	}

	getCasteUuid() {
		return this.caste?.uuid ?? "";
	}

	async getItems() {
		if (!(Array.isArray(this.casteTalents) && this.casteTalents.length > 0)) return;

		const items = [];
		for (const talent of this.casteTalents) {
			items.push(talent);
		}

		return items;
	}

	async processSubmit(updateData) {
		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "casteUuid") {
			this.caste = await fromUuid(updateData.uuid);

			await this.updateCasteData();

			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.caste && this.caste.type === "caste")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Caste.Errors.YouMustSelectACaste")
			);
		}
	}

}
