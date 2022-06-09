

class Game {

  constructor() {
    // todas nuestras propiedades del juego
    this.bg = new Image();
    this.bg.src = "images/bg.png" // async
    this.pollo = new Pollo()
    this.pipeArr = [ new Pipe(0, "images/obstacle_top.png") ] // esto es un array con varios elementos
    // creamos un array en vez de multiples propiedades
    // this.pipe = new Pipe()
    // this.pipe1 = new Pipe()
    this.pipeSeparation = 300;
    this.isGameOn = true;
  }

  spawningPipe = () => {

    let lastPipe = this.pipeArr[this.pipeArr.length - 1]

    if (lastPipe.x < (canvas.width - this.pipeSeparation)) {
      // aqui agrego un nuevo pipe
      let randomY = Math.random() * -100
      let newPipe = new Pipe(randomY, "images/obstacle_top.png")
      this.pipeArr.push(newPipe)

      // agregar el otro pipe de abajo
      let randomYDown = randomY + newPipe.height + 200
      let newPipeDown = new Pipe(randomYDown, "images/obstacle_bottom.png")
      this.pipeArr.push(newPipeDown)

    }

    // los piles estan siendo agregados pero nunca removidos

  }

  checkPolloPipeCollision = (eachPipeParam) => {
    if (this.pollo.x < eachPipeParam.x + eachPipeParam.width &&
      this.pollo.x + this.pollo.width > eachPipeParam.x &&
      this.pollo.y < eachPipeParam.y + eachPipeParam.height &&
      this.pollo.height + this.pollo.y > eachPipeParam.y) {
      // collision detected!
      // console.log("Colisionando!")
      // debemos terminar el juego
      // 1. detener el loop
      this.isGameOn = false;
      // 2. ocultar el canvas
      canvas.style.display = "none"
      // 3. gameOver screen y darle display flex 
      gameOverScreen.style.display = "flex"
    }
  }


  drawBackground = () => {
    ctx.drawImage( this.bg, 0, 0, canvas.width, canvas.height )
  }

  clearCanvas = () => {
    ctx.clearRect( 0, 0, canvas.width, canvas.height )
  }

  // . todos nuestros metodos del juego
  gameLoop = () => {
    // console.log("el juego funciona! YAY")
    // 1. limpiar el canvas
    this.clearCanvas()

    // 2. mover los elementos u otras acciones (de checkeo)
    this.pollo.polloGravity()
    // aqui deberia mover los pipes
    this.pipeArr.forEach( (eachPipe) => {
      eachPipe.pipeMove()
    } )
    this.spawningPipe()
    this.pipeArr.forEach((eachPipe) => {
      // checkear colision entre pollito y pipe
      this.checkPolloPipeCollision(eachPipe)
    })
    
    // 3. dibujar los elementos
    this.drawBackground()
    this.pollo.drawPollo()
    // aqui deberia dibujar los pipes
    this.pipeArr.forEach( (eachPipe) => {
      eachPipe.drawPipe()
    } )

    // 4. la recursion para la animacion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop)
    }
  }

}

