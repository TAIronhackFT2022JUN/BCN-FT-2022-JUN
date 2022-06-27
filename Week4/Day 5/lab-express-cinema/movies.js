// routes/movies.js

const express = require("express");
const router = express.Router();

const MovieModel = require("../models/Movie.model.js"); // require the Model here since we will use it to access out movies collection in the DB

/* GET /movies */
router.get("/", (req, res, next) => {
  // we get the movies from our DB. find() will get all the information in the collection
  MovieModel.find()
    .then((allMovies) => {
      // we render the hbs view that will show our movie data
      res.render("movies", { allMovies });
    })
    .catch((err) => console.log("problem getting the movies data!", err));
});

/* GET /movies/:id */
router.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params; // moviesId will be the Id of the movie the users wants to see more info about

  MovieModel.findById(movieId)
    .then((oneMovie) => {
      res.render("movie-details", { oneMovie });
    })
    .catch((err) => console.log("problem getting the movies data!", err));
});

module.exports = router;
