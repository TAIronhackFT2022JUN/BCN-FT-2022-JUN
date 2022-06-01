let animals = [
  "Alligator",
  "Alpaca",
  "Ant",
  "Donkey",
  "Baboon",
  "Bear",
  "Beaver",
  "Boar",
  "Capybara",
  "Cat",
  "Cheetah",
  "Coyote",
  "Crocodile",
  "Dog",
  "Duck",
  "Echidna",
  "Falcon",
  "Fox",
  "Frog",
  "Hippopotamus",
  "Hyena",
  "Kangaroo",
  "Llama",
  "Meerkat",
  "Narwhal",
  "Penguin",
  "Red Panda",
  "Salamander",
  "Seal",
  "Shark",
  "Squirrel",
  "Stingray",
  "Tiger",
  "Viper",
  "Vulture",
  "Weasel",
  "Wombat",
  "Woodpecker",
  "Yak",
  "Zebra",
];

// INSTRUCTIONS:

// Copy all the code to a new codepen and solve the following iterations. The console output should match the one at the end.

// 1. console.log how many animals are in the array
console.log(animals.length); // => 40

// 2. console.log (with true or false) if "Platypus" is inside the Array.

console.log(animals.includes("Platypus")); // => false

// 3. console.log the position of "Red panda".
console.log(animals.indexOf("Red Panda")); // =>  26

// 4. create and console.log a new array only with the first 10 animals
let firstAnimals = animals.slice(0, 10);
console.log(firstAnimals);

// 5. console.log the first and last element of the new array.
console.log(firstAnimals[0], firstAnimals[firstAnimals.length - 1]); // => 'Alligator' 'Cat'

// 6. console.log the third character of the second animal.
console.log(animals[1][2]); // => 'p'

// 7. BONUS: create a new Array with the following 3 animals:
// - The first Animal of the array (using the index position 0).
// - a new animal: "Platypus".
// - The red panda! (using the known index position).

let bestThreeAnimals = [animals[0], "Platypus", animals[26]];
console.log(bestThreeAnimals);
