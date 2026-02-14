const removed_recipes = [
	"minecraft:anvil",
	"minecraft:lodestone",
	"minecraft:stone_sword",
	"minecraft:stone_pickaxe",
	"minecraft:stone_axe",
	"minecraft:stone_shovel",
	"minecraft:stone_hoe",

	"hot_iron:iron_plate",
	"hot_iron:diamond_plate",

	"create:copper_sheet",
	"create:iron_sheet",
	"create:golden_sheet",
	"create:brass_sheet",

	"create:wrench",
	"create:shaft",
	"create:propeller",
	"create:whisk",
	"create:brass_hand",
	"create:electron_tube",
	"create:transmitter",
	"create:goggles",

	"farmersdelight:cooking_pot",
	"farmersdelight:stove",
	"farmersdelight:flint_knife",
	"delightful:steel_knife",

	"legendarysurvivaloverhaul:heart_container",
	"legendarysurvivaloverhaul:heater",

	"refurbished_furniture:knife",

	"notreechopping:iron_knife",
	"notreechopping:gold_knife",
	"notreechopping:diamond_knife",
	"notreechopping:netherite_knife",
	"notreepunching:iron_mattock",
	"notreepunching:gold_mattock",
	"notreepunching:diamond_mattock",
	"notreepunching:netherite_mattock",
	"notreepunching:string_from_web_with_knife",

	"overgeared:copper_plate",
	"overgeared:iron_plate",
	"overgeared:steel_plate",

	"minecraft:iron_helmet",
	"minecraft:iron_chestplate",
	"minecraft:iron_leggings",
	"minecraft:iron_boots",

	"overgeared:steel_helmet",
	"overgeared:steel_chestplate",
	"overgeared:steel_leggings",
	"overgeared:steel_boots",

	"overgeared:stone_sword_blade",
	"overgeared:stone_pickaxe_head",
	"overgeared:stone_axe_head",
	"overgeared:stone_shovel_head",
	"overgeared:stone_hoe_head"
]

ServerEvents.recipes(event => {
	removed_recipes.forEach(recipe => {
		event.remove({
			output: recipe
		})
	})
})