class PreloadScene extends Phaser.Scene {

	constructor() {
		super({key : 'preloadScene'}); 
	}

	preload() {

		this.load.image('background', 'images/tut/background.png');
		for(var i =0;i<30;i++) {
			this.load.image('background_'+i, 'images/tut/background.png');
		}

		this.load.on('progress', this.updateBar);
		this.load.on('complete', this.complete);
	}

	updateBar(percentage) {
		console.log("P:" + percentage);
	}

	complete() {
		console.log("COMPLETE!");
	}

}

export default PreloadScene;