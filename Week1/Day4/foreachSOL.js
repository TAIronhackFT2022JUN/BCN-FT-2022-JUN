// ONLY USE THE .forEach() METHOD FOR THIS EXERCISE
// Use this array for all the exercises
let students = [
  { name: "Rafa", color: "Blue", candy: 12 },
  { name: "Elise", color: "Pink", candy: 21 },
  { name: "Bodei", color: "Yellow", candy: 31 },
  { name: "Nick", color: "Red", candy: 11 },
];
//EXERCISE 1: print the name of each student
console.log("Ejercicio 1:");
students.forEach((eachStudent) => {
  console.log(eachStudent.name);
});
// console output should be:
/*
    Rafa
    Elise
    Bodei
    Jorge
    */
//-------------------------------------------------------
//EXERCISE 2: print the color of each student that has more than 20 candy's
console.log("Ejercicio 2:");
students.forEach((eachStudent) => {
  if (eachStudent.candy > 20) {
    console.log(eachStudent.color);
  }
});
// console output should be:
/*
    Pink
    Yellow
    */
