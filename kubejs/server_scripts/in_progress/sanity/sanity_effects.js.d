// sanity_effects.js

const KEYS = global.SANITY_KEYS;

const SANITY_LINES = [
  "Hello…?",
  "Did I just type that?",
  "Stop copying me.",
  "Who’s in here with me.",
  "That wasn’t me.",
  "I didn’t say that.",
  "Why is it so loud.",
  "It’s too quiet again.",
  "I heard you.",
  "Say something back.",
  "You’re still there.",
  "Don’t pretend you’re not.",
  "I know that wasn’t my thought.",
  "Why did you answer.",
  "I didn’t mean to send that.",
  "That wasn’t supposed to show up.",
  "Someone’s using my hands.",
  "I keep forgetting what I’m doing.",
  "Did I move just now.",
  "Stop watching me.",
  "You’re standing too close.",
  "I can feel you breathing.",
  "Why is the room smaller.",
  "Everything feels… shifted.",
  "I swear the walls were farther away.",
  "Did the lights flicker.",
  "Something’s behind me.",
  "Don’t turn around.",
  "It’s following the cursor.",
  "I saw that shadow again.",
  "You blinked. I didn’t.",
  "My reflection isn’t matching.",
  "I’m not alone in my head.",
  "Whose thought was that.",
  "I keep hearing footsteps.",
  "Someone keeps whispering my name.",
  "I’m not imagining that.",
  "Why did the air get colder.",
  "Something just brushed past me.",
  "Did you feel that.",
  "I’m not supposed to be here.",
  "This place feels wrong.",
  "Everything tastes like metal.",
  "My heartbeat sounds different.",
  "I can’t tell if I’m awake.",
  "I think I lost time again.",
  "What was I doing.",
  "Why can’t I remember typing that.",
  "Stop sending messages through me.",
  "I know you’re inside the walls.",
  "You moved something.",
  "I heard the door open.",
  "Someone’s standing in the corner.",
  "Don’t look at it.",
  "It’s getting closer.",
  "Why won’t it speak.",
  "It knows my name.",
  "I think it’s learning.",
  "I’m not cold. Why am I shaking.",
  "Everything feels heavier.",
  "My shadow looks wrong.",
  "It’s not following the light.",
  "I saw another version of me.",
  "It smiled first.",
  "I don’t trust my eyes.",
  "Something’s rewriting my thoughts.",
  "I didn’t think that.",
  "Stop finishing my sentences.",
  "You’re not supposed to answer.",
  "Why did you say that.",
  "I didn’t hear you come in.",
  "Who opened that.",
  "Something’s breathing under the floor.",
  "The walls are listening.",
  "It’s waiting for me to sleep.",
  "I can hear typing behind me.",
  "That wasn’t my voice.",
  "I don’t like how quiet you are.",
  "Please stop pretending.",
  "You’re not me.",
  "I’m not me.",
  "Which one of us typed that.",
  "I think I’m splitting.",
  "There’s someone else using my name.",
  "I saw the message before I sent it.",
  "It’s getting harder to tell what’s real.",
  "I don’t think this is my body.",
  "Something’s wearing my skin wrong.",
  "I feel stretched.",
  "I feel doubled.",
  "I feel borrowed.",
  "I feel watched."
];

const SANITY_LAUGHS = [
  "hehehe",
  "haha",
  "hehh. ha.",
  "hahahaha",
  "hehheheheheh"
];

// -----------------------------------------------------------------------------
// MAIN PER-PLAYER TICK (EVERY SECOND)
// -----------------------------------------------------------------------------

PlayerEvents.tick(event => {
  const player = event.player;
  const level = player.level;
  if (level.isClientSide()) return;

  const data = global.Sanity.getData(player);
  const gameTime = level.gameTime;
  if (gameTime % 20 !== 0) return;

  const percent = global.Sanity.getPercent(player);

  handleThresholdFlags(player, data, percent);
  handleOnePercentMessage(player, data, percent);
  handleCaveSounds(player, level, percent, gameTime);
  handleInvisMobs(player, level, percent, gameTime);
  handleBlindnessPulse(player, level, percent, gameTime);
  handleMaggots(player, level, percent, gameTime);
  handleSelfTalkAndDamage(player, level, percent, gameTime);
  handleOrientationAndArmor(player, level, percent, gameTime);
  handleOnePercentMadness(player, level, percent, gameTime);
});

