class Player {
    constructor () {
        this.laschetX = width - 900;
        this.laschetY = height - 200;
        this.soederX = width - 100;
        this.soederY = height - 200;
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

    moveLeft () {

    }

}