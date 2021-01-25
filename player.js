class Laschet {

    constructor () {
        this.x = width - 900;
        this.y = height - 200;
        this.image;
    }

    preload () {
        this.image = loadImage('/sources/Laschet.png')
        console.log("picture")

    }

    draw () {
        image (this.image, this.x, this.y, 75, 200)
    }

    moveLeft () {
        this.y -= 100
        console.log("It moves")
    }

}



class Soeder {

    constructor () {
        this.x = width - 100;
        this.y = height - 200;
        this.image;
    }

    preload () {
        this.image = loadImage('/sources/söder.png')
        console.log("picture")

    }

    draw () {
        image (this.image, this.x, this.y, 75, 200)
    }

}