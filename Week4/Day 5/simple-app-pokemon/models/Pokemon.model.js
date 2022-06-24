const mongoose = require("mongoose")

const pokeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
})

const Pokemon = mongoose.model("Pokemon", pokeSchema)

module.exports = Pokemon