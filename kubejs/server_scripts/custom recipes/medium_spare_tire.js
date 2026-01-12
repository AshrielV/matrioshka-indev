ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting(
    Item.of('trackwork:med_simple_wheel_part', 2),
    [
      'KKK',
      'KCK',
      'KKK'
    ],
    {
      K: 'minecraft:dried_kelp',
      C: 'create:cogwheel'
    }
  );
});