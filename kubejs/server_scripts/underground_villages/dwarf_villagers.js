// Forge 1.20.1 — KubeJS 2001.6.5 — Pehkui dwarf scaling

EntityEvents.spawned(event => {
    const e = event.entity;

    // Match villagers, zombie villagers, and ALL recruits:* mobs
    const isVillager =
        e.type === "minecraft:villager" ||
        e.type === "minecraft:zombie_villager";

    const isRecruit = e.type.namespace === "recruits";

    if (!isVillager && !isRecruit) return;

    // Only apply if below Y = 30
    if (e.y >= 30) return;

    const uuid = e.uuid.toString();

    // Delay 1 tick so Pehkui can apply scale correctly
    event.server.scheduleInTicks(1, () => {
        event.server.runCommand(`/scale set pehkui:width 1.25 ${uuid}`);
        event.server.runCommand(`/scale set pehkui:height 0.7 ${uuid}`);
        console.info(`[KubeJS DEBUG] Applied dwarf scale to ${e.type} (${uuid})`);
    });
});
