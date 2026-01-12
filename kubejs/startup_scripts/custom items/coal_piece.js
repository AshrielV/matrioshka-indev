// kubejs/startup_scripts/coal_piece.js

StartupEvents.registry('item', event => {
  event.create('coal_piece')
    .displayName('Coal Piece')
    .burnTime(178);
});
