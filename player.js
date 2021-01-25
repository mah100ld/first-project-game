let attack = new Attack();

class Player {
    constructor () {
        this.laschetX = width - 900;
        this.laschetY = height - 200;
        this.soederX = width - 100;
        this.soederY = height - 200;
        this.LaschetHealth = 100;
        this.soederHealth = 100;
        this.laschetImage;
        this.soederImage;
    }

    preload() {
        this.laschetImage = loadImage('/sources/Laschet.png')
        this.soederImage = loadImage('/sources/söder.png')
    }

    draw() {
        image(this.laschetImage, this.laschetX, this.laschetY, 75, 200)
        image(this.soederImage, this.soederX, this.soederY, 75, 200)
    }
    
    //Needs refactoring. I tried already putting in "LaschetX" as a parameter in game.js Did not work for now.
    moveLaschetLeft () {
        if (this.laschetX >= 50) {
        this.laschetX -= 50;
        }
    }

    moveSoederLeft () {
        if(this.soederX >= 500) {
        this.soederX -= 50;
        }
    }

    moveLaschetRight () {
        if(this.laschetX <= 300) {
        this.laschetX += 50;
        }
    }

    moveSoederRight () {
        if(this.soederX <= 750)
        this.soederX += 50;
    }

    //do the attack
    attackLaschet () {
        attack.draw(this.laschetX, this.laschetY)

    }

    // attackSoeder () {
    // attack.

    // }

}