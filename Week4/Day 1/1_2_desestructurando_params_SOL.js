///ACTIVIDAD

const greenSmoothie = {
  leaf: "spinach",
  veggie: "bok choy",
  seed: "ground flex seeds",
  nut: "peanut",
  liquid: "almond milk",
};

// desestructurar el objeto en el propio parámetro
function getIngredients(leaf, veggie, seed, nut, liquid) {
  return `To make the green smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
  //return `To make the green smoothie,  you  should add: ${greenSmoothie.leaf}, ${greenSmoothie.veggie}, ${greenSmoothie.seed}, ${greenSmoothie.nut} and ${greenSmoothie.liquid}.`;

  //con ARGUMENTS
  //return `To make the green smoothie,  you  should add: ${arguments[0].leaf}, ${arguments[0].veggie}, ${arguments[0].seed}, ${arguments[0].nut} and ${arguments[0].liquid}.`;
}

console.log(getIngredients(greenSmoothie));
// => expected Output: // To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk

//2. crea una función que toma varios argumentos de cadenas (el número cambiará)
// La función debe hacer console.log de todas las palabras
//CON SPREAD
function portmanteau(...x) {
  let result = "";
  for (const element of x) {
    result += element.slice(0, 3);
  }
  console.log(result);
}

//CON ARGUMENTS
// function portmanteau() {
//   let result = "";

//   for (const element of arguments) {
//     result += element.slice(0, 3);
//   }
//   console.log(result);
// }

/* con FOREACH
function portmanteau(...strings) {
  // the rest operator above will grab as many arguments are passed into an array called strings.

  let newString = ""; //

  strings.forEach((eachString) => {
    newString += eachString.slice(0, 3);
  });

  return newString;
}
*/

// don't change the function invocations below
portmanteau("hello", "taco"); // => output: "heltac"
portmanteau("bacon", "lettuce", "tomatoe"); // => output: "baclettom"
portmanteau("leonardo", "michelangelo", "donatello", "raphael"); // => output: "leomicdonrap"
