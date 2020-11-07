class Poliomino  {
    constructor() {
        this._shape = this.elegir_p();
        this.posx = 100;
        this.posy = 100;
        this.longitud = 20;
    }  
    mover_p(){
        var detector = 0;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        cv.onmousedown = function(event) {
            if (event.clientX >= (this.posx-(this.longitud*0.5*(this._shape[0].length)))  &&  event.clientX <= (this.posx+(this.longitud*0.5*(this._shape[0].length)))) {
              if (event.clientY >= ((this.posy)-(this.longitud*0.5*(this._shape.length)))  && event.clientY <= ((this.posx)+(this.longitud*0.5*(this._shape.length)))){
                detector = 1 ;
              }
            }
        }
        cv.onmousemove = function(event) {
            if(detector==1){
              this.posx = event.clientX;
              this.posy = event.clientY;
            } 
        }
        cv.onmouseup = function(evet) {
            detector = 0;
        }
    }
    dibujar_p()  {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.moveTo(this.posx-((this._shape[0].length*this.longitud)/2),this.posy-((this._shape.length*this.longitud)/2));
        for (var i = 0; i < this._shape.length; i++) {
            for (var j = 0; j < this._shape[i].length; j++) {
                // handles both zero and empty (undefined) entries as well
                if (this._shape[i][j]) {
                    if (this._shape[i][j] != 0) {
                        ctx.fillStyle = this._shape[i][j];
                        ctx.rect(j * this.longitud, i * this.longitud, this.longitud, this.longitud);
                        ctx.stroke();
                        ctx.fill();
                    }
                }
            }  
        }
    }
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
}
