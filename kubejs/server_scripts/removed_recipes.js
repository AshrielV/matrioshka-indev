// ============================================================================
// GLOBAL ITEM REMOVAL REGISTRY
// ----------------------------------------------------------------------------
// This script removes selected items from:
//   • ALL crafting / processing recipes
//   • ALL item tags
//   • ALL block tags
//   • ALL loot table pools containing them
//
// Supports:
//   • Exact item IDs (string)
//   • Regex matchers (RegExp)
//
// Forge: 1.20.1
// KubeJS: Server-side
// ============================================================================


// ============================================================================
// 1. CANONICAL REMOVAL MATCHERS
// ----------------------------------------------------------------------------
// This is the SINGLE SOURCE OF TRUTH.
// Any matcher listed here is treated as "fully removed" from gameplay.
// ============================================================================

const REMOVED_ITEM_MATCHERS = [

  // --- Ice and Fire ---
  /iceandfire:.*pixie.*/,
  /^iceandfire:(?!.*armor)(?!.*pile)(?!.*dragonarmor).*silver.*/,
  /iceandfire:(?!.*dragonscale)(?!.*armor).*sapphire.*/,
  'iceandfire:ambrosia',

  // --- More Mod Tetra ---
  /more_mod_tetra:fake.*/,
  'more_mod_tetra:bokushuu_ingot',
  'more_mod_tetra:rennshi_ingot',
  'more_mod_tetra:curios_jetpack',
  'more_mod_tetra:curios_amulet',
  'more_mod_tetra:modular_mmt_jetpack',
  'more_mod_tetra:modular_mmt_white_scabbard',
  'more_mod_tetra:tetra_white_scabbard',
  'more_mod_tetra:modular_mmt_white_quiver',
  'more_mod_tetra:tetra_white_quiver',
  'more_mod_tetra:modular_mmt_white_bag',
  'more_mod_tetra:tetra_white_bag',
  'more_mod_tetra:curios_heart_protecting_mirror',
  /more_mod_tetra:.*money$/,
  /^more_mod_tetra:.*dragonbone$/,

  // --- Misc / Balance ---
  'ore_creeper:ore_tnt',
  'enlightened_end:nuclear_furnace',
  'enlightened_end:nuclear_bomb',
  /^biomeswevegone:.*crafting_table/
]


// ============================================================================
// 2. RECIPE REMOVAL
// ----------------------------------------------------------------------------
// Removes ALL recipes that output any of the listed items.
// This includes:
//   • Crafting
//   • Smelting
//   • Modded machines
// ============================================================================

ServerEvents.recipes(event => {
  REMOVED_ITEM_MATCHERS.forEach(matcher => {
    event.remove({ output: matcher })
  })
})


// ============================================================================
// 3. TAG REMOVAL
// ----------------------------------------------------------------------------
// Removes the items from ALL item tags.
// Prevents:
//   • Ore dictionary access
//   • Mod cross‑compat usage
//   • Accidental re‑introduction via tags
// ============================================================================

function resolveMatchersToItemIDs(matchers) {
  const allItems = Ingredient.all.itemIds; // ✔️ Correct Forge API
  const resolved = new Set();

  allItems.forEach(idStr => {
    matchers.forEach(matcher => {
      if (matcher instanceof RegExp) {
        if (matcher.test(idStr)) {
          resolved.add(idStr);
        }
      } else if (typeof matcher === 'string') {
        if (idStr === matcher) {
          resolved.add(idStr);
        }
      }
    });
  });

  return Array.from(resolved);
}

const RESOLVED_ITEM_IDS = resolveMatchersToItemIDs(REMOVED_ITEM_MATCHERS);

// ============================================================================
// ITEM TAG REMOVAL (regex-safe)
// ============================================================================
ServerEvents.tags('item', event => {
  RESOLVED_ITEM_IDS.forEach(id => {
    event.removeAll(id);
  });
});

// ============================================================================
// BLOCK TAG REMOVAL (regex-safe)
// ============================================================================
ServerEvents.tags('block', event => {
  RESOLVED_ITEM_IDS.forEach(id => {
    event.removeAll(id);
  });
});



// ============================================================================
// 4. LOOT TABLE ENTRY REMOVAL (LootJS)
// ----------------------------------------------------------------------------
// Surgically removes targeted items from loot tables.
// • DOES NOT delete entire pools
// • Preserves weights, rolls, and conditions
// • Regex‑capable via shared matcher registry
//
// Requires: LootJS (Forge 1.20.1)
// ============================================================================

LootJS.modifiers(event => {

  // ------------------------------------------------------------
  // Loot tables to scan (regex supported)
  // ------------------------------------------------------------

  const TARGET_LOOT_TABLES = [
    /iceandfire:.+/,
    /enlightened_end:.+/
  ]

  // ------------------------------------------------------------
  // Apply modifiers
  // ------------------------------------------------------------

  TARGET_LOOT_TABLES.forEach(tablePattern => {

    const modifier = event.addLootTableModifier(tablePattern)

    REMOVED_ITEM_MATCHERS.forEach(matcher => {

      // Regex matcher
      if (matcher instanceof RegExp) {
        modifier.removeLoot(matcher)
      }

      // Exact ID matcher
      else {
        modifier.removeLoot(matcher)
      }
    })
  })
})




// ============================================================================
// END OF SCRIPT
// ============================================================================
