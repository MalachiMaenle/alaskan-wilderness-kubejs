ServerEvents.tags('item', event => {
    const spoilables = [
		"alexsmobs:maggot",
		"alexsmobs:banana",
		"alexsmobs:lobster_tail",
		"alexsmobs:cooked_lobster_tail",
		"alexsmobs:sopa_de_macaco",
		"alexsmobs:moose_ribs",
		"alexsmobs:cooked_moose_ribs",
		"alexsmobs:blobfish",
		"alexsmobs:fish_oil",
		"alexsmobs:cosmic_cod",
		"alexsmobs:rainbow_jelly",
		"alexsmobs:raw_catfish",
		"alexsmobs:cooked_catfish",
		"alexsmobs:flying_fish",
		"alexsmobs:terrapin_egg",
		"alexsmobs:caiman_egg"
    ];

    event.add('food_spoiling:spoilable', spoilables);

	event.add('food_spoiling:baked_goods', spoilables.filter(i =>
		i.includes('pie') || i.includes('cookie') || i.includes('cake') || i.includes('dough') || i.includes('baklava')
	));

	event.add('food_spoiling:cooked_products', spoilables.filter(i =>
		i.includes('cooked') || i.includes('grilled') || i.includes('roast') || i.includes('steak') || i.includes('stew') || i.includes('soup')
	));

	event.add('food_spoiling:eggs', spoilables.filter(i =>
		i.includes('egg')
	));

	event.add('food_spoiling:fish', spoilables.filter(i =>
		i.includes('cod') || i.includes('salmon') || i.includes('squid') || i.includes('fish') || i.includes('bass')
	));

	event.add('food_spoiling:fruits', spoilables.filter(i =>
		i.includes('melon') || i.includes('apple') || i.includes('berry') || i.includes('fruit') || i.includes('cantaloupe') || i.includes('jam') || i.includes('banana')
	));

	event.add('food_spoiling:grains', spoilables.filter(i =>
		i.includes('rice') || i.includes('wheat') || i.includes('pasta')
	));

	event.add('food_spoiling:has_bottle', spoilables.filter(i =>
		i.includes('bottle') || i.includes('juice') || i.includes('cocoa') || i.includes('cider') || i.includes('latte') || i.includes('milkshake')
	));

	event.add('food_spoiling:has_bowl', spoilables.filter(i =>
		i.includes('soup') || i.includes('stew') || i.includes('custard') || i.includes('broth') || i.includes('salad') || i.includes('block')
	));

	event.add('food_spoiling:raw_products', spoilables.filter(i =>
		i.includes('raw') || i.includes('dough') || i.includes('minced') || i.includes('uncooked')
	));

	event.add('food_spoiling:red_meat', spoilables.filter(i =>
		i.includes('beef') || i.includes('mutton') || i.includes('ham') || i.includes('bacon') || i.includes('venison') || i.includes('goat') || i.includes('bushmeat')
	));

	event.add('food_spoiling:roots', spoilables.filter(i =>
		i.includes('onion') || i.includes('pumpkin') || i.includes('cabbage') || i.includes('acorn')
	));

	event.add('food_spoiling:salted_products', spoilables.filter(i =>
		i.includes('salt')
	));

	event.add('food_spoiling:vegetables', spoilables.filter(i =>
		i.includes('tomato') || i.includes('cabbage') || i.includes('pumpkin') || i.includes('mushroom') || i.includes('nether_salad') || i.includes('mixed_salad') || i.includes('vegetable') || i.includes('cactus')
	));

	event.add('food_spoiling:white_meat', spoilables.filter(i =>
		i.includes('chicken') || i.includes('duck') || i.includes('lobster')
	));
})
