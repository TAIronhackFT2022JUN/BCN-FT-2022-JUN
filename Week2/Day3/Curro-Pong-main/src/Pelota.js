class Pelota {
  constructor(x, y, ancho, alto, imagen) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.direccionX = "derecha";
    this.direccionY = "abajo";
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }

  comprobarRebote() {
    //console.log(ctx.canvas.width);
    if (this.x >= ctx.canvas.width - this.ancho) {
      this.direccionX = "izquierda";
    }
    if (this.x <= 0) {
      this.direccionX = "derecha";
    }
    if (this.y <= 0) {
      this.direccionY = "abajo";
    }
    // if (this.y >= ctx.canvas.width - this.ancho) {
    //   this.direccionY = "arriba";
    //   alert("game over");
    // }
    if (this.direccionX === "derecha") {
      this.x += 10;
    }
    if (this.direccionX === "izquierda") {
      this.x -= 10;
    }
    if (this.direccionY === "arriba") {
      this.y -= 10;
    }
    if (this.direccionY === "abajo") {
      this.y += 10;
    }
  }
}
