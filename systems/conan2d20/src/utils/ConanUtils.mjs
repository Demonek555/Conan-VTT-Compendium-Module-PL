class ConanUtils {
	static addDots(data, woundMax = 0, valueAttribute = "status") {
		for (let i = 0; i < woundMax; i += 1) {
			if (data.dots[i].length === 0) {
				data.dots[i] = {
					status: "healed",
					icon: "far fa-circle",
				};
			}
		}
		return data;
	}

	static async copyToClipboard(text) {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
				return ui.notifications.info(
					game.i18n.localize("CONAN.CopyToClipboardSucceeded")
				);
			}
			else {
				const textArea = document.createElement("textarea");
				textArea.value = text;
				textArea.style.position = "fixed";
				textArea.style.left = "-999px";
				textArea.style.top = "-999px";
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				return new Promise((resolve, reject) => {
					/* eslint-disable-next-line no-unused-expressions */
					document.execCommand("copy")
						? resolve(
							ui.notifications.info(
								game.i18n.localize("CONAN.CopyToClipboardSucceeded")
							)
						)
						: reject(
							new Error(game.i18n.localize("CONAN.CopyToClipboardFailed"))
						);
					textArea.remove();
				}).catch(error => ui.notifications.error(error));
			}
		}
		catch(error) {
			conan.logger.error(error);
			ui.notifications.error(game.i18n.localize("CONAN.CopyToClipboardFailed"));
		}
	}

	static deepMerge(...objects) {
		function getType(object) {
			return Object.prototype.toString.call(object).slice(8, -1).toLowerCase();
		}

		function mergeObj(clone, object) {
			for (let [key, value] of Object.entries(object)) {
				let type = getType(value);

				if (clone[key] !== undefined
					&& getType(clone[key]) === type
					&& ["array", "object"].includes(type)
				) {
					clone[key] = ConanUtils.deepMerge(clone[key], value);
				}
				else {
					clone[key] = structuredClone(value);
				}
			}
		}

		let clone = structuredClone(objects.shift());

		for (let object of objects) {
			let type = getType(object);

			if (getType(clone) !== type) {
				clone = structuredClone(object);
				continue;
			}

			if (type === "array") {
				clone = [...clone, ...structuredClone(object)];
			}
			else if (type === "object") {
				mergeObj(clone, object);
			}
			else {
				clone = object;
			}
		}

		return clone;
	}


	static foundryMinVersion(version) {
		const majorVersion = parseInt(game.version.split(".")[0]);
		return majorVersion >= version;
	}


	static getAttackDescription(item) {
		const flavor = {
			description: "CONAN.attack.default.description",
		};

		const isImprovised = (item?.system?.qualities?.value ?? []).find(
			q => q.type === "improvised"
		) ? true : false;

		if (isImprovised || item.type === "display") {
			flavor.description = `${item?.system?.description?.value}`;
		}
		else if (item?.system?.weaponType === "melee") {
			flavor.description = "CONAN.attacks.melee.description";
		}
		else if (item?.system?.weaponType === "ranged") {
			flavor.description = "CONAN.attacks.ranged.description";
		}

		return flavor;
	}

	/**
	 * Creates de-duplicated lists of Selected and Unselected Items.
	 *
	 * @param {allItems} Array A list of all available skills
	 * @param {items} Array A list of currently selected skills
	 *
	 * @returns {Promise} Promise which represents an array containing both the
	 * selected and unselected skill arrays
	 */
	static async getDedupedSelectedItems(allItems, items) {
		const unselectedItems = [];
		const selectedItems = [];

		allItems.forEach(item => {
			if (!items.includes(item.uuid)) {
				unselectedItems.push(item);
			}
		});

		for (const itemUuid of items) {
			selectedItems.push(await fromUuid(itemUuid));
		}

		selectedItems.sort((a, b) => a.name.localeCompare(b.name));

		return [selectedItems, unselectedItems];
	}

	/**
	 * Creates de-duplicated lists of Selected and Unselected attributes and
	 * returns them in objects that map the skill's unique identifier to its
	 * i18n translated name for display in the interface.
	 *
	 * @param {allSkills} Array A list of all available skills
	 * @param {skills} Array A list of currently selected skills
	 * @returns {Array} Two arrays containing the selected and unselected skills
	 */
	static getDedupedSelectedAttributes(allAttributes, attributes) {
		const selectedAttributes = attributes.map(
			choice => ({uuid: choice, name: CONFIG.CONAN.attributeLabels[choice]})
		);

		const unselectedAttributes = allAttributes.map(
			({key, name}) => ({name, uuid: key})
		).filter(attribute => !attributes.includes(attribute.uuid));

		selectedAttributes.sort((a, b) => a.name.localeCompare(b.name));

		return [selectedAttributes, unselectedAttributes];
	}

	/**
	 * Creates de-duplicated lists of Selected and Unselected skills and returns
	 * them in objects that map the skill's unique identifier to its i18n
	 * translated name for display in the interface.
	 *
	 * @param {allSkills} Array A list of all available skills
	 * @param {skills} Array A list of currently selected skills
	 * @returns {Array} Two arrays containing the selected and unselected skills
	 */
	static getDedupedSelectedSkills(allSkills, skills) {
		const selectedSkills = skills.map(
			choice => ({uuid: choice, name: CONFIG.CONAN.skills[choice]})
		);

		const unselectedSkills = allSkills.map(
			({key, name}) => ({name, uuid: key})
		).filter(skill => !skills.includes(skill.uuid));

		selectedSkills.sort((a, b) => a.name.localeCompare(b.name));

		return [selectedSkills, unselectedSkills];
	}

	static calculateArmor(armorItems, shieldItems=[]) {

		const armor = {
			head: {
				soak: [0],
				qualities: [],
			},
			torso: {
				soak: [0],
				qualities: [],
			},
			larm: {
				soak: [0],
				qualities: [],
			},
			rarm: {
				soak: [0],
				qualities: [],
			},
			lleg: {
				soak: [0],
				qualities: [],
			},
			rleg: {
				soak: [0],
				qualities: [],
			},
			shield: {
				soak: [0],
			},
		};

		for (const shield of shieldItems) {
			const quality = shield.system.qualities.value.find(q => q.type === "shieldx");

			armor.shield.soak.push(
				parseInt(quality.value)
			);
		}

		for (const armorItem of armorItems) {
			if (armorItem.isEquipped && !armorItem.isBroken) {
				for (const cover of armorItem.system.coverage?.value ?? []) {
					armor[cover].soak.push(armorItem.system.soak);

					armor[cover].qualities.push(
						...armorItem.system.qualities.value
					);
				}
			}
		}

		const totalCounts = {
			heavy: 0,
			noisy: 0,
			vheavy: 0,
			displayQualities: [],
		};

		for (const entry in armor) {
			if (entry === "shield") continue;

			const armorLocation = armor[entry];

			armorLocation.soak.sort((a, b) => b - a);

			const qualities = armorLocation.qualities ?? [];

			armorLocation.qualities = [
				...new Map(
					qualities.map(q => [q.type, q])
				).values(),
			];

			const hasQuality = {
				heavy: false,
				noisy: false,
				vheavy: false,
			};

			const countQualities = ["heavy", "vheavy", "noisy"];
			for (const quality of countQualities) {
				const count = armorLocation.qualities.filter(
					q => q.type === quality
				).length;

				if (count > 0) {
					hasQuality[quality] = true;
				}

				totalCounts[quality] += count;
			}

			totalCounts.displayQualities.push(...armorLocation.qualities.filter(
				q => !countQualities.includes(q.type)
			));

			const wearingMultipleLayers = armorLocation.soak.length > 2;

			if (wearingMultipleLayers) {
				if (hasQuality.heavy && !hasQuality.vheavy) {
					totalCounts.vheavy++;
					totalCounts.heavy--;
				}
				else if (!(hasQuality.heavy || hasQuality.vheavy)) {
					totalCounts.heavy++;
				}
			}
		}

		if (totalCounts.vheavy > 0) {
			totalCounts.displayQualities.push({
				type: "vheavy",
				label: CONFIG.CONAN.armorQualities.vheavy,
				description: CONFIG.CONAN.qualitiesDescriptions.vheavy,
			});
		}
		else {
			if (totalCounts.heavy >= 3) {
				totalCounts.displayQualities.push({
					type: "heavy",
					label: CONFIG.CONAN.armorQualities.heavy,
					description: CONFIG.CONAN.qualitiesDescriptions.heavy,
				});
			}
			if (totalCounts.noisy >= 2) {
				totalCounts.displayQualities.push({
					type: "noisy",
					label: CONFIG.CONAN.armorQualities.noisy,
					description: CONFIG.CONAN.qualitiesDescriptions.noisy,
				});
			}
		}

		totalCounts.displayQualities = [
			...new Map(
				totalCounts.displayQualities.map(q => [q.type, q])
			).values(),
		];

		totalCounts.displayQualities.sort((a, b) => a.label.localeCompare(b.label));

		armor.qualityCount = totalCounts;

		return armor;
	}

	static getMessageStyles() {
		const messageStyles = this.foundryMinVersion(12)
			? CONST.CHAT_MESSAGE_STYLES
			: CONST.CHAT_MESSAGE_TYPES;

		return messageStyles;
	}

	// If this is a new release, show the release notes to the GM the first time
	// they login
	static async showNewReleaseNotes() {
		if (game.user.isGM) {
			const savedVersion = game.settings.get("conan2d20", "systemVersion");
			const systemVersion = game.system.version;

			if (systemVersion !== savedVersion) {
				Hotbar.toggleDocumentSheet(
					CONFIG.CONAN.JournalUuids.releaseNotes
				);

				game.settings.set(
					"conan2d20", "systemVersion",
					systemVersion
				);
			}
		}
	}


	static generateTalentIdentifier(talent) {
		let typeKey = talent.system.talentType;

		if (typeKey === "skill") {
			typeKey = `${typeKey}_${talent.system.linkedSkill}`;
		}

		return `${typeKey}::${talent.name.slugify()}`;
	}

}

export default ConanUtils;
