// Create the canvas
const game = new Game();
const player = new Player();


function setup () {
    createCanvas(width, height);
    
}

function preload() {
    game.preload();
    player.preload();
    
}

function draw () {
    clear();
    game.draw();
    player.draw()

}

function keyPressed () {
    controls.keyPressed();
}

