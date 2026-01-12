// sanity_changes.js

// -----------------------------------------------------------------------------
// EFFECT REGISTRY HELPERS
// -----------------------------------------------------------------------------

const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

function effect(id) {
  return ForgeRegistries.MOB_EFFECTS.getValue(new ResourceLocation(id));
}

const SANITY_EFFECTS = {
  darkness:       effect("minecraft:darkness"),
  blindness:      effect("minecraft:blindness"),
  fatigue:        effect("minecraft:mining_fatigue"),
  sculkInfected:  effect("sculkhorde:sculk_infected"),
  purity:         effect("sculkhorde:purity"),
  comfort:        effect("farmersdelight:comfort")
};

// -----------------------------------------------------------------------------
// FOOD VARIETY: +1 sanity when eating a *different* food than last time
// 24,000 tick timeout → -2 sanity
// -----------------------------------------------------------------------------

ItemEvents.foodEaten(event => {
  const player = event.player;
  const data = global.Sanity.getData(player);

  const id = event.item.id;
  const now = player.level.getGameTime();

  const lastId = data.getString(global.SANITY_KEYS.lastFoodId) || "";
  const lastTime = data.getLong(global.SANITY_KEYS.lastFoodTime) || now;

  if (lastId !== "" && id !== lastId) {
    global.Sanity.change(player, 1);
  }

  data.putString(global.SANITY_KEYS.lastFoodId, id);
  data.putLong(global.SANITY_KEYS.lastFoodTime, now);
});

// -----------------------------------------------------------------------------
// PER-PLAYER TICK (EVERY SECOND)
// -----------------------------------------------------------------------------

PlayerEvents.tick(event => {
  const player = event.player;
  const level = player.level;
  if (level.isClientSide()) return;

  const data = global.Sanity.getData(player);
  const time = level.gameTime;

  if (time % 20 !== 0) return; // 1-second resolution

  // 1) Food variety timeout
  if (data.contains(global.SANITY_KEYS.lastFoodTime)) {
    const last = data.getLong(global.SANITY_KEYS.lastFoodTime);
    if (time - last >= 24000) {
      global.Sanity.change(player, -2);
      data.putLong(global.SANITY_KEYS.lastFoodTime, time);
    }
  }

  // 2) Potion sanity effects
  handlePotionEffects(player, data);

  // 3) Environment sanity effects
  handleEnvironment(player, data);

  // 4) Cooldowns
  tickCooldowns(player, data);
});

// -----------------------------------------------------------------------------
// POTION EFFECT SANITY HANDLING
// -----------------------------------------------------------------------------

function handlePotionEffects(player, data) {
  const level = player.level;

  // Helper for repeated pattern
  function tickEffect(key, seconds, delta, hasEffect) {
    if (hasEffect) {
      let t = data.getInt(key) + 20;
      if (t >= seconds * 20) {
        t = 0;
        global.Sanity.change(player, delta);
      }
      data.putInt(key, t);
    } else {
      data.putInt(key, 0);
    }
  }

  tickEffect(global.SANITY_KEYS.darknessTicks, 20, -1, player.hasEffect(SANITY_EFFECTS.darkness));
  tickEffect(global.SANITY_KEYS.blindnessTicks, 20, -1, player.hasEffect(SANITY_EFFECTS.blindness));
  tickEffect(global.SANITY_KEYS.fatigueTicks, 60, -1, player.hasEffect(SANITY_EFFECTS.fatigue));
  tickEffect(global.SANITY_KEYS.burrowedTicks, 10, -1, player.hasEffect(SANITY_EFFECTS.sculkInfected));
  tickEffect(global.SANITY_KEYS.purityTicks, 30, +1, player.hasEffect(SANITY_EFFECTS.purity));
  tickEffect(global.SANITY_KEYS.comfortTicks, 20, +1, player.hasEffect(SANITY_EFFECTS.comfort));
}

