var cursors;
var player;
var platforms;
class Scene2 extends Phaser.Scene {
    constructor() {
      super("Spaceships");
    }

    create() {
      platforms = this.physics.add.staticGroup();
      this.background = this.add.image(0, 0, "background");
      this.background.setOrigin(0, 0);
      this.background.setScale(1);
  
      this.add.text(config.width/2 - 70, 20, "Storm - Facer", {
        font: "35px Brush Script MT",
        fill: "yellow"
      });
      for (i = 0; i < 25; i++) {
        this.spawnSprites();
      } 

      cursors = this.input.keyboard.createCursorKeys();
      platforms.create(config.width / 2, config.height +30, 'ground').setScale(5).refreshBody();
      player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.8);
      player.setCollideWorldBounds(true);
      
      this.ship1 = this.add.image(50, 50, "ship");
      this.ship1.setScale(6);
      this.ship1.setOrigin(0);
      this.ship1.flipY = true;
      //this.ship1.background("Black");
      //this.ship1.angle = 0;
      //this.input.keyboard.once('keydown_SPACE', this.createSprite, this);
      //this.input.once('pointerdown', this.start, this);
      
    }

    spawnSprites(){
      
      this.add.sprite(Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800) ,'beball');  
    }

    moveShip(ship,speed){
        ship.y += speed;
    }
   
    update(){
      //this.moveShip(this.ship1, 0.1);
      player.setVelocity(0);
      
      if (cursors.left.isDown){
            player.setVelocityX(-300);
        }
        else if (cursors.right.isDown){
            player.setVelocityX(300);
        }
        if (cursors.up.isDown) {
            player.setVelocityY(-300);
        }
        else if (cursors.down.isDown){
            player.setVelocityY(300);
        }
    }
    
  }
