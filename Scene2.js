var cursors;
var player;
var platforms;
var HP;
var shield;
var lives;
var weapon;
var fireButton;

class Scene2 extends Phaser.Scene {
    constructor() {
      super("Spaceships");
    }

    create() {
      platforms = this.physics.add.staticGroup();/*
      weapon = game.add.weapon(40, 'bullet');
      weapon.setBulletFrames(0, 80, true);
      weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
      weapon.bulletSpeed = 400;
      weapon.fireRate = 50;*/
      
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
      player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.2);
      //player.setCollideWorldBounds(true);
      
      
      //fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

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
      /*if (fireButton.isDown)
      {
          weapon.fire();
      }*/

      if (cursors.left.isDown){
            player.setVelocityX(-300);
            player.angle = -45;
        }
        else if (cursors.right.isDown){
            player.setVelocityX(300);
            player.angle = +45;
        }
      if (cursors.up.isDown) {
            player.setVelocityY(-300);
            player.angle = 0;
        }
        else if (cursors.down.isDown){
            player.setVelocityY(300);
            player.angle = 0;
        }
    }
    
  }
