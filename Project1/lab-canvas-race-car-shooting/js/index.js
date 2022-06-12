window.onload = () => {
  const placeHolderImage = document.getElementById("placeHolderImg");
  placeHolderImg.style.display = "initial";

  document.getElementById("start-button").onclick = () => {
    const canvas = document.querySelector("#canvas");
    const endGame = document.getElementById("endScreen");
    const scoreEndGame = document.getElementById("score");
    const restartButton = document.getElementById("restartButton");
    const audio = document.getElementById("backgroundMusic");
    const audio2 = document.getElementById("startingSound");

    //ocultamos el botón para prevenir bug
    //al no perder focus al clicar el botón de start, se acceleran los frames, así lo solucionamos
    const startButton = document.getElementById("start-button");
    startButton.classList.add("hidden");

    placeHolderImg.style.display = "none";

    raceCarApp.init(
      canvas,
      endGame,
      scoreEndGame,
      restartButton,
      audio,
      audio2
    );
  };
};

//---------------------------------------------------------------
//Otros testings
