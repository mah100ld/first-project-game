//Place the background image for the fight
class Background {

    constructor () {
        this.image;
    }
    
    preload () {
        this.image = loadImage("/sources/kanzleramt.jpg");
    };
    
    draw () {
        image(this.image, 0, 0);
    }
}

class Controls {
     
keyPressed () {
        console.log("Up")

    }

}



