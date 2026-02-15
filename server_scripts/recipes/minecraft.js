const scaffoldingVariants = [
	{ material: "minecraft:string", id:"string" },
	{ material: "farmersdelight:canvas", id:"canvas" }
]

ServerEvents.recipes(event => {
	event.shaped('minecraft:anvil', [
		'IBI',
		' I ',
		'SSS'
	], {
		B: 'minecraft:iron_block',
		I: 'minecraft:iron_ingot',
		S: '#forge:stone'
	});

	event.shaped('minecraft:lodestone', [
		'CCC',
		'CIC',
		'CCC'
	], {
		C: "minecraft:chiseled_stone_bricks",
		I: 'minecraft:iron_ingot'
	});

	event.shapeless('2x minecraft:string', [
		'minecraft:cobweb',
		'#notreepunching:knives'
	]).damageIngredient('#notreepunching:knives');

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

