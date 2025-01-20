import ConanBaseActorSheet from "./ConanBaseActorSheet.mjs";

export default class ConanNPCSheet extends ConanBaseActorSheet {

	editInhumanAttributes = false;

	static get defaultOptions() {
		const options = super.defaultOptions;

		foundry.utils.mergeObject(options, {
			classes: options.classes.concat([
				"conan2d20",
				"actor",
				"npc",
				"character-sheet",
			]),
			width: 600,
			height: 700,
			resizable: false,
			tabs: [
				{
					navSelector: ".npc-sheet-navigation",
					contentSelector: ".npc-sheet__body",
					initial: "npc-details",
				},
			],
			dragDrop: [{dragSelector: ".item", dropSelector: null}],
		});
		return options;
	}

	get template() {
		const path = "systems/conan2d20/templates/actors/";
		if (!game.user.isGM && this.actor.limited) {
			return `${path}npc-sheet-readonly.hbs`;
		}
		else {
			return `${path}npc-sheet.hbs`;
		}
	}

	activateListeners(html) {
		html.find(".isMob-checkbox").click(event => this._onToggleMob(event));

		html.find(".npc-edit-inhuman").click(event => {
			this.editInhumanAttributes = !this.editInhumanAttributes;
			this.render();
		});

		html.find(".npc-mob-count-minus")
			.click(event => this._onAlterMobCount(event, -1));

		html.find(".npc-mob-count-plus")
			.click(event => this._onAlterMobCount(event, 1));

		const me = this;
		html.find(".mob-wound").each(function() {
			const wound = $(this);
			const mobMemberId = wound.data("mob-member-id");
			const woundIndex = wound.data("wound-index");

			wound.click(ev => {
				ev.preventDefault();
				me._onToggleWound(mobMemberId, woundIndex);
			});
		});

		html.find(".mob-trauma").each(function() {
			const wound = $(this);
			const mobMemberId = wound.data("mob-member-id");
			const traumaIndex = wound.data("trauma-index");

			wound.click(ev => {
				ev.preventDefault();
				me._onToggleTrauma(mobMemberId, traumaIndex);
			});
		});

		html.find(".quantity-grid").each(function() {
			const spinner = $(this);
			const mobMemberId = spinner.data("mob-member-id");

			const input = spinner.find("input[type=\"number\"]");
			const btnUp = spinner.find(".quantity-up");
			const btnDown = spinner.find(".quantity-down");
			const quantityType = input.attr("data-quantity-type");

			input.on("wheel", ev => {
				ev.preventDefault();
				if (ev.originalEvent.deltaY < 0) {
					me[`_mobInc${quantityType}`](mobMemberId);
				}
				else if (ev.originalEvent.deltaY > 0) {
					me[`_mobDec${quantityType}`](mobMemberId);
				}
			});

			btnUp.click(ev => {
				ev.preventDefault();
				me[`_mobInc${quantityType}`](mobMemberId);
			});

			btnDown.click(ev => {
				ev.preventDefault();
				me[`_mobDec${quantityType}`](mobMemberId);
			});
		});

		this._mobMemberContextMenu(html);

		super.activateListeners(html);
	}

	async getData(options = {}) {
		const context = await super.getData(options);
		context.flags = context.actor.flags;

		// Update expertise fields labels
		if (context.system.skills !== undefined) {
			for (const [s, skl] of Object.entries(context.system.skills)) {
				skl.label = CONFIG.CONAN.expertiseFields[s];
			}
		}

		// context.npcTypes = CONFIG.CONAN.NPC_TYPES;

		context.skills = CONFIG.CONAN.expertiseFields;

		context.tags = this.actor.getTags();

		context.noMobMemberId = !this.actor.system.grouping.baseActorId;
		context.editInhumanAttributes = this.editInhumanAttributes;

		context.isPurchasable = ["mount", "transport", "watercraft"].includes(
			this.actor.type
		);

		context.isTransport = this.actor.type === "transport";
		context.isWatercraft = this.actor.type === "watercraft";

		return context;
	}

	async _clearMob() {
		const data = {
			"system.grouping.memberName": null,
			"system.grouping.members": [],
			"system.grouping.baseActorId": null,
			"system.grouping.memberImage": null,
			"system.grouping.memberToken": null,
			"system.grouping.type": null,
			"system.mobCount": 0,
			"system.isMob": false,
		};

		this.actor.update(data);
	}

	_createMobMemberData(mobActorId) {
		const mobActor = game.actors.get(mobActorId);
		const healthData = foundry.utils.duplicate(mobActor.system.health);

		let wounds = [];
		let traumas = [];

		// NPCs have the same amount of physical and mental wounds they can take
		for (let i = 0; i < healthData.physical.wounds.max; i++) {
			wounds.push({active: false});
			traumas.push({active: false});
		}

		const data = {
			armor: mobActor.system.armor,
			courage: mobActor.system.health.courage,
			dead: false,
			resolve: {
				value: healthData.mental.max,
				max: healthData.mental.max,
				traumas,
			},
			vigor: {
				value: healthData.physical.max,
				max: healthData.physical.max,
				wounds,
			},
		};

		return data;
	}

