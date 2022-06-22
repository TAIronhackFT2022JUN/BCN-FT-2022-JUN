require("dotenv").config();

const express = require("express");
const app = express();

// configuracion
app.set("view engine", "hbs");
// cuando trabajamos con motores de plantillas, usamos .render()
// layout será la base para TODAS las vistas que busquemos
app.set("views", __dirname + "/views");

let hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

//https://www.npmjs.com/package/doggo-api-wrapper
const DogApi = require("doggo-api-wrapper");
const doggoApiHelper = new DogApi();

app.get("/", (req, res) => {
  // console.log(process.env.CLAVE_SECRETA)
  // res.send('Bonjour World! tu clave secreta es: ' + process.env.CLAVE_SECRETA)
  res.render("home.hbs");
});

// Rutas de la API
app.get("/dog", (req, res) => {
  doggoApiHelper
    .getARandomDog()
    .then((data) => {
      console.log(data); // SIEMPRE REVISAN COMO VIENE LA DATA DE LA API
      res.render("dogs/random-dog.hbs", { data: data });
    })
    .catch((err) => {
      console.error(err);
    });

  // ??? data??
  // console.log(data)
});

app.get("/dog-by-breed/:breed", (req, res) => {
  doggoApiHelper
    .getAllDogsByBreed(req.params.breed) //'collie'
    .then((data) => {
      //data = {message: Array<string>}
      console.log(data);
      res.render("dogs/dog-by-breed.hbs", { data: data.message });
    })
    .catch((err) => console.error(err));
});

app.get("/breed", (req, res) => {
  doggoApiHelper
    .getListOfAllBreeds()
    .then((data) => {
      console.log(data);
      const breeds = Object.keys(data.message);
      res.render("dogs/breeds.hbs", { breeds: breeds });
    })
    .catch((err) => console.error(err));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
