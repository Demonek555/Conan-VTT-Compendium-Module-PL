class ConanBaseActorSheet extends ActorSheet {
	// Default non-attack action sections to be collapsed by default
	_hiddenTablesLut = {
		standard: true,
		minor: true,
		reaction: true,
		free: true,
	};

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			scrollY: [
				".sheet-sidebar",
				".skills-pane",
				".character-pane",
				".talents-pane",
				".inventory-pane",
				".actions-pane",
				".sheet-body",
			],
		});
	}

	/** @inheritdoc */
	get title() {
		return `[${this.actor.type}] ${this.actor.name}`;
	}

	async getData(options) {
		// The Actor"s data
		const source = this.actor.toObject();
		const actorData = this.actor.toObject(false);

		const context = {
			actor: actorData,
			attributes: CONFIG.CONAN.attributeLabels,
			conditions: CONFIG.CONAN.conditionTypes,
			CONFIG: CONFIG.CONAN,
			cssClass: this.actor.isOwner ? "editable" : "locked",
			editable: this.isEditable,
			hiddenTables: this._hiddenTablesLut,
			hasType: ["mount", "npc"].includes(this.actor.type),
			isCharacter: this.actor.type === "character",
			isGM: game.user.isGM,
			isMount: this.actor.type === "mount",
			isNPC: this.actor.type === "npc",
			isTransport: this.actor.type === "transport",
			items: actorData.items,
			limited: this.actor.limited,
			options: this.options,
			owner: this.actor.isOwner,
			source: source.system,
			system: actorData.system,
		};

		context.biographyHTML = await TextEditor.enrichHTML(
			context.system.details.biography.value,
			{
				secrets: this.actor.isOwner,
				async: true,
				relativeTo: this.actor,
			}
		);

		// Update Attribute labels
		if (context.system.attributes !== undefined) {
			for (const [a, atr] of Object.entries(context.system.attributes)) {
				atr.label = CONFIG.CONAN.attributeLabels[a];
				atr.tooltip = CONFIG.CONAN.attributeTooltips[a];
			}
		}

		if (context.system.skills !== undefined) {
			for (const [s, skill] of Object.entries(context.system.skills)) {
				skill.label = CONFIG.CONAN.skills[s];
				skill.tooltip = CONFIG.CONAN.skillTooltips[s];
			}
		}

		this._prepareItems(context);
		this._addConditionData(context);

		return context;
	}

	activateListeners(html) {
		// Pad field width
		html.find("[data-wpad]").each((i, e) => {
			const text = e.tagName === "INPUT" ? e.value : e.innerText;
			const w = (text.length * parseInt(e.getAttribute("data-wpad"), 10)) / 2;
			e.setAttribute("style", `flex: 0 0 ${w}px`);
		});

		// Item summaries
		html.find(".item .item-name h4").click(event => {
			event.preventDefault();
			const li = $(event.currentTarget).parent().parent();
			this._onItemSummary(li);
		});

		html
			.find(".item-control__attack")
			.click(event => this._onClickAttack(event));

		html
			.find(".item-control__damage")
			.click(event => this._onClickDamage(event));

		html.find(".item-control__shield").click(event => this._onClickSoak(event));

		// Hideable sections
		html.find(".hideable-items").click(event => {
			this._onHideSection(event, ".item-list", ".item-table");
		});
		html.find(".hideable-skills").click(event => {
			this._onHideSection(event, ".grid-container", ".skill-table");
		});

		html
			.find("[data-item-id].item .item-image")
			.click(event => this._onPostItem(event));

		// Toggle equip
		html.find(".item-toggle-equip").click(ev => {
			const f = $(ev.currentTarget);
			const itemId = f.parents(".item").attr("data-item-id");
			const active = f.hasClass("active");
			const equipped = !active;

			const item = this.actor.items.get(itemId);

			// if stowed, update stowage value in container as equipping an item
			// automatically removes it from stowage
			const stowedIn = item.system.stowedIn;
			if (stowedIn !== "") {
				let itemEncumbrance = parseInt(item.system.encumbrance) || 0;

				let originalStowageValue = this.actor.getEmbeddedDocument(
					"Item",
					stowedIn
				).system.stowage.value;

				let newStowage = originalStowageValue - itemEncumbrance;
				newStowage = newStowage < 0 ? 0 : newStowage;

				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: stowedIn,
						"system.stowage.value": newStowage,
					},
				]);
			}

			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.equipped": equipped,
					"system.stowedIn": "",
				},
			]);
		});

		html.find(".item-toggle-broken").click(ev => {
			const f = $(ev.currentTarget);
			const itemId = f.parents(".item").attr("data-item-id");
			const active = f.hasClass("active");
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.broken": !active,
				},
			]);
		});

		html.find(".trait-selector").click(ev => this._onTraitSelector(ev));

		html.find(".item-create").click(ev => this._onItemCreate(ev));

		html.find(".item-edit").click(ev => {
			const itemId = $(ev.currentTarget).parents(".item").attr("data-item-id");
			const item = this.actor.items.get(itemId);

			return item.sheet.render(true);
		});

		html.find(".add-gold").click(() => {
			const updateActorData = {};
			updateActorData["system.resources.gold.value"] =
				this.actor.system.resources.gold.value + 1;
			this.actor.update(updateActorData);
		});

		html.find(".subtract-gold").click(() => {
			const updateActorData = {};
			if (this.actor.system.resources.gold.value <= 0) {
				return;
			}
			updateActorData["system.resources.gold.value"] =
				this.actor.system.resources.gold.value - 1;
			this.actor.update(updateActorData);
		});

		html.find(".consumable-increase").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.uses.value": Number(item.system.uses.value) + 1,
				},
			]);
		});

		html.find(".consumable-decrease").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			if (Number(item.system.uses.value) > 0) {
				this.actor.updateEmbeddedDocuments("OwnedItem", [
					{
						_id: itemId,
						"system.uses.value": Number(item.system.uses.value) - 1,
					},
				]);
			}
		});
		html.find(".mount-increase-pass").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.passengers.value":
						Number(item.system.passengers.value) + 1,
				},
			]);
		});

		html.find(".mount-decrease-pass").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			if (Number(item.system.passengers.value) > 0) {
				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.passengers.value":
							Number(item.system.passengers.value) - 1,
					},
				]);
			}
		});
		html.find(".item-increase-quantity").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			this.actor.updateEmbeddedDocuments("Item", [
				{
					_id: itemId,
					"system.quantity": Number(item.system.quantity) + 1,
				},
			]);

			// if stowed, update stowage value in container
			const stowedIn = item.system.stowedIn;
			if (stowedIn && stowedIn !== "") {
				let itemEncumbrance = parseInt(item.system.encumbrance) || 0;

				let originalStowageValue = this.actor.getEmbeddedDocument(
					"Item",
					stowedIn
				).system.stowage.value;

				let newStowage = originalStowageValue + itemEncumbrance;

				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: stowedIn,
						"system.stowage.value": newStowage,
					},
				]);
			}
		});

		html.find(".item-decrease-quantity").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);
			if (Number(item.system.quantity) > 0) {
				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.quantity": Number(item.system.quantity) - 1,
					},
				]);

				// if stowed, update stowage value in container
				const stowedIn = item.system.stowedIn;
				if (stowedIn && stowedIn !== "") {
					let itemEncumbrance = parseInt(item.system.encumbrance) || 0;

					let originalStowageValue = this.actor.getEmbeddedDocument(
						"Item",
						stowedIn
					).system.stowage.value;

					let newStowage = originalStowageValue - itemEncumbrance;
					newStowage = newStowage < 0 ? 0 : newStowage;

					this.actor.updateEmbeddedDocuments("Item", [
						{
							_id: stowedIn,
							"system.stowage.value": newStowage,
						},
					]);
				}
			}
		});

		html.find(".item-decrease-uses").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");

			const item = this.actor.getEmbeddedDocument("Item", itemId);

			let uses = Number(item.system.uses.value);

			if (uses > 0) {
				uses -= 1;

				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.uses.value": uses,
					},
				]);
			}
		});

		html.find(".item-increase-uses").click(event => {
			const itemId = $(event.currentTarget)
				.parents(".item")
				.attr("data-item-id");
			const item = this.actor.getEmbeddedDocument("Item", itemId);

			let maxUses = parseInt(item.system.uses.max);

			if (isNaN(maxUses) || item.system.uses.value < maxUses) {
				this.actor.updateEmbeddedDocuments("Item", [
					{
						_id: itemId,
						"system.uses.value": Number(item.system.uses.value) + 1,
					},
				]);
			}
		});

		html.find(".item-delete").click(event => {
			event.preventDefault();

			const li = $(event.currentTarget).parents(".item");
			const itemId = li.attr("data-item-id");

			this._onItemDelete(itemId);
		});

		html.find(".item-stowage-view").mouseup(event => this._onSendItem(event));

		html.find(".fa-dice-d20.rollable").click(event => {
			this._onRollSkillCheck(event);
		});

		html.find(".skill-name.rollable").click(event => {
			this._onRollSkillCheck(event);
		});

		html
			.find(".wounds")
			.on("click contextmenu", this._onClickWounded.bind(this));

		this._contextMenu(html);

		// Handle default listeners last so system listeners are triggered first
		super.activateListeners(html);
	}

	async _onApplyDamage(event) {
		event.preventDefault();
		event.stopPropagation();
		return new conan.apps.ApplyDamage({targets: [this.actor]}).render(true);
	}

	async _onClickAttack(event) {
		event.preventDefault();
		event.stopPropagation();
		const f = $(event.currentTarget);
		const itemId = f.parents(".item").attr("data-item-id");
		this.actor._executeAttack(itemId);
	}

	async _onClickDamage(event) {
		event.preventDefault();
		event.stopPropagation();
		const f = $(event.currentTarget);
		const itemId = f.parents(".item").attr("data-item-id");
		this._executeDamage(event, itemId);
	}

	async _onClickSoak(event) {
		event.preventDefault();
		const f = $(event.currentTarget);
		const itemId = f.parents(".item").attr("data-item-id");
		const shieldItem = this.actor.items.get(itemId);
		shieldItem.triggerSoakRoll();
	}

	_addConditionData(data) {
		data.conditions = foundry.utils.duplicate(CONFIG.CONAN.statusEffects);
		for (const condition of data.conditions) {
			const existing = this.actor.effects.find(
				e => e.statuses.has(condition.id)
			);

			if (existing) {
				condition.value = existing.flags.conan2d20.value;
				condition.existing = true;
			}
			else {
				condition.value = 0;
			}

			if (condition.flags.conan2d20.value === null) {
				condition.boolean = true;
			}
		}
	}

	_contextMenu(html) {
		ContextMenu.create(this, html, ".item", this._getItemContextOptions());
	}

	async _onClickWounded(event) {
		event.preventDefault();
		const field = $(event.currentTarget).parent().attr("data-target");
		const icon = $(event.currentTarget).attr("data-target");

		const actorData = foundry.utils.duplicate(this.actor);
		const dot = foundry.utils.getProperty(actorData, field);

		if (event.type === "click") {
			foundry.utils.setProperty(actorData, field, "wounded");
			foundry.utils.setProperty(actorData, icon, "fas fa-skull");
		}
		else if (event.type === "contextmenu") {
			if (dot === "wounded") {
				foundry.utils.setProperty(actorData, field, "treated");
				foundry.utils.setProperty(actorData, icon, "fas fa-star-of-life");
			}
			else if (dot === "treated") {
				foundry.utils.setProperty(actorData, field, "healed");
				foundry.utils.setProperty(actorData, icon, "far fa-circle");
			}
		}
		this.actor.update(actorData);
	}

	_getHeaderButtons() {
		const buttons = super._getHeaderButtons();

		if (this.actor.type !== "transport") {
			// Only have the Apply Damage button available on Token sheets, or
			// sheets with linked data
			//
			if (this.actor.isToken || this.actor.prototypeToken.actorLink) {
				buttons.unshift({
					class: "apply-damage",
					icon: "fa-solid fa-droplet",
					label: "Apply Damage",
					onclick: event => this._onApplyDamage(event),
				});
			}
		}

		return buttons;
	}

	_getItemContextOptions() {
		const me = this;

		const canEdit = function(li) {
			let result = false;
			const itemId = li.data("itemId");

			if (game.user.isGM) {
				result = true;
			}
			else {
				result = me.actor.items.find(item => item._id === itemId)
					? true
					: false;
			}

			return result;
		};

		return [
			{
				name: game.i18n.localize("CONAN.editItemTitle"),
				icon: "<i class=\"fas fa-edit\"></i>",
				condition: li => canEdit(li),
				callback: li => {
					const itemId = li.data("itemId");
					const item = this.actor.items.get(itemId);
					return item.sheet.render(true);
				},
			},
			{
				name: game.i18n.localize("CONAN.deleteItemTitle"),
				icon: "<i class=\"fas fa-trash\"></i>",
				condition: li => canEdit(li),
				callback: li => {
					const itemId = li.data("itemId");
					this._onItemDelete(itemId);
				},
			},
		];
	}

	async _onDropItem(event, data) {
		if ( !this.actor.isOwner ) return false;

		const item = await Item.implementation.fromDropData(data);
		const itemData = item.toObject();

		if (item.parent !== null) {
			if (item.parent.isOwner) item.delete();
		}

		return this._onDropItemCreate(itemData);
	}

	_onTraitSelector(event) {
		event.preventDefault();
		const a = $(event.currentTarget);
		const options = {
			name: a.parents("li").attr("for"),
			title: a.parent().parent().siblings("h4").text().trim(),
			choices: CONFIG.CONAN[a.attr("data-options")],
			hasValues: a.attr("data-has-values") === "true",
			allowEmptyValues: a.attr("data-allow-empty-values") === "true",
		};
		new conan.apps.TraitSelector(this.actor, options).render(true);
	}

	_onHideSection(event, holdingParent, toHide) {
		event.preventDefault();

		const hideableTable = $(event.currentTarget)
			.parentsUntil(holdingParent)
			.next(toHide);

		const iconElement = $(event.currentTarget).find("i");

		const hideableTableId = hideableTable.attr("data-hideable-table-id");

		if (this._hiddenTablesLut[hideableTableId]) {
			this._hiddenTablesLut[hideableTableId] =
				!this._hiddenTablesLut[hideableTableId];
		}
		else {
			this._hiddenTablesLut[hideableTableId] = true;
		}

		if (this._hiddenTablesLut[hideableTableId]) {
			hideableTable.slideUp(200);
		}
		else {
			hideableTable.slideDown(200);
		}
		iconElement.toggleClass("fa-caret-down");
		iconElement.toggleClass("fa-caret-right");
	}

	async _onItemCreate(event) {
		event.preventDefault();
		const header = event.currentTarget;
		const data = foundry.utils.duplicate(header.dataset);
		if (data.type === "talent") {
			data.name = `New ${data.talentType.capitalize()} ${data.type.capitalize()}`;
			foundry.utils.mergeObject(data, {"system.talentType": data.talentType});
		}
		else if (data.type === "action") {
			data.name = `New ${data.actionType.capitalize()}`;
			foundry.utils.mergeObject(data, {"system.actionType": data.actionType});
		}
		else if (data.type === "npcaction") {
			if (data.actionType === "doom") {
				data.name = `New ${game.i18n.localize("CONAN.doomSpendHeader")}`;
			}
			else if (data.actionType === "abilities") {
				data.name = `New ${game.i18n
					.localize("CONAN.specialAbilityHeader")
					.capitalize()}`;
			}
			foundry.utils.mergeObject(data, {"system.actionType": data.actionType});
		}
		else if (data.type === "npcattack") {
			data.name = `New ${game.i18n
				.localize("CONAN.attackHeader")
				.capitalize()}`;
			foundry.utils.mergeObject(data, {"system.actionType": data.actionType});
		}
		else {
			data.name = `New ${data.type.capitalize()}`;
		}
		const [newItem] = await this.actor.createEmbeddedDocuments("Item", [data]);
		newItem.sheet.render(true);
	}

	_onItemDelete(itemId) {
		const itemData = this.actor.getEmbeddedDocument("Item", itemId);

		renderTemplate(
			"systems/conan2d20/templates/dialog/delete-item-confirm.hbs",
			{name: itemData.name}
		).then(html => {
			new Dialog({
				title: game.i18n.localize("CONAN.Dialog.ConfirmItemDeletion.title"),
				content: html,
				buttons: {
					Yes: {
						icon: "<i class=\"fa fa-check\"></i>",
						label: "Yes",
						callback: async () => {
							await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
						},
					},
					Cancel: {
						icon: "<i class=\"fa fa-times\"></i>",
						label: "Cancel",
					},
				},
				default: "Yes",
			}).render(true);
		});
	}

	async _onSendItem(event, type) {
		event.preventDefault();
		const li = $(event.currentTarget).parents(".item");
		const itemId = li.attr("data-item-id");
		const item = this.actor.getEmbeddedDocument("Item", itemId);

		const destinations = game.actors.filter(
			a => a._id !== this.actor._id
				&& a.permission === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER
		);

		if (destinations.length > 0) {
			new conan.apps.SendItem({
				actor: this.actor,
				destinations,
				item,
			}).render(true);
		}
		else {
			ui.notifications.warn(
				game.i18n.localize("CONAN.sendItemNoDestinationsAvailable")
			);
		}
	}

	_onPostItem(event) {
		event.preventDefault();

		const itemId = $(event.currentTarget).parents(".item").attr("data-item-id");
		const item = this.actor.getEmbeddedDocument("Item", itemId);
		item.postItem(event);
	}

	_onRollSkillCheck(event) {
		event.preventDefault();

		const skill = $(event.currentTarget)
			.parents(".skill-entry-name")
			.attr("data-skill");

		this.actor._rollSkillCheck(skill);
	}

	async _onItemSummary(li) {
		const localize = game.i18n.localize.bind(game.i18n);
		const itemId = li.attr("data-item-id");
		const actionIndex = li.attr("data-action-index");

		let item;

		try {
			item = this.actor.getEmbeddedDocument("Item", itemId);
			if (!item.type) return;
		}
		catch(error) {
			conan.logger.error(error);
			return;
		}

		// Toggle summary
		if (li.hasClass("expanded")) {
			const summary = li.children(".item-summary");
			summary.slideUp(200, () => summary.remove());
		}
		else {
			let div;
			const chatData = await item.getChatData({secrets: this.actor.isOwner});
			if (!actionIndex) {
				div = $(
					`<div class="item-summary"><div class="item-description">${chatData.description.value}</div></div>`
				);
			}
			else {
				const flavor = conan.utils.getAttackDescription(item).description;
				div = $(
					`<div class="item-summary"><div class="item-description">${localize(
						flavor
					)}</div></div>`
				);
			}
			const details = $("<div class=\"item-details\"><br></div>");
			const props = $("<div class=\"item-properties tags\"></div>");

			if (chatData.itemDetails) {
				chatData.itemDetails.forEach(p => {
					const concat = `<div class="chat-item-detail"><b>${localize(
						p.label
					)}:</b> ${localize(p.detail)} </div>`;
					details.append(concat);
				});
				div.append(details);
			}
			div.append("</br>");
			if (chatData.properties) {
				chatData.properties
					.filter(p => typeof p === "string")
					.forEach(p => {
						props.append(
							`<span class="tag tag_secondary" data-tooltip="${localize(p)}">${localize(p)}</span>`
						);
					});
			}
			div.append(props);
			// append qualities (only style the tags if they contain description data)
			if (chatData.qualities && chatData.qualities.length) {
				chatData.qualities.forEach(p => {
					if (p.description) {
						props.append(
							`<span class="tag" data-tooltip="${localize(p.description)}">${localize(
								p.label
							)}</span>`
						);
					}
					else {
						props.append(`<span class="tag">${localize(p.label)}</span>`);
					}
				});
			}

			const buttons = $("<div class=\"item-buttons\"></div>");

			if (this.actor.canUseItemType(item.type)) {
				switch (item.type) {
					case "weapon":
						buttons.append(
							`<button class="tag weapon_damage execute-attack" data-action="weaponAttack">${localize(
								"CONAN.attackRollLabel"
							)}</button>`
						);
						buttons.append(
							`<button class="tag weapon_damage execute-damage" data-action="weaponDamage">${localize(
								"CONAN.damageRollLabel"
							)}</button>`
						);
						if (item.getSoak() > 0) {
							buttons.append(
								`<button class="tag weapon_soak execute-soak" data-action="shieldSoak">${localize(
									"CONAN.shieldSoakRollLabel"
								)}</button>`
							);
						}
						break;
					case "display":
						buttons.append(
							`<button class="tag weapon_damage execute-attack" data-action="weaponAttack">${localize(
								"CONAN.attackRollLabel"
							)}</button>`
						);
						buttons.append(
							`<button class="tag display_damage execute-damage" data-action="weaponDamage">${localize(
								"CONAN.damageRollLabel"
							)}</button>`
						);
						break;
					case "kit":
						if (chatData.hasCharges) {
							buttons.append(
								`<button class="use-kit" data-action="useKit">${localize(
									"CONAN.kitUseLabel"
								)}</button>`
							);
						}
						break;
					case "npcattack":
						buttons.append(
							`<button class="tag npc_damage execute-attack" data-action="npcAttack">${localize(
								"CONAN.attackRollLabel"
							)}</button>`
						);
						buttons.append(
							`<button class="tag npc_damage execute-damage" data-action="npcDamage">${localize(
								"CONAN.damageRollLabel"
							)}</button>`
						);
						if (item.getSoak() > 0) {
							buttons.append(
								`<button class="tag weapon_soak execute-soak" data-action="shieldSoak">${localize(
									"CONAN.shieldSoakRollLabel"
								)}</button>`
							);
						}
						break;
					case "spell":
						buttons.append(
							`<button class="tag spell_attack execute-attack" data-action="spellCast">${localize(
								"CONAN.spellCastLabel"
							)}</button>`
						);
						break;
					default:
						break;
				}
			}

			div.append(buttons);

			buttons.find("button").click(ev => {
				ev.preventDefault();
				ev.stopPropagation();

				// which function gets called depends on the type of button stored in
				// the dataset attribute action
				switch (ev.target.dataset.action) {
					case "useKit": {
						this.actor.useKit(itemId);
						break;
					}
					case "weaponDamage": {
						this._executeDamage(ev, itemId);
						break;
					}
					case "weaponAttack": {
						this.actor._executeAttack(itemId);
						break;
					}
					case "shieldSoak": {
						const shieldItem = this.actor.items.get(itemId);
						shieldItem.triggerSoakRoll();
						break;
					}
					case "spellCast": {
						const spell = this.actor.items.get(itemId);
						const skill = "sor";

						this.actor._rollSkillCheck(skill, spell);

						break;
					}
					case "npcDamage": {
						this._executeDamage(ev, itemId);
						break;
					}
					case "npcAttack": {
						this.actor._executeAttack(itemId);
						break;
					}
					default:
						break;
				}
			});

			li.append(div.hide());
			div.slideDown(200);
		}
		li.toggleClass("expanded");
	}

	_sortAllItems(context) {
		// Pre-sort all items so that when they are filtered into their relevant
		// categories they are already sorted alphabetically (case-sensitive)
		const allItems = [];
		(context.items ?? []).forEach(item => allItems.push(item));

		allItems.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		return allItems;
	}

	_executeDamage(ev, itemId) {
		const weapon = this.actor.getEmbeddedDocument("Item", itemId);

		weapon.triggerDamageRoll();
	}
}

export default ConanBaseActorSheet;
