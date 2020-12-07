// Rompecabezas
// function draw() {}
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
              var Cpixeles = 700/ (this.Ccolum);
              var Fpixeles = 700/ (this.fila);
              this.TableroMemoria[x][j] = new FichaRompecabezas(-200,(-250 + TamañoFicha) - (j * 10), Cpixeles, Fpixeles, x,j);}
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
  Puzzle =  new FichaCuadrada( CColumnas, CFilas);
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
  for(var E = 0; E < ((CColumnas) * 2* CFilas); E++){
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
       this.Ccolum = columna *2;
    }
    crearTablero(){
        for (var x = 0; x < this.fila; x++) {
          this.TableroMemoria[x] = Array(this.fila);
          for (var j = 0; j < this.Ccolum; j++) {
              var Cpixeles = 700/ (this.columna);
              var Fpixeles = 700/ (this.fila);
              this.TableroMemoria[x][j] = new Ficha(-200,(-250 + TamañoFicha) - (j * 10), Cpixeles, Fpixeles, x,j);}
      }
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
class FichaCuadrada extends TableroRompecabezas{
  constructor(columna, fila) {
    super(columna, fila);}
  crearTablero(){
      for (var x = 0; x < this.fila; x++) {
        this.TableroMemoria[x] = Array(this.fila);
        for (var j = 0; j < this.Ccolum; j++) {
            var Cpixeles = 700/ (this.columna);
            var Fpixeles = 700/ (this.fila);
            this.TableroMemoria[x][j] = new FichaRompecabezas(-200,(-250 + TamañoFicha) - (j * 10), Cpixeles, Fpixeles, x,j);}
    }
  }

}
 class FichaRompecabezas extends Ficha{
   constructor(px,py,longColumna,LongFila,NFila,NColumna){
     super(px,py,longColumna,LongFila);
     this.NFila = NFila;
     this.NColumna = NColumna;
     this.TamañoPedazoFicha = TamañoFicha/8; 
     this.TamañoPieza = longColumna/8;
   }
  show(){
    noStroke();
    texture(img);
    textureMode(IMAGE);
    push();
    translate(this.posx, this.posy);
    beginShape();
    vertex(this.posx, this.posy, (this.NColumna)*(this.longColumna), this.NFila*(this.longFila));
    vertex((this.posx + TamañoFicha), (this.posy), (this.NColumna +1)*(this.longColumna), (this.NFila)*(this.longFila)); 
    vertex((this.posx + TamañoFicha), (this.posy + TamañoFicha), (this.NColumna + 1)*(this.longColumna), (this.NFila + 1)*(this.longFila));
    vertex((this.posx), (this.posy + TamañoFicha), (this.NColumna)*(this.longColumna), (this.NFila + 1)*(this.longFila));
    vertex((this.posx), (this.posy ), (this.NColumna * this.longColumna), ((this.NFila + 1) * this.longFila));
    endShape();
    pop();
  }
 }  