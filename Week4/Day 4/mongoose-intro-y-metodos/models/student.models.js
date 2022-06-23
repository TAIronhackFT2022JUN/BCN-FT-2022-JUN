const mongoose = require("mongoose");

// aqui creamos el Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
    unique: true // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  age: {
    type: Number,
    default: 10
  },

  likesPokemon: {
    type: Boolean,
    default: true // en caso que la caracteristica no se pase, será el valor indicado.
  },

  // como agregar arrays como propiedades.
  pizzaToppings: [
    {
      type: String,
      enum: ["Peperoni", "Vegetales", "Piña"]
    }
  ]
});

// crear el Model
const StudentModel = mongoose.model("student", studentSchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "student" indica como se llamara nuestra colección => "students"

module.exports = StudentModel;
