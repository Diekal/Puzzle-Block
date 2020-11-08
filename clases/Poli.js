class Poliomino  {
      /**
   * @param {number} px posicion en x
   * @param {number} py posicion en y
   * @param {number} long logitud de cada 
   */
    constructor(px,py,long) {
        this._shape = this.elegir_p();
        this.firstposx = px;
        this.firstposy = py;
        this.posx = px;
        this.posy = py;
        this.longitud = long;
    } 
          /**
   * @param {number} mX posicion en x
   * @param {number} mY posicion en y
   */ 
    move_p(mX,mY){
        if (mX >= ((this.posx)-(this.longitud*2))  &&  mX <= ((this.posx)+(this.longitud*(this._shape[0].length)))) {
          if (mY >= ((this.posy)-(this.longitud*2))  &&  mY <= ((this.posx)+(this.longitud*(this._shape.length)))){
            this.posx = mX;
            this.posy = mY;
          }
        }
    }
    dibujar_p()  {
        push();
        stroke('black');
        strokeWeight(3);
        translate(this.posx-((this._shape[0].length*this.longitud)/2),this.posy-((this._shape.length*this.longitud)/2));
        for (var i = 0; i < this._shape.length; i++) {
            for (var j = 0; j < this._shape[i].length; j++) {
                if (this._shape[i][j]) {
                    if (this._shape[i][j] != 0) {
                        fill(this._shape[i][j]);
                        rect(j * this.longitud, i * this.longitud, this.longitud, this.longitud);
                    }
                }
            }  
        }
        pop();
    }
    dibujar_jugada(){
        for(let i=0;i<12; i++){
            for(let j=0;j<12; j++){
                if(this.posx > (310 + (j * 48)) && this.posx < (310 + ((j+1) * 48))){
                    if(this.posy > (45 + (i * 48)) && this.posy < (45 + ((i+1) * 48))){
                        push();
                        stroke('black');
                        strokeWeight(3);
                        translate(310 + (j * 48),45 + (i * 48));
                        for (var g = 0; g < this._shape.length; g++) {
                            for (var f = 0; f < this._shape[g].length; f++) {
                                if (this._shape[g][f]) {
                                    if (this._shape[g][f] != 0) {
                                        fill("#99CCFF");
                                        rect(f * 48, g * 48, 48, 48);
                                    }
                                }
                            }  
                         }
                        pop();
                         
                    }
                    break;
                }
            }
        }
    } 
   /**
   * @returns { Array} 
   */
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
            return [[color('#FF6600'), color('FF6600') ],
            [color('FF6600'), color('FF6600') ]
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
    update(memory2D, x, y) {
        let memoryHitCounter = 0;
        // i. clone memory into buffer
        let buffer = memory2D.map(arr => { return arr.slice(); });
        // ii. fill in buffer with this polyomino
        for (let i = 0; i < this._shape.length; i++) {
          // (e1) Check if current polyomino cell is too far down
          if (buffer[x + i] === undefined) {
            throw new Error(`Too far down`);
          }
          for (let j = 0; j < this._shape[i].length; j++) {
            // (e2) Check if current polyomino cell is too far right
            if (buffer[x + i][y + j] === undefined) {
              throw new Error(`Too far right`);
            }
            // write only polyomino squares covering (i,j)
            if (this._shape[i][j]) {
              // check if returned buffer overrides memory2D
              if (buffer[x + i][y + j] !== 0) {
                memoryHitCounter++;
              }
              buffer[x + i][y + j] = this._shape[i][j];
            }
          }
        }
        // iii. return buffer and memory hit counter
        return { buffer, memoryHitCounter };
    }

}
