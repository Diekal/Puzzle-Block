# Rompecabezas, poliformas, mosaicos y más...
El principal objetivo de este proyecto es plantear una serie de codigos base orientados a objetos, que sirvan como base para el desarrollo de videojuegos sencillos tipo rompecabeza utilizando conceptos fundamentales de la poo como lo es la herencia y el polimorfismo.Estos aplicativos  podrian tener como principal funcionalidad en la sociedad el entretenimiento y la educacion.
Dicho esto se plantearon las siguente clases base:
1. Pieza.
2. Tablero.
3. Marcos.
4. Bombas.

## Class Tablero
### Atributos:
Columna:Indica la cantidad de columnas que va a tener el tablero.
Fila: Es el numero de filas
TableroEnMemoria:Es una matriz de colores donde se guarda la ubicacion de los polinomios en memoria.
Tamaño: Indica el tamaño que tendria cada unidad del tablero.
### Métodos:
La clase tablero tiene cuatro métodos:
El método crear tablero que crear una matriz de el tamaño de las filas y columnas toda formada por el color azul oscuro que indica un espacio libre.
```
crearTablero() {
        for (var x = 0; x < this.fila; x++) {
            this.TableroMemoria[x] = Array(this.fila);
            for (var j = 0; j < this.columna; j++) {
                this.TableroMemoria[x][j] = "#292B4A";}
        }
```
El método dibujarTablero que dibuja los cuadrados de la matriz dependiendo del color o figura en TableroMemoria que le corresponde a esa celda
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
El metodo dibujar unidad que dibuja de manera general la unidad del tablero y  el método EliminarFilasColumnas que elimina tanto las filas como las columnas cuando están ocupadas es decir cuando en la matriz de memoria esa fila o columna tiene todos sus valores diferentes al azul oscuro. 

De esta clase "padre" entonces surgen las siguientes clase "hijas" que extienden su funcionalidad de una manera mas especifica.

### Tablero_Hex.
Replantea los metodos de crear tablero y dibujar tablero con el fin de generar una tablero exclucivo para hexagonos.
### Tablero_poligono.
Replantea de manera general el metodo de dibujar tablero para cada caso generado por los diferente poligonos regulares.
### Tablerorompecabezas.
Extiende la clase con el objetivo de que ahora el tablero funcione para el caso especifico de un rompecabesaz generado a partir de una imagen. 

## Class Pieza.
### Atributos:
shape : Es la figura o el polinomio que se va a dibujar.
firstposx: Es la primera posición en x.
firstposy:Es la primera posición en y.
posx:posición en x actual.
posy: posición en y actual.
longitud: tamaño del los cuadrados que forman la figura.
### Métodos:
La clase polinomio tiene el método de mover_p y verificar_p los cuales mueven el poliomino. Ademas tiene el método dibujar_p que dibuja el poliomino de acuerdo a su posición en x y y.
Tiene adicionalmente el método dibujar_sombra y guardar tablero que son los encargados de interactuar con el tablero por ejemplo dibujar_sombra  dibuja una sombra de color azul claro cuando se arrastra la figura sobre el tablero e indica donde se va ha ubicar la ficha en el tablero.
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
Por otro lado, se agrego el metodo dibujar_unidad en que se define la forma que tendra cada unidad de polomino y por ultimo esta el método elegir_p que escoge cual figura se va a dibujar y guarda la memoria de todos los posible poliominos.

De esta clase "padre" entonces surgen las siguientes clase "hijas" que extienden su funcionalidad de una manera mas especifica, todas estas deben plantear su propio metodo de dibujar_p dado que este metodo es especifico para cada situcion.
### P_cuadrado.
Replantea el metodo dibjar_unidad dado que esta no era compatible con la ya planteada, aparte se replantea tambien el metodo de verificar debido que para este caso el rango de accion de cada figura es diferente al ya planteado.
### Poli_hexagonos.
Replantea el metodo de dibujar_sombra debido a que para este caso el tablero se pinta de una manera  muy diferente.
### Poligono.
Definen de manera especifica el dibujo de lo poliominos dependiendo de el poligono que se halla escogido para dicha situacion.
### FichaRompecabezas y Ficha cuadrada.
Extienden la clase con elobjetivo de que sea posible usarla de manera mas especifica para un rompecabezas.

## Class Bombas
El propósito de las bombas es que se ponen en un lugar alzar en el tablero y usuario tiene que eliminarlas antes que exploten o sino pierde.
## Atributos
Tiempo:Es el tiempo que ha transcurrida desde que se creo la bomba en segundos.
Cols: Es un numero alzar del 0 al 11 luego este numero sera la columna en la que va aparecer la bomba.
Fil: Es un numero alazar del 0 al 11 que sera la fila.
## Class Marcos.
Los marcos no son mas que una decoracion que ayuda a la estetica de los videojuegos.

Entonces a partir de estas clases planteadas se puede decir ya como una libreria es posible desarrollar infinidad de juegos, los siguientes son solo algunos ejemplos de las infinitas posibilidades
## Puzzle-Block
El juego consiste en poner fichas o polinomios de diferentes tamaños en un tablero con el fin de poder eliminar la mayor cantidad de filas y columnas posibles.Para esto se tienen 4 clases. Las principales siendo la clase tablero y la clase poliomino.
## Hex mode.
Es una expancion de el original Puzzle-Block con la variante de que ahora se tabaja con hexagonos en vez de cuadrados combiando por completo el diseño de la fichas y del tablero. Las reglas son las mismas y al igual que el puzzle-block original esta inspirado en el clasico tetris.
## Rompecabezas.
Uno de los tantos posibles rompecabezas basados en una imagen, este codigo se podria modificar con fines educativos si es esto lo que se busca.
## Pologonos-Block.
Otra variante del puzzle-block, pero esta vez generalizado par que sea posible modificar la unidad de cada figura por un poligono regular de cualquier numero de lados, a partir de este codigo se puede generar una inmenza cantidad de mosaicos.
## Referencias .
1. [Juego guia tomado como referencia.](https://play.google.com/store/apps/details?id=game.puzzle.blockpuzzle&hl=es)
2. [Plantilla de p5 dado por el profesor.](https://github.com/objetos/p5.polyomino.js)
3. [Referencia de p5.js.](https://p5js.org/es/reference/)
4. [Metodo de Dibujar unidad, extraido de la galeria de ejemplos de p5.js](https://p5js.org/es/examples/form-regular-polygon.html)