//--------SPREAD OPERATOR-----------------------------

// Sort students by best score and list best 3 as:
// - fistPlace,
// - secondPlace,
// - thirdPlace.
// - everyone else in an array and call that `others`
// Expected output shown at the end
// you can console.log the results or return it as an object (both are fine)

const students = [
  {
    name: "ana",
    score: 5.4,
  },
  {
    name: "ivan",
    score: 7.5,
  },
  {
    name: "milo",
    score: 4.3,
  },
  {
    name: "igor",
    score: 7.0,
  },
  {
    name: "george",
    score: 8.9,
  },
  {
    name: "jess",
    score: 10.0,
  },
  {
    name: "kevin",
    score: 8.8,
  },
  {
    name: "beth",
    score: 7.1,
  },
];

function sortByScore(arr) {
  // .. your code here
  // shallow clone the original `arr` before sorting
  let arrCopy = [...arr];

  // shallow clone is [...arr]
  // deep clone is JSON.parse(JSON.stringify(arr))

  arrCopy.sort((a, b) => b.score - a.score);

  // below we return an object. No need to declare it first.
  return {
    firstPlace: arrCopy.shift(), // removes the first element from the array. Adds the removed value here
    secondPlace: arrCopy.shift(), // removes the first element from the array. Adds the removed value here
    thirdPlace: arrCopy.shift(), // removes the first element from the array. Adds the removed value here
    others: [...arrCopy], // adds all reminder elements of the array, as a new array here
  };
}

console.log(sortByScore(students));

// Expected Output from the function =>
// {
//   firstPlace: { name: 'jess', score: 10 },
//   secondPlace: { name: 'george', score: 8.9 },
//   thirdPlace: { name: 'kevin', score: 8.8 },
//   others: [
//     { name: 'ivan', score: 7.5 },
//     { name: 'beth', score: 7.1 },
//     { name: 'igor', score: 7 },
//     { name: 'ana', score: 5.4 },
//     { name: 'milo', score: 4.3 }
//   ]
// }

//--------REST OPERATOR-----------------------------

// create a function that takes several strings (the number will vary) and returns a new string formed by the first 3 letters of each received string. Use rest operator on the function.

function portmanteau(...strings) {
  // the rest operator above will grab as many arguments are passed into an array called strings.

  let newString = ""; //

  strings.forEach((eachString) => {
    newString += eachString.slice(0, 3);
  });

  return newString;
}

// don't change the function invocations below
console.log(portmanteau("hello", "taco")); // => output: "heltac"
console.log(portmanteau("bacon", "lettuce", "tomatoe")); // => output: "baclettom"
console.log(portmanteau("leonardo", "michelangelo", "donatello", "raphael")); // => output: "leomicdonrap"
