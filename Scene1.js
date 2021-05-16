"use strict";
/*var Gra = Gra || {};
Gra.launcher = function (game){};
*/

class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image('Menu', '/assets/menu.png');
      this.load.image('ground','/assets/platform.png');
      this.load.video('wormhole', '/assets/Intro3.mp4','loadeddata',false,true);
      this.load.image('Sun','/assets/Sun.png')
      this.load.image('player','/assets/player.png');
      this.load.image("background", "/assets/back.webp");
      this.load.image("backgroundstart", "/assets/green.jpg");
      this.load.image("astro1","/assets/—Pngtree—futuristic user interface illustration_5439293.png");
      this.load.image("astro2","/assets/astro1.png");
      this.load.image("colors","/assets/images/colors.png");
      //this.load.image("back","/assets/image");
      this.load.video("woodenback","/assets/zGM5b2.webp");
      //this.load.image("ship3","/assets/images/");
      //this.load.image("ship2","/assets/images/");
      this.load.image("ship", "/assets/images/ship.png");
      
      this.load.image('beball', '/assets/images/ship.png');
      this.load.image('atari', '/assets/images/ship.png');
      this.load.image('bikkuriman', '/assets/images/ship.png');
    }

    create() {
      this.backgroundstart = this.add.image(0, 0, "backgroundstart"); 
      this.backgroundstart.setOrigin(0, 0);
      this.backgroundstart.setScale(1);

      var vid = this.add.video(config.width /2, 470, 'wormhole').setScale(1.5);

      vid.play(true);
      this.add.text(config.width/2 - 150, 820, "Press 'Space' to skip", {
        font: "25px Verdana",
        fill: "white"
      });
      // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
      vid.setPaused(false);
      //this.scene.start("Spaceships");
      this.input.keyboard.once('keydown_SPACE', this.start, this);
      this.input.once('pointerdown', this.start, this);
    }
    start(){
      this.scene.start("Start-Menu");
    }
  }