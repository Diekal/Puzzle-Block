//Se declaran los objetos a usar
var PrimerMarco;
var SegundoMarco; 
var TercerMarco;
var CuartoMarco;
var poliomino;
var poliomino2;
var poliomino3;
var tablero;
<<<<<<< HEAD
var Turnos = 1;
var jugada_valida;
var jugada_valida2;
var jugada_valida3;
=======
var Turnos = 0;
>>>>>>> d6b7b7108465afcf95f1d5972e08a86bd3e6eac9
var score = 0;
var FilasCompletas = 0;

function setup() {
    //se define cada objeto
    createCanvas(1200, 660);
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    SegundoMarco = new MarcosCuadros(280, 15, 635, 635, 1);
    TercerMarco = new MarcosCuadros(960, 330, 200, 300, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 200, 250, 2);
    tablero = new Tablero(12, 12);
    poliomino = new Poliomino(135,150,30);
    poliomino2 = new Poliomino(135,350,30);
    poliomino3 = new Poliomino(135,500,30);
    tablero.crearTablero();
    bomba = new Bombas();
    bomba.crearBomba();
}

function draw() {

    background(255);
    PrimerMarco.dibujar();
    SegundoMarco.dibujar();
    TercerMarco.dibujar();
    CuartoMarco.dibujar();
    tablero.dibujarTablero();
    tablero.EliminarColumnaFila();
    tablero.dibujarTablero();
    poliomino.dibujar_sombra(tablero.TableroMemoria);
    poliomino2.dibujar_sombra(tablero.TableroMemoria);
    poliomino3.dibujar_sombra(tablero.TableroMemoria);
    poliomino.dibujar_p();
    poliomino2.dibujar_p();
    poliomino3.dibujar_p();
    //Se agrega el texto del puntaje y el avance
    textSize(35);
    textFont('STCaiyun');
    text("Score", 1010, 100);
    text(score, 1025, 140);
    text("Lineas", 1010, 190);
    text(FilasCompletas, 1035, 230);   
     if (Turnos % 5 == 0 ){
        bomba = new Bombas();
        bomba.crearBomba();
        Turnos = 1;
    }
    if (bomba.tiempo >= 20){
        text("Perdiste", 990, 600);
    }

}

// esta funcion detecta cuando se mantiene click y se mueve el mause para llamar a el metodo que da movimiento
function mouseDragged() {
    poliomino.move_p(mouseX,mouseY);
    poliomino2.move_p(mouseX,mouseY);
    poliomino3.move_p(mouseX,mouseY);
}
// Esta funcion se llama cuando se suleta un click
// dado que la jugada no sea valida, el poliomino recupera su posicion inicial
// Por otro lado si la jugada es valida, guarda el poliomino en el tablero y vuelve a definir el poliomino para generar uno nuevo
function mouseReleased(){
    if (poliomino.jugada ==0 ){
        poliomino.posx=poliomino.firstposx;
        poliomino.posy=poliomino.firstposy;
    }else{
        tablero.TableroMemoria=poliomino.guardar_tablero(tablero.TableroMemoria);
        poliomino = new Poliomino(135,150,30);
        Turnos += 1;
    }
    if (poliomino2.jugada==0 ){
        poliomino2.posx=poliomino2.firstposx;
        poliomino2.posy=poliomino2.firstposy;
    }else{
        tablero.TableroMemoria=poliomino2.guardar_tablero(tablero.TableroMemoria);
        poliomino2 = new Poliomino(135,300,30);
        Turnos += 1;
    }
    if (poliomino3.jugada==0 ){
        poliomino3.posx=poliomino3.firstposx;
        poliomino3.posy=poliomino3.firstposy;
    }else{
        tablero.TableroMemoria=poliomino3.guardar_tablero(tablero.TableroMemoria);
        poliomino3 = new Poliomino(135,450,30);
        Turnos += 1;
    }
    return false;
}
function debugPolyomino(poliomino) {
    console.log(poliomino._shape);
}
