// Create the canvas
const background = new Background;
const laschet = new Laschet();
const soeder = new Soeder();
const controls = new Controls();

function setup () {
    createCanvas(width, height);
    
}

function preload() {
    background.preload();
    laschet.preload();
    soeder.preload();
    
}

function draw () {
    clear();
    background.draw();
    laschet.draw();
    soeder.draw();

}

function keys () {
    controls.keyPressed();
}

