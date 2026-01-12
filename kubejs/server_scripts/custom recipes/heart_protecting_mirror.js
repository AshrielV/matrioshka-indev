ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting(
    Item.of('more_mod_tetra:curios_heart_protecting_mirror', 1),
    [
		'CAC',
		'ABA',
		'CAC'
    ],
    {
      A: 'minecraft:iron_ingot',
      C: 'minecraft:gold_ingot',
      B: 'sculkhorde:pure_souls'
    }
  );
});