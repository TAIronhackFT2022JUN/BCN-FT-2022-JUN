//exercise 1: Given an array of numbers, create a new array with only the odd numbers that are less than 100.
const numbers = [1, 60, 112, 123, 100, 99, 73, 35];
console.log("Ejercicio 1:");
function oddNumbers(arr) {
  let filteredArr = arr.filter((eachElem) => {
    return eachElem % 2 === 1 && eachElem < 100;
  });
  return filteredArr;
}

let myOddNumbers = oddNumbers(numbers);
console.log(myOddNumbers); // [1,99,73,35]
//----------------------------------------------------------------------

// Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (i.e age >= 21).
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
  { name: "Nettie", age: 20 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];
console.log("Ejercicio 2:");
// note that "adults" is still just a function (just a function of arrow type)
const adults = (arr) => {
  let filteredArr = arr.filter((eachElem) => {
    return eachElem.age >= 21;
  });
  return filteredArr;

  // for BONUS solution comment above line and uncomment the next lines [ ### O mirad línia 59 ]
  //   let mappedArr = filteredArr.map((eachElem) => {
  //     return eachElem.name
  //   })

  //   return mappedArr
};

let canDrink = adults(people);
console.log(canDrink);
//Answer should be
/*
[
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
]
*/

//----------------------------------------------------------------------

// Bonus: Modify the above function 'adults' so that the array only includes the names of the 3 people who can drink.
// like this: ["Candice", "Tammy", "Allen"]
// you might need to do another method we learned previously.
console.log("Ejercicio 3:");

// note that "adults" is still just a function (just a function of arrow type)
const adults3 = (arr) => {
  let filteredArr = arr.filter((eachElem) => {
    return eachElem.age >= 21;
  });
  //return filteredArr;

  // for BONUS solution comment above line and uncomment the next lines
  let mappedArr = filteredArr.map((eachElem) => {
    return eachElem.name;
  });

  return mappedArr;
};

let canDrink3 = adults3(people);
console.log(canDrink3);
