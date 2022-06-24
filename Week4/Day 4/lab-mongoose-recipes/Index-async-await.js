//Async await solution

const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

let newRecipe = {
  title: "miXto quente",
  level: "Easy Peasy",
  ingredients: ["pão francês", "queijo", "presunto"],
  cuisine: "Brasileira",
  dishType: "snack",
  image:
    "http://culinaria.culturamix.com/blog/wp-content/gallery/misto-quente-3/Misto-Quente-6.jpg",
  duration: 5,
  creator: "JOC",
};

// Connection to the database "recipe-app"

async function dataBaseManage() {
  try {
    let x = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database: "${x.connection.name}"`);

    // Before adding any documents to the database, let's delete all previous entries
    await Recipe.deleteMany();

    // iteration 2. newRecipe will be created in our DB
    let createdRecipe = await Recipe.create(newRecipe);
    console.log(`recipe added: ${createdRecipe.title}`); // a console.log to verify previous promise resolved correctly

    // iteration 3. all recipes in data will be inserted in our DB
    let insertedRecipes = await Recipe.insertMany(data);
    insertedRecipes.forEach((eachRecipe) =>
      console.log(`recipe for ${eachRecipe.title} inserted successfully`)
    ); // a console.log to verify previous promise resolved correctly

    // iteration 4. To find a recipe by its title and update one attribute
    let updatedRecipe = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    );
    console.log(`The recipe ${updatedRecipe.title} is updated`); // a console.log to verify previous promise resolved correctly

    // iteration 5. To find a recipe by its title and delete it
    let deletedRecipe = await Recipe.findOneAndDelete({ title: "Carrot Cake" });
    console.log(`The recipe ${deletedRecipe.title} is deleted`); // a console.log to verify previous promise resolved correctly

    // iteration 6. To close the DB.
    await mongoose.connection.close();
    console.log(`connection closed`); // a console.log to verify previous promise resolved correctly
  } catch (err) {
    console.log(`an error has occurred: ${err}`); // to catch errors in promises
  }
}

dataBaseManage();
