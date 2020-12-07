var PrimerMarco;
var SegundoMarco; 
var TercerMarco;
var CuartoMarco;
var poligonomino;
var poligonomino2;
var poligonomino3;
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
var lados = 4;//define el numero de lados que tendra cada figura

function setup() {
    //se define cada objeto
    createCanvas(1200, 660);;
    PrimerMarco = new MarcosCuadros(25, 50, 220, 550, 1);
    CuartoMarco = new MarcosCuadros(1050, 165, 200, 250, 2);
    tablero = new Tablero_Poligono( 12, 12, 24);
    poligonomino = new Poligono(135,150,15);
    poligonomino2 = new Poligono(135,300,15);
    poligonomino3 = new Poligono(135,450,15);
    tablero.crearTablero();
    perder=false;
}

function draw() {
    if(perder==false){
        background("#9999CC");
        PrimerMarco.dibujar();
        CuartoMarco.dibujar();
        tablero.dibujarTablero(lados);
        tablero.EliminarColumnaFila();
        tablero.dibujarTablero(lados);
        posicion=poligonomino.dibujar_sombra(tablero.TableroMemoria,334,69,48,24,lados);
        posicion2=poligonomino2.dibujar_sombra(tablero.TableroMemoria,334,69,48,24,lados);
        posicion3=poligonomino3.dibujar_sombra(tablero.TableroMemoria,334,69,48,24,lados);
        poligonomino.dibujar_p(lados);
        poligonomino2.dibujar_p(lados);
        poligonomino3.dibujar_p(lados);
        //Se agrega el texto del puntaje y el avance   
        textSize(35);
        fill(0);
        textFont('STCaiyun');
        text("Score", 1010, 100);
        text(score, 1025, 140);
        text("Lineas", 1010, 190);
        text(FilasCompletas, 1035, 230);
    }
}
//se identifica la situacion en que es pocible el movimiento de la figura
function mousePressed(){
    movimiento=poligonomino.verificar_p(mouseX,mouseY);
    movimiento2=poligonomino2.verificar_p(mouseX,mouseY);
    movimiento3=poligonomino3.verificar_p(mouseX,mouseY);
    return false;
}
// esta funcion detecta cuando se mantiene click y se mueve el mause para llamar a el metodo que da movimiento
function mouseDragged() {
    if (movimiento==true){
        poligonomino.move_p(mouseX,mouseY);
    }
    if (movimiento2==true){
        poligonomino2.move_p(mouseX,mouseY);
    }
    if (movimiento3==true){
        poligonomino3.move_p(mouseX,mouseY);
    }
    return false;
}
// Esta funcion se llama cuando se suleta un click
// dado que la jugada no sea valida, el poligonomino recupera su posicion inicial
// Por otro lado si la jugada es valida, guarda el poligonomino en el tablero y vuelve a definir el poligonomino para generar uno nuevo
function mouseReleased(){
    if (poligonomino.jugada==0 ){
        poligonomino.posx=poligonomino.firstposx;
        poligonomino.posy=poligonomino.firstposy;
    }else{
        tablero.TableroMemoria=poligonomino.guardar_tablero(tablero.TableroMemoria,posicion);
        poligonomino = new Poligono(135,150,15);
    }
    if (poligonomino2.jugada==0 ){
        poligonomino2.posx=poligonomino2.firstposx;
        poligonomino2.posy=poligonomino2.firstposy;
    }else{
        tablero.TableroMemoria=poligonomino2.guardar_tablero(tablero.TableroMemoria,posicion2);
        poligonomino2 = new Poligono(135,300,15);
    }
    if (poligonomino3.jugada==0 ){
        poligonomino3.posx=poligonomino3.firstposx;
        poligonomino3.posy=poligonomino3.firstposy;
    }else{
        tablero.TableroMemoria=poligonomino3.guardar_tablero(tablero.TableroMemoria,posicion3);
        poligonomino3 = new Poligono(135,450,15);
    }
    movimiento=false;
    movimiento2=false;
    movimiento3=false;
    return false;
}