	_getMobMemberContextOptions() {
		return [
			{
				name: game.i18n.localize("CONAN.deleteMobMemberTitle"),
				icon: "<i class=\"fas fa-trash\"></i>",
				// condition: () => canEdit(),
				condition: () => {
					return game.user.isGM;
				},
				callback: element => {
					const mobMemberDelete = element.data("mob-member-id");
					this._onMobMemberDelete(mobMemberDelete);
				},
			},
		];
	}

	async _mobDecResolve(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentResolve = healthData[mobMemberId].resolve.value;

		if (currentResolve > 0) {
			healthData[mobMemberId].resolve.value = currentResolve - 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	async _mobDecVigor(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentVigor = healthData[mobMemberId].vigor.value;

		if (currentVigor > 0) {
			healthData[mobMemberId].vigor.value = currentVigor - 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	async _mobIncResolve(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentResolve = healthData[mobMemberId].resolve.value;

		if (currentResolve < healthData[mobMemberId].resolve.max) {
			healthData[mobMemberId].resolve.value = currentResolve + 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	async _mobIncVigor(mobMemberId) {
		const healthData = this.actor.system.grouping.members;
		const currentVigor = healthData[mobMemberId].vigor.value;

		if (currentVigor < healthData[mobMemberId].vigor.max) {
			healthData[mobMemberId].vigor.value = currentVigor + 1;

			this.actor.update({
				"system.grouping.members": healthData,
			});
		}
	}

	_mobMemberContextMenu(html) {
		ContextMenu.create(this, html, ".npc-mob-member", this._getMobMemberContextOptions());
	}

	async _onAlterMobCount(event, value) {
		event.preventDefault();

		if (!this.actor.system.grouping.baseActorId) {
			return ui.notifications.error(
				game.i18n.localize("CONAN.NoBaseNpcGroupMemberSet")
			);
		}

		const memberCount = this.actor.system.grouping.members.length;
		const newMemberCount = memberCount + value;

		if (newMemberCount <= 4 && newMemberCount >= 0) {
			const data = {
				"system.mobCount": newMemberCount,
			};

			let newMembers = [];

			if (newMemberCount > memberCount) {
				newMembers = this.actor.system.grouping.members;
				newMembers.push(this._createMobMemberData(this.actor.system.grouping.baseActorId));
			}
			else if (newMemberCount < memberCount) {
				if (newMemberCount > 0) {
					newMembers = this.actor.system.grouping.members.slice(0, newMemberCount);
				}
			}

			data["system.grouping.members"] = newMembers;

			this.actor.update(data);
		}
	}

	async _onDropItem(event, data) {
		const droppedItem = data?.uuid ? await fromUuid(data.uuid) : null;
		const type = droppedItem.type;

		if (!["npcattack", "npcaction", "weapon"].includes(type)) return;

		if (type === "weapon") {
			if (droppedItem.system.weaponType === "threaten") return; // only create physical weapons

			const droppedItemData = foundry.utils.duplicate(droppedItem);

			let damageModifier = 0;
			if (droppedItemData.system.weaponType === "melee") {
				damageModifier = this.actor._attributeBonus("bra");
			}
			else if (droppedItemData.system.weaponType === "ranged") {
				damageModifier = this.actor._attributeBonus("awa");
			}

			const newItemData = {
				type: "npcattack",
				name: droppedItemData.name,
				img: droppedItemData.img,
				system: {
					attackType: droppedItemData.system.weaponType,
					damage: droppedItemData.system.damage,
					description: droppedItemData.system.description,
					group: droppedItemData.system.group,
					qualities: droppedItemData.system.qualities,
					range: droppedItemData.system.range,
					size: droppedItemData.system.size,
				},
			};

			// NPC attacks have the damage modifier built in to the weapon"s base
			// damage
			newItemData.system.damage.dice =
				newItemData.system.damage.dice + damageModifier;

			return this.actor.createEmbeddedDocuments("Item", [newItemData]);
		}
		else {
			super._onDropItem(event, data);
		}
	}

	async _onDropActor(event, data) {
		// Only allow drops onto a Mob leader
		if (!this.actor.system.isMob) return;

		const droppedActor = data?.uuid ? await fromUuid(data.uuid) : null;

		// Only NPCs can be dropped
		if (droppedActor.type !== "npc") return;

		if (droppedActor) {
			this._populateMob(droppedActor.id);
		}
	}

	async _onEditInhuman(event) {
		event.preventDefault();
		console.log("_onEditInhuman");
	}

	async _onMobMemberDelete(mobMemberId) {
		const mobMembers = this.actor.system.grouping.members;
		const newMobMembers = [];

		for (let i = 0; i < mobMembers.length; i++) {
			if (i === mobMemberId) continue;

			newMobMembers.push(mobMembers[i]);
		}

		await this.actor.update({
			"system.grouping.members": newMobMembers,
			"system.mobCount": newMobMembers.length,
		});
	}

	/** @inheritdoc */
	_onSubmit(event) {
		const updateData = this._getSubmitData();

		// If NPC type has changed, set the default max wounds/trauma for that
		// type of NPC
		if (updateData["system.type"] !== this.actor.system.type) {
			let maxWounds = 1; // default minion maxWounds

			if (updateData["system.type"] === "toughened") {
				maxWounds = 2;
			}
			else if (updateData["system.type"] === "nemesis") {
				maxWounds = 5;
			}

			updateData["system.health.mental.traumas.max"] = maxWounds;
			updateData["system.health.physical.wounds.max"] = maxWounds;
		}

		this.actor.update(updateData);
	}

	async _onToggleMob(event) {
		const input = $(event.currentTarget);
		const enabled = input.is(":checked");

		if (enabled) {
			await this._populateMob();
		}
		else {
			await this._clearMob();
		}
	}

	async _onToggleWound(mobMemberId, woundIndex) {
		const mobMembers = this.actor.system.grouping.members;
		const woundStatus = mobMembers[mobMemberId].vigor.wounds[woundIndex].active;

		mobMembers[mobMemberId].vigor.wounds[woundIndex].active = !woundStatus;

		mobMembers[mobMemberId].dead = this.actor.isMobMemberDead(mobMembers[mobMemberId]);

		await this.actor.update({
			"system.grouping.members": mobMembers,
		});
	}

	async _onToggleTrauma(mobMemberId, traumaIndex) {
		const mobMembers = this.actor.system.grouping.members;
		const woundStatus = mobMembers[mobMemberId].resolve.traumas[traumaIndex].active;

		mobMembers[mobMemberId].resolve.traumas[traumaIndex].active = !woundStatus;

		mobMembers[mobMemberId].dead = this.actor.isMobMemberDead(mobMembers[mobMemberId]);

		await this.actor.update({
			"system.grouping.members": mobMembers,
		});
	}

	async _populateMob(mobActorId = null) {
		const baseActorType = this.actor.system.type;
		const baseActorId = this.actor._id;
		const baseActorIsMinion = baseActorType === "minion";

		const groupType = baseActorIsMinion ? "mob" : "squad";
		const mobActor = mobActorId ? game.actors.get(mobActorId) : this.actor;
		const mobActorIsMinion = mobActor.system.type === "minion";

		const allowOverpowered = game.settings.get(
			"conan2d20",
			"allowOverpoweredNpcGroups"
		);

		let populateAllowed = false;
		if (mobActorId) {
			if (!(allowOverpowered || mobActorIsMinion)) {
				return ui.notifications.error(
					game.i18n.localize("CONAN.NpcGroupMemberNotMinion")
				);
			}
			else {
				populateAllowed = true;
			}
		}
		else if (baseActorIsMinion) {
			populateAllowed = true;
		}

		if (populateAllowed) {
			const members = [];

			for (let i = 0; i < CONFIG.CONAN.DEFAULT_MOB_SIZE - 1; i++) {
				members.push(this._createMobMemberData(mobActorId ?? baseActorId));
			}

			const data = {
				"system.grouping.memberName": mobActor.name,
				"system.grouping.members": members,
				"system.grouping.baseActorId": mobActorId ?? baseActorId,
				"system.grouping.memberImage": mobActor.img,
				"system.grouping.memberToken": mobActor.prototypeToken?.texture?.src ?? mobActor.img,
				"system.grouping.type": groupType,
				"system.isMob": true,
				"system.mobCount": members.length,
			};

			this.actor.update(data);
		}
	}

	_prepareItems(context) {
		const attacks = {
			weapon: [],
			display: [],
		};

		const actions = {
			abilities: {
				label: game.i18n.localize("CONAN.Item.NpcAction.Types.SpecialAbility"),
				actions: [],
			},
			doom: {
				label: game.i18n.localize("CONAN.Item.NpcAction.Types.DoomSpend"),
				actions: [],
			},
		};

		const allItems = this._sortAllItems(context);

		// Get Attacks
		for (const i of allItems) {
			i.img = i.img || CONST.DEFAULT_TOKEN;

			if (i.type === "npcattack") {
				let item;
				try {
					item = this.actor.getEmbeddedDocument("Item", i._id);
					i.chatData = item.getChatData({secrets: this.actor.isOwner});
				}
				catch(error) {
					conan.logger.error(error);
				}

				if (i.system.attackType === "threaten") {
					attacks.display.push(i);
				}
				else {
					i.isShield = item.isShield();
					attacks.weapon.push(i);
				}
			}
			else if (i.type === "npcaction") {
				const actionType = i.system.actionType || "npcaction";
				actions[actionType].actions.push(i);
			}
		}

		context.actions = actions;
		context.attacks = attacks;
	}

	_onRollSkillCheck(event) {
		event.preventDefault();

		const skill = $(event.currentTarget)
			.parents(".npc-skills__item")
			.attr("data-skill");

		this.actor._rollSkillCheck(skill);
	}
}
