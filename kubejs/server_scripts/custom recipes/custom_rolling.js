const rods = [
  { item: "minecraft:amethyst_shard", result: "more_mod_tetra:amethyst_rod" },
  { item: "minecraft:ender_pearl",   result: "more_mod_tetra:ender_rod" },
  { item: "minecraft:nether_star",   result: "more_mod_tetra:nether_star_rod" }
]

ServerEvents.recipes(event => {
  rods.forEach(r => {
    event.custom({
      type: "createaddition:rolling",
      input: { item: r.item },
      result: { item: r.result, count: 2 }
    })
  })
})