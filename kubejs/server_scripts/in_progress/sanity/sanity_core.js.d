// sanity_core.js

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------

const SANITY = {
  baseMax: 50,
  minCap: 1 // don't let max sanity go below 1
};

const SANITY_KEYS = {
  // core
  current: 'sanity_current',
  daysAwake: 'sanity_days_awake',
  lastSleepTime: 'sanity_last_sleep_time', // gameTime at last sleep

  // timers / misc
  lastFoodId: 'sanity_last_food_id',
  lastFoodTime: 'sanity_last_food_time',
  noSkyTicks: 'sanity_no_sky_ticks',
  netherTicks: 'sanity_nether_ticks',
  outsideDayTicks: 'sanity_outside_day_ticks',
  nearFriendsTicks: 'sanity_near_friends_ticks',
  darknessTicks: 'sanity_darkness_ticks',
  blindnessTicks: 'sanity_blindness_ticks',
  fatigueTicks: 'sanity_fatigue_ticks',
  burrowedTicks: 'sanity_burrowed_ticks',
  purityTicks: 'sanity_purity_ticks',
  comfortTicks: 'sanity_comfort_ticks',
  witherTickAcc: 'sanity_wither_tick_acc',
  mobDeathCooldown: 'sanity_mob_death_cd',
  breedCooldown: 'sanity_breed_cd',

  // threshold one-shot flags
  hit50: 'sanity_hit_50',
  hit20: 'sanity_hit_20',
  hit1: 'sanity_hit_1', // for the 1% message

  // sleep detection
  sleepingFlag: 'sanity_was_sleeping'
};

global.Sanity = {};
global.SANITY_KEYS = SANITY_KEYS; // expose for other files

// -----------------------------------------------------------------------------
// BASIC ACCESSORS
// -----------------------------------------------------------------------------

global.Sanity.getData = (player) => player.persistentData;

global.Sanity.getCurrent = (player) => {
  const data = global.Sanity.getData(player);

  // Forge KubeJS: don't use "99" type wildcard; simple contains() is fine
  if (!data.contains(SANITY_KEYS.current)) {
    data.putInt(SANITY_KEYS.current, SANITY.baseMax);
  }

  return data.getInt(SANITY_KEYS.current);
};

global.Sanity.setCurrent = (player, value) => {
  const data = global.Sanity.getData(player);
  const max = global.Sanity.getMax(player);

  if (value > max) value = max;
  if (value < 0) value = 0;

  data.putInt(SANITY_KEYS.current, value);
};

global.Sanity.change = (player, delta) => {
  const data = global.Sanity.getData(player);
  const cur = global.Sanity.getCurrent(player);
  const max = global.Sanity.getMax(player);

  let next = cur + delta;

  if (next > max) next = max;
  if (next < 0) next = 0;

  data.putInt(SANITY_KEYS.current, next);
};

// -----------------------------------------------------------------------------
// DAYS AWAKE & MAX SANITY CAP
// -----------------------------------------------------------------------------

global.Sanity.getDaysAwake = (player) => {
  const data = global.Sanity.getData(player);

  // compute dynamically from lastSleepTime if present
  if (data.contains(SANITY_KEYS.lastSleepTime)) {
    const level = player.level;
    const now = level.getGameTime()
    const last = data.getLong(SANITY_KEYS.lastSleepTime);

    let days = Math.floor((now - last) / 24000);

    if (days < 0) days = 0;
    if (days > 49) days = 49; // clamp so baseMax - days doesn't instantly hit minCap

    data.putInt(SANITY_KEYS.daysAwake, days);
  }

  if (!data.contains(SANITY_KEYS.daysAwake)) {
    data.putInt(SANITY_KEYS.daysAwake, 0);
  }

  return data.getInt(SANITY_KEYS.daysAwake);
};

global.Sanity.resetSleep = (player) => {
  const data = global.Sanity.getData(player);
  const level = player.level;

  data.putLong(SANITY_KEYS.lastSleepTime, level.gameTime);
  data.putInt(SANITY_KEYS.daysAwake, 0);
};

global.Sanity.getMax = (player) => {
  const days = global.Sanity.getDaysAwake(player);
  let maxSanity = SANITY.baseMax - days;

  if (maxSanity < SANITY.minCap) {
    maxSanity = SANITY.minCap;
  }

  return maxSanity;
};

// -----------------------------------------------------------------------------
// EFFECTIVE / PERCENT SANITY
// -----------------------------------------------------------------------------

global.Sanity.getEffective = (player) => {
  const cur = global.Sanity.getCurrent(player);
  const max = global.Sanity.getMax(player);

  let capped = cur;
  if (capped > max) capped = max;
  if (capped < 0) capped = 0;

  return capped;
};

