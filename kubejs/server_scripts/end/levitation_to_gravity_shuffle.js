PlayerEvents.tick(event => {
  const player = event.player
  if (!player || !player.isPlayer()) return
  if (player.level.isClientSide()) return

  // Only operate in the End
  if (player.level.dimension.toString() !== 'minecraft:the_end') return

  const levitation = 'minecraft:levitation'

  if (!player.hasEffect(levitation)) return

  // Preserve duration; fallback to 30s
  let ticks = 600
  const inst = player.getEffect(levitation)
  if (inst && inst.getDuration) ticks = inst.getDuration()

  const seconds = Math.max(1, Math.ceil(ticks / 20))

  const gravityEffects = [
    'gravitychanger:up',
    'gravitychanger:north',
    'gravitychanger:south',
    'gravitychanger:east',
    'gravitychanger:west'
  ]

  const chosen = gravityEffects[Math.floor(Math.random() * gravityEffects.length)]

  // --- KubeJS API calls (no commands!) ---

  // Remove levitation
  player.removeEffect(levitation)

  // Apply random gravity direction
  // addEffect(effectId, durationTicks, amplifier, ambient, showParticles)
  player.addEffect(chosen, ticks, 0, true, true)
})