// -----------------------------------------------------------------------------
// ENVIRONMENT SANITY HANDLING
// -----------------------------------------------------------------------------

function handleEnvironment(player, data) {
  const level = player.level;
  const timeOfDay = level.dayTime % 24000;
  const canSeeSky = level.canSeeSky(player.blockPosition());

  // Helper
  function tickEnv(key, seconds, delta, condition) {
    if (condition) {
      let t = data.getInt(key) + 20;
      if (t >= seconds * 20) {
        t = 0;
        global.Sanity.change(player, delta);
      }
      data.putInt(key, t);
    } else {
      data.putInt(key, 0);
    }
  }

  // No sky → -1 every 10 minutes
  tickEnv(global.SANITY_KEYS.noSkyTicks, 600, -1, !canSeeSky);

  // Nether → -1 every 10 minutes
  tickEnv(
    global.SANITY_KEYS.netherTicks,
    600,
    -1,
    level.dimension.toString() === "minecraft:the_nether"
  );

  // Outside during day → +1 every 5 minutes
  tickEnv(
    global.SANITY_KEYS.outsideDayTicks,
    300,
    +1,
    canSeeSky && timeOfDay < 12000
  );

  // Near friendly mobs → +1 every 5 minutes
  const nearby = level.getEntities(player, 30, e => {
    if (!e) return false;
    return (
      e.type === "minecraft:villager" ||
      e.type === "minecraft:cat" ||
      e.type === "minecraft:wolf" ||
      e.type === "minecraft:panda"
    );
  });

  tickEnv(
    global.SANITY_KEYS.nearFriendsTicks,
    300,
    +1,
    nearby.length > 0
  );
}

// -----------------------------------------------------------------------------
// COOLDOWNS
// -----------------------------------------------------------------------------

function tickCooldowns(player, data) {
  const keys = [
    global.SANITY_KEYS.mobDeathCooldown,
    global.SANITY_KEYS.breedCooldown
  ];

  for (const k of keys) {
    if (data.contains(k)) {
      const v = data.getInt(k);
      if (v > 0) data.putInt(k, v - 20);
    }
  }
}

// -----------------------------------------------------------------------------
// PLAYER DEATH → -3 SANITY
// -----------------------------------------------------------------------------

EntityEvents.death(event => {
  const entity = event.entity;
  if (entity.isPlayer()) {
    global.Sanity.change(entity, -3);
  }
});

// -----------------------------------------------------------------------------
// MOB DEATH NEARBY → 0.5% CHANCE, 1-MIN COOLDOWN
// -----------------------------------------------------------------------------

EntityEvents.death(event => {
  const entity = event.entity;
  const level = entity.level;

  if (entity.isPlayer()) return;

  const players = level.getPlayers(p => p.distanceToSqr(entity) <= 900);

  players.forEach(player => {
    const data = global.Sanity.getData(player);
    const cd = data.getInt(global.SANITY_KEYS.mobDeathCooldown);

    if (cd <= 0 && global.Sanity.random(level, 0.005)) {
      global.Sanity.change(player, -1);
      data.putInt(global.SANITY_KEYS.mobDeathCooldown, 1200);
    }
  });
});

// -----------------------------------------------------------------------------
// BREEDING → 1% CHANCE, 30-SECOND COOLDOWN
// -----------------------------------------------------------------------------

EntityEvents.spawned(event => {
  const entity = event.entity;
  const level = entity.level;

  if (!entity.isLiving()) return;

  // Baby detection: Forge KubeJS uses entity.isBaby()
  if (!entity.isBaby()) return;

  const players = level.getPlayers(p => p.distanceToSqr(entity) <= 256);

  players.forEach(player => {
    const data = global.Sanity.getData(player);
    const cd = data.getInt(global.SANITY_KEYS.breedCooldown);

    if (cd <= 0 && global.Sanity.random(level, 0.01)) {
      global.Sanity.change(player, +1);
      data.putInt(global.SANITY_KEYS.breedCooldown, 600);
    }
  });
});