"use strict";
/*var Gra = Gra || {};
Gra.launcher = function (game){};
*/

class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      
      this.load.video("liquid", "/assets/skull.mp4");
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
      
      //this.scene.start("Spaceships");
      this.input.keyboard.once('keydown_SPACE', this.start, this);
      this.input.once('pointerdown', this.start, this);
    }
    start(){
      this.scene.start("Start-Menu");
    }
  }