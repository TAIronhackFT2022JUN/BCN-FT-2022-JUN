// seeds/drones.seed.js

const DroneModel = require("../models/Drone.model"); // the DroneModel will be used to create new drones in our DB

// the array of drone objects to be created
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// below is the exact same database connection setup as our main app 'db/index.js'
// inside the .then() block we will seed our DB (Once the DB connection is established)
const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    // DB connection is established.
    // using .create() method we add the drones array to the DB
    DroneModel.create(drones)
      .then((data) => {
        console.log(data.length, " drones created!");
        // below we close the DB connection once the DB is seeded
        mongoose.connection
          .close()
          .then(() => console.log("Database closed"))
          .catch((err) => console.log("Error closing DB: ", err));
      })
      .catch((err) => console.log('Error seeding the DB: ', err));
  })
  .catch((err) => {
    console.log("Error connecting to mongo: ", err);
  });