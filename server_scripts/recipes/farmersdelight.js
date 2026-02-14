const potVariants = [
	{ metal: 'minecraft:iron_ingot', bucket: 'minecraft:water_bucket', id: 'iron_water' },
	{ metal: 'minecraft:copper_ingot', bucket: 'minecraft:water_bucket', id: 'copper_water' },
	{ metal: 'minecraft:iron_ingot', bucket: 'notreepunching:ceramic_water_bucket', id: 'iron_ceramic' },
	{ metal: 'minecraft:copper_ingot', bucket: 'notreepunching:ceramic_water_bucket', id: 'copper_ceramic' }
]
const stoveVariants = [
	{ metal: 'minecraft:iron_ingot', id: 'iron' },
	{ metal: 'minecraft:copper_ingot', id: 'copper' }
]

ServerEvents.recipes(event => {
	potVariants.forEach(variant => {
		event.shaped('farmersdelight:cooking_pot', [
			'BSB',
			'IWI',
			'III'
		], {
			W: variant.bucket,
			I: variant.metal,
			S: 'minecraft:stick',
			B: 'minecraft:brick'
		}).id(`kubejs:cooking_pot_${variant.id}`);
	})

	stoveVariants.forEach(variant => {
		event.shaped('farmersdelight:stove', [
			'III',
			'B B',
			'BMB'
		], {
			B: 'minecraft:bricks',
			I: variant.metal,
			M: 'minecraft:magma_block'
		}).id(`kubejs:stove_${variant.id}`);
	})
});

BlockEvents.rightClicked("salt_cauldron", (event) => {
	if (event.item.id == "create:wheat_flour") {
		event.block.popItem('farmersdelight:wheat_dough');
		event.item.count -= 1;
		world.playSound(null, block.x, block.y, block.z, 'minecraft:item.craft', 1.0, 1.0);
	}
});