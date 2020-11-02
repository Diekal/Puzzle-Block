// JavaScript source code
var matrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var score;
var FilasCompletas;
function EliminarColumnaFila() {
    for (var iME = 9; iME > 0; iME--) {
        var siEliminarFila =  Boolean(true);
        for (var jME = 0; jME < 10; jME++) {
            if (matrix[iME][jME] === 0) {
                siEliminarFila = false;
            }
        }
        if (siEliminarFila) {
            var k = iME;
            for (var m = 0; m < 10; m++) {
                matrix[k][m] = 0;
            }
            score += 50;
            FilasCompletas += 1;
        }
    }
    for (var iME = 9; iME > 0; iME--) {
        var siEliminarColumna = Boolean(true);
        for (var jME = 0; jME < 10; jME++) {
            if (matrix[jME][iME] === 0) {
                siEliminarColumna = false;
            }
        }
        if (siEliminarColumna) {
            var k = iME;
            for (var m = 0; m < 10; m++) {
                matrix[m][k] = 0;
            }
            score += 50;
            FilasCompletas += 1;
        }
    }
    for (var i in matrix) {
        console.log("row " + i);
        for (var j in matrix[i]) {
            console.log(" " + matrix[i][j]);
        }
    }
}