var config = {
    type: Phaser.AUTO,
    width: 1884,
    height: 900,
    backgroundColor: 0x000000,
    physics: {
      default: 'arcade',
      arcade: { 
        debug: false,
        fps: 300, 
        gravity: { x: -13600 } 
      }
  },
    scene: [ Scene1, MenuScene, Scene2, Scene3,SceneBoss],
    pixelArt: true ,
    audio: {
        disableWebAudio: true
    }
  }
   
var game = new Phaser.Game(config);

