//Place the background image for the fight
class Game {

    constructor () {
        this.backgroundImage;
    }
    
    preload () {
        this.backgroundImage = loadImage("/sources/kanzleramt.jpg");
    };
    
    draw () {
        image(this.backgroundImage, 0, 0);
    }

    keyPressed () {
        
        if(keyCode === 65) {
            console.log("Up")
        }
        }

}

