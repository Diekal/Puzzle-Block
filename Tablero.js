// JavaScript source code
var score;
var FilasCompletas;
var TableroMemoria = Array(this.columna);
class Tablero {
    constructor(columna, fila) {
        this.columna = columna;
        this.fila = fila;
    }
    crearTablero() {
        for (var x = 0; x < this.fila; x++) {
            TableroMemoria[x] = Array(this.fila);
            for (var j = 0; j < this.columna; j++) {
                TableroMemoria[x][j] = "#292B4A";}
        }
    }
    dibujarTablero() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.lineWidth = "1";
        ctx.strokeStyle = "#52568E";
        for (var co = 0; co < this.columna; co++) {
            for (var f = 0; f < this.fila; f++) {
                ctx.beginPath();
                ctx.rect(310 + (co * 48), 45 + (f * 48), 48, 48);
                ctx.stroke();
                ctx.fillStyle = TableroMemoria[co][f];
                ctx.fill();
            }
        }
          }
    EliminarColumnaFila() {
        for (var iME = 11; iME >= 0; iME--) {
            var siEliminarFila = Boolean(true);
            for (var jME = 0; jME < 12; jME++) {
                if (TableroMemoria[iME][jME] == "#292B4A") {
                    siEliminarFila = false;
                }
            }
            if (siEliminarFila) {
                var k = iME;
                for (var m = 0; m < 12; m++) {
                    TableroMemoria[k][m] = "#292B4A";
                }
                score += 50;
                FilasCompletas += 1;
            }
        }
        for (var iME = 11; iME > 0; iME--) {
            var siEliminarColumna = Boolean(true);
            for (var jME = 0; jME < 12; jME++) {
                if (TableroMemoria[jME][iME] == "#292B4A") {
                    siEliminarColumna = false;
                }
            }
            if (siEliminarColumna) {
                var k = iME;
                for (var m = 0; m < 12; m++) {
                    TableroMemoria[m][k] = "#292B4A";
                }
                score += 50;
                FilasCompletas += 1;
            }
        }
        for (var i in TableroMemoria) {
            console.log("row " + i);
            for (var j in TableroMemoria[i]) {
                console.log(" " + TableroMemoria[i][j]);
            }
        }
    }

}
