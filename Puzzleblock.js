const LENGTH = 20;
var PrimerMarco;
var SegundoMarco; 
var TercerMarco;
var CuartoMarco;
var poliomino;
var tablero;
//var polyomino2;
//var polyomino3;

function setup() {
<<<<<<< HEAD
    createCanvas(1200, 660);
    //polyomino2 = createPolyomino(elegir_p(),100,100);
    //polyomino3 = createPolyomino(elegir_p(),200,200);
=======
    createCanvas(1200, 700);
>>>>>>> c31fe5dbb2b66cda1b335b415365cb7a4272b56f
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    SegundoMarco = new MarcosCuadros(280, 15, 635, 635, 1);
    TercerMarco = new MarcosCuadros(960, 330, 200, 300, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 200, 250, 2);
    tablero = new Tablero(12, 12);
    poliomino = new Poliomino(65,65,45);
}

function draw() {
    //dibujar();
    background(255);
    tablero.crearTablero();
    PrimerMarco.dibujar();
    SegundoMarco.dibujar();
    TercerMarco.dibujar();
    CuartoMarco.dibujar();
    tablero.dibujarTablero();
<<<<<<< HEAD
=======
    poliomino.dibujar_p();
>>>>>>> c31fe5dbb2b66cda1b335b415365cb7a4272b56f
    tablero.EliminarColumnaFila();
    tablero.dibujarTablero();
    poliomino.dibujar_p();
}

function mouseDragged() {
    poliomino.move_p(mouseX,mouseY);
  }
function mouseReleased(){
         
}
// no entendi para que es esta funcion pero pues estaba en la plantilla
function debugPolyomino(poliomino) {
    console.log(poliomino._shape);
}