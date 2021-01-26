// let player = new Player (); 

class Game {

    constructor () {
        this.backgroundImage;
        this.player1 = new Player (width - 900, height - 200, laschetImage); //It is better inside than outside
        this.player2 = new Player (width - 100, height - 200, soederImage);
        // attach for La
        // this.attack = new Attack();
        this.laschetAttacks = [];
        this.soederAttacks= [];
    }
    
    preload () {
        this.backgroundImage = loadImage("/sources/kanzleramt.jpg");
        // this.player.preload();
        // this.attack.preload();
        this.joeImage = loadImage('/sources/joe.png')
        this.ffp2Image = loadImage('/sources/ffp2 .png')
        this.laschetImage = loadImage('/sources/Laschet.png');
        this.soederImage = loadImage('/sources/söder.png');
    };
    
    draw () {
        image(this.backgroundImage, 0, 0);
        this.player1.draw() // this is the player that is drawn 
        this.player2.draw()
        if (this.laschetAttacks.length !== 0) {
            // better to replace forEach by filter()
            this.laschetAttacks.forEach((attack, index) => {
                attack.objectX++;
                attack.draw();
            })
        }
        if (this.soederAttacks.length !== 0) {
            this.soederAttacks.forEach((attack, index) => {
                attack.objectX--;
                attack.draw();
            })
        }
    }

    //Needs refactoring

    keyPressed () {
        
        if (keyCode === 65) {
            if (this.player1.x >= 50) {
                this.player1.x -= 50;
            }
            // this.player.moveLaschetLeft();
        }

        if (keyCode === 37) {
            this.player.moveSoederLeft();
        }

        if (keyCode === 68) {
            this.player.moveLaschetRight ();
        }

        if (keyCode === 39) {
            this.player.moveSoederRight ();
        }

        if (keyCode === 69) {
            // call attack.laschetThrow(this.player....)
            this.laschetAttacks.push(new Attack(this.joeImage, this.player.laschetX, this.player.laschetY))
            console.log(this.player.laschetX, this.player.laschetY)//how are the coordinates passed?
        }

        // if (keyCode === 16) {
        //     player.attackSoeder();
        // }
    }

}

