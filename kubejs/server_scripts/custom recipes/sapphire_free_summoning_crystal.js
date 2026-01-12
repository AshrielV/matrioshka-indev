ServerEvents.recipes(event => {
  event.shapeless(
    Item.of("iceandfire:summoning_crystal_ice", 1),
    [
      "iceandfire:ice_dragon_blood",
      "minecraft:ender_pearl",
      "#forge:gems/diamond",
      "aetherworks:aether_shard"
    ]
  )
  .id("kubejs:summoning_crystal_ice")
})