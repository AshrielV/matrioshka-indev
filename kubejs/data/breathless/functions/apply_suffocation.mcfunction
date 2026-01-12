# Apply the suffocation effect
effect give @s enlightened_end:suffocation 1 0 true
# Check if the player has not received the message
execute if score @s suffocation_message matches 0 run tellraw @s {"text":"There's no air here! You're out of breath!","color":"red"}
# Set the scoreboard to 1 to indicate the message has been sent
scoreboard players set @s suffocation_message 1