const ironhacker = {
  firstName: "marko",
  age: 39,
  favoriteLanguage: "JavaScript",
  isSatisfied: true,
  "works at": "Google",
  isRemote: false,
};

// 1: update favoriteLanguage to 'React'
// ... your code here
ironhacker.favoriteLanguage = "React";
ironhacker["favoriteLanguage"] = "React";

console.log("Tarea 1: ", ironhacker);

// 2: Update ironhacker's age to 29
// ... your code here
ironhacker.age = 29;
ironhacker["age"] = 29;

console.log("Tarea 2: ", ironhacker);

// 3: Remove the 'isRemote' property
// ... your code here
delete ironhacker.isRemote;

console.log("Tarea 3 - Delete: ", ironhacker);

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
// ... your code here
ironhacker.didGraduate = true;
console.log("Tarea 4 - Adding: ", ironhacker);

// 5: list all keys of the ironhacker object
// ... your code here
console.log("Tarea 5 - Listado de Keys: ");
for (let key in ironhacker) {
  console.log(key);
}

// 6: check if ironhacker has property 'works at'
// ... your code here
console.log("Tarea 6 - Existe la Key: ");
let llaveABuscar = "works at";
let llaveABuscar2 = "trabaja en";
console.log(ironhacker.hasOwnProperty(llaveABuscar));
console.log(ironhacker.hasOwnProperty(llaveABuscar2));
