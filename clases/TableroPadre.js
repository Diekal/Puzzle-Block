class Tablero {
    constructor(columna, fila, tamaño) {
        this.columna = columna;
        this.fila = fila;
        this.TableroMemoria = Array(this.columna);
        this.tamaño = tamaño;
    }
    crearTablero() { // Crea un arreglo bidimensional de celdas del color "#292B4A" para tener un registro en memoria
        for (var x = 0; x < this.fila; x++) {
            this.TableroMemoria[x] = Array(this.fila);
            for (var j = 0; j < this.columna; j++) {
                this.TableroMemoria[x][j] = "#292B4A";}
        }
    }
    dibujarTablero() { //Dibuja el tablero de acuerdo al color o si es una bomba la figura 
        for (var co = 0; co < this.columna; co++) {
            for (var f = 0; f < this.fila; f++) {
                if (this.TableroMemoria[co][f] != "💣") {
                    fill(this.TableroMemoria[co][f])
                    rect(310 + (co * this.tamaño), 45 + (f * this.tamaño), this.tamaño, this.tamaño);
                }
                else {
                    textSize(32);
                    fill("#70729E");
                    rect(310 + (co * this.tamaño), 45 + (f * this.tamaño), this.tamaño, this.tamaño);
                    text(this.TableroMemoria[co][f], 306 + (co * (this.tamaño + 2)), 70 + (f * (this.tamaño + 2)));}
            }
        }
    }
    RevisarFila() { 
        var siEliminarFila = Boolean(true); //Es para indicar si una fila esta compuesta de valores diferentes a "#292B4A" es decir si todas las celdas estan ocupadas.
        for (var jME = 0; jME < this.fila; jME++) {
             if (this.TableroMemoria[iME][jME] == "#292B4A") {
                    siEliminarFila = false;}
            }
        }
    RevisarColumna(){
        var siEliminarColumna = Boolean(true); // Elimina Columnas.
        for (var jME = 0; jME < this.columna; jME++) {
            if (this.TableroMemoria[jME][iME] == "#292B4A") {
                siEliminarColumna = false;
                }
            }
      
    }
}