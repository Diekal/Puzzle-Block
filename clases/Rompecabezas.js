// Rompecabezas
// function draw() {}
function setBorder() {
  for (let row = 0; row < Puzzle.columna; row++) {
    for (let col = 0; col < Puzzle.fila; col++) {
      if (row === 0) {
        grid[row][col].border[0] = false;
      }
      if (col === (Puzzle.columna - 1)) {
        grid[row][col].border[1] = false;
      }
      if (row === (Puzzle.fila - 1)) {
        grid[row][col].border[2] = false;
      }
      if (col === 0) {
        grid[row][col].border[3] = false;
      }
      if (row !== 0) {
        grid[row][col].border[0] = !(grid[row - 1][col].border[2]);
      }
      if (col !== 0) {
        grid[row][col].border[3] = !(grid[row][col - 1].border[1]);
      }
    }
  }
}
class Tablero {
  constructor(columna, fila) {
      this.columna = columna;
      this.fila = fila;
      this.TableroMemoria = Array(this.columna);
  }
  crearTablero() { // Crea un arreglo bidimensional de celdas del color "#292B4A" para tener un registro en memoria
      for (var x = 0; x < this.fila; x++) {
          this.TableroMemoria[x] = Array(this.fila);
          for (var j = 0; j < this.columna; j++) {
              var fx = x * 50 + 50 * 0.5;
              var fy = y * 50 + 50 * 0.5;
              this.TableroMemoria[x][j] = new Ficha(fx, fy, 50);}
      }
    setBorder();
  }
  dibujarTablero() { //Dibuja el tablero de acuerdo al color o si es una bomba la figura 
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
                  text(this.TableroMemoria[co][f], 306 + (co * 50), 70 + (f * 50));}
          }
      }
  }
  EliminarColumnaFila() { 
      for (var iME = 11; iME >= 0; iME--) {
          var siEliminarFila = Boolean(true); //Es para indicar si una fila esta com´puesta de valores diferentes a "#292B4A" es decir si todas las celdas estan ocupadas.
          for (var jME = 0; jME < 12; jME++) {
              if (this.TableroMemoria[iME][jME] == "#292B4A") {
                  siEliminarFila = false;}
          }
          if (siEliminarFila) {
              var k = iME;
              for (var m = 0; m < 12; m++) {
                  if (this.TableroMemoria[k][m] == "💣"){
                      BombaEliminada = true;
                  } 
                  this.TableroMemoria[k][m] = "#292B4A";

              }
              score += 50;
              FilasCompletas += 1;
          }
      }
      for (var iME = 11; iME >= 0; iME--) {
          var siEliminarColumna = Boolean(true); // Elimina Columnas.
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
}
class Poliomino  {
  /**
* @param {number} px posicion en x
* @param {number} py posicion en y
* @param {number} long logitud de cada 
*/
//En el constructor se define la posicion del poliomino, su tamaño, su posicion inicial y 
//la variable jugada define si el movimiento realizado es valido.   
constructor(px,py,long) {
    this._shape = this.elegir_p();
    this.firstposx = px;
    this.firstposy = py;
    this.posx = px;
    this.posy = py;
    this.longitud = long;
    this.jugada = 0;
}
/**
* @param {number} mX posicion en x
* @param {number} mY posicion en y
*/ 
//este metodo recibe la posicion del mouse y lee la pocicion del poliomino para permitir su movimiento
move_p(mX,mY){
    this.posx = mX;
    this.posy = mY;
}

verificar_p(mX,mY){
    if (mX >= ((this.posx)-((this._shape[0].length*this.longitud)/2) ) &&  mX <= ((this.posx)+((this._shape[0].length*this.longitud)/2))) {
        if (mY >= ((this.posy)-((this._shape.length*this.longitud)/2))  &&  mY <= ((this.posy)+((this._shape.length*this.longitud)/2))){
            return true;
       }
    }
}
//el metodo dibujar dibuja el poliomino leyendo la informacion de cada arreglo
dibujar_p()  {
    push();
    stroke('black');
    strokeWeight(3);
    translate(this.posx-((this._shape[0].length*this.longitud)/2),this.posy-((this._shape.length*this.longitud)/2));
    for (var i = 0; i < this._shape.length; i++) {
        for (var j = 0; j < this._shape[i].length; j++) {
            if (this._shape[i][j] != 0) {
                fill(this._shape[i][j]);
                rect(j * this.longitud, i * this.longitud, this.longitud, this.longitud);
            }
        }  
    }
    pop();
}
/**
* @param { Array} tablero
*/
// tomando como informacion las pociciones del tablero este metodo dibuja la posibilidad de juego.
dibujar_sombra(tablero){
    this.jugada  = 0;
    for(let i=0;i<=(12-this._shape.length); i++){
        for(let j=0;j<=(12-this._shape[0].length); j++){
            if(this.posx > (310 + (j * 48)) && this.posx < (310 + ((j+1) * 48))){
                if(this.posy > (45 + (i * 48)) && this.posy < (45 + ((i+1) * 48))){
                    this.jugada = 1;
                    push();
                    stroke('black');
                    strokeWeight(3);
                    translate(310 + (j * 48),45 + (i * 48));
                    for (var g = 0; g < this._shape.length; g++) {
                        for (var f = 0; f < this._shape[g].length; f++) {
                                if (this._shape[g][f] != 0) {
                                    fill("#99CCFF");
                                    rect(f * 48, g * 48, 48, 48);
                                    if(tablero[j+f][i+g]!="#292B4A"){  //revisa que esa casilla este vacia
                                        this.jugada  = 0;
                                    }
                                }
                        }  
                     }
                    pop();
                    break; 
                }
            }
        }
    }
}
/**
* @param { Array} tablero
*/
// este metodo es llamado cuando se suelta el click, si la jugada es valida guarda el poliomino en el tablero
guardar_tablero(tablero){
    for(let i=0;i<=(12-this._shape.length); i++){
        for(let j=0;j<=(12-this._shape[0].length); j++){
            if(this.posx > (310 + (j * 48)) && this.posx < (310 + ((j+1) * 48))){
                if(this.posy > (45 + (i * 48)) && this.posy < (45 + ((i+1) * 48))){
                    for (var g = 0; g < this._shape.length; g++) {
                        for (var f = 0; f < this._shape[g].length; f++) {
                                if (this._shape[g][f] != 0) {
                                    tablero[j+f][i+g]=this._shape[g][f];
                                    score +=10;
                                }
                        }  
                    }
                    return tablero; 
                }
            }
        }
    }
}

/**
* @returns {Array} 
*/ 
// este metodo representa la memoria que guarda todos los posibles poliominos y lo selecciona de manera aleatoria
// cada poliomino es representado en un arreglo y cada espacio representa el color de cada cuadro del poliomino 
elegir_p(){
    let tetromino= random(0, 12);
    if (tetromino<1) {
        return [[0, color('cyan'),             0    ],
        [color('cyan'),color('cyan'), color('cyan') ]
        ];
    } else if (tetromino<2) {
        return [[color('red'),color('red'), color('red'),color('red'),color('red')]];
    } else if (tetromino<3) {
        return [[color('#00FF00'),color('#00FF00'), color('#00FF00') ]];
    } else if (tetromino<4) {
        return [[  color('#009999')]];
    } else if (tetromino<5) {
        return [[color('#770811'), color('#770811')  ],
        [color('#770811'),             0 ]
        ];
    } else if (tetromino<6) {
        return [[color('#0000CC'), color('#0000CC'),   color('#0000CC' ) ],
        [0,           0,   color('#0000CC' )],
        [0,           0,   color('#0000CC' )],
        [0,           0,   color('#0000CC' )]
     ];
    } else if (tetromino<7) {
        return [[color('#FFFF00'), 0,   0 ],
        [color('#FFFF00' ),         color('#FFFF00'),   color('#FFFF00')],
       ];
    } else if (tetromino<8) {
        return[[ color('#660066' ) ],
            [   color('#660066' )],
            [   color('#660066' )],
            [  color('#660066' )]
     ];
    } else if (tetromino<9) {
        return [[color('#FF6600'), color('#FF6600') ],
        [color('#FF6600'), color('#FF6600') ]
         ];
    } else if (tetromino<10) {
        return [[color('#FF0099'), 0,   0  ],
        [color('#FF0099'), color('#FF0099'),0 ],
        [0, color('#FF0099'),   color('#FF0099' )],
     ];
    } else {
        return [[color('#66CCFF'), color('#66CCFF'),   color('#66CCFF' )  ],
        [color('#66CCFF'), color('#66CCFF'),   color('#66CCFF' ) ],
        [color('#66CCFF'), color('#66CCFF'),   color('#66CCFF' )],
     ];
    }
}
}
var Puzzle;
var img;
var PiezaTamaño;
function setup() {
  createCanvas(400, 400, WEBGL);
  imageMode(CENTER);
  Puzzle =  new Ficha(0, 200, 50);
}
function preload() {
  img = loadImage('/tetris2.jpg');
}
function draw() {
  Puzzle.show();
}
function mouseDragged() {
  Puzzle.move_p(mouseX, mouseY);
}
class TableroRompecabezas extends Tablero {
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
}

class Ficha extends Poliomino{
  constructor(px,py,long){
    super(px,py,long);
  }
  drawBorder(theta){
    var startPoint = createVector(-0.5 * 150, -0.5 * 150);
    var endPoint = createVector(0.5 * 150, -0.5 * 150);
    var offsetX = 150 * 0.35;
    var offsetY = -150 * 0.2;
    noStroke();
    texture(img);
    textureMode(IMAGE);
    beginShape();
    vertex(this.posx, this.posx, 0, 0);
    vertex(this.posy, this.posx, 700, 0);
    vertex(this.posy, this.posy, 700 ,700 );
    endShape();
    
  }
  show(){
  for(var j = 0; j < 4; j++) {
      var theta = j * PI / 2;
      this.drawBorder(theta);

   }
 }  
}