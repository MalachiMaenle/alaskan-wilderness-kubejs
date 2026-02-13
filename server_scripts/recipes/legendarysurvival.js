ServerEvents.recipes(event => {
	event.campfireCooking('legendarysurvivaloverhaul:purified_water_bottle', 'minecraft:potion')
		.xp(0.1)
		.cookingTime(600)
		.id('kubejs:purified_water_on_campfire'
		);

	event.shaped('legendarysurvivaloverhaul:heater', [
		' S ',
		'SFS',
		'BCB'
	], {
		S: 'overgeared:steel_ingot',
		B: 'overgeared:steel_block',
		C: "minecraft:coal_block",
		F: 'minecraft:blast_furnace'
	});
})