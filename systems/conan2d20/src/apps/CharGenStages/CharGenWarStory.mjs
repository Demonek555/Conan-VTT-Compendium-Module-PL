import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenWarStory extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "war story";

		this.warStory = null;
		this.warStorySkills = [];

		this.validate();
	}

	async _onRollWarStory(event) {
		event.preventDefault();

		const warStories = await conan.compendiums.warStories();
		this.warStory = await this.randomItem(warStories);

		await this.updateWarStoryData();

		this.validate();

		this.characterCreator.update();
	}

	async updateWarStoryData() {
		this.warStorySkills = [];

		for (const skill of this.warStory?.system?.skills?.choices ?? []) {
			this.warStorySkills.push({
				label: CONFIG.CONAN.skills[skill],
				skill,
			});
		}
	}

	activateListeners(html) {
		html.find(".war-story-roll").click(event => this._onRollWarStory(event));
	}

	async applySkillBonuses(skills) {
		if (this.warStory) {
			for (const skill of this.warStorySkills) {
				const key = skill.skill;
				skills[key].focus.value += 1;
				skills[key].expertise.value += 1;
			}
		}
	}

	async characterData() {
		return {
			"system.background.warstory.value": this.warStory?.uuid ?? "",
		};
	}

	async formConfig() {
		const warStoryUuid = this.warStory?.uuid;

		const [selectedWarStories, unselectedWarStories] =
			await conan.utils.getDedupedSelectedItems(
				await conan.compendiums.warStories(),
				warStoryUuid ? [warStoryUuid] : []
			);

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.WarStory.description"),
			label: game.i18n.localize("CONAN.CharacterCreator.WarStory.label"),
			selected: selectedWarStories,
			unselected: unselectedWarStories,
			warStory: this.warStory,
			warStorySkills: this.warStorySkills,
			template: () => "apps/character-creator/war-story",
		};
	}

	async processSubmit(updateData) {
		this.validate();

		return updateData;
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "warStoryUuid") {
			this.warStory = await fromUuid(updateData.uuid);

			await this.updateWarStoryData();

			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.warStory && this.warStory.type === "warstory")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Errors.YouMustSelectAWarStory")
			);
		}
	}

}
