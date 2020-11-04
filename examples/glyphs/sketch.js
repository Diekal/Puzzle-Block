const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var polyomino;

function setup() {
  createCanvas(700, 700);
  polyomino = createPolyomino(elegir_p());
}

function draw() {
  background('#060621');
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'black');
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    polyomino.reflect();
  } else if (keyCode === DOWN_ARROW) {
    polyomino.rotate();
  }
}
function mouseDragged() {
  polyomino.move_p(mouseX,mouseY);
}

function debugPolyomino(polyomino) {
  console.log(polyomino.shape);
}