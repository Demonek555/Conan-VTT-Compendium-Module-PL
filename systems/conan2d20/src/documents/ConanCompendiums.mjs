export default class ConanCompendiums {

	static _collectionFromArray(array) {
		const collection = new Collection();
		for (let d of array) {
			collection.set(d._id, d);
		}
		return collection;
	}

	static async _documents(type, subtype=null, filterSources=true) {
		// let docs = game.collections.get(type).filter(d => d.type === subtype);
		let docs = [];
		let sources = [];

		if (filterSources) {
			sources = game.settings.get("conan2d20", "sourceFilters") ?? [];
		}

		const sourcesSet = sources.length > 0;

		// / Iterate through the Packs, adding them to the list
		for (let pack of game.packs) {
			if (pack.metadata.type !== type) continue;

			let documents = await pack.getIndex({fields: ["system"]});

			// filter by subtype
			if (subtype !== null) {
				documents = documents.filter(d => d.type === subtype);
			}

			for (const doc of documents) {
				docs.push(doc);
			}
		}

		// filter out non selected sources
		if (sourcesSet) {
			docs = docs.filter(
				d => {
					const source = d.system?.source?.title ?? "";
					return source === "" || sources.includes(source);
				}
			);
		}

		// Dedupe and sort the list alphabetically
		docs = Array.from(new Set(docs)).sort(
			(a, b) => a.name.localeCompare(b.name)
		);

		// return new collection
		return this._collectionFromArray(docs);
	}

	// static async documents(type, sources=[]) {
	// 	const noSources = sources.length === 0;

	// 	const documents = await ConanCompendiums.compendiumDocuments("Item", type);

	// 	if (noSources) {
	// 		return documents;
	// 	}
	// 	else {
	// 		const filteredDocuments = documents.filter(
	// 			document => {
	// 				const source = document.system.description.source.book;

	// 				return source === "" || sources.includes(source);
	// 			}
	// 		);

	// 		// re-create the collection from the filtered Items
	// 		const filteredCollection = new Collection();
	// 		for (let d of filteredDocuments) {
	// 			filteredCollection.set(d.id, d);
	// 		}

	// 		return filteredCollection;
	// 	}
	// }

	static async aspects(filterSources=true) {
		return ConanCompendiums._documents("Item", "aspect", filterSources);
	}

	static async archetypes(filterSources=true) {
		return ConanCompendiums._documents("Item", "archetype", filterSources);
	}

	static async bloodlineTalents(filterSources=true) {
		return ConanCompendiums.talents(["bloodline"], filterSources);
	}

	static async characterCreationRollTables() {
		const characterRolltableChoices = {};

		game.packs.filter(
			pack => pack.metadata.type === "RollTable"
		).sort(
			(a, b) => a.metadata.label.localeCompare(b.metadata.label)
		).forEach(
			pack => {
				characterRolltableChoices[pack.metadata.id] = pack.metadata.label;
			}
		);

		return characterRolltableChoices;
	}

	static async characterItemChoiceRollTables() {
		const characterItemChoices = {};

		game.packs.filter(
			pack => pack.metadata.type === "Item"
		).sort(
			(a, b) => a.metadata.label.localeCompare(b.metadata.label)
		).forEach(
			pack => {
				characterItemChoices[pack.metadata.id] = pack.metadata.label;
			}
		);

		return characterItemChoices;
	}

	static async castes(filterSources=true) {
		return ConanCompendiums._documents("Item", "caste", filterSources);
	}

	static async casteTalents(filterSources=true) {
		return ConanCompendiums.talents(["caste"], filterSources);
	}

	static async educations(filterSources=true) {
		return ConanCompendiums._documents("Item", "education", filterSources);
	}

	static async homelands(filterSources=true) {
		return ConanCompendiums._documents("Item", "homeland", filterSources);
	}

	static async fortuneTalents(filterSources=true) {
		return ConanCompendiums.talents(["fortune"], filterSources);
	}

	static async homelandTalents(filterSources=true) {
		return ConanCompendiums.talents(["homeland"], filterSources);
	}

	static async languages(filterSources=true) {
		return ConanCompendiums._documents("Item", "language", filterSources);
	}

	static async natures(filterSources=true) {
		return ConanCompendiums._documents("Item", "nature", filterSources);
	}

	static async otherTalents(filterSources=true) {
		return ConanCompendiums.talents(["other"], filterSources);
	}

	static async skillTalents(filterSources=true) {
		return ConanCompendiums.talents(["skill"], filterSources);
	}

	static async stories(filterSources=true) {
		return ConanCompendiums._documents("Item", "story", filterSources);
	}

	static async talents(subtypes, filterSources=true) {
		const documents =
			await ConanCompendiums._documents("Item", "talent", filterSources);

		if (!subtypes) {
			return documents;
		}

		return this._collectionFromArray(
			documents.filter(
				document => subtypes.includes(document.system.talentType)
			)
		);
	}

	static async warStories(filterSources=true) {
		return ConanCompendiums._documents("Item", "warstory", filterSources);
	}
}
