# Puzzle-Block
El juego consiste en poner fichas o poliominos de diferentes tamaños en un tablero con el fin de poder eliminar la mayor cantidad de filas y columnas posibles.Para esto se tienen 4 clases. Las principales siendo la clase tablero y la clase poliomino.
## Class Tablero
### Attributos:
Columna:Indica la cantidad de columnas que va a tener el tablero.
Fila: Es el numero de filas
TableroEnMemoria:Es una matriz de colores donde se guarda la ubicacion de los tetrominos en memoria.
### Metodos:
La clase tablero tiene tres metodos:
El metodo crear tablero que crear una matriz de el tamaño de las filas y columnas toda formada por el color azul oscuro que indica un espacio libre.
```
crearTablero() {
        for (var x = 0; x < this.fila; x++) {
            this.TableroMemoria[x] = Array(this.fila);
            for (var j = 0; j < this.columna; j++) {
                this.TableroMemoria[x][j] = "#292B4A";}
        }
```
El metodo dibujarTablero que dibuja los cuadrados de la matriz dependiendo del color o figura en TableroMemoria que le corresponde a esa celda
 ```
 dibujarTablero() {
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
 ```
Y el metodo EliminarFilasColumnas que elimina tanto las filas como las columnas cuando estan ocupadas es decir cuando en la matriz de memoria esa fila o columna tiene todos sus valores diferentes al azul oscuro. 
## Class Poliomino
### Attributos:
shape : Es la figura o el poliomino que se va a dibujar.
firstposx: Es la primera posicion en x.
firstposy:Es la primera posicion en y.
posx:posicion en x actual.
posy: posicion en y actual.
longitud: tamaño del los cuadrados que forman la figura.
### Metodos:
La clase polinomio tiene el metodo de mover_p la cual mueve el poliomino. Ademas tiene el metodo dibujar_p que dibuja el poliomino de acuerdo a su posición en x y y.
Tiene adicionalmente el metodo dibujar_sombra la cual dibuja una sombra de color azul claro cuando se arrastra la figura sobre el tablero e indica donde se va ha ubicar la ficha en el tablero.
 ```
 dibujar_sombra(tablero){
        var accion = Boolean(false);
        for(let i=0;i<=(12-this._shape.length); i++){
            for(let j=0;j<=(12-this._shape[0].length); j++){
                if(this.posx > (310 + (j * 48)) && this.posx < (310 + ((j+1) * 48))){
                    if(this.posy > (45 + (i * 48)) && this.posy < (45 + ((i+1) * 48))){
                        accion=true;
                        push();
                        stroke('black');
                        strokeWeight(3);
                        translate(310 + (j * 48),45 + (i * 48));
                        for (var g = 0; g < this._shape.length; g++) {
                            for (var f = 0; f < this._shape[g].length; f++) {
                                    if (this._shape[g][f] != 0) {
                                        fill("#99CCFF");
                                        rect(f * 48, g * 48, 48, 48);
                                        if(tablero[j+f][i+g]!="#292B4A"){
                                            accion=false;
                                        }
                                    }
                            }  
                         }
                        pop();
                        return accion; 
                    }
                }
            }
        }
    }
  ```
  Y por ultimo esta el metodo elegir_p que escoge cual figura se va a dibujar.
## Class Bombas
