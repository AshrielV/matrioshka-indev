MoreJSEvents.villagerTrades(event => {
    const villager = event.villager;

    // Only apply to villagers tagged as underground villagers
    if (!villager.persistentData.isUndergroundVillager) return;

    /*
     * TOOLSMITH TRADE
     * Gives 4 emeralds for 1 stone hoe
     */
    if (event.profession === "minecraft:toolsmith") {
        event.addTrade(1, {
            input: {
                item: "minecraft:stone_hoe",
                count: 1
            },
            output: {
                item: "minecraft:emerald",
                count: 4
            },
            maxUses: 16,
            villagerExperience: 5
        });
    }

    if (event.profession === "minecraft:farmer") {
        event.addTrade(1, {
            input: {
                item: "minecraft:wheat",
                count: 32
            },
            output: {
                item: "minecraft:emerald",
                count: 1
            },
            maxUses: 16,
            villagerExperience: 2
        });
    }
    
    if (event.profession === "minecraft:armorer") {
        event.addTrade(2, {
            input: { item: "minecraft:iron_ingot", count: 8 },
            output: { item: "minecraft:emerald", count: 1 },
            maxUses: 12,
            villagerExperience: 5
        });
    }

    
});
