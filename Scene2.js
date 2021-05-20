var cursors;
var player;
let platforms;
let powerBar;
let healthBar;
//let weapon;
let keyA;
let keyS;
let keyD;
let keyW;
let keyV;
let fireButton;
var image0;
var image1;
var tween;
var iter = 0;
var score = 0;
var scoreText;
var lasers;
var laser;

class Scene2 extends Phaser.Scene {
    constructor() {
      super("Spaceships");
    }

    create() {
      
      //tworzenie grupy laserów na razie niewidocznych
      lasers = this.add.group();
      lasers.enableBody = true;
      lasers.physicsBodyType = Phaser.Physics.ARCADE;
      lasers.createMultiple(20,'laser');
      //lasers.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetLaser);
      //lasers.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
      //lasers.setAll('checkWorldBounds', true);

      image0 = this.add.tileSprite(config.width /2, config.height /2 ,1884,900, 'background');
      image1 = this.add.tileSprite(config.width /2, config.height /2 ,1884,900, 'background2');

      tween = this.tweens.addCounter({
        from: 1,
        to: 2,
        duration: 5000,
        ease: 'Sine.easeInOut',
        yoyo: false,
        visible: false,
        repeat: -1
      });

      //Deklaracja przycisków
      keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
      fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);



      platforms = this.physics.add.staticGroup();
      this.add.text(config.width/2 - 70, 20, "Storm - Facer", {
        font: "35px Brush Script MT",
        fill: "yellow"
      });


      cursors = this.input.keyboard.createCursorKeys();
      platforms.create(config.width / 2, config.height + 30, 'ground').setScale(1.4).refreshBody();
      platforms.create(800, 400, 'ground').setScale(0.3);
      platforms.create(175, 300, 'ground').setScale(0.3);
      platforms.create(1750, 220, 'ground').setScale(0.3);
      platforms.create(1400, 400, 'ground').setScale(0.3);
      platforms.create(550, 650, 'ground').setScale(0.3);
      platforms.create(750, 80, 'ground').setScale(0.3);
      //platforms.forEach()
      //platforms.body.allowGravity = false;
      //platforms.body.immovable = true;
      //platforms.body.velocity.x = 100;
      player = this.physics.add.sprite(0, config.height / 2, 'player').setScale(0.2);
      player.angle = +90;
      player.setBounce(500);
      //player.anchor.setTo(0.5, 0.5);
      player.setCollideWorldBounds(true);
      this.physics.add.group({
        key: 'star',
        frameQuantity: 500,
        gridAlign: { width: 26, height: 12, cellWidth: 75, cellHeight: 75 },
        visible: true,
        allowGravity: true
      });
      
      scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
      //weapon.trackSprite(player, 0, 0, true);
      //tworzenie tarczy oraz paska hp
      this.HP = this.add.image(25,25,'HP');
      this.SHIELD = this.add.image(25,100,'SHIELD');
      healthBar=this.makeBar(45,10,0x2ecc71).setScale(0.5);
      this.setValue(healthBar,100);
      powerBar=this.makeBar(45,85,0xe74c3c).setScale(0.5);
      this.setValue(powerBar,50);
    }
    makeBar(x,y,color){
      //draw the bar
      let bar = this.add.graphics();

      //color the bar
      bar.fillStyle(color, 1);

      //fill the bar with a rectangle
      bar.fillRect(0, 0, 200, 50);
      
      //position the bar
      bar.x = x;
      bar.y = y;

      //return the bar
      return bar;
    }
    setValue(bar,percentage) {
      //scale the bar
      bar.scaleX = percentage/100;
    }
    resetLaser(laser) {
      // Destroy the laser
      laser.kill();
    }
   
    update(){
      image1.tilePositionX = iter * 200;//automatyczne przesuwanie mapy w lewo
      iter += 0.01;//predkosc przesuwania
      player.setVelocity(0);
      if(keyV.isDown){
        this.start();
      }
      if (fireButton.isDown){
          touchDown();
        
      }

      if (cursors.left.isDown || keyA.isDown){
            player.setVelocityX(-300);
            player.angle = +90;
        }
        else if (cursors.right.isDown || keyD.isDown){
            player.setVelocityX(300);
            player.angle = +90;
        }
      if (cursors.up.isDown || keyW.isDown) {
            player.setVelocityY(-300);
            player.angle = +45;
        }
        else if (cursors.down.isDown || keyS.isDown){
            player.setVelocityY(300);
            player.angle = +135;
        }
    }
    touchDown() {
      fireLaser();
    }

    fireLaser() {
       laser = lasers.getFirstExists(false);
      if (laser) {
        laser.body.velocity.y = -500;
      }
    }
    start(){
        this.scene.start("Map-Second");
    }
    
  }
