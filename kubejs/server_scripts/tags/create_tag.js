ServerEvents.tags('item', event => {
  event.add('kubejs:create_related', [
    /create:.*/,
    /petrols_parts:.*/,
    /createaddition:.*/,
    /bits_n_bobs:.*/,
    /moreburners:.*/,
    /create_jetpack:.*/,
    /create_pattern_schematics:.*/,
    /create_central_kitchen:.*/,
    /blazinghot:.*/,
    /create_enlightend:.*/,
    /create_connected:.*/,
    /create_enchantment_industry:.*/,
    /sculkcatalyticchamber:.*/,
    /create_power_loader:.*/,
    /createtransmission:.*/,
    /copycats:.*/,
    /create_wizardry:.*/,
    /vs_clockwork:.*/,
    /trackwork:.*/
  ])
})