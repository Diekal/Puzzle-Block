// JavaScript source code
var matrix = new Array[10][10];
function EliminarColumnaFila() {
    for (var iME = 9; iME > 0; iME--) {
        var siEliminarFila = new Boolean(true);
        for (var jME = 0; jME < 10; jME++) {
            if (matrix[iME][jME] == 0) {
                siEliminarFila = false;
            }
        }
        if (siEliminarFila) {
            for (var k = iME; k >= 0; k--) {
                for (var m = 0; m < 16; m++) {
                    if (k != 0) {
                        matrix[k][m] = matrix[k - 1][m];
                    } else {
                        matrix[k][0] = 1;
                        matrix[k][m] = 0;
                        matrix[k][15] = 1;
                    }
                }
            }
            iME = iME + 1;
            score += 50;
            FilasCompletas += 1;
        }
    }
}