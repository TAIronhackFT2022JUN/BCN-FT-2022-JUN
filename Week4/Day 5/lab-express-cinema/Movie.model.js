// models/Movie.model.js

const mongoose = require("mongoose"); // we use mongoose to create our Schema and model

const Schema = mongoose.Schema; // the schema will allow us to give format to the objects in the BD will have

// below we create a new Schema (format) for the movies that will be in our DB
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema); // here we create the Model that will access the DB to create, read, update and delete movies in out DB

module.exports = Movie; // we export the model so we can use it anywhere in our server
