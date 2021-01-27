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
    // this.health = health;
    rect(this.healthBarX,this.healthBarY,200,10)
    fill(23, 23,23);
    rect(this.healthBarX,this.healthBarY,this.health*200/100,10)// 50*200/100
    fill("white");
    // rect(740,30,200,10)    
    if (this.y < lowestHeigth)    
    this.y = this.y + 1;
        // image(this.laschetImage, this.laschetX, this.laschetY, 75, 200)
        image(this.image, this.x, this.y, playerWidth, playerHeigth)
    }
    
    // moveLaschetLeft () {
    //     if (this.laschetX >= 50) {
    //     this.laschetX -= 50;
    //     }
    // }

    // moveSoederLeft () {
    //     if(this.soederX >= 500) {
    //     this.soederX -= 50;
    //     }
    // }

    // moveLaschetRight () {
    //     if(this.laschetX <= 300) {
    //     this.laschetX += 50;
    //     }
    // }

    // moveSoederRight () {
    //     if(this.soederX <= 750)
    //     this.soederX += 50;
    // }

    // After pressing the button, the attack function gets invoked and shall as a result pass the coordinates of this 
    // player to the attack js. 
    

    // remove it
    // attackLaschet (attack) {
    //     attack.laschetThrow(this.laschetX, this.laschetY)

    // }

    // attackSoeder () {
    // attack.

    // }

}