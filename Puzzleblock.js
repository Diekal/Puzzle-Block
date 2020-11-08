const LENGTH = 20;
var PrimerMarco;
var SegundoMarco; 
var TercerMarco;
var CuartoMarco;
var poliomino;
var poliomino2;
var tablero;
var Turnos = 0;

//var polyomino2;
//var polyomino3;

function setup() {
    createCanvas(1200, 660);
    //polyomino2 = createPolyomino(elegir_p(),100,100);
    //polyomino3 = createPolyomino(elegir_p(),200,200);
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    SegundoMarco = new MarcosCuadros(280, 15, 635, 635, 1);
    TercerMarco = new MarcosCuadros(960, 330, 200, 300, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 200, 250, 2);
    tablero = new Tablero(12, 12);
    poliomino = new Poliomino(65,65,48);
    poliomino2 = new Poliomino(65,65,48);
    tablero.crearTablero();
    bomba = new Bombas();
    tablero.TableroMemoria[bomba.Cols][bomba.Fil] = "💣";
}

function draw() {
    //dibujar();
    background(255);
    PrimerMarco.dibujar();
    SegundoMarco.dibujar();
    TercerMarco.dibujar();
    CuartoMarco.dibujar();
    tablero.dibujarTablero();
    tablero.EliminarColumnaFila();
    tablero.dibujarTablero();
    poliomino.dibujar_p();
    if (bomba.tiempo >= 20){
        textSize(35);
        text("Perdiste", 990, 600);
    }

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
