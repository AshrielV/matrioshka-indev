ServerEvents.recipes(event => {
  event.recipes.createCrushing(
    [
      Item.of('ars_nouveau:magebloom_fiber', 2),                // guaranteed
      Item.of('ars_nouveau:magebloom_fiber', 4).withChance(0.75) // 75% chance
    ],
    'ars_nouveau:magebloom'
  );
});