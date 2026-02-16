// ServerEvents.commandRegistry(event => {
//   const { commands: Commands } = event;

//   event.register(
//     Commands.literal("guide")
//       .executes(ctx => {
//         ctx.source.player.tell(Text.green(""));
//         ctx.source.player.tell(Text.green("== GUIDES =="));
//         ctx.source.player.tell(Text.gold("/tower"));
//         ctx.source.player.tell(Text.gold("/irontools"));
//         ctx.source.player.tell(Text.gold("/warmString"));
//         ctx.source.player.tell(Text.gold("/campfire"));
//         ctx.source.player.tell(Text.gold("/hearts"));
//         ctx.source.player.tell(Text.gold("/planks"));
//         ctx.source.player.tell(Text.gold("/greenhouse"));
//         ctx.source.player.tell(Text.gold("/boiler"));
//         ctx.source.player.tell(Text.gold("/dh"));
//         ctx.source.player.tell(Text.gold("/backup"));
//         ctx.source.player.tell(Text.green("==========="));
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("tower")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> If you create your own world a tower will be spawned at your location, sometimes more towers can spawn in close proximity. Don't like your current spawn? You can always make a new perfect world")
//         );
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("irontools")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> Making iron tools is way harder now, you'll need a blueprint for a specific tool. You first need to craft a head of the tool you'll want to make using Hot Iron which you can get from heating an Iron Ingot on a campfire/magma block or in a blast furnace. Make an empty blueprint and a tool handle then combine everything in a smithing table to get a blueprint. Lastly, hold Copper Hammer in your maind hand with blueprint in the off-hand and right click on an anvil to start forging, it may take a few tries! Recipe for anvil has been made easier")
//         );
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("campfire")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> To make a campfire throw 1 Log and 3 Sticks on the ground, then hold right click on it with a Fire Starter"));
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("hearts")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> If you die and lose a heart you can get it back by crafting a Crystal Heart"));
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("planks")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> To get your first planks, you need Hollow Logs with any Axe in a crafting table. Then make your way to crafting a saw to use on normal logs"));
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("warmstring")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> To get warming upgrades for your clotches you need Sun Fern Leaf which you can get from first crafting its seeds by normal Fern, Magma Blocks and Blaze Rods that you can also craft"));
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("greenhouse")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> You can make a greenhouse and grow any plants there out of season as long as there's a Glass Block above the seed"));
//         return 1;
//       })
//   );

//   event.register(
//     Commands.literal("boiler")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> Boiler is the strongest source of warmth, to activate it you need a lever next to it and coal inside"));
//         return 1;
//       })
//   );

//     event.register(
//     Commands.literal("dh")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> Distant Horizons jar file is disabled by default because of how heavy on performance it is even if someone isn't strictly using it. If you want to enable - left from the play button for the pack click the three dots, then click open folder, go to mods and find distant horizons jar file its going to have disabled at the end, rename the file and delete this so it ends with jar"));
//         return 1;
//       })
//   );

//     event.register(
//     Commands.literal("backup")
//       .executes(ctx => {
//         ctx.source.player.tell(
//           Text.gold("> Backing up your worlds is essential especially when you want to update the modpack to the newer version. Always remember to check the changelog too, to see if its recommended not to use the same world. To make a backup to your desktop click three dots located left of the Play button for the pack, click open folder, copy the saves folder and paste it on your desktop, then update the pack. After that paste the saves folder back into the same place"));
//         return 1;
//       })
//   );

// });






