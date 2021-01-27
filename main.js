// Create the canvas
let game = new Game()

function setup () {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("canvas");
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

