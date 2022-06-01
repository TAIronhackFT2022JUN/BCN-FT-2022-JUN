// ACTIVITY 1.

// complete below function checkMax that takes one parameter (an array of numbers) and loops through the array to check the max number.

// Use only for loop or for of loop to solve the activity!

// example of the array: [70, 34, 56, 77, 67, 56, 76];

const checkMax = (notesArr) => {
  // ... counter variable here
  let maxNote = 0;

  // ... loop that checks all elements of the array here
  for (let i = 0; i < notesArr.length; i++) {
    if (notesArr[i] > maxNote) {
      maxNote = notesArr[i];
    }
  }

  // ... return the result here
  return maxNote;
};

// test
let myNotes1 = [70, 34, 56, 77, 67, 56, 76];
console.log(checkMax(myNotes1)); // => 77
let myNotes2 = [33, 5, 42, 4, 3, 67];
console.log(checkMax(myNotes2)); // => 67

// ACTIVITY 2.

// create a new function called findWaldo that takes one parameter (an array of strings) and checks if any of the strings inside the array contains the word "waldo".

// The function should return a boolean.

// Note: The "waldo" word could be hidden within a string, example. "hellowaldo!")

// Example of an array being passed: ["Hello", "notHere", "herewaldo", "NOPE"]

const findWaldo = (strArr) => {
  // control variable here. We can initialize the var as false as a last resource. If later we find "waldo" is in one of the strings, then we can change this to true
  let isWaldoThere = false;

  // loop that checks all strings in the array
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("waldo")) {
      isWaldoThere = true;
    }
  }

  // return control variable
  return isWaldoThere;
};

// test
let waldoArr1 = ["Hello", "notHere", "herewaldo", "NOPE"];
console.log(findWaldo(waldoArr1)); // => true
let waldoArr2 = ["welcome", "here!", "wal...", "keepLooking"];
console.log(findWaldo(waldoArr2)); // => false
