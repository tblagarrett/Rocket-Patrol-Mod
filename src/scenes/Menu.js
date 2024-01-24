class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/img/rocket.png')
        this.load.image('spaceship', './assets/img/spaceship.png')
        this.load.image('starfield', './assets/img/starfield.png')
        this.load.image('jet', './assets/img/jet.png')
        this.load.image('menu', './assets/img/menu.png')

        // load audio
        this.load.audio('sfx-select', './assets/sfx/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx/sfx-shot.wav')

        // load spritesheet
        this.load.spritesheet('explosion', './assets/img/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
        this.load.spritesheet('jet-explosion', './assets/img/jet-explosion.png', {
          frameWidth: 32,
          frameHeight: 16,
          startFrame: 0,
          endFrame: 9
        })
    }

    create() {
        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        })

        this.anims.create({
          key: 'jet-explode',
          frames: this.anims.generateFrameNumbers('jet-explosion', { start: 0, end: 9, first: 0}),
          frameRate: 30
        })

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        // display menu
        this.add.image(0, 0, 'menu').setOrigin(0, 0)
    
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            jetSpeed: 5,
            gameTimer: 60000,
            hitBonus: 3,
            missPenalty: -1
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            jetSpeed: 7,
            gameTimer: 45000,
            hitBonus: 1,
            missPenalty: -3
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
      }
}