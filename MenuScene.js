
class MenuScene extends Phaser.Scene{

    constructor() {
        super("Start-Menu");
    }
    
    fullback(){
        this.background3 = this.add.image(0, 0 , "astro2");
        this.background3.setOrigin(-0.01,0.20);
        this.background3.setScale(0.35);
        //this.background2.flipY = false;
        this.background3.angle = 0;
    }
    create() {
        image0 = this.add.tileSprite(config.width /2, config.height /2 ,1884,900, 'background');
        image1 = this.add.tileSprite(config.width /2, config.height /2 ,1884,900, 'background2');
        tween = this.tweens.addCounter({
            from: 1,
            to: 2,
            duration: 5000,
            ease: 'Sine.easeInOut',
            yoyo: false,
            visible: true,
            repeat: -1
          });
        this.music = this.sound.add('background_music');
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);
        this.background3 = this.add.image(1600, 433 , "astro2");
        this.background3.setScale(0.35);
        
    
        this.add.text(config.width/2 - 280, 20, "Prace wykonali", {
            font: "75px Verdana",
            fill: '#934300'
        });
        this.add.text(config.width/2 - 250, 200, "Michal Ziolkowski", {
            font: "55px Verdana",
            fill: "darkblue"
        });
        this.add.text(config.width/2 - 250, 300, "Przemyslaw Utko", {
            font: "55px Verdana",
            fill: "darkblue"
        });
        this.add.text(config.width/2 - 250, 400, "Dawid Pawlowski", {
            font: "55px Verdana",
            fill: "darkblue"
        });


        this.add.text(config.width/2 - 300, 720, "Press 'Space' to begin", {
            font: "55px Verdana",
            fill: "darkblue"
        });
        skipButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.input.keyboard.once('keydown_SPACE', this.start, this);
        this.input.once('pointerdown', this.start, this);
    }

    update(){
        image1.tilePositionY = iter * 100;
        iter -= 0.01;
        if(skipButton.isDown){
          this.start();
         }
    }
    start(){
        this.scene.start("Spaceships");
    }

    
    }
    