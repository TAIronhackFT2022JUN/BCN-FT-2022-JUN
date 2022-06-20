//--------Objects-----------------------------
// EJERCICIO 1
// Dado el objeto 'datos', use la desestructuración del objeto para poder
// console.log lo siguiente:
// 1. el nombre y apellido del estudiante,
// 2. club de fútbol favorito,
// 3. así como la ciudad y el país de origen de este estudiante.
// Puede desestructurar los elementos anidados en líneas separadas
//o hacer todo en una sola desestructuración.
// Puede console.log de la forma que desee.

const data = {
  name: {
    firstName: "ana",
    lastName: "marino",
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina",
  },
};

// ... your  code  here
// destructuring to get primitive values into variables taken from obj
const { name, favoriteFootballTeam, hometown } = data; // obj, str, obj
const { firstName, lastName } = name; // str, str
const { city, country1 } = hometown; // str, str

// or in a single destructuring line
// const {
//   name: {
//     firstName,
//     lastName
//   },
//   favoriteFootballTeam,
//   hometown: {
//     city,
//     country
//   }
// } = data

// below the console.logs. With the above destructuring these are easier to read.
console.log(`${firstName} ${lastName}`);
console.log(favoriteFootballTeam);
console.log(`${city} ${country1}`);
console.log("--------------------------------------------");
//EJERCICIO 2
// 2: Given the object, use function parameter destructuring to get the following output:
const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"],
  ["amsterdam", "nl"],
  ["lisbon", "pt"],
];

const [[campusSpain1], [campusSpain2, country2], [campus5, theCountry]] =
  europeanCampuses;
//1.Que dara este console.log?
// console.log(campusSpain1, campusSpain2, country2, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'

//2.Con la estructura anterior ,crea la variable 'countryPortugal'  con valor 'pt'
//desectructurando lo anterior sin crear ninguna variable mas
const [, , , , , [, countryPortugal]] = europeanCampuses;

console.log(countryPortugal);

//EXTRA
//--------Arrays-----------------------------
console.log("--------------------------------------------");
console.log("EXTRA, solucion sin ACT");
// 1: What would be expected outputs in the console.logs and why? Try to guess without running the code.

// a:
const [a, b] = [1];
console.log(a * b); // <== NaN

// b:
const [c, d = 1] = [2];
console.log(c * d); // <== 2

// b:
let [e, f = 2, g, h = 1] = [3, 4];
console.log(e, f, g, h); // ==> 3 4 undefined 1

// ************************************************************************************************