global.Sanity.getPercent = (player) => {
  const eff = global.Sanity.getEffective(player);
  const max = global.Sanity.getMax(player);

  // safety: avoid NaN if max somehow ends up 0
  if (max <= 0) return 0;

  return (eff / max) * 100.0;
};

// -----------------------------------------------------------------------------
// SMALL HELPERS
// -----------------------------------------------------------------------------

global.Sanity.random = (level, chance) => {
  return level.random.nextFloat() < chance;
};

global.Sanity.randomInt = (level, min, maxInclusive) => {
  return min + level.random.nextInt(maxInclusive - min + 1);
};

global.Sanity.getServer = (player) => player.server;

// -----------------------------------------------------------------------------
// INIT ON LOGIN / RESPAWN
// -----------------------------------------------------------------------------

PlayerEvents.loggedIn(event => {
  const player = event.player;
  const data = global.Sanity.getData(player);

  // initialize sanity if missing
  global.Sanity.getCurrent(player);

  // initialize last sleep time to current gameTime if not present
  if (!data.contains(SANITY_KEYS.lastSleepTime)) {
    data.putLong(SANITY_KEYS.lastSleepTime, player.level.getGameTime());
  }
});

PlayerEvents.respawned(event => {
  const player = event.player;
  // sanity loss on death handled in sanity_changes.js
});

// -----------------------------------------------------------------------------
// SLEEP DETECTION VIA TICK
// When player goes from not-sleeping to sleeping, treat as "sleep happened"
// and reset the days-awake tracker.
// -----------------------------------------------------------------------------

PlayerEvents.tick(event => {
  const player = event.player;
  const level = player.level;
  if (level.isClientSide()) return;

  const data = global.Sanity.getData(player);
  const nowSleeping = player.isSleeping();
  const wasSleeping = data.getBoolean(SANITY_KEYS.sleepingFlag);

  if (nowSleeping && !wasSleeping) {
    // just started sleeping -> reset sleep timer
    global.Sanity.resetSleep(player);
  }

  data.putBoolean(SANITY_KEYS.sleepingFlag, nowSleeping);
});

// -----------------------------------------------------------------------------
// ADMIN COMMANDS
// -----------------------------------------------------------------------------

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;

  const IntegerArgument = Java.loadClass('com.mojang.brigadier.arguments.IntegerArgumentType');
  const EntityArgument = Java.loadClass('net.minecraft.commands.arguments.EntityArgument');
  const Text = Text; // KubeJS Text helper

  event.register(
    Commands.literal('sanity')
      .requires(src => src.hasPermission(2))

      // /sanity <player> get
      .then(
        Commands.argument('target', EntityArgument.player())
          .then(
            Commands.literal('get')
              .executes(ctx => {
                const player = EntityArgument.getPlayer(ctx, 'target');
                const cur = global.Sanity.getCurrent(player);
                ctx.source.sendSuccess(Text.of(`${player.name.string}'s sanity: ${cur}`), false);
                return 1;
              })
          )
      )

      // /sanity <player> set <value>
      .then(
        Commands.argument('target', EntityArgument.player())
          .then(
            Commands.literal('set')
              .then(
                Commands.argument('value', IntegerArgument.integer())
                  .executes(ctx => {
                    const player = EntityArgument.getPlayer(ctx, 'target');
                    const value = IntegerArgument.getInteger(ctx, 'value');

                    global.Sanity.setCurrent(player, value);
                    ctx.source.sendSuccess(Text.of(`Set ${player.name.string}'s sanity to ${value}`), false);
                    return 1;
                  })
              )
          )
      )

      // /sanity <player> max
      .then(
        Commands.argument('target', EntityArgument.player())
          .then(
            Commands.literal('max')
              .executes(ctx => {
                const player = EntityArgument.getPlayer(ctx, 'target');
                const max = global.Sanity.getMax(player);
                ctx.source.sendSuccess(Text.of(`${player.name.string}'s max sanity: ${max}`), false);
                return 1;
              })
          )
      )

      // /sanity <player> days
      .then(
        Commands.argument('target', EntityArgument.player())
          .then(
            Commands.literal('days')
              .executes(ctx => {
                const player = EntityArgument.getPlayer(ctx, 'target');
                const days = global.Sanity.getDaysAwake(player);
                ctx.source.sendSuccess(Text.of(`${player.name.string} has been awake ${days} days`), false);
                return 1;
              })
          )
      )

      // /sanity <player> percent
      .then(
        Commands.argument('target', EntityArgument.player())
          .then(
            Commands.literal('percent')
              .executes(ctx => {
                const player = EntityArgument.getPlayer(ctx, 'target');
                const pct = global.Sanity.getPercent(player).toFixed(2);
                ctx.source.sendSuccess(Text.of(`${player.name.string}'s sanity: ${pct}%`), false);
                return 1;
              })
          )
      )
  );
});