// models/Drone.model.js

const mongoose = require('mongoose') // we use mongoose to create our Schema and model

// Using the .Schema() method will create the schema of our drones, giving them a format inside our Database.
let droneSchema = new mongoose.Schema({
    name: {
      type: String
    },
    propellers: {
      type: Number
    },
    maxSpeed: {
      type: Number
    }
})

let DroneModel = mongoose.model('drone', droneSchema) // using the .model() method will create the model based on the droneSchema
// The above code also defines the name for our collection. Its name will be the model name ('drone') in plural ('drones')

module.exports = DroneModel