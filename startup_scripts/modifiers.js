ItemEvents.modification(event => {
	event.modify('notreepunching:flint_pickaxe', item => {
		item.setTier(tier => {
			tier.level = 0;
		});
	});

	event.modify('overgeared:copper_pickaxe', item => {
		item.setTier(tier => {
			tier.level = 1
		})
	});

	event.modify('legendarysurvivaloverhaul:purified_water_bottle', item => {
		item.maxStackSize = 1
	});
});
