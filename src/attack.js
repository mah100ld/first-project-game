class Attack {
//Put the current position of the player's head as starting point, But where is the best?
    constructor (image, x, y) {
        this.objectX = x;
        this.objectY = y;
        this.image = image;
    }
    

    draw() {
        image(this.image, this.objectX, this.objectY, 50, 50);
    }
    //check for collision
    collision (playerX, playerY) {

        let rangeY = playerY + playerHeigth / 2

        if (dist(this.objectX, this.objectY, playerX, rangeY) > 75 ) {
            return false;
        } else {        
            return true;
        }
    }
    
    // the cooridnated of the players have to be pushed
    
    // laschetThrow (laschetX, laschetY) {
        
    //     //image(this.joeImage, laschetX, laschetY, 50, 50);
    //     this.objectX = laschetX;
    //     this.objectY = laschetY;
    // }

    // draw1 (soederX, soederY) {
        
    //     image(this.joeImage, this.laschetX, this.laschetY, 50, 50);
      
    // }

    // drawAttackSoeder ()
}