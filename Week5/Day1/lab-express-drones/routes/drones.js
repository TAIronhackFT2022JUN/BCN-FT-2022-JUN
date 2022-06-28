// routes/drones.js

const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model"); // used to access drones data in the DB and make changes to our drones collection

// GET route that will list all of the drones
router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drone) => res.render("drones/list.hbs", { drone })) // render hbs view and passes drone info received from DB
    .catch((err) => next(err)); // if an error happends, it will pass the error to the error-handling route. See app.js after routes.
});

// GET route that will show the form to create new drones
router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs"); // renders the hbs view with the create form
});

// POST route that will get info from form and create a new drone in the DB
router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body // destructure the input values passed in the body of the request

  // use of .create() method to add a new drone using the input values
  DroneModel.create({ name, propellers, maxSpeed })
    .then((drone) => {
      console.log(`Drone ${drone.name} added!`);
      res.redirect("/drones"); // redirect the user to the list of drones. The path '/drones' will be handled by the first GET route
    })
    .catch((err) => next(err));
});

// GET route to show the form to update a single drone. It needs to show the current DB information.
router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params // destructure to get the id from the params. The name of the variable is 'id' because we set that in the path above (':id')

  // findById method will obtain the information of the drone to show in the update form view
  DroneModel.findById(id)
    .then((drone) => res.render("drones/update-form.hbs", { drone })) // render update form with current values of the drone
    .catch((err) => next(err));
});

// POST route to update the drone element with the info updated in the form view
router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params // destructure to get the id from the params. The name of the variable is 'id' because we set that in the path above (':id')

  const { name, propellers, maxSpeed } = req.body // destructure the input values passed in the body of the request

  // findByIdAndUpdate will use the information passed in the body of the request to update the drone
  // first argument is the id of the drone to be updated
  // second argument is the attributes to update
  // third argument { new: true } allows the drone we get in return to be the updated one
  DroneModel.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((drone) => {
      console.log(`Drone ${drone.name} updated`);
      res.redirect("/drones"); // redirect the user to the list of drones. The path '/drones' will be handled by the first GET route
    })
    .catch((err) => next(err));
});

// POST route to delete one drone
router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params // destructure to get the id from the params. The name of the variable is 'id' because we set that in the path above (':id')

  // findByIdAndDelete will delete the drone with the passed id
  DroneModel.findByIdAndDelete(id)
    .then((drone) => {
      console.log(`Drone ${drone.name} deleted`);
      res.redirect("/drones"); // redirect the user to the list of drones. The path '/drones' will be handled by the first GET route
    })
    .catch((err) => next(err))
});

module.exports = router;