const plates = [
	{ ingot: "minecraft:copper_ingot", plate: "overgeared:copper_plate", count: 1 },
	{ ingot: "minecraft:iron_ingot", plate: "overgeared:iron_plate", count: 1 },
	{ ingot: "overgeared:steel_ingot", plate: "overgeared:steel_plate", count: 1 },

	{ ingot: "overgeared:copper_plate", plate: "create:copper_sheet", count: 1 },
	{ ingot: "overgeared:iron_plate", plate: "create:iron_sheet", count: 1 },

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
				'#'
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
		hammering: 3,
		has_quality: false,
		need_quenching: false,
		needs_minigame: false,
		show_notification: true,
		quality_difficulty: 'none',
		tier: "stone",
		pattern: [
			'###'
		],
		key: {
			'#': {
				item: "minecraft:gold_ingot"
			}
		},
		result: {
			item: "create:golden_sheet",
			count: 3
		}
	})

	// #region iron armor
	event.custom({
		type: "overgeared:forging",
		category: "armors",
		hammering: 3,
		has_polishing: false,
		has_quality: true,
		key: {
			"P": { item: "overgeared:iron_plate" },
			"C": { item: "overgeared:copper_helmet", "transfer_nbt": true },
			"L": { item: "minecraft:leather" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PLP",
			"PCP"
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
			"C": { item: "overgeared:copper_chestplate", "transfer_nbt": true },
			"L": { item: "minecraft:leather_chestplate" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PLP",
			"PCP",
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
			"C": { item: "overgeared:copper_leggings", "transfer_nbt": true },
			"L": { item: "minecraft:leather_leggings" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PLP",
			"PCP",
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
			"C": { item: "overgeared:copper_boots", "transfer_nbt": true },
			"L": { item: "minecraft:leather" }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"LCL",
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
			"I": { item: "minecraft:iron_helmet", "transfer_nbt": true }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PPP",
			"PIP"
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
			"I": { item: "minecraft:iron_chestplate", "transfer_nbt": true }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"P P",
			"PIP",
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
			"I": { item: "minecraft:iron_leggings", "transfer_nbt": true }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PPP",
			"PIP",
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
			"I": { item: "minecraft:iron_boots", "transfer_nbt": true }
		},
		minimum_quality: "poor",
		need_quenching: false,
		needs_minigame: false,
		pattern: [
			"PIP",
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
