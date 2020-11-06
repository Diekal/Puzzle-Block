class Poliomino {
  /**
   * @param {number} px pocision x
   * @param {number} py pocision y
   * @param {number} longitud tamano de cada cuadrado
   */
  constructor(px,py,longitud) {
    this._shape = this.elegir_p();
    this.posx = px;
    this.posy = py;
    this.longitud = longitud;
  }

  reflect() {
    this._shape.reverse();
  }
 /**
   * @param {number} mX nueva pocision x
   * @param {number} mY nueva pocision y
   */
  mover_p(mX,mY){
    if (mX >= (this.posx-(this.longitud*0.5*(this.shape[0].length)))  &&  mX <= (this.posx+(this.longitud*0.5*(this.shape[0].length)))) {
      if (mY >= ((this.posy)-(this.longitud*0.5*(this.shape.length)))  &&  mY <= ((this.posx)+(this.longitud*0.5*(this.shape.length)))){
        this.posx = mX;
        this.posy = mY;
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
      return [[color('red'),color('red'), color('red'),color('red'),color('red')]
     ];
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
  drawPolyomino(){
    push();
    translate(this.posx-((this.shape[0].length*this.longitud)/2),this.posy-((this.shape.length*this.longitud)/2));
    stroke('black');
    strokeWeight(3);
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        // handles both zero and empty (undefined) entries as well
        if (this.shape[i][j]) {
          push();
          if (this.shape[i][j] instanceof p5.Color) {
            fill(this.shape[i][j]);
            rect(j * this.longitud, i * this.longitud, this.longitud, this.longitud);
          }
          pop();
        }
      }
    }
  } 
  /**
   * @param {Array} memory2D buffer[rows][cols] where empty cells are filled with 0
   * @param {number} x memory2D row index
   * @param {number} y memory2D column index
   * @throws 'To far down' and 'To far right' memory2D reading exceptions
   * @returns { Array, number } { buffer, memoryHitCounter } object literal
   */
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
