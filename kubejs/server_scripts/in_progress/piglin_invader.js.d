// File: kubejs/server_scripts/piglin_reroll.js

function weightedChoice(choices) {
  let r = Math.random();
  let cumulative = 0;
  for (let c of choices) {
    cumulative += c.weight;
    if (r < cumulative) return c.action;
  }
  return choices[choices.length - 1].action;
}

ServerEvents.tick(event => {
  if (event.server.ticks % 100 !== 0) return; // every 5 seconds

  let overworld = event.server.getLevel('minecraft:overworld');
  if (!overworld) return;

  // Forge KubeJS entity filter syntax
  overworld.getEntities('@e[type=minecraft:zombified_piglin]').forEach(entity => {
    if (entity.hasTag('rerolled')) return;

    let pos = entity.blockPosition();
    let { x, y, z } = pos;

    let action = weightedChoice([
      { weight: 0.25, action: 'no_change' },
      { weight: 0.20, action: 'extra_zpiglins' },
      { weight: 0.10, action: 'ghast' },
      { weight: 0.15, action: 'piglins_small' },
      { weight: 0.10, action: 'hoglins' },
      { weight: 0.10, action: 'piglins_large' },
      { weight: 0.10, action: 'blazes' }
    ]);

    if (global.debugPiglinReroll) {
      console.info(`[PiglinReroll] Processing ZPiglin at ${pos}, outcome: ${action}`);
    }

    switch (action) {
      case 'no_change':
        entity.addTag('rerolled');
        break;

      case 'extra_zpiglins': {
        let count = 1 + Math.floor(Math.random() * 5);
        for (let i = 0; i < count; i++) {
          let zp = overworld.spawnEntity('minecraft:zombified_piglin', x, y, z);
          if (zp) zp.addTag('rerolled');
        }
        entity.addTag('rerolled');
        break;
      }

      case 'ghast': {
        let ghast = overworld.spawnEntity('minecraft:ghast', x, y, z);
        if (ghast) ghast.addTag('rerolled');
        entity.discard();
        break;
      }

      case 'piglins_small': {
        let count = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          let pig = overworld.spawnEntity('minecraft:piglin', x, y, z);
          if (pig) {
            pig.addTag('rerolled');
            pig.mergeNbt({ IsImmuneToZombification: 1 });
          }
        }
        entity.discard();
        break;
      }

      case 'hoglins': {
        let count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) {
          let hog = overworld.spawnEntity('minecraft:hoglin', x, y, z);
          if (hog) hog.addTag('rerolled');
        }
        entity.discard();
        break;
      }

      case 'piglins_large': {
        let count = 3 + Math.floor(Math.random() * 6);
        for (let i = 0; i < count; i++) {
          let pig = overworld.spawnEntity('minecraft:piglin', x, y, z);
          if (pig) {
            pig.addTag('rerolled');
            pig.mergeNbt({ IsImmuneToZombification: 1 });
          }
        }
        entity.discard();
        break;
      }

      case 'blazes': {
        let count = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          let blaze = overworld.spawnEntity('minecraft:blaze', x, y, z);
          if (blaze) blaze.addTag('rerolled');
        }
        entity.discard();
        break;
      }
    }
  });
});