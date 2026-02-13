const plates = [
	{ ingot: "minecraft:copper_ingot", plate: "overgeared:copper_plate", count: 1 },
	{ ingot: "minecraft:iron_ingot", plate: "overgeared:iron_plate", count: 1 },
	{ ingot: "overgeared:steel_ingot", plate: "overgeared:steel_plate", count: 1 },

	{ ingot: "minecraft:gold_ingot", plate: "create:golden_sheet", count: 1 },

	{ ingot: "overgeared:copper_plate", plate: "create:copper_sheet", count: 2 },
	{ ingot: "overgeared:iron_plate", plate: "create:iron_sheet", count: 2 },

	{ ingot: "create:brass_ingot", plate: "create:brass_sheet", count: 1 },
]
ServerEvents.recipes(event => {
	plates.forEach(plate => {
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
				'##'
			],
			key: {
				'#': {
					item: plate.ingot
				}
			},
			result: {
				item: plate.plate,
				count: plate.count
			}
		})
	});
	event.custom({
		type: 'overgeared:forging',
		category: 'misc',
		hammering: 4,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "iron",
		pattern: [
			'DD',
			'II'
		],
		key: {
			'D': { item: "minecraft:diamond" },
			'I': { item: "overgeared:steel_plate" }
		},
		result: {
			item: "hot_iron:diamond_plate"
		}
	});

	// #region iron armor
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 3,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:iron_plate" },
			"L": { item: "minecraft:leather_helmet" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PPP",
			"PLP"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "minecraft:iron_helmet"
		},
		show_notification: true,
		tier: "stone"
	}).id(`kubejs:iron_helmet`);
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 5,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:iron_plate" },
			"S": { item: "hot_iron:iron_armor_strap" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"S S",
			"PPP",
			"PPP"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "minecraft:iron_chestplate"
		},
		show_notification: true,
		tier: "stone"
	}).id(`kubejs:iron_chestplate`);
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 4,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:iron_plate" },
			"S": { item: "hot_iron:iron_armor_strap" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"SPS",
			"P P",
			"P P"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "minecraft:iron_leggings"
		},
		show_notification: true,
		tier: "stone"
	}).id(`kubejs:iron_leggings`);
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 3,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:iron_plate" },
			"S": { item: "hot_iron:iron_armor_strap" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"S S",
			"P P"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "minecraft:iron_boots"
		},
		show_notification: true,
		tier: "stone"
	}).id(`kubejs:iron_boots`);
	// #endregion

	// #region steel armor
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 3,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:steel_plate" },
			"L": { item: "minecraft:leather_helmet" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PPP",
			"PLP"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "overgeared:steel_helmet"
		},
		show_notification: true,
		tier: "iron"
	}).id(`kubejs:steel_helmet`);
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 5,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:steel_plate" },
			"L": { item: "minecraft:leather_chestplate" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PLP",
			"PPP",
			"PPP"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "overgeared:steel_chestplate"
		},
		show_notification: true,
		tier: "iron"
	}).id(`kubejs:steel_chestplate`);
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 4,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:steel_plate" },
			"L": { item: "minecraft:leather_leggings" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PPP",
			"PLP",
			"P P"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "overgeared:steel_leggings"
		},
		show_notification: true,
		tier: "iron"
	}).id(`kubejs:steel_leggings`);
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 3,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:steel_plate" },
			"L": { item: "minecraft:leather_boots" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PLP",
			"P P"
		],
		quality_difficulty: "none",
		requires_blueprint: false,
		result: {
			item: "overgeared:steel_boots"
		},
		show_notification: true,
		tier: "iron"
	}).id(`kubejs:steel_boots`);
	// #endregion
})
