// let player = new Player (); 

class Game {

    constructor () {
        this.backgroundImage;
        this.laschetImage; 
        this.soederImage;
        this.end = false;
    }
   


    setup () {
        this.player1 = new Player (900, 200, this.laschetImage, 50, 30); //It is better inside than outside
        this.player2 = new Player (150, 200, this.soederImage, 740, 30);
        this.laschetAttacks = [];
        this.soederAttacks= [];
    }
    
    preload () {
        this.backgroundImage = loadImage('./src/images/kanzleramt.jpg');
        // this.player.preload();
        // this.attack.preload();
        this.joeImage = loadImage('./src/images/joe.png');
        this.ffp2Image = loadImage('./src/images/ffp2.png');
        this.laschetImage = loadImage('./src/images/Laschet.png');
        this.soederImage = loadImage('./src/images/soeder.png');
        
    };
    
    draw () {

        image(this.backgroundImage, 0, 0);
       
        this.player1.draw() // this is the player that is drawn
        this.player2.draw()

        if (this.laschetAttacks.length !== 0) {
            // better to replace forEach by filter()
            this.laschetAttacks.forEach((attack) => {
                attack.objectX++;
                attack.draw();
            })

            this.laschetAttacks.forEach((attack) => {
                if (attack.collision(this.player2.x, this.player2.y)) {
                    this.player2.health -= 10;
                    this.endGame();
                    console.log(this.player2.health);
                    console.log(this.player1)
                }})

            this.laschetAttacks = this.laschetAttacks.filter((attack) => {
            if(attack.collision(this.player2.x, this.player2.y) || attack.objectX.index > canvasWidth) { //call the collisiion functin with argument player2 coordinates - need to check wheater x and y
                return false // kill it from the array
            } else {
                return true //keep it within the array
            }
            })
        
        }

        if (this.soederAttacks.length !== 0) {
            this.soederAttacks.forEach((attack) => {
                attack.objectX--;
                attack.draw();
            })

            this.soederAttacks.forEach((attack) => {
                if (attack.collision(this.player1.x, this.player1.y)) {
                    this.player1.health -= 10;
                    this.endGame();                    
                    console.log(this.player1.health);
                }})

            this.soederAttacks = this.soederAttacks.filter((attack) => {
                if(attack.collision(this.player1.x, this.player1.y) || attack.objectX.index < 0) { //call the collisiion functin with argument player2 coordinates - need to check wheater x and y
                    return false // kill it from the array
                } else {
                    return true //keep it within the array
                }
            })    
        }   
    }

    endGame () {
        if (this.player1.health === 0) {
        localStorage.setItem('winner', `Söder`);
        window.location.href = "./result.html";
        } else if (this.player2.health === 0) {
            localStorage.setItem('winner', `Laschet`); 
            window.location.href = "./result.html"; //this does not work locally but is the path
        }
    } 

    keyPressed () {
        
        if (keyCode === 65) {
            if (this.player1.x >= canvasWidth - 950) {
                this.player1.x -= 50;
            }
        }

        if (keyCode === 37) {
            if(this.player2.x >= canvasWidth - 500) {
                    this.player2.x -= 50;
                    }
        }

        if (keyCode === 68) {
            if(this.player1.x <= canvasWidth - 500) {
                this.player1.x += 50;
                    };
        }

        if (keyCode === 39) {
            if(this.player2.x <= canvasWidth - 100) {
                    this.player2.x += 50;
                    };
        }

        if (keyCode === 87) {
            this.player1.y -= 100;
        }

        if (keyCode === 38) {
            this.player2.y -= 100;
        }

        if (keyCode === 69) {
            // call attack.laschetThrow(this.player....)
            this.laschetAttacks.push(new Attack(this.joeImage, this.player1.x, this.player1.y))
            // console.log(this.player.laschetX, this.player.laschetY)//how are the coordinates passed?
        }

        if (keyCode === 16) {
            this.soederAttacks.push(new Attack(this.ffp2Image, this.player2.x, this.player2.y))        
        }
    }

}

// gameLogic() {
//     if (this.diver.deadDwellers <= 1) {
//         console.log('deadfish works');
//         localStorage.setItem('deadDwellers', this.diver.deadDwellers);
//         window.location.href = "/result.html"
//     } else {
//         console.log('function connected');
//     }
// }