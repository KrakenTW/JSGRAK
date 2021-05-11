
class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background", "http://skybots.net/drop-view/skybots_purple-background.png-viewInvertGBR");
      this.load.image("ship", "https://www.pinclipart.com/picdir/middle/260-2603418_statek-kosmiczny-icon-clipart.png");
    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
    }
  }