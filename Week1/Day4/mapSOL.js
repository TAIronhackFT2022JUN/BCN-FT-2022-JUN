// exercise 1: use .map() to create a new array with each fruit capitalized (the whole word)
const fruits = ["pineapple", "orange", "mango"];

const upperCaseFruits = fruits.map((eachElement) => {
  return eachElement.toUpperCase(); // all characters uppercased
  // the mapp will create the new array inside upperCaseFruits
});

// test
console.log(upperCaseFruits);
//Answer should be  ['PINEAPPLE', 'ORANGE', 'MANGO'];

//-------------------------------------------------------

// Try writing the map yourself now

// exercise 2: use .map() to create a new array with each city capitalized (only first letter)
const cities = ["miami", "barcelona", "madrid", "amsterdam"];

const capitalizedCities = cities.map((eachElement) => {
  return eachElement[0].toUpperCase() + eachElement.slice(1);
  // only the first char uppercased and a the rest of the chars from position 1
});

console.log(capitalizedCities);

// Answer should be :
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam']

//-------------------------------------------------------

// Lets try and use functions now

// exercise  3: Return only the names of the restaurants
// Note: Be careful here. 'info' is an object with a key called 'list' which is the array

const info = {
  list: [
    { name: "Mirazur", owner: "Gustavo" },
    { name: "Noma", owner: "Taka" },
    { name: "Gaggan", owner: "Alvaro" },
    { name: "Geranium", owner: "Gustavo" },
    { name: "Arpège", owner: "Luis" },
  ],
};

function onlyNames(arr) {
  // we use the arr parameter since we are in a function
  let mappedArr = arr.map((eachElem) => {
    return eachElem.name; // only the name of each element of the arr
  });

  return mappedArr; // don't forget to return the newly created array
}

// test
const restaurants = onlyNames(info.list); // we pass only the array
console.log(restaurants);
// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']
