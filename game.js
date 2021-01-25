let player = new Player (); 

class Game {

    constructor () {
        this.backgroundImage;
    }
    
    preload () {
        this.backgroundImage = loadImage("/sources/kanzleramt.jpg");
        player.preload();

    };
    
    draw () {
        image(this.backgroundImage, 0, 0);
        player.draw()
    }

    //Needs refactoring
    keyPressed () {
        
        if (keyCode === 65) {
            player.moveLaschetLeft();
        }

        if (keyCode === 37) {
            player.moveSoederLeft();
    
        }

        if (keyCode === 68) {
            player.moveLaschetRight ();
        }

        if (keyCode === 39) {
            player.moveSoederRight ();
        }

        // if (keyCode === 69) {
        //     player.attackLaschet(); 
        // }

        // if (keyCode === 16) {
        //     player.attackSoeder();
        // }
    }

}

