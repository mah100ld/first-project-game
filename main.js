// Create the canvas
const game = new Game();

function setup () {
    createCanvas(width, height);
    
}

function preload() {
    game.preload();    
}

function draw () {
    clear();
    game.draw();

}

function keyPressed () {
    game.keyPressed();
}