// -----------------------------------------------------------------------------
// THRESHOLD FLAGS (50%, 20%)
// -----------------------------------------------------------------------------

function handleThresholdFlags(player, data, percent) {
  // 50%
  const hit50 = data.getBoolean(KEYS.hit50);
  if (percent <= 50 && !hit50) {
    data.putBoolean(KEYS.hit50, true);
    player.runCommandSilent(
      `tellraw ${player.name.string} {"text":"you're not feeling like yourself...","color":"gray"}`
    );
  }
  if (percent > 50 && hit50) data.putBoolean(KEYS.hit50, false);

  // 20%
  const hit20 = data.getBoolean(KEYS.hit20);
  if (percent <= 20 && !hit20) {
    data.putBoolean(KEYS.hit20, true);
    player.runCommandSilent(
      `tellraw ${player.name.string} {"text":"you feel the world closing in...","color":"gray"}`
    );
  }
  if (percent > 20 && hit20) data.putBoolean(KEYS.hit20, false);
}

// -----------------------------------------------------------------------------
// 1% ONE-SHOT MESSAGE
// -----------------------------------------------------------------------------

function handleOnePercentMessage(player, data, percent) {
  const hit1 = data.getBoolean(KEYS.hit1);

  if (percent <= 1 && !hit1) {
    data.putBoolean(KEYS.hit1, true);
    player.runCommandSilent(
      `tellraw ${player.name.string} {"text":"you hear the beating, beating, beating of the ","color":"dark_red","extra":[{"text":"something","obfuscated":true}]}`
    );
  }

  if (percent > 1 && hit1) {
    data.putBoolean(KEYS.hit1, false);
  }
}

// -----------------------------------------------------------------------------
// 50%: CAVE SOUNDS
// -----------------------------------------------------------------------------

function handleCaveSounds(player, level, percent, gameTime) {
  if (percent > 50) return;
  if (gameTime % (60 * 20) !== 0) return;

  if (global.Sanity.random(level, 0.14)) {
    player.playSound("minecraft:ambient.cave", 1.0, 1.0);
  }
}

// -----------------------------------------------------------------------------
// 40% AND 9–6%: INVISIBLE MOBS
// -----------------------------------------------------------------------------

function handleInvisMobs(player, level, percent, gameTime) {
  // 9–6%: frequent, larger radius
  if (percent <= 9 && percent >= 6) {
    if (gameTime % (5 * 20) !== 0) return;

    player.runCommandSilent(
      `execute at ${player.name.string} run effect give @e[type=!minecraft:player,nbt=!{NoAI:1b},distance=..30] irons_spellbooks:true_invisibility 40`
    );
    return;
  }

  // <=40% and >9%: rarer, smaller radius
  if (percent <= 40 && percent > 9) {
    if (gameTime % (20 * 20) !== 0) return;
    if (!global.Sanity.random(level, 0.5)) return;

    player.runCommandSilent(
      `execute at ${player.name.string} run effect give @e[type=!minecraft:player,nbt=!{NoAI:1b},distance=..12] irons_spellbooks:true_invisibility 40`
    );
  }
}

// -----------------------------------------------------------------------------
// 30%: BLINDNESS PULSE
// -----------------------------------------------------------------------------

function handleBlindnessPulse(player, level, percent, gameTime) {
  if (percent > 30) return;
  if (gameTime % (30 * 20) !== 0) return;

  if (global.Sanity.random(level, 0.1)) {
    // Forge KubeJS: use potionEffects API
    player.potionEffects.add("minecraft:blindness", 12 * 20, 0);
  }
}

// -----------------------------------------------------------------------------
// 20%: MAGGOTS
// -----------------------------------------------------------------------------

function handleMaggots(player, level, percent, gameTime) {
  if (percent > 20) return;
  if (gameTime % (100 * 20) !== 0) return;

  if (global.Sanity.random(level, 0.5)) {
    const count = global.Sanity.randomInt(level, 1, 5);
    player.give(Item.of("alexsmobs:maggot", count));
  }
}

// -----------------------------------------------------------------------------
// 10%: SELF-TALK + DAMAGE
// -----------------------------------------------------------------------------

