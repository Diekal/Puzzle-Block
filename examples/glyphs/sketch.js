const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var polyomino;
//var polyomino2;
//var polyomino3;

function setup() {
  createCanvas(700, 700);
  polyomino = new Polyomino();
  //polyomino2 = createPolyomino(elegir_p(),100,100);
  //polyomino3 = createPolyomino(elegir_p(),200,200);
}

function draw() {
  background('#060621');
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'black');
  //drawPolyomino(polyomino2, 2, 4, LENGTH, 2, 'black');
  //drawPolyomino(polyomino3, 2, 4, LENGTH, 2, 'black');
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