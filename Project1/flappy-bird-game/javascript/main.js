// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
//para el boton de restart
const restartGame = document.getElementById("restart-btn");
//para el botón de ir a menu
const goToMenu = document.getElementById("back-to-menu");

let ctx = canvas.getContext("2d");
// let newGame = new Game()
let newGame;
let checkIfGameIsRunning = false;
// * STATE MANAGEMENT FUNCTIONS
console.log(checkIfGameIsRunning);
const startGame = () => {
  //variable usada para si el juego está en pausa o no, true = no (que corre el juego), false = en pausa
  checkIfGameIsRunning = true;
  console.log(checkIfGameIsRunning);
  // desaparer el splash screen y aparecer canvas

  //si el juego está corriendo, es decir, estamos jugando, escondemos el splashscreen y la gameOverScreen en caso de que vengamos
  //del botón play again!
  if (checkIfGameIsRunning) {
    splashScreen.style.display = "none";
    canvas.style.display = "flex";
    gameOverScreen.style.display = "none";
  }

  // ejecutar mi juego
  newGame = new Game();
  //console.log(newGame);
  newGame.gameLoop();
};

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

canvas.addEventListener("click", () => {
  // como hago para invocar la funcion polloJump ???
  newGame.pollo.polloJump();
});

restartGame.addEventListener("click", () => {
  console.log("Aitormenta");
  checkIfGameIsRunning = false;
  startGame();
});

goToMenu.addEventListener("click", () => {
  //console.log("Aitormenta");
  //Simplemente, refrescamos pantalla y vamos al inicio
  window.location.reload();
});
