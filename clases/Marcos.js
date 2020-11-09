class MarcosCuadros {
    constructor(x, y, ancho, alto, figura) { 
        // Tenemos la medidas de lo que van a hacer Marcos, posicion x y y y si es cuadrado o una ellipse 1 es cuadrado y 2 es ellipse
        this.alto = alto; 
        this.ancho = ancho;
        this.x = x;
        this.y = y;
        this.figura = figura;
    }
    dibujar() {
        fill("#F0C89F"); // Dibuja la parte más exterior
        if (this.figura == 1) {
            rect(this.x, this.y, this.ancho, this.alto);
        }
        else {
            ellipse(this.x, this.y, this.ancho, this.alto)
        }
        fill("#B9834D"); //Dibuja las otras rectangulos o ellipses
        if (this.figura == 1) {
            rect(this.x + 15, this.y + 15, this.ancho - 30, this.alto - 30);
            fill(255);
            rect(this.x + 30, this.y + 30, this.ancho - 60, this.alto - 60);
        }
        else {
            ellipse(this.x , this.y , this.ancho - 15, this.alto - 15);
            fill(255);
            ellipse(this.x, this.y, this.ancho - 30, this.alto - 30);
        }
        if (this.figura == 1) { // Realiza las lineas de marcos
            line(this.x + 30, this.y + 30, this.x + 15, this.y + 15);
            line(this.x + 30, this.y + (this.alto - 30),this.x + 15, this.y + (this.alto - 15));
            line(this.x + (this.ancho - 30), this.y + 30,this.x + (this.ancho - 15), this.y + 15);
            line(this.x + (this.ancho - 30), this.y + (this.alto - 30),this.x + (this.ancho - 15), this.y + (this.alto - 15));
        }
    }   
}