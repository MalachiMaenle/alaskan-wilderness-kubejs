ServerEvents.recipes(event => {
	event.shaped('alekiships:oarlock', [
		'AAA',
		'AIA',
		'III'
	], {
		A: "minecraft:air",
		I: "minecraft:copper_ingot"
	});

	event.shaped('alekiships:cleat', [
		'AAA',
		'III',
		'NAN'
	], {
		A: "minecraft:air",
		N: "create:copper_nugget",
		I: "minecraft:copper_ingot"
	});

	event.shaped('alekiships:anchor', [
		'NIN',
		'AIA',
		'IBI'
	], {
		A: "minecraft:air",
		N: "create:copper_nugget",
		I: "minecraft:copper_ingot",
		B: "minecraft:copper_block"
	});

	event.shaped('alekiships:cannon', [
		'BBB',
		'SSA',
		'NAN'
	], {
		A: "minecraft:air",
		N: "create:copper_nugget",
		B: "minecraft:copper_block",
		S: "#minecraft:wooden_slabs",
	});

	event.shapeless('alekiships:cannonball', [
		'minecraft:copper_ingot',
		'minecraft:paper',
		'minecraft:gunpowder'
	])
});

