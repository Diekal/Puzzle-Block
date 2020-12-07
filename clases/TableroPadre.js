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
                    fill(this.TableroMemoria[co][f]);
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
    EliminarColumnaFila() { 
        for (var iME = (this.columna-1); iME >= 0; iME--) {
            var siEliminarFila = Boolean(true); //Es para indicar si una fila esta com´puesta de valores diferentes a "#292B4A" es decir si todas las celdas estan ocupadas.
            for (var jME = 0; jME < this.fila; jME++) {
                if (this.TableroMemoria[iME][jME] == "#292B4A") {
                    siEliminarFila = false;
                }
            }
            if (siEliminarFila) {
                var k = iME;
                for (var m = 0; m < this.columna; m++) {
                    if (this.TableroMemoria[k][m] == "💣"){
                        BombaEliminada = true;
                    }
                    if (this.TableroMemoria[k][m] != 0){
                        this.TableroMemoria[k][m] = "#292B4A";
                    } 
                }
                score += 50;
                FilasCompletas += 1;
            }
        }
        for (var iME = (this.columna-1); iME >= 0; iME--) {
            var siEliminarColumna = Boolean(true); // Elimina Columnas.
            for (var jME = 0; jME < this.fila; jME++) {
                if (this.TableroMemoria[jME][iME] == "#292B4A") {
                    siEliminarColumna = false;
                }
            }
            if (siEliminarColumna) {
                var k = iME;
                for (var m = 0; m < this.columna; m++) {
                    if (this.TableroMemoria[m][k] != 0){
                        this.TableroMemoria[m][k] = "#292B4A";
                    }
                }
                score += 50;
                FilasCompletas += 1;
            }
        }
      
    }
    dibujar_unidad(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}

class Tablero_Hex extends  Tablero{
    
    crearTablero(){
        this.TableroMemoria = [["#292B4A","#292B4A","#292B4A","#292B4A","#292B4A",0,0,0,0],
                               ["#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A",0,0,0],
                               ["#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A",0,0],
                               ["#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A",0],
                               ["#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A"],
                               [0,"#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A"],
                               [0,0,"#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A"],
                               [0,0,0,"#292B4A","#292B4A","#292B4A","#292B4A","#292B4A","#292B4A"],
                               [0,0,0,0,"#292B4A","#292B4A","#292B4A","#292B4A","#292B4A"]];
    }

    dibujarTablero() { 
        push();
        stroke('black');
        strokeWeight(3);
        translate(425,225);
        for (var co = 0; co < this.columna; co++) {
            for (var f = 0; f < this.fila; f++) {
                if (this.TableroMemoria[f][co]!=0){
                    fill(this.TableroMemoria[f][co]);
                    this.dibujar_unidad(f * ((this.tamaño/2)+(this.tamaño*cos(TWO_PI /6)/2)), ((co * this.tamaño*sin(TWO_PI /6))-(f*(this.tamaño/2)*sin(TWO_PI /6))), this.tamaño/2, 6);
                }                

            }
        }
        pop();    
    }

}