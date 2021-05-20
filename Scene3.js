

class Scene3 extends Phaser.Scene {
    constructor() {
      super("Map-Second");
    }

    create() {
      image0 = this.add.tileSprite(config.width /2, config.height /2 ,1884,900, 'background');
      image1 = this.add.tileSprite(config.width /2, config.height /2 ,1884,900, 'background3');

      tween = this.tweens.addCounter({
        from: 1,
        to: 2,
        duration: 5000,
        ease: 'Sine.easeInOut',
        yoyo: false,
        visible: true,
        repeat: -1
      });
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

      /*for (i = 0; i < 25; i++) {
        this.spawnSprites(i);
      } */

      cursors = this.input.keyboard.createCursorKeys();
      platforms.create(config.width / 2, config.height + 30, 'ground').setScale(1.4).refreshBody();
      //platforms.body.allowGravity = false;
      //platforms.body.immovable = true;
      //platforms.body.velocity.x = 100;
      player = this.physics.add.image(0, config.height / 2, 'player').setScale(0.2);
      player.angle = 90;
      player.setBounce(300);
      player.setCollideWorldBounds(true);
      this.physics.add.group({
        key: 'star',
        frameQuantity: 500,
        gridAlign: { width: 26, height: 12, cellWidth: 75, cellHeight: 75 },
        visible: true,
        allowGravity: true
      });
      


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

      image1.tilePositionX = iter * 200;
      //image1.tilePositionY = Math.sin(-iter) * 400;

      iter += 0.01;
      player.setVelocity(0);
      if(keyV.isDown){
        this.start();
      }
      if (fireButton.isDown)
      {
          player.setVelocityX(-300);
          player.angle = -45;
      }

      if (cursors.left.isDown || keyA.isDown){
            player.setVelocityX(-300);
            player.angle = 90;
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
    start(){
        this.scene.start("Map-Boss");
    }
    
  }
