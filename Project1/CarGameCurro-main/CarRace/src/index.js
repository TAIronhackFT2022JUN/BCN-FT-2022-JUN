const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let cocheImagen = new Image();
cocheImagen.src = "src/coche.png";

let obstaculoImagen = new Image();
obstaculoImagen.src = "src/obstaculo.png";

const obstaculos = [];

const coche = new Objeto(250, 0, 60, 60, cocheImagen, ctx);

const jugar = () => {
  for (let obstaculo of obstaculos) {
    obstaculo.borrar();
    obstaculo.y -= 5;
    obstaculo.dibujar();
    if (coche.detectarColision(obstaculo)) {
      console.log("Has perdido");
    }
  }
};

const crearObstaculos = () => {
  const randomPositionX = Math.floor(Math.random() * 480);
  const obstaculo = new Objeto(
    randomPositionX,
    570,
    120,
    60,
    obstaculoImagen,
    ctx
  );
  obstaculos.push(obstaculo);
};

const cargaInicial = () => {
  coche.dibujar();
  setInterval(jugar, 200);
  setInterval(crearObstaculos, 3000);
};

const moverCoche = (e) => {
  coche.borrar();
  if (e.key === "ArrowLeft") {
    coche.x -= 5;
  }
  if (e.key === "ArrowRight") {
    coche.x += 5;
  }
  if (e.key === "ArrowUp") {
    coche.y -= 5;
  }
  if (e.key === "ArrowDown") {
    coche.y += 5;
  }
  coche.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverCoche);

//Rotar imagen
//Que vaya a unas coordenadas
//Mover(1,-1)
