
class MenuScene extends Phaser.Scene{

    constructor() {
        super("Start-Menu");
    }
    
    fullback(){
        this.background3 = this.add.image(0, 0 , "astro2");
        this.background3.setOrigin(-0.01,0.20);
        this.background3.setScale(0.35);
        //this.background2.flipY = false;
        this.background3.angle = 0;
    }
    create() {
        //this.fullback();
        this.background2 = this.add.image(0, 0 , "astro2");
        this.background2.setOrigin(0.5,0.005);
        this.background2.setScale(0.35);
        //this.background2.flipY = false;
        //this.background2.angle = 1;
        
    
        this.add.text(config.width/2 - 280, 20, "Prace wykonali", {
            font: "75px Verdana",
            fill: '#934300'
        });
        this.add.text(config.width/2 - 250, 200, "Michal Ziolkowski", {
            font: "55px Verdana",
            fill: "darkblue"
        });
        this.add.text(config.width/2 - 250, 300, "Przemyslaw Utko", {
            font: "55px Verdana",
            fill: "darkblue"
        });
        this.add.text(config.width/2 - 250, 400, "Dawid Pawlowski", {
            font: "55px Verdana",
            fill: "darkblue"
        });


        this.add.text(config.width/2 - 300, 720, "Press 'Space' to begin", {
            font: "55px Verdana",
            fill: "darkblue"
        });
        this.input.keyboard.once('keydown_SPACE', this.start, this);
        this.input.once('pointerdown', this.start, this);
    }

    start(){
        this.scene.start("Spaceships");
    }

    
    }
    