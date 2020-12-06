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
        if (mX >= ((this.posx)-((this._shape[0].length*this.longitud)/2) ) &&  mX <= ((this.posx)+((this._shape[0].length*this.longitud)/2))) {
            if (mY >= ((this.posy)-((this._shape.length*this.longitud)/2))  &&  mY <= ((this.posy)+((this._shape.length*this.longitud)/2))){
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
   * @param { Array} pos
   * @param { number} tamano
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


  dibujar_unidad(x, y, radius, npoints) {
      rect(x,y,radius, npoints);
  }
  dibujar_p()  {
      push();
      stroke('black');
      strokeWeight(3);
      //translate(this.posx,this.posy)
      translate(this.posx-((this._shape[0].length*this.longitud)/2),this.posy-((this._shape.length*this.longitud)/2));
      for (var i = 0; i < this._shape.length; i++) {
          for (var j = 0; j < this._shape[i].length; j++) {
              if (this._shape[i][j] != 0) {
                  fill(this._shape[i][j]);
                  //this.dibujar_unidad(j * ((this.longitud/2)+(this.longitud*cos(TWO_PI /6)/2)), (i * this.longitud*sin(TWO_PI /6)-j*(this.longitud/2)*sin(TWO_PI /6)), this.longitud/2, 6);
                  this.dibujar_unidad(j * this.longitud, i * this.longitud, this.longitud, this.longitud);
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
      for(let i=0;i<=(tablero.length-this._shape.length); i++){
          for(let j=0;j<=(tablero[i].length-this._shape[0].length); j++){
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
                      return [j,i]; 
                  }
              }
          }
      }
  }
}

class poli_hexagonos extends Poliomino{

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
    dibujar_sombra(tablero){
        this.jugada  = 0;
        for(let i=0;i<=(tablero.length-this._shape.length); i++){
            for(let j=0;j<=(tablero[i].length-this._shape[0].length); j++){
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
                                        this.dibujar_unidad(f * ((this.longitud/2)+(this.longitud*cos(TWO_PI /6)/2)), (g * this.longitud*sin(TWO_PI /6)-f*(this.longitud/2)*sin(TWO_PI /6)), this.longitud/2, 6);
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


}