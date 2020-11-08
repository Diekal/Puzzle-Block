var PrimerMarco;
var SegundoMarco; 
var TercerMarco;
var CuartoMarco;
var poliomino;
var poliomino2;
var poliomino3;
var tablero;
var Turnos = 1;
var jugada_valida;
var jugada_valida2;
var jugada_valida3;
var score = 0;
var FilasCompletas = 0;
//var polyomino2;
//var polyomino3;

function setup() {
    createCanvas(1200, 660);
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    SegundoMarco = new MarcosCuadros(280, 15, 635, 635, 1);
    TercerMarco = new MarcosCuadros(960, 330, 200, 300, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 200, 250, 2);
    tablero = new Tablero(12, 12);
    poliomino = new Poliomino(135,150,30);
    poliomino2 = new Poliomino(135,300,30);
    poliomino3 = new Poliomino(135,450,30);
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
    jugada_valida=poliomino.dibujar_sombra(tablero.TableroMemoria);
    jugada_valida2=poliomino2.dibujar_sombra(tablero.TableroMemoria);
    jugada_valida3=poliomino3.dibujar_sombra(tablero.TableroMemoria);
    poliomino.dibujar_p();
    poliomino2.dibujar_p();
    poliomino3.dibujar_p();
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


function mouseDragged() {
    var MX=mouseX;
    var MY=mouseY;
    poliomino.move_p(MX,MY);
    poliomino2.move_p(MX,MY);
    poliomino3.move_p(MX,MY);
    return false;
}
function mouseReleased(){
    if (jugada_valida==0 ){
        poliomino.posx=poliomino.firstposx;
        poliomino.posy=poliomino.firstposy;
    }else{
        tablero.TableroMemoria=poliomino.guardar_tablero(tablero.TableroMemoria);
        poliomino = new Poliomino(135,150,30);
        Turnos += 1;
    }
    if (jugada_valida2==0 ){
        poliomino2.posx=poliomino2.firstposx;
        poliomino2.posy=poliomino2.firstposy;
    }else{
        tablero.TableroMemoria=poliomino2.guardar_tablero(tablero.TableroMemoria);
        poliomino2 = new Poliomino(135,300,30);
        Turnos += 1;
    }
    if (jugada_valida3==0 ){
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
