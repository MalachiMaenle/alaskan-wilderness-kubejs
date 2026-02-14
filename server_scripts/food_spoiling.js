ServerEvents.tags('item', event => {
    const spoilables = [
		'farmersdelight:cabbage',
		'farmersdelight:tomato',
        'farmersdelight:onion',
        'farmersdelight:rice_paicle',
		'farmersdelight:rice',
        'farmersdelight:fried_egg',
        'farmersdelight:milk_bottle',
        'farmersdelight:hot_cocoa',
        'farmersdelight:apple_cider',
        'farmersdelight:melon_juice',
        'farmersdelight:tomato_sauce',
        'farmersdelight:wheat_dough',
        'farmersdelight:raw_pasta',
        'farmersdelight:pumpkin_slice',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:minced_beef',
        'farmersdelight:beef_patty',
        'farmersdelight:chicken_cuts',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:bacon',
        'farmersdelight:cooked_bacon',
        'farmersdelight:cod_slice',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:salmon_slice',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:mutton_chops',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:ham',
        'farmersdelight:smoked_ham',
        'farmersdelight:pie_crust',
        'farmersdelight:apple_pie',
        'farmersdelight:sweet_berry_cheesecake',
        'farmersdelight:chocolate_pie',
        'farmersdelight:cake_slice',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:honey_cookie',
        'farmersdelight:melon_popsicle',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:fruit_salad',
        'farmersdelight:mixed_salad',
        'farmersdelight:nether_salad',
        'farmersdelight:barbecue_stick',
        'farmersdelight:egg_sandwich',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:hamburger',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:mutton_wrap',
        'farmersdelight:dumplings',
        'farmersdelight:stuffed_potato',
        'farmersdelight:cabbage_rolls',
        'farmersdelight:salmon_roll',
        'farmersdelight:cod_roll',
        'farmersdelight:kelp_roll',
        'farmersdelight:kelp_roll_slice',
        'farmersdelight:cooked_rice',
        'farmersdelight:bone_broth',
        'farmersdelight:beef_stew',
        'farmersdelight:chicken_soup',
        'farmersdelight:vegetable_soup',
        'farmersdelight:fish_stew',
        'farmersdelight:fried_rice',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:noodle_soup',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:mushroom_rice',
        'farmersdelight:roasted_mushroom_chops',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:ratatouille',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:grilled_salmon',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:dog_food',
        'farmersdelight:horse_feed'
    ];

    event.add('food_spoiling:spoilable', spoilables);

    event.add('food_spoiling:baked_goods', spoilables.filter(i =>
        i.includes('pie') || i.includes('cookie') || i.includes('cake') || i.includes('dough')
    ));

    event.add('food_spoiling:cooked_products', spoilables.filter(i =>
        i.includes('cooked') || i.includes('grilled') || i.includes('roast')
    ));

    event.add('food_spoiling:eggs', spoilables.filter(i =>
        i.includes('egg')
    ));

    event.add('food_spoiling:fish', spoilables.filter(i =>
        i.includes('cod') || i.includes('salmon') || i.includes('squid') || i.includes('fish')
    ));

    event.add('food_spoiling:fruits', spoilables.filter(i =>
        i.includes('melon') || i.includes('apple') || i.includes('berry') || i.includes('fruit'))
    );

    event.add('food_spoiling:grains', spoilables.filter(i =>
        i.includes('rice') || i.includes('wheat') || i.includes('pasta')
    ));

    event.add('food_spoiling:has_bottle', spoilables.filter(i =>
        i.includes('bottle') || i.includes('juice') || i.includes('cocoa') || i.includes('cider')
    ));

    event.add('food_spoiling:has_bowl', spoilables.filter(i =>
        i.includes('soup') || i.includes('stew') || i.includes('custard') || i.includes('broth')
    ));

    event.add('food_spoiling:raw_products', spoilables.filter(i =>
        i.includes('raw') || i.includes('dough') || i.includes('minced') || i.includes('beef') || i.includes('chicken') || i.includes('mutton') || i.includes('ham') || i.includes('bacon')
    ));

    event.add('food_spoiling:red_meat', spoilables.filter(i =>
        i.includes('beef') || i.includes('mutton') || i.includes('ham') || i.includes('bacon')
    ));

    event.add('food_spoiling:roots', spoilables.filter(i =>
        i.includes('onion') || i.includes('pumpkin') || i.includes('cabbage'))
    );

    event.add('food_spoiling:salted_products', spoilables.filter(i =>
        i.includes('bacon') || i.includes('ham') || i.includes('salt'))
    );

    event.add('food_spoiling:vegetables', spoilables.filter(i =>
        i.includes('tomato') || i.includes('cabbage') || i.includes('pumpkin') || i.includes('mushroom') || i.includes('nether_salad') || i.includes('mixed_salad') || i.includes('vegetable'))
    );

    event.add('food_spoiling:white_meat', spoilables.filter(i =>
        i.includes('chicken'))
    );
})
