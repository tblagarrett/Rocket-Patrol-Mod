class Jet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)    // Add to existing scene
        this.points = pointValue    // store pointValue
        this.moveSpeed = game.settings.jetSpeed          // spaceship speed in pixels/frame
    }

    update() {
        // move spaceship left
        this.x += this.moveSpeed

        // wrap from left to right edges
        if (this.x >= game.config.width) {
            this.reset()
        }
    }

    // reset position
    reset() {
        this.x = 0 - this.width
    }
}