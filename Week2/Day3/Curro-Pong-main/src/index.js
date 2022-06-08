const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let pelotaImage = new Image();
pelotaImage.src = "src/Pelota.png";

let palaImage = new Image();
palaImage.src = "src/Pala.png";

let pala = new Pala(200, 500, 200, 100, palaImage);
let pelota = new Pelota(100, 200, 30, 30, pelotaImage);

const cargaInicial = () => {
  pala.dibujar();
  pelota.dibujar();

  const detectarColision = () => {
    if (pelota.y == 470) {
      if (pala.x < pelota.x && pala.x + pala.ancho > pelota.x) {
        pelota.direccionY = "arriba";
      }
    } else if (
      pala.ancho + pala.x == pelota.x &&
      pelota.y + pelota.alto > 500
    ) {
      pelota.direccionX = "derecha";
    } else if (
      pelota.x + pelota.ancho == pala.x &&
      pelota.y + pelota.alto > 500
    ) {
      pelota.direccionX = "izquierda";
    }
  };

  const moverPelota = () => {
    pelota.borrar();
    pelota.comprobarRebote();
    detectarColision();
    pelota.dibujar();
  };

  setInterval(moverPelota, 20);
};

const logKey = (e) => {
  e.preventDefault();
  pala.borrar();
  pala.moverPala(e.key);
  pala.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);
