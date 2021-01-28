// let attack = new Attack();

class Player {
    constructor (x, y, image, healthBarX, healthBarY) {
        this.x = canvasWidth - x;
        this.y = canvasHeight - y;
        // this.laschetX = width - 900;
        // this.laschetY = height - 200;
        // this.soederX = width - 100;
        // this.soederY = height - 200;
        this.health = 100;
        // this.soederHealth = 100;
        this.image = image;
        // this.soederImage;
        this.healthBarX = healthBarX;
        this.healthBarY = healthBarY;
    }

    setup() {
    
    }

    // move to the game
    // preload() {
    //     this.laschetImage = loadImage('/sources/Laschet.png');
    //     this.soederImage = loadImage('/sources/söder.png');
    // }

    draw() {

    rect(this.healthBarX,this.healthBarY,200,15)
    noStroke()
    fill(89, 108, 115);
    rect(this.healthBarX,this.healthBarY,this.health*200/100,15)// 50*200/100
    fill(217, 156, 156,);

    if (this.y < lowestHeigth)    
    this.y = this.y + 1;
        // image(this.laschetImage, this.laschetX, this.laschetY, 75, 200)
        image(this.image, this.x, this.y, playerWidth, playerHeigth)
    }
}