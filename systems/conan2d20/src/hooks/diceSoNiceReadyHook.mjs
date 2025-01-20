export function diceSoNiceReadyHook(dice3d) {
	console.log(`${SYSTEM_NAME} | Running diceSoNiceReady hook`);

	dice3d.addSystem(
		{id: "conan2d20black", name: "Conan 2d20 - Black"},
		"default"
	);
	dice3d.addSystem({id: "conan2d20white", name: "Conan 2d20 - White"}, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"systems/conan2d20/assets/dice/phoenix/phoenix-black.png",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
		],
		/* eslint-disable-next-line no-sparse-arrays */
		bumpMaps: [
			"systems/conan2d20/assets/dice/phoenix/phoenixBump.png",
			...Array(19),
		],
		system: "conan2d20black",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"systems/conan2d20/assets/dice/phoenix/phoenix-white.png",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
		],
		/* eslint-disable-next-line no-sparse-arrays */
		bumpMaps: [
			"systems/conan2d20/assets/dice/phoenix/phoenixBump.png",
			...Array(19),
		],
		system: "conan2d20white",
	});

	dice3d.addDicePreset({
		type: "dp",
		labels: [
			"systems/conan2d20/assets/dice/combat/black/Combat1.png",
			"systems/conan2d20/assets/dice/combat/black/Combat2.png",
			"systems/conan2d20/assets/dice/combat/black/Combat3.png",
			"systems/conan2d20/assets/dice/combat/black/Combat4.png",
			"systems/conan2d20/assets/dice/combat/black/Combat5.png",
			"systems/conan2d20/assets/dice/combat/black/Combat6.png",
		],
		bumpMaps: [
			"systems/conan2d20/assets/dice/combat/black/Combat1.png",
			"systems/conan2d20/assets/dice/combat/black/Combat2.png",
			"systems/conan2d20/assets/dice/combat/black/Combat3.png",
			"systems/conan2d20/assets/dice/combat/black/Combat4.png",
			"systems/conan2d20/assets/dice/combat/black/Combat5.png",
			"systems/conan2d20/assets/dice/combat/black/Combat6.png",
		],
		system: "conan2d20black",
	});

	dice3d.addDicePreset({
		type: "dp",
		labels: [
			"systems/conan2d20/assets/dice/combat/white/Combat1.png",
			"systems/conan2d20/assets/dice/combat/white/Combat2.png",
			"systems/conan2d20/assets/dice/combat/white/Combat3.png",
			"systems/conan2d20/assets/dice/combat/white/Combat4.png",
			"systems/conan2d20/assets/dice/combat/white/Combat5.png",
			"systems/conan2d20/assets/dice/combat/white/Combat6.png",
		],
		bumpMaps: [
			"systems/conan2d20/assets/dice/combat/white/Combat1.png",
			"systems/conan2d20/assets/dice/combat/white/Combat2.png",
			"systems/conan2d20/assets/dice/combat/white/Combat3.png",
			"systems/conan2d20/assets/dice/combat/white/Combat4.png",
			"systems/conan2d20/assets/dice/combat/white/Combat5.png",
			"systems/conan2d20/assets/dice/combat/white/Combat6.png",
		],
		system: "conan2d20white",
	});
}
