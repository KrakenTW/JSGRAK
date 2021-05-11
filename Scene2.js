class Scene2 extends Phaser.Scene {
    constructor() {
      super("Spaceships");
    }
  
    create() {
      this.background = this.add.image(0, 0, "background");
      this.background.setOrigin(0, 0);
  
      this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship");
  
      this.add.text(20, 20, "Playing game", {
        font: "25px Arial",
        fill: "yellow"
      });
  
      this.ship1.setScale(0.2);
      this.ship1.setOrigin(0.2);
      this.ship1.flipY = true;
      //this.ship1.background("Black");
      this.ship1.angle = 0;
      
    }
    moveShip(ship,speed){
        ship.y += speed;
    }
    update(){
        this.moveShip(this.ship1, 1);
    }
  }
