// Runs a command every 5 seconds (100 ticks)

let tickCounter = 0;

ServerEvents.tick(event => {
    // Only run on the server side
    if (!event.server) return;

    tickCounter++;

    // 20 ticks = 1 second → 100 ticks = 5 seconds
    if (tickCounter >= 100) {
        tickCounter = 0;

        // Execute your command exactly as written
        event.server.runCommandSilent(
            'gravity reset @e'
        );
        event.server.runCommandSilent(
            'execute in minecraft:the_end run gravity set_base_strength 0.2 @e[type=!#matrioshka:end_denizens,distance=0..]'
        );
    }
});