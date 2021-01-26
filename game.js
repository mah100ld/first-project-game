// let player = new Player (); 

class Game {

    constructor () {
        this.backgroundImage;
        this.laschetImage; 
        this.soederImage;
        // attach for La
        // this.attack = new Attack();
    }


    setup () {
        this.player1 = new Player (900, 200, this.laschetImage); //It is better inside than outside
        this.player2 = new Player (100, 200, this.soederImage);
        this.laschetAttacks = [];
        this.soederAttacks= [];
    }
    
    preload () {
        this.backgroundImage = loadImage("/sources/kanzleramt.jpg");
        // this.player.preload();
        // this.attack.preload();
        this.joeImage = loadImage('sources/joe.png')
        this.ffp2Image = loadImage('sources/ffp2 .png')
        this.laschetImage = loadImage('sources/Laschet.png');
        this.soederImage = loadImage('sources/söder.png');
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

            this.laschetAttacks = this.laschetAttacks.filter((attack) => {
            if(attack.collision(this.player2) || attack.x < 0) { //call the collisiion functin
                return false 
            } else {
                return true
            }
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
            if(this.player2.x >= 500) {
                    this.player2.x -= 50;
                    }
        }

        if (keyCode === 68) {
            if(this.player1.x <= 300) {
                this.player1.x += 50;
                    };
        }

        if (keyCode === 39) {
            if(this.player2.x <= 750) {
                    this.player2.x += 50;
                    };
        }

        if (keyCode === 69) {
            // call attack.laschetThrow(this.player....)
            this.laschetAttacks.push(new Attack(this.joeImage, this.player1.x, this.player1.y))
            // console.log(this.player.laschetX, this.player.laschetY)//how are the coordinates passed?
        }

        if (keyCode === 16) {
            this.soederAttacks.push(new Attack(this.ffp2Image, this.player2.x, this.player2.y))        }
    }

}

