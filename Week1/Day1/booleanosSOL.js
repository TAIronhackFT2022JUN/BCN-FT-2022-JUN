// Guess the console input for each console.log

console.log(true && false); // => false
console.log(11 % 3 === 2); // => true
console.log(false || true); // => true
console.log(!true || false); // => false
console.log(17 == "17"); // => true
console.log(123 === "123"); // => false
console.log("Hello" - "llo"); // => NaN

let statement = "I love JavaScript!";
let subStatement = statement.slice(7, statement.length);
console.log(subStatement); // => 'JavaScript!'

statement[0].toLowerCase();
console.log(statement); // => 'I love JavaScript!'