function handleSelfTalkAndDamage(player, level, percent, gameTime) {
  if (gameTime % (60 * 20) !== 0) return;

  const below1 = percent <= 1;

  if (percent <= 10) {
    const list = below1 ? SANITY_LAUGHS : SANITY_LINES;

    if (global.Sanity.random(level, 0.25)) {
      const idx = global.Sanity.randomInt(level, 0, list.length - 1);
      const line = list[idx];
      player.runCommandSilent(
        `execute as ${player.name.string} run say ${line}`
      );
    }
  }

  if (percent <= 10 && global.Sanity.random(level, 0.05)) {
    // instant damage via potionEffects
    player.potionEffects.add("minecraft:instant_damage", 1, 1);
  }
}

// -----------------------------------------------------------------------------
// 9–6%: RANDOM ROTATION + ARMOR UNEQUIP
// -----------------------------------------------------------------------------

function handleOrientationAndArmor(player, level, percent, gameTime) {
  if (percent > 9 || percent < 6) return;
  if (gameTime % (60 * 20) !== 0) return;

  // Random rotation
  if (global.Sanity.random(level, 0.2)) {
    const yaw = global.Sanity.randomInt(level, -180, 180);
    const pitch = global.Sanity.randomInt(level, -60, 60);
    player.runCommandSilent(
      `execute at ${player.name.string} run tp ${player.name.string} ~ ~ ~ ${yaw} ${pitch}`
    );
  }

  // Armor unequip (Forge: use equipment slots)
  const slots = ["head", "chest", "legs", "feet"];

  const nonEmpty = slots.filter(slot => {
    const item = player.getEquipment(slot);
    return item && !item.isEmpty();
  });

  if (nonEmpty.length > 0) {
    const chosenSlot = nonEmpty[global.Sanity.randomInt(level, 0, nonEmpty.length - 1)];
    const item = player.getEquipment(chosenSlot);
    player.setEquipment(chosenSlot, Item.empty);
    player.give(item);
  }
}

// -----------------------------------------------------------------------------
// WITHER AURA: EVERY 60s, -1 SANITY TO PLAYERS WITHIN 1000 BLOCKS
// -----------------------------------------------------------------------------

ServerEvents.tick(event => {
  const server = event.server;
  const time = server.overworld().gameTime;
  if (time % (60 * 20) !== 0) return;

  server.getAllLevels().forEach(level => {
    const withers = level.getEntities({ type: "minecraft:wither" });
    if (!withers || withers.length === 0) return;

    withers.forEach(wither => {
      const players = level.getPlayers(p => p.distanceTo(wither) <= 1000);
      players.forEach(player => global.Sanity.change(player, -1));
    });
  });
});

// -----------------------------------------------------------------------------
// 5%: SKIP NIGHT IF *ALL* PLAYERS ARE BELOW 5% SANITY
// -----------------------------------------------------------------------------

ServerEvents.tick(event => {
  const server = event.server;
  const overworld = server.overworld();
  const timeOfDay = overworld.dayTime % 24000;

  // right after normal sleep time
  if (timeOfDay !== 21000) return;

  const players = overworld.getPlayers();
  if (players.length === 0) return;

  let allLow = true;
  for (const player of players) {
    if (global.Sanity.getPercent(player) >= 5) {
      allLow = false;
      break;
    }
  }

  if (allLow) {
    server.runCommandSilent("time add 16000");
  }
});

// -----------------------------------------------------------------------------
// 1% MADNESS EFFECTS (AMBIENCE + ENDERMAN SPAWNS)
// -----------------------------------------------------------------------------

function handleOnePercentMadness(player, level, percent, gameTime) {
  if (percent > 1) return;

  // Ambient sound every 20s
  if (gameTime % (20 * 20) === 0) {
    player.playSound("minecraft:ambient.underwater.loop.additions.ultra_rare", 1.0, 1.0);
  }

  // Random enderman every 60s (10% chance)
  if (gameTime % (60 * 20) === 0 && global.Sanity.random(level, 0.1)) {
    const dx = global.Sanity.randomInt(level, -8, 8);
    const dz = global.Sanity.randomInt(level, -8, 8);
    player.runCommandSilent(
      `execute at ${player.name.string} run summon endermanoverhaul:dark_oak_enderman ~${dx} ~ ~${dz}`
    );
  }
}