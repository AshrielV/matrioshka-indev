let chunkLoadingEnabled = false;

ServerEvents.tick(event => {
    if (event.server.gameTime % 100 !== 0) return; // every 5 seconds

    const server = event.server;

    // Detect entity using a command result
    const result = server.runCommandSilent(
        "execute if entity @e[type=sculkhorde:sculk_enderman] run say found"
    );

    const found = result === 1;

    if (found && !chunkLoadingEnabled) {
        chunkLoadingEnabled = true;

        // Debug line
        server.runCommand("tellraw @a[tag=debug] {\"text\":\"[DEBUG] Sculk Enderman detected! Enabling chunk loading.\",\"color\":\"green\"}");

        server.runCommandSilent("sculkhorde config general chunk_loading_enabled true");
    }

    if (!found && chunkLoadingEnabled) {
        chunkLoadingEnabled = false;

        // Debug line
        server.runCommand("tellraw @a[tag=debug] {\"text\":\"[DEBUG] No Sculk Enderman found. Disabling chunk loading.\",\"color\":\"red\"}");

        server.runCommandSilent("sculkhorde config general chunk_loading_enabled false");
    }
});