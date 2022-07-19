// src/App.js
import "./App.css";
// To start using the pre-made Ant Design components we must first import them:
import { Row, Divider, Button } from "antd";
//import JSON foods
import foods from "./foods.json";
// Use State
import { useState } from "react";
//components
import FoodBox from "./components/FoodBox.js";
import AddFoodForm from "./components/AddFoodForm.js";
import SearchFood from "./components/SearchFood.js";
import NoFood from "./components/NoFood.js";

//wooper -> https://gps.burgerkingencasa.es/images/products/1575468049898_Menu_Whopper.png
// TO-DO
// If we add a food, then it does not appear in the search form after we added it
// as we do with the food.name, if we have two with the same name, it will delete both

function App() {
  // food and state
  const [foodData, setFoodData] = useState(foods);
  // For search
  const [filteredFoodData, setFilteredFoodData] = useState(foodData);
  //search results
  const [searchInput, setSearchInput] = useState("");
  //copy food to deleteFood
  const foodDataCopy = [...foodData];

  //console.log(foodDataCopy);
  //Toggle buttons
  const [showFoodData, setShowFoodData] = useState(false);

  //Functions to implement
  //Function ADD NEW FOOD
  const addNewFood = (newFood) => {
    const updatedFoodData = [...foodData, newFood];
    setFoodData(updatedFoodData);
    setFilteredFoodData(updatedFoodData);
  };

  //Function SEARCH FOOD
  const searchFoodFilter = (e) => {
    setSearchInput(e.target.value);

    if (e.target.value === "") {
      //console.log('hola');
      setFilteredFoodData(foodData);
    }
    const textInputValue = e.target.value.toLowerCase();

    const filteredList = foodData.filter((food) => {
      const foodIncludes = food.name.toLowerCase();
      return foodIncludes.includes(textInputValue);
    });

    setFilteredFoodData(filteredList);
  };

  //Function DELETE
  const deleteFood = (name) => {
    const foodToDelete = foodDataCopy.filter((food) => {
      return food.name !== name;
    });
    setFoodData(foodToDelete);
  };

  //Function Toggle
  const toggleShowMovies = () => {
    setShowFoodData(!showFoodData);
  };

  //use this for no food
  console.log(filteredFoodData);

  return (
    <div className="App">
      <Button
        type="default"
        className="buttonHideShow"
        onClick={toggleShowMovies}
      >
        {showFoodData ? "Hide form" : "Add new food"}
      </Button>
      {showFoodData ? (
        <div>
          <AddFoodForm food={foodData} addFood={addNewFood} />
        </div>
      ) : null}
      <SearchFood
        searchInput={searchInput}
        searchFoodFilter={searchFoodFilter}
      />
      <Divider>
        <h1>Food list</h1>
      </Divider>
      {filteredFoodData.length !== 0 ? (
        <Row>
          {filteredFoodData.map((food) => {
            //Pasamos todo el objeto food en lugar de uno por uno
            return (
              <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
            );
          })}
        </Row>
      ) : (
        <NoFood />
      )}
    </div>
  );
}
export default App;
