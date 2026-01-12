// kubejs/server_scripts/blindness_no_minimap.js

PlayerEvents.tick(event => {
  const player = event.player
  const level = player.level

  // Run on server side only
  if (level.isClientSide()) return

  const BLINDNESS = 'minecraft:blindness'
  const NO_MINIMAP = 'xaerominimap:no_minimap_harmful'

  const hasBlindness = player.hasEffect(BLINDNESS)
  const hasNoMinimap = player.hasEffect(NO_MINIMAP)

  if (hasBlindness) {
    // Give / refresh the Xaero "no minimap harmful" effect
    // Duration is short and continuously refreshed
    player.potionEffects.add(NO_MINIMAP, 40, 0, true, false)
  } else if (hasNoMinimap) {
    // Remove it once blindness is gone
    player.removeEffect(NO_MINIMAP)
  }
})