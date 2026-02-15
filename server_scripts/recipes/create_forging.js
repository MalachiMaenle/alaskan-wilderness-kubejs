ServerEvents.recipes(event => {
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			'GG',
			'GC',
			' S'
		],
		key: {
			'G': { item: 'create:golden_sheet' },
			'C': { item: 'create:cogwheel' },
			'S': { item: 'minecraft:stick' }
		},
		result: {
			item: "create:wrench"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			'A'
		],
		key: {
			'A': { item: 'create:andesite_alloy' }
		},
		result: {
			item: "create:shaft"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			' P ',
			'PAP',
			' P '
		],
		key: {
			'P': { tag: 'forge:plates/iron' },
			'A': { item: 'create:andesite_alloy' }
		},
		result: {
			item: "create:propeller"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			' A ',
			'PAP',
			'PPP'
		],
		key: {
			'P': { tag: 'forge:plates/iron' },
			'A': { item: 'create:andesite_alloy' }
		},
		result: {
			item: "create:whisk"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			' A ',
			'PPP',
			' P '
		],
		key: {
			'P': { tag: 'forge:plates/brass' },
			'A': { item: 'create:andesite_alloy' }
		},
		result: {
			item: "create:brass_hand"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			'Q',
			'P'
		],
		key: {
			'P': { tag: 'forge:plates/iron' },
			'Q': { item: 'create:polished_rose_quartz' }
		},
		result: {
			item: "create:electron_tube"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			' R ',
			'PPP',
			' D '
		],
		key: {
			'R': { item: 'minecraft:lightning_rod' },
			'P': { tag: 'forge:plates/copper' },
			'D': { item: 'minecraft:redstone' }
		},
		result: {
			item: "create:transmitter"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			' S ',
			'GPG'
		],
		key: {
			'G': { tag: 'forge:glass' },
			'P': { tag: 'forge:plates/gold' },
			'S': { tag: 'forge:strings' }
		},
		result: {
			item: "create:goggles"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			'CIC',
			'IPI',
			'CIC'
		],
		key: {
			'C': { item: 'create:cogwheel' },
			'P': { tag: 'forge:plates/gold' },
			'I': { item: 'minecraft:iron_ingot' }
		},
		result: {
			item: "create:incomplete_precision_mechanism"
		}
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			'LCL',
			'LIL',
			'LCL'
		],
		key: {
			'C': { item: 'create:cogwheel' },
			'I': { item: 'create:incomplete_precision_mechanism' },
			'L': { item: 'create:large_cogwheel' }
		},
		result: {
			item: "create:precision_mechanism"
		}
	});
});

