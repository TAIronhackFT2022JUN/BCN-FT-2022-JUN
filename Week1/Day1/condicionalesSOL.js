// with if/else statement conditional

let name = "Nicholas";
let language = "Spanish";

if (language === "English") {
  console.log(`Hello ${name}.`);
} else if (language === "Spanish") {
  console.log(`Hola ${name}.`);
} else if (language === "French") {
  console.log(`Bonjour ${name}.`);
} else {
  console.log(`I am not sure what are you trying to do, sorry! 🍺`);
}

// with switch statement conditional

let name2 = "Nicholas";
let language2 = "English";

switch (language2) {
  case "English":
    console.log(`Hello ${name2}.`);
    break;
  case "Spanish":
    console.log(`Hola ${name2}.`);
    break;
  case "French":
    console.log(`Bonjour ${name2}.`);
    break;
  default:
    console.log("I am not sure what are you trying to do, sorry! 🍺");
}
