const removed_create_recipes = [
	'create:crafting/kinetics/cogwheel',
	'create:crafting/kinetics/large_cogwheel',
	'create:crafting/kinetics/large_cogwheel_from_little'
]

ServerEvents.recipes(event => {
	removed_create_recipes.forEach(recipe => {
		event.remove(recipe)
	})
})

ServerEvents.recipes(event => {
	const saw = '#notreepunching:saws'
	event.custom({
		type: "overgeared:alloy_smelting",
		ingredients: [
			{ item: "minecraft:copper_ingot" },
			{ item: "create:zinc_ingot" }
		],
		result: {
			item: "create:brass_ingot",
			count: 1
		},
		processingTime: 200
	});

	event.shapeless('create:cogwheel', [
		'create:shaft',
		'#minecraft:planks',
		'minecraft:honeycomb',
		saw
	]).damageIngredient(saw);

	event.shapeless('create:large_cogwheel', [
		'create:shaft',
		'2x #minecraft:planks',
		'minecraft:honeycomb',
		saw
	]).damageIngredient(saw);
	event.shapeless('create:large_cogwheel', [
		'create:cogwheel',
		'#minecraft:planks',
		saw
	]).damageIngredient(saw);
});