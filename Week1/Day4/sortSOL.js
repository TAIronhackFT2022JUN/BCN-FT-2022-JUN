// ONLY USE THE .sort() METHOD FOR THIS EXERCISE UNLESS MENTIONED

// SYNTAX FOR  .sort() method

// REMEMBER SORT MUTATES (changes) the original array (same as how push(), pop() do)
// SO ALWAYS DEEP CLONE IT BEFORE YOU USE THE .sort() method using the trick below

// let clonedArray =  JSON.parse(JSON.stringify(yourArray))

/*
  clonedArray.sort((firstElem, secondElem) => {
     if (condition) {
      return 1; // if sorting in ascending order
    } else if (another condition) {
      return -1;
    } else {
      return 0;
    }
})
*/

//-----------------------------------------------------------

// Exercise 1: Using the arr (arrOfStrings), create a new sorted array alphabetically.
// Please do not mutate the original array

const arrOfStrings = ["cat", "wolf", "yo", "animal"];

const sortedStr = (arr) => {
  const copiedArr = JSON.parse(JSON.stringify(arr));
  const sortArr = copiedArr.sort((firstElement, secondElement) => {
    if (firstElement > secondElement) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortArr;
};

console.log("Ejercicio 1:");
let sortedStrings = sortedStr(arrOfStrings);
console.log(sortedStrings); //ANSWER should be  ['animal', 'cat', 'wolf', 'yo']

//-----------------------------------------------------------

// Exercise 2: Using the same array (arrOfStrings) as above exercise, create a new sorted array from shortest string to the longest.
// Please do not mutate the original array

function longestStr(arr) {
  const copiedArr = JSON.parse(JSON.stringify(arr));
  const sortArr = copiedArr.sort((firstElement, secondElement) => {
    if (firstElement.length > secondElement.length) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortArr;
}

console.log("Ejercicio 2:");
let longestStrings = longestStr(arrOfStrings);
console.log(longestStrings); //ANSWER should be ['yo', 'cat', 'wolf', 'animal']

//-------------------------------------------------------

// Complex Exercise 3: Sort the  objects in the array by age in ascending order,
// if the age is the same sort them alphabetically in descending order
// Please do not mutate the original array

const somePeople = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 19 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 30 },
  { name: "Bill", age: 19 },
];

const sortByAge = (arr) => {
  const copiedArr = JSON.parse(JSON.stringify(arr));
  const sortArr = copiedArr.sort((firstElement, secondElement) => {
    if (firstElement.age === secondElement.age) {
      return 1;
    } else if (firstElement.age > secondElement.age) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortArr;
};

console.log("Ejercicio 3:");
let sortedOutput = sortByAge(somePeople);
console.log(sortedOutput);

//ANSWER should be
/*
 [
  { name: 'Bill', age: 19 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Stuart', age: 30 },
];
*/
