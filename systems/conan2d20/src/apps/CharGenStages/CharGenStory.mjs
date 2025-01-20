import CharGenBaseStage from "./CharGenBaseStage.mjs";

export default class CharGenStory extends CharGenBaseStage {
	constructor(characterCreator) {
		super(characterCreator);

		this.name = "story";

		this.caste = null;
		this.casteUuid = "";

		this.story = null;

		this.validate();
	}

	async _onRollStory(event) {
		event.preventDefault();

		if (!this.caste) return;

		const stories = new Collection();
		for (const storyUuid of this.caste.system.story.choices) {
			const story = await fromUuid(storyUuid);
			stories.set(story.id, story);
		}

		this.story = await this.randomItem(stories);

		this.validate();

		this.characterCreator.update();
	}

	activateListeners(html) {
		html.find(".story-roll").click(event => this._onRollStory(event));
	}

	async characterData() {
		return {
			"system.background.story.value": this.story?.uuid ?? "",
			"system.background.trait.value": this.story?.system.trait ?? "",
		};
	}

	async formConfig() {

		const casteUuid = this.characterCreator.getCasteUuid();

		if (casteUuid !== this.casteUuid) {
			// The caste has been changed, some data is probably not valid now
			this.casteUuid = casteUuid;

			this.story = null;

			if (typeof casteUuid === "string" && casteUuid !== "") {
				// Load the new caste
				this.caste = await fromUuid(casteUuid);
			}

			this.validate();
		}

		let selectedStories = [];
		let unselectedStories = [];

		if (this.caste) {
			const storyUuid = this.story?.uuid ?? "";

			const allStoryUuids = this.caste?.system?.story?.choices ?? [];
			let docs = [];
			for (const uuid of allStoryUuids) {
				docs.push(await fromUuid(uuid));
			}
			docs = Array.from(new Set(docs)).sort((a, b) => a.name.localeCompare(b.name));
			const allStories = new Collection();
			for (let d of docs) {
				allStories.set(d.id, d);
			}

			[selectedStories, unselectedStories] =
				await conan.utils.getDedupedSelectedItems(
					allStories,
					storyUuid ? [storyUuid] : []
				);
		}

		const storyLabel = this.caste
			? `${this.caste.name} ${game.i18n.localize("CONAN.CharacterCreator.Story.label")}`
			: game.i18n.localize("CONAN.CharacterCreator.Story.label");

		let storyDescriptionHTML = "";

		if (this.story) {
			storyDescriptionHTML = await TextEditor.enrichHTML(
				this.story.system.description.value,
				{
					async: true,
				}
			);
		}

		return {
			...await super.formConfig(),
			description: game.i18n.localize("CONAN.CharacterCreator.Story.description"),
			story: this.story,
			caste: this.caste ?? false,
			label: game.i18n.localize("CONAN.CharacterCreator.Story.label"),
			selected: selectedStories,
			storyLabel,
			storyDescriptionHTML,
			template: () => "apps/character-creator/story",
			unselected: unselectedStories,
		};
	}

	async selectorUuidUpdated(updateData) {
		if (updateData.name === "storyUuid") {
			this.story = await fromUuid(updateData.uuid);
			this.validate();
		}
	}

	async validate() {
		this.errors = [];
		this.valid = true;

		if (!(this.caste && this.caste.type === "caste")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Story.Errors.YouMustSelectACasteFirst")
			);
		}
		else if (!(this.story && this.story.type === "story")) {
			this.valid = false;
			this.errors.push(
				game.i18n.localize("CONAN.CharacterCreator.Story.Errors.YouMustSelectAStory")
			);
		}
	}

}
