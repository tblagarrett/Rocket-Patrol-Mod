/*
Name: Garrett Blake
Title: Spaceship Guard
Time: 
Mods:
- Allow the player to control the Rocket after it's fired (1)
Create 4 new explosion sound effects and randomize which one plays on impact (3)
- Display the time remaining (in seconds) on the screen (3)
Create a new title screen (e.g., new artwork, typography, layout) (3)
- Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
- Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT