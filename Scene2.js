var cursors;
var player;
var platforms;
var HP;
var shield;
var lives;
//let weapon;
let keyA;
let keyS;
let keyD;
let keyW;
let fireButton;

class Scene2 extends Phaser.Scene {
    constructor() {
      super("Spaceships");
    }

    create() {
      keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      //weapon = this.add.weapon(10,'bullet');
      //weapon = this.add.Phaser.weapon(10,'bullet');
      platforms = this.physics.add.staticGroup();
      /*this.weapon = this.add.image(40, 'bullet');*/
      /*
      weapon.setBulletFrames(0, 80, true);
      this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
      this.weapon.bulletSpeed = 400;
      this.weapon.fireRate = 50;*/
      
      this.background = this.add.image(0, 0, 'background');
      this.background.setOrigin(0, 0);
      this.background.setScale(1);
  
      this.add.text(config.width/2 - 70, 20, "Storm - Facer", {
        font: "35px Brush Script MT",
        fill: "yellow"
      });

      /*for (i = 0; i < 25; i++) {
        this.spawnSprites(i);
      } */

      cursors = this.input.keyboard.createCursorKeys();
      platforms.create(config.width / 2, config.height + 30, 'ground').setScale(5).refreshBody();
      platforms.body.allowGravity = false;
      platforms.body.immovable = true;
      platforms.body.velocity.x = 100;
      player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.2);
      player.setCollideWorldBounds(true);
      
      


      this.ship1 = this.add.image(50, 50, "ship");
      this.ship1.setScale(6);
      this.ship1.setOrigin(0);
      this.ship1.flipY = true;
      //weapon.trackSprite(player, 0, 0, true);
    }

    /*
    spawnSprites(i){
      
     alien[i] =  this.add.sprite(Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800) ,'beball');  
    }*/

    //moveShip(ship,speed){
    //    ship.y += speed;
    //}
   
    update(){
      //this.moveShip(this.ship1, 0.1);
      player.setVelocity(0);
      if (fireButton.isDown)
      {
          player.setVelocityX(-300);
          player.angle = -45;
      }

      if (cursors.left.isDown || keyA.isDown){
            player.setVelocityX(-300);
            player.angle = -45;
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
    
  }
