export default function listenOnSocket() {

	game.socket.on("system.conan2d20", event => {

		if (event.type === "createCharacter") {
			// only the GM should handle this event
			if (!game.user.isGM) return;

			conan.apps.CharacterCreator.createActorFromData(
				event.payload.characterData,
				event.payload.characterItems,
				event.payload.userId
			);
		}

		if (event.type === "openNewCharacter") {
			if (event.payload.userId === game.userId) {
				const actor = game.actors.get(event.payload.actorId);

				if (actor) actor.sheet.render(true);

				return ui.notifications.info(
					game.i18n.localize("CONAN.CharacterCreator.Created.message"),
					{permanent: true}
				);
			}
		}

		if (event.type === "setCounter" && game.user.isGM) {
			conan.apps.Counter.setCounter(event.payload.value, event.payload.type);
		}

		if (event.type === "updateCounter") {
			conan.counter.render(true);
		}

	});

}
