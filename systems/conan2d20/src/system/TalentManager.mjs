export default class TalentManager {
	constructor(options={}) {
		this.ignoreCost = options.ignoreCost ?? false;

		this.actorKnownTalentsLut = {};
		this.actorAttributes = [];
		this.actorSkills = [];
		this.actorXp = 200;
	}

	async getAvailableTalentsForSkills(skills=[]) {
		const selectedTalents = new Collection();

		// If we haven't been given an Array of skills then just return an empty
		// collection
		if (!Array.isArray(skills)) return selectedTalents;

		const allSkillTalents = await conan.compendiums.skillTalents();
		for (const talent of allSkillTalents) {
			talent.system.multiRank = talent.system.rank.max > 1;
			talent.system.talentIdentifier =
				conan.utils.generateTalentIdentifier(talent);

			if (skills.includes(talent.system.linkedSkill)) {
				// Make sure we meet the requirements
				const meetsRequirements = await this._meetsRequirements(talent);

				if (meetsRequirements) {
					let rank = 1;

					if (Object.hasOwn(this.actorKnownTalentsLut, talent.system.talentIdentifier)) {
						const current = this.actorKnownTalentsLut[talent.system.talentIdentifier];
						rank = current + 1;
					}

					const discount = this.actorSkills[talent.system.linkedSkill].discount;
					const cost = talent.system.cost - discount;

					selectedTalents.set(talent._id, {item: talent, rank, cost});
				}
			}
		}

		return selectedTalents;
	}

	async getAvailableSkillTalents() {
		return await this.getAvailableTalentsForSkills(Object.keys(CONFIG.CONAN.skills));
	}

	async getPurchasableTalents() {
		const availableTalents = await this.getAvailableSkillTalents();

		const fortuneTalents = await conan.compendiums.fortuneTalents();
		for (const talent of fortuneTalents) {
			// Make sure we meet the requirements
			const meetsRequirements = await this._meetsRequirements(talent);

			if (meetsRequirements) {
				let rank = 1;
				if (Object.hasOwn(this.actorKnownTalentsLut, talent.system.talentIdentifier)) {
					const current = this.actorKnownTalentsLut[talent.system.talentIdentifier];
					rank = current + 1;
				}

				const cost = talent.system.cost;

				availableTalents.set(talent.id, {item: talent, rank, cost});
			}
		}

		return availableTalents;
	}

	async setActorAttributes(attributes) {
		this.actorAttributes = attributes;
	}

	async setActorSkills(skills) {
		this.actorSkills = skills;
		for (const key in this.actorSkills) {
			const skill = this.actorSkills[key];
			skill.discount = 25 * Number(skill.focus.value);
		}
	}

	async setActorXp(xp) {
		this.actorXp = xp;
	}

	async setKnownTalents(talents) {
		this.actorKnownTalentsLut = {};

		for (const talent of talents) {
			this.actorKnownTalentsLut[talent.identifier] = talent.rank;
		}
	}

	async _meetsRequirements(talent) {
		let requirementsMet = true;

		// First make sure that if the character already knows the talent that
		// they have not maxed it out
		const knownTalent = this.actorKnownTalentsLut[
			talent.system.talentIdentifier
		];

		if (knownTalent) {
			if (knownTalent >= talent.system.rank.max) {
				requirementsMet = false;
			}
		}

		for (const requirement of talent.system.requirements) {
			// If requirements are not met, no need to check further
			if (!requirementsMet) break;

			const type = requirement.type;
			switch (type) {
				case "expertise":
				case "focus":
					if (requirementsMet) {
						const skill = this.actorSkills[requirement.skill];
						requirementsMet = skill[type].value >= requirement.value;
					}
					break;
				case "talent":
					for (const required of requirement.talents) {
						const check = await fromUuid(required.uuid);

						if (check) {
							const known = this.actorKnownTalentsLut[
								check.system.talentIdentifier
							];

							requirementsMet = known
								? known >= required.rank
								: false;
						}
						else {
							requirementsMet = false;
						}

						if (!requirementsMet) break;
					}
					break;
			}
		}

		// Unless we've specifically been told to ignore to XP cost of the
		// Talent (during Character Creation mainly) then as a last check
		// ensure we have the XP funds to purchase it.
		//
		if (!this.ignoreCost) {
			const discount = talent.system.linkedSkill !== ""
				? this.actorSkills[talent.system.linkedSkill].discount
				: 0;

			if (talent.system.cost - discount > this.actorXp) requirementsMet = false;
		}

		return requirementsMet;
	}
}
