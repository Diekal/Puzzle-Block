// Rompecabezas
// function draw() {}
class Tablero {
  constructor(columna, fila) {
      this.columna = columna * 2;
      this.Ccolum = columna;
      this.fila = fila;
      this.TableroMemoria = Array(this.columna);
  }
  crearTablero() { // Crea un arreglo bidimensional de celdas del color "#292B4A" para tener un registro en memoria
      for (var x = 0; x < this.fila; x++) {
          this.TableroMemoria[x] = Array(this.fila);
          for (var j = 0; j < this.columna; j++) {
              var Cpixeles = 700/ (this.Ccolum);
              var Fpixeles = 700/ (this.fila);
              this.TableroMemoria[x][j] = new Ficha(-200,(-250 + TamañoFicha) - (j * 10), Cpixeles, Fpixeles, x,j);}
      }
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
var FichaAx = 0;
var FichaAy = 0;
var CColumnas = 4;
var CFilas = 4;
var TamañoFicha = 400/CColumnas;
var x1;
var y1;
var Piezas = [];
var Perdiste= Boolean(false);
function setup() {
  createCanvas(1200, 1000, WEBGL);
  imageMode(CENTER);
  Puzzle =  new TableroRompecabezas( CColumnas, CFilas);
  Puzzle.crearTablero();
}
function preload() {
  img = loadImage('/tetris2.jpg');
  img2 = loadImage('/perder.jpg');
}
function draw() {
  background(255);
  fill('#222222');
  rect(80,-400,400,400);
  for (var x = 0; x < CFilas; x++) {;
    for (var j = 0; j < (CColumnas * 2); j++) {
        Puzzle.TableroMemoria[x][j].show();
        }
      }
  if (Perdiste){
    image(img2, 100, -230, 800, 500);
  }
}
function mouseDragged() {
  x1 = map(mouseX, 0, 1200, -600, 600);
  y1 = map(mouseY, 0, 1200, -400, 600);
  try{
  Puzzle.TableroMemoria[FichaAx][FichaAy].move_p(x1, y1); }
  catch{
    var ValorMenor = -1;
    for (var xE = 0; xE < Piezas.length; xE++){
      console.log(Piezas[xE]);
      if (ValorMenor > Piezas[xE]){
        Perdiste = true;
        return Perdiste;
      } 
      ValorMenor = Piezas[xE];
    }
   }
  }
function mousePressed(){
}
function mouseReleased(){
  if (CColumnas >= 4){
     CColumnas -= 1;}
  var Tempx1 = 30; 
  var Tempy1 = -190;
  var NFichasF = 1;   
  for(var E = 0; E < ((CColumnas * 2) * CFilas); E++){
    if (x1 >= Tempx1 && x1 <= (Tempx1 + 30)){
      if(y1 <= Tempy1 && y1 >= (Tempy1 - 30)){
      Puzzle.TableroMemoria[FichaAx][FichaAy].move_p(Tempx1 + 10, Tempy1 -10);
      if(FichaAy % 2 ==0){
      Piezas.push(E);
       }
      }
    }
    if(E % 2 != 0){
       Tempx1 += (TamañoFicha/2);}
    if(NFichasF >= CColumnas * 2){
    Tempx1 = 30;
    Tempy1 += (TamañoFicha/2);
    NFichasF = 0;
    }
    NFichasF += 1; 
  }
  if (FichaAy > CFilas){
    FichaAy = - 1;
    FichaAx += 1;
  }
  FichaAy += 1;
 } 
class TableroRompecabezas extends Tablero {
    constructor(columna, fila) {
       super(columna, fila);
    }
    crearTablero(){
        super.crearTablero();
    }
  }
class Ficha extends Poliomino{
  constructor(px,py,longColumna,LongFila,NFila,NColumna){
    super(px,py,longColumna);
    this.longColumna = longColumna;
    this.longFila = LongFila;
    this.PNCol = NColumna;
    if (NColumna == 0 || NColumna == 1){
      this.NColumna = NColumna + 1;}
    else{
      this.NColumna = NColumna;
  }
    this.NFila = NFila;
  }
  show(){
    noStroke();
    texture(img);
    textureMode(IMAGE);
    push();
    translate(this.posx, this.posy);
    beginShape();
    if (this.PNCol % 2 == 0) {
      vertex(this.posx, this.posy, (this.NColumna-1)*(this.longColumna), this.NFila*(this.longFila));
      vertex((this.posx), (this.posy + TamañoFicha), (this.NColumna-1)*(this.longColumna), (this.NFila + 1)*(this.longFila));
      vertex((this.posx + TamañoFicha), (this.posy + TamañoFicha), (this.NColumna)*(this.longColumna),(this.NFila + 1)*(this.longFila));
    }
    else{
      vertex(this.posx, this.posy, (this.NColumna-2)*(this.longColumna), this.NFila*(this.longFila));
      vertex((this.posx + TamañoFicha), (this.posy), (this.NColumna-1)*(this.longColumna), this.NFila*(this.longFila));
      vertex((this.posx + TamañoFicha), (this.posy + TamañoFicha), (this.NColumna-1)*(this.longColumna) ,(this.NFila + 1)*(this.longFila));
    }
    endShape();
    pop();
  }
 }  