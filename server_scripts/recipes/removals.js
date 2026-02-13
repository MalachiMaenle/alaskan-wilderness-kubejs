const removed_recipes = [
		'minecraft:anvil',
		// 'farmersdelight:cooking_pot',
		// 'farmersdelight:stove',
		// 'legendarysurvivaloverhaul:heart_container',
		// 'legendarysurvivaloverhaul:heater',
		'notreepunching:string_from_web_with_knife'
		// 'notreepunching:iron_mattock',
		// 'notreepunching:gold_mattock',
		// 'notreepunching:diamond_mattock',
		// 'notreepunching:netherite_mattock',
		// 'nopunchingtrees:iron_knife',
		// 'nopunchingtrees:gold_knife',
		// 'nopunchingtrees:diamond_knife'
	]

ServerEvents.recipes(event => {
	removed_recipes.forEach(id => {
		event.remove(id)
	})
})