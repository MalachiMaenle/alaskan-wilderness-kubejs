const plates = [
	{ ingot: "minecraft:copper_ingot", plate: "overgeared:copper_plate", count: 1 },
	{ ingot: "minecraft:iron_ingot", plate: "overgeared:iron_plate", count: 1 },
	{ ingot: "overgeared:steel_ingot", plate: "overgeared:steel_plate", count: 1 },

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
