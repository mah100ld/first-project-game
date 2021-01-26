// Create the canvas
let game = new Game()

function setup () {
    createCanvas(canvasWidth, canvasHeight);
    game.setup();
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

