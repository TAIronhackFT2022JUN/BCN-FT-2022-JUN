class Pollo {

  constructor() {
    // aqui las propiedades de nuestro pollo
    this.x = 100;
    this.y = canvas.height / 2;
    this.width = 50;
    this.height = 50;
    this.img = new Image()
    this.img.src = "images/flappy.png"
    this.gravitySpeed = 2.5;
    this.jumpSpeed = 40; // o podría ser: this.gravitySpeed * 10
  }

  // los metodos de nuestro pollo

  drawPollo = () => {
    ctx.drawImage( this.img, this.x, this.y, this.width, this.height )
  }

  polloGravity = () => {
    this.y = this.y + this.gravitySpeed
  }

  polloJump = () => {
    this.y = this.y - this.jumpSpeed
  }

  // necesitaremos movimiento

}
