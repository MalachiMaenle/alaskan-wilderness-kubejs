ServerEvents.recipes(event => {
    event.shaped('4x farmersrespite:green_tea_leaves', [
        'WD ',
        'DW ',
        '   '
    ], {
        W: 'minecraft:oak_leaves',
        D: 'minecraft:birch_leaves'
    });

    event.shaped('4x farmersrespite:coffee_berries', [
        'WD ',
        'DW ',
        '   '
    ], {
        W: 'minecraft:sweet_berries',
        D: 'minecraft:inc_sac'
    });

    event.shaped('4x farmersrespite:yellow_tea_leaves', [
        'WD ',
        'DW ',
        '   '
    ], {
        W: 'minecraft:birch_leaves',
        D: 'minecraft:spruce_leaves'
    });

    event.shaped('4x farmersrespite:black_tea_leaves', [
        'WD ',
        'DW ',
        '   '
    ], {
        W: 'minecraft:oak_leaves',
        D: 'minecraft:spruce_leaves'
    });

    event.shaped('3x farmersrespite:tea_seeds', [
        'GY ',
        'BM ',
        '   '
    ], {
        G: 'farmersrespite:green_tea_leaves',
        Y: 'farmersrespite:yellow_tea_leaves',
        B: 'farmersrespite:black_tea_leaves',
        M: 'minecraft:bone_meal'
    });
});