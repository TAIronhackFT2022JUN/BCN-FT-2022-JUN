// Iteration 1.
// Create a function product that receives any two numbers and calculates their product.

function product(x, y) {
  return x * y;
}

console.log(product(2, 3)); // 6

// Iteration 2.
// Create a function named maxOfTwoNumbers that receives any two number as arguments. The function should compare two numbers and return the greater number.

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwoNumbers(11, 19)); // 19
console.log(maxOfTwoNumbers(-7, -55)); // -7

// Iteration 3.
// Create a function named maxOfThreeNumbers that receives any three numbers as arguments. The function should return the greatest number out of three numbers provided.

function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThreeNumbers(19, 88, 12)); // 88
console.log(maxOfThreeNumbers(12, -3, 0)); // 12
console.log(maxOfThreeNumbers(-7, -55, -3)); // -3

// Iteration 4.
// Create a function named isEven that receives a number as an argument. The function should check the number and return true if number is even or false if it's not.

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  // ... or in a reduced syntax:
  // return num % 2 === 0
}

console.log(isEven(4)); // true
console.log(isEven(3)); // false

// Iteration 5.
// Create a function named sumArray that receives an array of numbers as an argument. The function should return the sum of all the numbers in the array.

// with tradicional for loop. Similar logic could be applied with for of loop and forEach loop.
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// with reduce
function sumArray(numbers) {
  let sum = numbers.reduce((acc, eachElem) => {
    return acc + eachElem;
  }, 0);
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([1, 2, 3, -4])); // 2
console.log(sumArray([10, 5, 15])); // 30

// Iteration 6.
// Create a function named maxOfArray that receives an array of numbers as an argument. The function should return the greatest number out of the numbers provided in the array.

function maxOfArray(numbers) {
  let max = 0;
  numbers.forEach((eachElem) => {
    if (eachElem > max) {
      max = eachElem;
    }
  });
  return max;
}

console.log(maxOfArray([1, 2, 3, 4])); // 4
console.log(maxOfArray([1, 2, 3, -4])); // 3

// console.log("Con un For():")
// function maxOfArray(numbers) {
//   let max = 0;
//   for(let i = 0; i<numbers.length;i++){
//     //faltaba decirle numbers[i] | numbers[0] = 1 | numbers[1] =200 | numbers[2] = 100 ...
//     if(numbers[i] >= max){
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// Iteration 7.
// Create a function named longestString that receives an array of strings as an argument.
// The function should return the longest string out of the array of provided strings.
// If the array contains more than one string of the same length, the first found longest string should be returned.

function longestString(strings) {
  let longestWord = "";
  strings.forEach((eachElem) => {
    if (eachElem.length > longestWord.length) {
      longestWord = eachElem;
    }
  });
  return longestWord;
}

console.log(longestString(["ana", "ivan", "jan", "nick"])); // 'ivan'
console.log(longestString(["apple", "pear", "strawberries", "mango"])); // 'strawberries'
console.log(longestString(["foo", "bar", "baz"])); // 'foo'

// Iteration 8.
// Create a function named getFullName that receives an object as an argument.
// The function should return the concatenated string containing the firstName and lastName property values from the object.
// More specifically, the returned string should represent a person's full name based on the provided object that contains the first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}.

function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

const webStudent = {
  firstName: "Ana",
  lastName: "Alonso",
};
console.log(getFullName(webStudent)); // 'Ana Alonso'

const dataStudent = {
  firstName: "mike",
  lastName: "oliveira",
};
console.log(getFullName(dataStudent)); // 'mike oliveira'

// Iteration 9.
// Create a function named doesWordExist that receives two arguments:
// - an array of strings and
// - a string with the word we want to check if it exists in that array.
// The function should returntrue/false depending on if the word exists in the array or not.

function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }

  // ... or in a reduced syntax:
  return wordsArr.includes(word);
}

console.log(doesWordExist(["ana", "jan", "nick"], "jan")); // true
console.log(
  doesWordExist(["apple", "pear", "strawberries", "pineapple"], "banana")
); // false

// Iteration 10.
// Create a function named findUnique that receives an array of words as an argument.
// The function should returns the first found unique (non-repeating) word.

// With indexOf and lastIndexOf. If index is the same is a unique element.
function findUnique(wordsArr) {
  let uniqueWord = "";
  for (let word of wordsArr) {
    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      uniqueWord = word;
      break;
    }
  }
  return uniqueWord;
}

// With filter we can check how many times the element is duplicated.
// Then check if filteredArr is 1 for unique elements
function findUnique(wordsArr) {
  let uniqueWord = "";
  for (let word of wordsArr) {
    let filteredWord = wordsArr.filter((eachElem) => {
      return eachElem === word;
    });
    if (filteredWord.length === 1) {
      uniqueWord = word;
      break;
    }
  }
  return uniqueWord;
}

console.log(findUnique(["ana", "ivan", "jan", "ana", "jan"])); // 'ivan'
console.log(findUnique(["fizz", "foo", "bar", "bazz", "fizz", "bazz"])); // 'foo'
console.log(findUnique(["apple", "pear", "strawberries", "pineapple"])); // 'apple'

// Iteration 11.
// Create a function named maxTwoDimArray that receives a two-dimensional array (also called matrix) of numbers as an argument.
// The function should return the greatest number from the given nested arrays.

// with forEach loop
function maxTwoDimArray(matrix) {
  let highestNum = 0;

  matrix.forEach((d1Elem) => {
    d1Elem.forEach((d2Elem) => {
      if (d2Elem > highestNum) {
        highestNum = d2Elem;
      }
    });
  });

  return highestNum;
}

// with for of loop
function maxTwoDimArray(matrix) {
  let highestNum = 0;

  for (let d1Elem of matrix) {
    for (let d2Elem of d1Elem) {
      if (d2Elem > highestNum) {
        highestNum = d2Elem;
      }
    }
  }

  return highestNum;
}

const twoDimArr1 = [
  [1, 2, 3],
  [4, 3, 8],
  [5, 12, 9],
];
console.log(maxTwoDimArray(twoDimArr1)); // 12

const twoDimArr2 = [
  [11, 23, 3],
  [4, 5, 34],
  [5, 3, 17],
];
console.log(maxTwoDimArray(twoDimArr2)); // 34
