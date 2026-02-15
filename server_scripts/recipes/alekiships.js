ServerEvents.recipes(event => {
	event.shaped('alekiships:oarlock', [
		' I ',
		'III'
	], {
		I: "minecraft:copper_ingot"
	});

	event.shaped('alekiships:cleat', [
		'III',
		'N N'
	], {
		N: "#forge:nuggets/copper",
		I: "minecraft:copper_ingot"
	});

	event.shaped('alekiships:anchor', [
		'NIN',
		' I ',
		'IBI'
	], {
		N: "#forge:nuggets/copper",
		I: "minecraft:copper_ingot",
		B: "minecraft:copper_block"
	});

	event.shaped('alekiships:cannon', [
		'BBB',
		'SS ',
		'N N'
	], {
		N: "#forge:nuggets/copper",
		B: "minecraft:copper_block",
		S: "#minecraft:wooden_slabs"
	});

	event.shapeless('alekiships:cannonball', [
		'minecraft:copper_ingot',
		'minecraft:paper',
		'minecraft:gunpowder'
	])
});

