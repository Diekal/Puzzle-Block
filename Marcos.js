class MarcosCuadros {
    constructor(x, y, ancho, alto, figura) {
        this.alto = alto;
        this.ancho = ancho;
        this.x = x;
        this.y = y;
        this.figura = figura;
    }
    dibujar() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        if (this.figura == 1) {
            ctx.rect(this.x, this.y, this.ancho, this.alto);
        }
        else {
            ctx.ellipse(this.x, this.y, this.ancho, this.alto, 0, 0, (2 * Math.PI));
        }
        ctx.stroke();
        ctx.fillStyle = "#F0C89F";
        ctx.fill();
        ctx.beginPath();
        if (this.figura == 1) {
            ctx.rect(this.x + 15, this.y + 15, this.ancho - 30, this.alto - 30);
        }
        else {
            ctx.ellipse(this.x , this.y , this.ancho - 15, this.alto - 15, 0, 0, (2 * Math.PI));
        }
        ctx.stroke();
        ctx.fillStyle = "#B9834D";
        ctx.fill();
        if (this.figura == 1) {
            ctx.clearRect(this.x + 30, this.y + 30, this.ancho - 60, this.alto - 60);
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.moveTo(this.x + 30, this.y + 30);
            ctx.lineTo(this.x + 15, this.y + 15);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(this.x + 30, this.y + (this.alto - 30));
            ctx.lineTo(this.x + 15, this.y + (this.alto - 15));
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(this.x + (this.ancho - 30), this.y + 30);
            ctx.lineTo(this.x + (this.ancho - 15), this.y + 15);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(this.x + (this.ancho - 30), this.y + (this.alto - 30));
            ctx.lineTo(this.x + (this.ancho - 15), this.y + (this.alto - 15));
            ctx.stroke();
        }
        else {
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.ancho - 30, this.alto - 30, 0, 0, (2 * Math.PI));
            ctx.stroke();
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
        }
    }   
}