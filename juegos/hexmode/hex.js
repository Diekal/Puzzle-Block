var PrimerMarco;
var SegundoMarco; 
var TercerMarco;
var CuartoMarco;
var poliomino;
var poliomino2;
var poliomino3;
var tablero;
var posicion;
var posicion2;
var posicion3;
var Turnos = 1;
var score = 0;
var FilasCompletas = 0;
var perder = Boolean(false);
var movimiento = Boolean(false);
var movimiento2 = Boolean(false);
var movimiento3 = Boolean(false);
function setup() {
    //se define cada objeto
    createCanvas(1200, 660);
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 200, 250, 2);
    tablero = new Tablero_Hex( 9, 9, 60);
    poliomino = new Poli_hexagonos(135,150,30);
    poliomino2 = new Poli_hexagonos(135,300,30);
    poliomino3 = new Poli_hexagonos(135,450,30);
    tablero.crearTablero();
    perder=false;
}

function draw() {
    if(perder==false){
        background("#CCCC99");
        PrimerMarco.dibujar();
        CuartoMarco.dibujar();
        tablero.dibujarTablero();
        tablero.EliminarColumnaFila();
        tablero.dibujarTablero();
        posicion=poliomino.dibujar_sombra(tablero.TableroMemoria);
        posicion2=poliomino2.dibujar_sombra(tablero.TableroMemoria);
        posicion3=poliomino3.dibujar_sombra(tablero.TableroMemoria);
        poliomino.dibujar_p();
        poliomino2.dibujar_p();
        poliomino3.dibujar_p();
        //Se agrega el texto del puntaje y el avance   
        textSize(35);
        fill(0);
        textFont('STCaiyun');
        text("Score", 1010, 100);
        text(score, 1025, 140);
        text("Lineas", 1010, 190);
        text(FilasCompletas, 1035, 230);
    }else{
        background(0);
        fill(255);
        textSize(60);
        textFont('STCaiyun');
        text("Game", 500, 300);
        text("Over", 500, 350);  
    }
}
function mousePressed(){
    movimiento=poliomino.verificar_p(mouseX,mouseY);
    movimiento2=poliomino2.verificar_p(mouseX,mouseY);
    movimiento3=poliomino3.verificar_p(mouseX,mouseY);
    return false;
}
// esta funcion detecta cuando se mantiene click y se mueve el mause para llamar a el metodo que da movimiento
function mouseDragged() {
    if (movimiento==true){
        poliomino.move_p(mouseX,mouseY);
    }
    if (movimiento2==true){
        poliomino2.move_p(mouseX,mouseY);
    }
    if (movimiento3==true){
        poliomino3.move_p(mouseX,mouseY);
    }
    return false;
}
// Esta funcion se llama cuando se suleta un click
// dado que la jugada no sea valida, el poliomino recupera su posicion inicial
// Por otro lado si la jugada es valida, guarda el poliomino en el tablero y vuelve a definir el poliomino para generar uno nuevo
function mouseReleased(){
    if (poliomino.jugada==0 ){
        poliomino.posx=poliomino.firstposx;
        poliomino.posy=poliomino.firstposy;
    }else{
        tablero.TableroMemoria=poliomino.guardar_tablero(tablero.TableroMemoria,posicion);
        poliomino = new Poli_hexagonos(135,150,30);
    }
    if (poliomino2.jugada==0 ){
        poliomino2.posx=poliomino2.firstposx;
        poliomino2.posy=poliomino2.firstposy;
    }else{
        tablero.TableroMemoria=poliomino2.guardar_tablero(tablero.TableroMemoria,posicion2);
        poliomino2 = new Poli_hexagonos(135,300,30);
    }
    if (poliomino3.jugada==0 ){
        poliomino3.posx=poliomino3.firstposx;
        poliomino3.posy=poliomino3.firstposy;
    }else{
        tablero.TableroMemoria=poliomino3.guardar_tablero(tablero.TableroMemoria,posicion3);
        poliomino3 = new Poli_hexagonos(135,450,30);
    }
    movimiento=false;
    movimiento2=false;
    movimiento3=false;
    return false;
}
function debugPolyomino(poliomino) {
    console.log(poliomino._shape);
}