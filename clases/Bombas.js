class Bombas {
    constructor () {
        this.tiempo = setTimeout(Perdiste, 20000)
        this.Cols = int(random(12));
        this.Fil = int(random(12)); 
 }
  crearBomba(){
    tablero.TableroMemoria[bomba.Cols][bomba.Fil] = "💣";
  }
}