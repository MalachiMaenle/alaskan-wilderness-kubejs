ServerEvents.tags("block", (event) => {
  event.remove("minecraft:needs_stone_tool", [
	"minecraft:copper_ore",
	"minecraft:deepslate_copper_ore",
	"#minecraft:copper_blocks"
  ])

  event.add("minecraft:needs_wood_tool", [
	"minecraft:copper_ore",
	"minecraft:deepslate_copper_ore",
	"#minecraft:copper_blocks"
  ])
})