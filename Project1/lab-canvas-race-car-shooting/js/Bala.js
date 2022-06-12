class Bala {
  constructor(ctx, x, y, w) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w;
  }

  //Dibujamos bala
  draw() {
    //console.log("estamos aquí?");
    this.ctx.save();
    this.ctx.fillStyle = "red";
    //Aquí tendríais que posicionar la bala en el eje X o con el width de vuestra nave, coche, lo que sea
    this.ctx.fillRect(this.x + 32, this.y, this.w, this.w);
    this.y = this.y - 1; //velocidad bala
    this.ctx.restore();
  }

  balaPositionY() {
    return this.y;
  }
}
