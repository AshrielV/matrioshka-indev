
ServerEvents.highPriorityData(event => {
  event.addJson('kubejs:worldgen/biome_modifier/remove_emeralds.json', {
    type: 'forge:remove_features',
    biome: "#minecraft:is_overworld",
    features: [
      "minecraft:ore_emerald"
    ],
    step: "underground_ores"
  })
})

