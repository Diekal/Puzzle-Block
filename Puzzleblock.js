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
    //createCanvas(1200, 660);
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    SegundoMarco = new MarcosCuadros(280, 15, 635, 635, 1);
    TercerMarco = new MarcosCuadros(960, 330, 200, 300, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 100, 150, 2);
    tablero = new Tablero(12, 12);
    poliomino = new Poliomino(50,50,LENGTH);
    //polyomino2 = createPolyomino(elegir_p(),100,100);
    //polyomino3 = createPolyomino(elegir_p(),200,200);
}

function draw() {
    background('#060621');
    //dibujar();
    PrimerMarco.dibujar();
    SegundoMarco.dibujar();
    TercerMarco.dibujar();
    CuartoMarco.dibujar();
    tablero.crearTablero();
    tablero.dibujarTablero();
    tablero.EliminarColumnaFila();
    tablero.dibujarTablero();
    poliomino.dibujar_p();
}

function mouseDragged() {
    poliomino.move_p(mouseX,mouseY);
}
// no entendi para que es esta funcion pero pues estaba en la plantilla
function debugPolyomino(poliomino) {
    console.log(poliomino.shape);
}