// kubejs/server_scripts/coal_piece_recipes.js

ServerEvents.recipes(event => {
  // 9 coal pieces -> 1 coal (3x3 shaped)
  event.shaped(
    Item.of('minecraft:coal', 1),
    [
      'CCC',
      'CCC',
      'CCC'
    ],
    {
      C: 'kubejs:coal_piece'
    }
  );

  // (Optional) reverse recipe: 1 coal -> 9 pieces
  event.shapeless(
    Item.of('kubejs:coal_piece', 9),
    [
      'minecraft:coal'
    ]
  );

  event.recipes.createCompacting(
    Item.of('kubejs:coal_piece'),
    [
      Item.of('adpother:carbon', 64)
    ]
  );
    
});


