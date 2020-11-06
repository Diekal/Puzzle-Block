class Polyomino {
  /**
   * 
   * @param {Array} shape[rowIndex][columnIndex]
   * 
   */
  constructor() {
    this._shape = this.elegir_p();
    this.posx = 30;
    this.posy = 30;
    this.longitud = 20;
  }

  set shape(shape) {
    this._shape = shape;
  }

  get shape() {
    return this._shape;
  }

  /**
   * Horizontal reflection
   */
  reflect() {
    this._shape.reverse();
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
  /**
   * π/2 clockwise rotation
   */
  rotate() {
    // credit goes to Nitin Jadhav: https://github.com/nitinja
    // who wrote about it here: https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript/58668351#58668351
    this._shape = this._shape[0].map((v, index) => this._shape.map(row => row[index]).reverse());
  }
  move_p(mX,mY){
    if (mX >= ((this.posx)-(this.longitud*2))  &&  mX <= ((this.posx)+(this.longitud*(this.shape[0].length)))) {
      if (mY >= ((this.posy)-(this.longitud*2))  &&  mY <= ((this.posx)+(this.longitud*(this.shape.length)))){
        this.posx = mX;
        this.posy = mY;
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

// Details here:
// https://github.com/processing/p5.js/blob/main/contributor_docs/creating_libraries.md
(function () {
  p5.prototype.createPolyomino = function (shape) {
    return new Polyomino(shape);
  };

  p5.prototype.drawPolyomino = function (polyomino, row, col, LENGTH = 10, outlineWeight = 2, outline = 'magenta') {
    push();
    translate(polyomino.posx-((polyomino.shape[1].length*LENGTH)/2),polyomino.posy-((polyomino.shape.length*LENGTH)/2));
    stroke(outline);
    strokeWeight(outlineWeight);
    for (let i = 0; i < polyomino.shape.length; i++) {
      for (let j = 0; j < polyomino.shape[i].length; j++) {
        // handles both zero and empty (undefined) entries as well
        if (polyomino.shape[i][j]) {
          push();
          if (polyomino.shape[i][j] instanceof p5.Color) {
            fill(polyomino.shape[i][j]);
            rect(j * LENGTH, i * LENGTH, LENGTH, LENGTH);
          }
          else if (typeof polyomino.shape[i][j] === 'string') {
            textSize(LENGTH);
            text(polyomino.shape[i][j], j * LENGTH, i * LENGTH, LENGTH, LENGTH);
          }
          pop();
        }
      }
    }
    pop();
  }

  p5.prototype.elegir_p= function(){
    let tetromino= random(0, 10);
    if (tetromino<1) {
      return [[0, color('cyan'),             0    ],
      [color('cyan'),color('cyan'), color('cyan') ]
     ];
    } else if (tetromino<2) {
      return [[color('cyan'),color('cyan'), color('cyan'),color('cyan'),color('cyan')]
     ];
    } else if (tetromino<3) {
      return [[color('cyan'),color('cyan'), color('cyan') ]];
    } else if (tetromino<4) {
      return [[  color('#770811')]];
    } else if (tetromino<5) {
      return [[color('cyan'), color('#770811')  ],
      [color('#770811'),             0 ]
     ];
    } else if (tetromino<6) {
      return [[color('cyan'), color('#770811'),   color('#770811' ) ],
      [0,           0,   color('#770811' )],
      [0,           0,   color('#770811' )],
      [0,           0,   color('#770811' )]
     ];
    } else if (tetromino<7) {
      return [[color('cyan'), 0,   0 ],
      [color('#770811' ),         color('#770811' ),   color('#770811' )],
     ];
    } else if (tetromino<8) {
      return[[ color('#770811' ) ],
            [   color('#770811' )],
            [   color('#770811' )],
            [  color('#770811' )]
     ];
    } else if (tetromino<9) {
      return [[color('cyan'), color('#770811') ],
      [color('cyan'), color('#770811') ]
     ];
    } else if (tetromino<10) {
      return [[color('cyan'), 0,   0  ],
      [color('cyan'), color('#770811'),0 ],
      [0, color('#770811'),   color('#770811' )],
     ];
    } else {
      return [[color('cyan'), color('#770811'),   color('#770811' )  ],
      [color('cyan'), color('#770811'),   color('#770811' ) ],
      [color('cyan'), color('#770811'),   color('#770811' )],
     ];
    }
  }
})();