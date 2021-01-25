//Place the background image for the fight
class Background {

    constructor () {
        this.image;
    }
    
    preload () {
        this.image = loadImage("/sources/kanzleramt.jpg");
    };
    
    setup () {
        console.log('this is the background')
        image(this.image, 0, 0);
    }
}