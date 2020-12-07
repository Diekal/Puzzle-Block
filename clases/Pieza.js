class Pieza  {
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
        if (mX >= ((this.posx)-((this._shape[0].length*this.longitud)) ) &&  mX <= ((this.posx)+((this._shape[0].length*this.longitud)))) {
            if (mY >= ((this.posy)-((this._shape.length*this.longitud)))  &&  mY <= ((this.posy)+((this._shape.length*this.longitud)))){
                return true;
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
   /**
   * @param { Array} tablero
   * @returns {Array}
   */
    dibujar_sombra(tablero,poscx,poscy,longit,radio,lados){
        this.jugada  = 0;
        for(let i=0;i<=(tablero.length-this._shape.length); i++){
            for(let j=0;j<=(tablero[i].length-this._shape[0].length); j++){
                if(this.posx > (poscx + (j * longit)) && this.posx < (poscx + ((j+1) * longit))){
                    if(this.posy > (poscy + (i * longit)) && this.posy < (poscy + ((i+1) * longit))){
                        this.jugada = 1;
                        push();
                        stroke('black');
                        strokeWeight(3);
                        translate(poscx + (j * longit),poscy + (i * longit));
                        for (var g = 0; g < this._shape.length; g++) {
                            for (var f = 0; f < this._shape[g].length; f++) {
                                    if (this._shape[g][f] != 0) {
                                        fill("#99CCFF");
                                        this.dibujar_unidad(f * longit, g * longit, radio, lados);
                                        if(tablero[j+f][i+g]!="#292B4A"){  //revisa que esa casilla este vacia
                                            this.jugada  = 0;
                                        }
                                    }
                            }  
                         }
                        pop();
                        return [j,i]; 
                    }
                }
            }
        }
    }
    /**
   * @param { Array} tablero
   * @param { Array} pos
   */ 
   // este metodo es llamado cuando se suelta el click, si la jugada es valida guarda el poliomino en el tablero
   guardar_tablero(tablero,pos){
    for (var g = 0; g < this._shape.length; g++) {
        for (var f = 0; f < this._shape[g].length; f++) {
                if (this._shape[g][f] != 0) {
                    tablero[pos[0]+f][pos[1]+g]=this._shape[g][f];
                    score +=10;
                }
        }  
    }
    return tablero;
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
class P_cuadrado extends Pieza {


  dibujar_unidad(x, y, dx, dy) {
      rect(x,y,dx, dy);
  }
  dibujar_p()  {
      push();
      stroke('black');
      strokeWeight(3);
      translate(this.posx-((this._shape[0].length*this.longitud)/2),this.posy-((this._shape.length*this.longitud)/2));
      for (var i = 0; i < this._shape.length; i++) {
          for (var j = 0; j < this._shape[i].length; j++) {
              if (this._shape[i][j] != 0) {
                  fill(this._shape[i][j]);
                  this.dibujar_unidad(j * this.longitud, i * this.longitud, this.longitud, this.longitud);
              }
          }  
      }
      pop();
  }
  verificar_p(mX,mY){
    if (mX >= ((this.posx)-((this._shape[0].length*this.longitud)/2) ) &&  mX <= ((this.posx)+((this._shape[0].length*this.longitud)/2))) {
        if (mY >= ((this.posy)-((this._shape.length*this.longitud)/2))  &&  mY <= ((this.posy)+((this._shape.length*this.longitud)/2))){
            return true;
       }
    }
  }
}

class Poli_hexagonos extends Pieza{

    dibujar_p()  {
        push();
        stroke('black');
        strokeWeight(3);
        translate(this.posx,this.posy)
        for (var i = 0; i < this._shape.length; i++) {
            for (var j = 0; j < this._shape[i].length; j++) {
                if (this._shape[i][j] != 0) {
                    fill(this._shape[i][j]);
                    this.dibujar_unidad(j * ((this.longitud/2)+(this.longitud*cos(TWO_PI /6)/2)), (i * this.longitud*sin(TWO_PI /6)-j*(this.longitud/2)*sin(TWO_PI /6)), this.longitud/2, 6);
                }
            }  
        }
        pop();
    }
    /**
    * @param { Array} tablero
    * @returns {Array}
    */
    dibujar_sombra(tablero){
        this.jugada  = 0;
        let dx=((60/2)+(60*cos(TWO_PI /6)/2));
        let dy=60*sin(TWO_PI /6);
        let B=(60/2)*sin(TWO_PI /6);
        for(let i=0;i<=(tablero.length-this._shape.length); i++){
            for(let j=0;j<=(tablero[i].length-this._shape[0].length); j++){
                if(this.posx > (425 + (j * dx)) && this.posx < (435 + ((j+1) * dx))){
                    if(this.posy > (225 + (i * dy)-(j*B)) && this.posy < (225 + ((i+1) * dy)-(j*B))){
                        this.jugada = 1;
                        push();
                        stroke('black');
                        strokeWeight(3);
                        translate(425 +  (j * dx),225 + ((i * dy)-(j*B)));
                        for (var g = 0; g < this._shape.length; g++) {
                            for (var f = 0; f < this._shape[g].length; f++) {
                                    if (this._shape[g][f] != 0) {
                                        fill("#99CCFF");
                                        if (tablero[j+f][i+g] != 0) {
                                            this.dibujar_unidad(f * dx, ((g * dy)-(f*B)), 60/2, 6);
                                        }
                                        if(tablero[j+f][i+g]!="#292B4A"){  //revisa que esa casilla este vacia
                                            this.jugada  = 0;
                                        }
                                    }
                            }  
                         }
                        pop();
                        return [j,i]; 
                    }
                }
            }
        }
    }
}

class Poligono extends Pieza{
    dibujar_p(lados)  {
        push();
        stroke('black');
        strokeWeight(3);
        translate(this.posx-((this._shape[0].length*this.longitud)/2),this.posy-((this._shape.length*this.longitud)/2));
        for (var i = 0; i < this._shape.length; i++) {
            for (var j = 0; j < this._shape[i].length; j++) {
                if (this._shape[i][j] != 0) {
                    fill(this._shape[i][j]);
                    this.dibujar_unidad((j * (2*this.longitud)), i * (2*this.longitud), this.longitud, lados);
                }
            }  
        }
        pop();
    }
}

class Ficha extends Pieza{
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
    show(img,TamañoFicha){
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