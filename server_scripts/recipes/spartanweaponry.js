const weapons = {
	remove_materials: ["wooden", "stone", "copper", "iron", "golden", "diamond", "steel"],
	type_materials: ["copper", "iron", "golden", "diamond", "steel"],
	materials: ["overgeared:heated_copper_ingot", "overgeared:heated_iron_ingot", "minecraft:gold_ingot", "hot_iron:diamond_plate", "overgeared:heated_steel_ingot"],
	tiers: ["stone", "stone", "stone", "iron", "iron"],
	types: ["dagger", "parrying_dagger", "longsword", "katana", "saber", "rapier", "greatsword", "battle_hammer", "warhammer", "spear", "halberd", "pike", "lance", "longbow", "heavy_crossbow", "throwing_knife", "tomahawk", "javelin", "boomerang", "battleaxe", "flanged_mace", "glaive", "quarterstaff", "scythe"],
	patterns: {
		"dagger": ['I', 'H'],
		"parrying_dagger": [' I', 'IH'],
		"longsword": [' I ', ' I ', 'IHI'],
		"katana": ['  I', ' I ', 'H  '],
		"saber": [' I', ' I', 'IH'],
		"rapier": ['  I', 'II ', 'HI '],
		"greatsword": [' I ', 'III', 'IHI'],
		"battle_hammer": ['III', 'III', ' H '],
		"warhammer": [' I', 'II', ' H'],
		"spear": ['I', 'P'],
		"halberd": [' I', 'II', "IP"],
		"pike": ['I', 'I', 'P'],
		"lance": ['  I', 'IP ', 'HI '],
		"longbow": ['HKI', 'K S', 'ISS'],
		"heavy_crossbow": ['IBI', 'WTW', ' H '],
		"throwing_knife": ['HI'],
		"tomahawk": ['HI', ' I'],
		"javelin": ['PI'],
		"boomerang": ['IWW', 'W  ', 'W  '],
		"battleaxe": ['III', 'IKI', ' H '],
		"flanged_mace": [' II', ' KI', 'H  '],
		"glaive": ['I', 'I', 'P'],
		"quarterstaff": ['  I', ' P ', 'I  '],
		"scythe": ['II ', '  I', ' P ']
	}
}

function generateKeyFromPattern(pattern, type_material) {
	const key = {};
	const defaultMapping = {
		'B': { item: 'minecraft:bow' },
		'T': { item: 'minecraft:tripwire_hook' },
		'S': { item: 'minecraft:string' },
		'W': { item: 'minecraft:oak_planks' },
		'K': { item: 'minecraft:stick' },
		'H': { item: 'spartanweaponry:handle' },
		'P': { item: 'spartanweaponry:pole' }
	};

	let index = weapons.type_materials.indexOf(type_material);
	let material = weapons.materials[index];

	pattern.forEach(row => {
		row.split('').forEach(char => {
			if (char === 'I') {
				key['I'] = { item: material };
			} else if (char in defaultMapping) {
				key[char] = defaultMapping[char];
			}
		});
	});

	return key;
}

ServerEvents.recipes(event => {
	weapons.types.forEach(type => {
		weapons.remove_materials.forEach(remove_material => {
			event.remove({
				output: `spartanweaponry:${remove_material}_${type}`
			})
		})
	})

	weapons.type_materials.forEach(type_material => {
		weapons.types.forEach(type => {
			let hammering = 4;
			let tier = "iron";

			let needQuenching = !(type_material === "golden" || type_material === "diamond");
			
			if (type_material === "copper" || type_material === "golden") {
				tier = "stone";
				hammering = 3;
			}
			if (type_material === "diamond") {
				hammering = 5;
			}

			let pattern = weapons.patterns[type];
			let key = generateKeyFromPattern(pattern, type_material);

			event.custom({
				type: 'overgeared:forging',
				category: 'weapons',
				hammering: hammering,
				has_quality: true,
				need_quenching: needQuenching,
				needs_minigame: true,
				show_notification: true,
				quality_difficulty: 'medium',
				tier: tier,
				pattern: pattern,
				key: key,
				result: {
					item: `spartanweaponry:${type_material}_${type}`
				}
			})
		})
	})
})