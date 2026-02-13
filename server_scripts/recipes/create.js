ServerEvents.recipes(event => {
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
});

