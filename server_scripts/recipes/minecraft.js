const scaffoldingVariants = [
	{ material: "minecraft:string", id:"string" },
	{ material: "farmersdelight:canvas", id:"canvas" }
]

ServerEvents.recipes(event => {
	// event.shapeless('minecraft:iron_sword', [
	// 	'overgeared:iron_sword_blade',
	// 	'minecraft:stick'
	// ]);
	// event.shapeless('minecraft:iron_pickaxe', [
	// 	'overgeared:iron_pickaxe_head',
	// 	'minecraft:stick'
	// ]);
	// event.shapeless('minecraft:iron_axe', [
	// 	'overgeared:iron_axe_head',
	// 	'minecraft:stick'
	// ]);
	// event.shapeless('minecraft:iron_shovel', [
	// 	'overgeared:iron_shovel_head',
	// 	'minecraft:stick'
	// ]);
	// event.shapeless('minecraft:iron_hoe', [
	// 	'overgeared:iron_hoe_head',
	// 	'minecraft:stick'
	// ]);

	event.shaped('minecraft:anvil', [
		'IBI',
		'AIA',
		'SSS'
	], {
		B: 'minecraft:iron_block',
		I: 'minecraft:iron_ingot',
		S: '#forge:stone',
		A: 'minecraft:airx'
	});

	event.shapeless('2x minecraft:string', [
		'minecraft:cobweb',
		'#notreepunching:knives'
	]);

	scaffoldingVariants.forEach(variant => {
		event.shaped('6x minecraft:scaffolding', [
			'SCS',
			'S S',
			'S S'
		], {
			C: variant.material,
			S: "minecraft:stick"
		}).id(`kubejs:scaffolding_${variant.id}`);
	})

});

