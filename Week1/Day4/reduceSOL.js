//exercise 1: Return the total population of the given array (data) in the function 'totalpopulation' created below for you
// the function must return 0 if the array is empty
const data = [
  {
    country: "USA",
    pop: 340,
  },
  {
    country: "France",
    pop: 133,
  },
  {
    country: "Bosnia",
    pop: 5,
  },
];

function totalpopulation(arr) {
  // since we are calculating total, initial value of accumulator is set to 0
  let total = arr.reduce((acc, elem) => {
    return acc + elem.pop;
  }, 0);
  return total;
}

//Invoking and running the function
let total = totalpopulation(data);
console.log(total); // console output should be 478

let output = totalpopulation([]);
console.log(output); // console output should be 0

//-------------------------------------------------------

// exercise 2: Given a menu of foods and their calories,
// return the AVERAGE NUMBER of calories as a NUMBER and rounded to TWO DECIMALS for the entire list from the function
// the function must return null if the array is empty
// Note: Some elements don't have any calories, skip them in your reduce callback
// HINT: First calculate the total with .reduce . Then calculate the average
const menu = [
  { name: "Carrots", calories: 150.45 },
  { name: "Steak" },
  { name: "Broccoli", calories: 120.2342 },
  { name: "Chicken", calories: 250.6523 },
  { name: "Pizza", calories: 520.124 },
];

// again... just an arrow function below.
const calAvgCalories = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let total = arr.reduce((acc, elem) => {
    if (elem.calories !== undefined) {
      // return acc + parseFloat(elem.calories) // uncoment this and comment below for bonus
      return acc + elem.calories;
    } else {
      return acc;
    }
  }, 0);

  let avg = total / arr.length;
  let twoDigit = avg.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit);
  return twoDigitNum;
};

//Invoking and running the function
let output1 = calAvgCalories(menu);
console.log(output1); //Answer should be 208.29

let output2 = calAvgCalories([]);
console.log(output2); //Answer should be 0

//-------------------------------------------------------

// BONUS: Manually modify the 'menu' array so all calory properties are strings instead of numbers...
// ... then Refactor your above code to calculate average if the calories were in strings
