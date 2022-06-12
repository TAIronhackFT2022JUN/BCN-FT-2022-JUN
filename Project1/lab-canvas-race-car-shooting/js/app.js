const raceCarApp = {
  ctx: undefined,
  // canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },
  intervalId: undefined,
  framesCounter: 0,
  obstacles: [],
  bala: [],
  //animals: [],
  speed: 1,
  score: 0,
  y: 0,
  carPositionX: 80,
  carPositionY: 100,
  newBala: "",

  init(canvas, endgame, scoreEnd, buttonRestart, audio, audio2) {
    this.setContext(canvas);
    this.setCanvasDimensions(canvas);

    this.playStartingSound(audio2);
    this.imageBackground = new Image();
    this.imageBackground.src = "images/road.png";
    this.endgame = endgame;
    this.scoreEnd = scoreEnd;
    this.buttonRestart = buttonRestart;
    this.createNewCar();

    //block eventlisteners in menu while playing, we just add a class with all that we need to prevent it
    const gameMenuCar = document.getElementById("gameMenu");
    gameMenuCar.classList.add("noPointers");

    setTimeout(() => {
      this.playBackgroundSong(audio, audio2);

      //console.log(this.endgame);
      // Esto podría estar en otra función, pero ha de estar disponible en todos los sitios
      // si fuese const, no podria ser, por eso le decimos this y lo inicializamos en el objeto
    }, 4000);

    //Que el coche se mueva
    this.setListeners();
    this.refreshScreen();
  },
  setContext(canvas) {
    this.ctx = canvas.getContext("2d");
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx2 = canvas.getContext("2d");
    this.ctx2.globalCompositeOperation = "destination-out";
  },

  setCanvasDimensions(canvas) {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    canvas.setAttribute("width", this.canvasSize.w);
    canvas.setAttribute("height", this.canvasSize.h);
  },

  createNewCar() {
    //creamos objeto coche
    this.newCar = new Car(
      this.ctx,
      this.carPositionX,
      this.carPositionY,
      this.canvasSize
    );
  },

  setListeners() {
    //condicion ternaria, despues del interrogante es el true, despues de los 2 puntos es el false
    document.addEventListener("keydown", (e) => {
      //Disparo de bala - retornamos la posición del coche con una simple llamada a dos funciones en Car.js que nos devuelve la posición X Y
      //descomentar abajo para ver en consola y mirar las funciones returnMoveX/Y para entender que hacen en carjs
      //console.log(this.newCar.returnMoveY());
      //console.log(this.newCar.returnMoveX());
      //console.log(this.bala);

      e.code === "Space"
        ? this.bala.push(
            (this.newBala = new Bala(
              this.ctx,
              this.newCar.returnMoveX(),
              this.newCar.returnMoveY(),
              10
            ))
          )
        : null;

      e.key === "ArrowUp" ? (this.newCar.moveUp = true) : null;
      e.key === "ArrowDown" ? (this.newCar.moveDown = true) : null;
      e.key === "ArrowLeft" ? (this.newCar.moveLeft = true) : null;
      e.key === "ArrowRight" ? (this.newCar.moveRight = true) : null;
      e.code === "KeyW" ? (this.newCar.moveUpGamer = true) : null;
      e.code === "KeyS" ? (this.newCar.moveDownGamer = true) : null;
      e.code === "KeyA" ? (this.newCar.moveLeftGamer = true) : null;
      e.code === "KeyD" ? (this.newCar.moveRightGamer = true) : null;
    });
    //condicion ternaria, despues del interrogante es el true, despues de los 2 puntos es el false
    document.addEventListener("keyup", (e) => {
      //console.log(e.code); // === "Space"
      e.key === "ArrowUp" ? (this.newCar.moveUp = false) : null;
      e.key === "ArrowDown" ? (this.newCar.moveDown = false) : null;
      e.key === "ArrowLeft" ? (this.newCar.moveLeft = false) : null;
      e.key === "ArrowRight" ? (this.newCar.moveRight = false) : null;
      e.code === "KeyW" ? (this.newCar.moveUpGamer = false) : null;
      e.code === "KeyS" ? (this.newCar.moveDownGamer = false) : null;
      e.code === "KeyA" ? (this.newCar.moveLeftGamer = false) : null;
      e.code === "KeyD" ? (this.newCar.moveRightGamer = false) : null;
    });

    //Disparo de la bala
  },

  //refrescamos screen
  refreshScreen() {
    this.intervalId = requestAnimationFrame(() => this.refreshScreen());

    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.checkIfCollision();
    this.clearCanvas();
    this.drawAll();

    //Pantalla final ending
    //this.showEndingScreen();

    //pintamos coche moviendose
    this.newCar.move();
    this.bala.forEach((bala) => {
      if (bala != null) {
        bala.draw();
      }
    });
    //Aquí faltaría limpiar las balas
    this.checkBala();

    this.framesCounter++;

    if (this.framesCounter % 100 === 0) {
      this.createObstacle();
      //this.createAnimal();
    }
  },

  playStartingSound(audio2) {
    //starting sound

    this.audio2 = audio2;
    this.audio2.src = "sounds/marioStart.mp3";
    this.audio2.volume = 0.1;

    this.audio2.play();
  },

  playBackgroundSong(audio, audio2) {
    //background song
    this.audio = audio;
    this.audio.src = "sounds/krt.mp3";
    this.audio.volume = 0.1;
    this.audio.play();
  },

  audioPause() {
    this.audio = document.getElementById("backgroundMusic");
    this.audio2 = document.getElementById("startingSound");

    this.audio.pause();
    this.audio2.pause();
  },

  drawAll() {
    this.drawBackground();
    this.moveBackground();
    this.newCar.drawCar();

    this.obstacles.forEach((obstacle) => {
      if (obstacle != null) {
        obstacle.draw();
      }
    });
    //this.animals.forEach((animal) => animal.draw());

    this.showScores();
  },

  createObstacle() {
    //const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
    //const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
    const randomWidth = 80;
    const randomHeight = 100;
    const xRandomPosition = Math.trunc(
      Math.random() * (this.canvasSize.w - 100)
    );

    const newObstacle = new obstacles(
      this.ctx,
      randomWidth,
      randomHeight,
      this.canvasSize,
      xRandomPosition,
      this.speed
    );

    this.obstacles.push(newObstacle);
  },

  // createAnimal() {
  // 	//const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
  // 	//const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
  // 	const randomWidth = 80;
  // 	const randomHeight = 100;
  // 	const xRandomPosition = Math.trunc(Math.random() * (this.canvasSize.w - 100));

  // 	const newAnimal = new Animal(this.ctx, randomWidth, randomHeight, this.canvasSize, xRandomPosition, this.speed);

  // 	this.animals.push(newAnimal);
  // },

  drawBackground() {
    //this.ctx.drawImage(this.imageBackground, 0, 0, this.canvasSize.w, this.canvasSize.h);

    this.ctx.drawImage(
      this.imageBackground,
      0,
      this.y,
      this.canvasSize.w,
      this.canvasSize.h
    );

    if (this.speed < 0) {
      this.ctx.drawImage(
        this.imageBackground,
        0,
        this.y + this.canvasSize.h,
        this.canvasSize.w,
        this.canvasSize.h
      );
    } else {
      this.ctx.drawImage(
        this.imageBackground,
        0,
        this.y - this.canvasSize.h,
        this.canvasSize.w,
        this.canvasSize.h
      );
    }
  },

  moveBackground() {
    this.y += this.speed;
    this.y %= this.canvasSize.h;
  },

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  showScores() {
    // show scores
    this.ctx.font = "35px Verdana";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("Score: " + this.score++, 50, 90);
  },

  stopScore() {
    this.ctx.font = "0px Verdana";
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    //Despues de probar todos los globalCompositeOperation, este es el mejor
    this.ctx.globalCompositeOperation = "destination-over";
  },

  checkIfCollision() {
    if (this.obstacles.length) {
      this.obstacles.forEach((elem) => {
        if (elem != null) {
          elem.draw();

          if (
            this.newCar.carPosition.x <
              elem.obstaclePosition.x + elem.obstacleSize.w - 10 &&
            this.newCar.carPosition.x + this.newCar.carSize.w - 10 >
              elem.obstaclePosition.x &&
            this.newCar.carPosition.y <
              elem.obstaclePosition.y + elem.obstacleSize.h - 10 &&
            this.newCar.carSize.h - 10 + this.newCar.carPosition.y >
              elem.obstaclePosition.y
          ) {
            this.stopGame();
          }
        }
      });
    }
  },

  checkBala() {
    //console.log(this.obstacles.length);
    //console.log(this.bala.length);

    for (let i = 0; i < this.obstacles.length; i++) {
      //recorre el array enemigos
      for (let j = 0; j < this.bala.length; j++) {
        //recorre el array balas
        enemigos = this.obstacles[i];
        balas = this.bala[j];
        //console.log(enemigos);
        if (enemigos != null && balas != null) {
          //preguntamos si es diferente a nulo.
          if (
            balas.x > enemigos.obstaclePosition.x &&
            balas.x < enemigos.obstaclePosition.x + 50 &&
            balas.y > enemigos.obstaclePosition.y &&
            balas.y < enemigos.obstaclePosition.y + 50
          ) {
            //console.log("boom");
            this.obstacles[i] = null;
            this.bala[j] = null;
          }
        }
      }
    }
  },

  stopGame() {
    //https://www.youtube.com/watch?v=eI9idPTT0c4&ab_channel=ChrisCourses
    //este recurso ha ido bien para acabar la parte del menú final
    window.cancelAnimationFrame(this.intervalId);
    this.endgame.style.display = "initial";
    this.scoreEnd.innerHTML = this.score;

    //Hacer un refresh
    this.buttonRestart.setAttribute("onclick", "window.location.reload()");

    //llamamos a parar el audio
    this.audioPause();
    //Limpiamos el score ya que lo mostramos por pantalla al finalizar
    this.stopScore();
  },
};
