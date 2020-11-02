class MarcosCuadros {
    constructor(x, y, ancho, alto) {
        this.alto = alto;
        this.ancho = ancho;
        this.x = x;
        this.y = y;
    }
    dibujar() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.rect(this.x, this.y, this.ancho, this.alto);
        ctx.stroke();
        ctx.fillStyle = "#F0C89F";
        ctx.fill();
        ctx.beginPath();
        ctx.rect(this.x + 15, this.y + 15, this.ancho - 30, this.alto - 30);
        ctx.stroke();
        ctx.fillStyle = "#B9834D";
        ctx.fill();
        ctx.clearRect(this.x + 30, this.y + 30, this.ancho - 60, this.alto - 60);
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.moveTo(this.x + 30, this.y + 30);
        ctx.lineTo(this.x + 15, this.y + 15);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x + 30, this.y + (this.alto- 30));
        ctx.lineTo(this.x + 15, this.y + (this.alto -15));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x + (this.ancho - 30), this.y +30);
        ctx.lineTo(this.x + (this.ancho - 15), this.y + 15);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x + (this.ancho - 30), this.y + (this.alto - 30));
        ctx.lineTo(this.x + (this.ancho - 15), this.y + (this.alto - 15));
        ctx.stroke();
    }
         
    
}