# If the player has water breathing, clear the suffocation effect
execute if predicate breathless:has_water_breathing run function breathless:clear_suffocation
# If the player does NOT have water breathing, apply the suffocation effect
execute unless predicate breathless:has_water_breathing run function breathless:apply_suffocation