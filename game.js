var config = {
    type: Phaser.AUTO,
    width: 1884,
    height: 900,
    backgroundColor: 0x000000,
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false
      }
  },
    scene: [ Scene1, MenuScene, Scene2],
    pixelArt: true ,
    audio: {
        disableWebAudio: true
    }
  }
   
var game = new Phaser.Game(config);

