
ServerEvents.entityLoad(event => {
    const e = event.entity;

    if (e.type !== "minecraft:villager") return;

    const level = e.level;
    const pos = e.blockPosition();

    // Ask the level for structures at this position
    const structures = level.getStructuresAt(pos);

    if (!structures || structures.isEmpty()) return;

    for (const structure of structures) {
        const id = structure.id;

        // Match ALL underground village structures
        if (
            id.namespace === "underground_villages" &&
            id.path.startsWith("village/underground")
        ) {
            // Persistent tag survives reloads, cures, breeding
            e.persistentData.isUndergroundVillager = true;
            break;
        }
    }
});
