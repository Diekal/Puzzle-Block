function setup() {
  createCanvas(1200, 700);
  var poliomino = new Poliomino(25,25,20);
}

function draw() {
  background(220);
  var PrimerMarco = new MarcosCuadros(25, 50, 220, 570, 1);
  PrimerMarco.dibujar();
  var SegundoMarco = new MarcosCuadros(280, 15, 635, 635, 1);
  SegundoMarco.dibujar();
  var TercerMarco = new MarcosCuadros(960, 330, 200, 300, 1);
  TercerMarco.dibujar();
  var CuartoMarco = new MarcosCuadros(1050, 155, 200, 300, 2);
  CuartoMarco.dibujar();
  var tablero = new Tablero(12, 12);
  tablero.crearTablero();
  tablero.dibujarTablero();
  tablero.EliminarColumnaFila();
  tablero.dibujarTablero();
  poliomino.dibujar_p();
}

function mouseDragged() {
  polyomino.move_p(mouseX,mouseY);
}
