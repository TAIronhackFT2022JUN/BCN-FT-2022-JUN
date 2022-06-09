const canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "lightgray";
const ctx = canvas.getContext("2d");

// VARIABLES GLOBALES
let ballX = 50;
let ballY = 50;
let ballDirectionX = 1; // 1 es mover a la derecha y -1 a la izquierda
let ballDirectionY = 1;

let paddleX = canvas.width / 3
let paddleY = canvas.height - 50
let isGameOn = true;


// MIS FUNCIONES
const ballDraw = () => {
  ctx.beginPath()
  ctx.fillStyle = "black"
  ctx.arc( ballX, ballY, 15, 0, 2 * Math.PI )
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const ballMovement = () => {
  ballX = ballX + ( 5 * ballDirectionX )
  ballY = ballY + ( 5 * ballDirectionY )
}

const paddleMovement = (event) => {
  // console.log(event.key)
  // BONUS 2. que el paddle no pueda salir del canvas
  if (event.key === "ArrowRight") {
    paddleX = paddleX + 20
  } else if (event.key === "ArrowLeft") {
    paddleX = paddleX - 20
  }
}

const ballWallCollision = () => {
  // BONUS 3. que la colision sea exacta y no con el centro de la bolita
  if ( ballX > canvas.width) {
    // la pelotita se tiene que regresar
    // console.log("choco con la pared") // ??
    // ballX = ballX - 20
    ballDirectionX = - 1;
  } else if (ballY > canvas.height) {
    ballDirectionY = - 1;
    isGameOn = false;
  } else if (ballX < 0) {
    ballDirectionX = 1;
    // algo adicional
  } else if (ballY < 0) {
    ballDirectionY = 1;
  }

}

const paddleDraw = () => {
  ctx.fillRect( paddleX, paddleY, 100, 20 )
}

const ballPaddleCollision = () => {
  if (ballX < paddleX + 100 &&
    ballX + 15 > paddleX &&
    ballY < paddleY + 20 &&
    15 + ballY > paddleY) {
    // collision detected!
    // console.log("colisionando!")
    ballDirectionY = -1
    // BONUS 1. acceder al DOM del un elemento de Score y actualizarlo
    // BONUS 4. que suba la velocidad de la pelotita
  }
}


const gameLoop = () => {
  // console.log("El juego funciona!")

  // 1. limpiar el canvas
  ctx.clearRect( 0, 0, canvas.width, canvas.height )

  // 2. Mover elementos o acciones
  ballMovement()
  ballWallCollision()
  // paddleMovement()
  ballPaddleCollision()
  

  // 3. Dibujar los elementos
  ballDraw()
  paddleDraw()

  // 4. La recursion del juego

  if (isGameOn === true) {
    requestAnimationFrame(gameLoop)
  }
  // termino la funcion solo si isGameOn es false
}

// section de addeventListeners

document.addEventListener( "keydown", paddleMovement )


// UUUUUUUULTIMO ES LA RECURSION
gameLoop()

