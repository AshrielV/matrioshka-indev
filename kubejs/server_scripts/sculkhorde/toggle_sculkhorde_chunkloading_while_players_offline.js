// Track online player count
let onlinePlayers = 0;

// Runs when ANY player joins
PlayerEvents.loggedIn(event => {
    onlinePlayers++;

    console.log(`[KubeJS] Player joined: ${event.player.username}, onlinePlayers = ${onlinePlayers}`);

    // First player joined (server was empty)
    if (onlinePlayers === 1) {
        console.log("[KubeJS] Trigger: first player joined");
        event.server.runCommandSilent('sculkhorde config general chunk_loading_enabled false');
    }
});

// Runs when ANY player leaves
PlayerEvents.loggedOut(event => {
    onlinePlayers--;

    console.log(`[KubeJS] Player left: ${event.player.username}, onlinePlayers = ${onlinePlayers}`);

    // Last player left (server now empty)
    if (onlinePlayers === 0) {
        console.log("[KubeJS] Trigger: last player left");
        event.server.runCommandSilent('sculkhorde config general chunk_loading_enabled true');
    }
});