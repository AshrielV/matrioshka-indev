PlayerEvents.tick(event => {
  const player = event.player
  if (!player || !player.isPlayer()) return
  if (player.level.isClientSide()) return

  const burdened = 'enlightened_end:burdened'
  const heavy = 'gravitychanger:strength_increase'

  if (!player.hasEffect(burdened)) return

  // Try to preserve duration; fallback to 30s
  let ticks = 600
  const inst = player.getEffect(burdened)
  if (inst && inst.getDuration) ticks = inst.getDuration()

  // Minecraft /effect expects seconds
  const seconds = Math.max(1, Math.ceil(ticks / 20))

  // Use a stable selector so the server console command hits the right player
  const target = `@a[name="${player.username}"]`

  // "Normal" command execution (not silent)
  event.server.runCommandSilent(`effect clear ${target} ${burdened}`)
  event.server.runCommandSilent(`effect give ${target} ${heavy} ${seconds} 10 true`)
  
})
