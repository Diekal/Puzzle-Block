class Tablero {
    constructor(columna, fila) {
        this.columna = columna;
        this.fila = fila;
        this.TableroMemoria = Array(this.columna);
    }
    crearTablero() {
        for (var x = 0; x < this.fila; x++) {
            this.TableroMemoria[x] = Array(this.fila);
            for (var j = 0; j < this.columna; j++) {
                this.TableroMemoria[x][j] = "#292B4A";}
        }
    }
    dibujarTablero() {
        strokeWeight(3);
        for (var co = 0; co < this.columna; co++) {
            for (var f = 0; f < this.fila; f++) {
                if (this.TableroMemoria[co][f] != "💣") {
                    fill(this.TableroMemoria[co][f])
                    rect(310 + (co * 48), 45 + (f * 48), 48, 48);
                }
                else {
                    textSize(32);
                    fill("#70729E");
                    rect(310 + (co * 48), 45 + (f * 48), 48, 48);
                    text(this.TableroMemoria[co][f], 306 + (co * 50), 70 + (f * 50));
                }
            }
        }
    }
    EliminarColumnaFila() {
        for (var iME = 11; iME >= 0; iME--) {
            var siEliminarFila = Boolean(true);
            for (var jME = 0; jME < 12; jME++) {
                if (this.TableroMemoria[iME][jME] == "#292B4A") {
                    siEliminarFila = false;
                }
            }
            if (siEliminarFila) {
                var k = iME;
                for (var m = 0; m < 12; m++) {
                    this.TableroMemoria[k][m] = "#292B4A";
                }
                score += 50;
                FilasCompletas += 1;
            }
        }
        for (var iME = 11; iME > 0; iME--) {
            var siEliminarColumna = Boolean(true);
            for (var jME = 0; jME < 12; jME++) {
                if (this.TableroMemoria[jME][iME] == "#292B4A") {
                    siEliminarColumna = false;
                }
            }
            if (siEliminarColumna) {
                var k = iME;
                for (var m = 0; m < 12; m++) {
                    this.TableroMemoria[m][k] = "#292B4A";
                }
                score += 50;
                FilasCompletas += 1;
            }
        }
      
    }
    Colisiones(){

    }
    Bomba(){
        var Cols = int(random(12));
        var Fil = int(random(12)); 
        tablero.TableroMemoria[Cols][Fil] = "💣";
        tablero.dibujarTablero();
    }

}