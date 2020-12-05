// Rompecabezas
var img;
class TableroRompecabezas extends Tablero{
    constructor(columna, fila) {
       super(columna, fila);
    }
    crearTablero(){
        super.crearTablero();
    }
    RevisarFila() { 
        var RompecabezasCompleto = Boolean(true);
        for (var iME = this.fila; iME >= 0; iME--) {
             super.RevisarFila();
            if (siEliminarFila == false){
              var perder = Boolean(true);
              break;
            }
            var perder = Boolean(false);
    }
 }
 preload() {
  img = loadImage('assets/bricks.jpg');
}
 setup() {
  imageMode(CENTER);
  image(img, 50, 50, 80, 80);
  }
}

class Ficha extends Polinomio{
   
}