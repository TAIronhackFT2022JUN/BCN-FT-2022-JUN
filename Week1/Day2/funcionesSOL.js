// Activity - Functions

/*
EXERCISE 1
- Below function takes 3 parameters (num1, sign, num2) and it should return the result of the mathematical operations of num1 operator num2. Allowed operators (signs) are +, -, *, /. 
- You can use an if/else conditional or a switch conditional.
- Once you are done, refactor the function from a function declaration to an arrow function syntax.
*/

const doTheMath = (num1, sign, num2) => {
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "*") {
    return num1 * num2;
  } else if (sign === "/") {
    return num1 / num2;
  }
};

// test for the function
console.log(doTheMath(2, "+", 4)); // => 6
console.log(doTheMath(2, "-", 4)); // => -2
console.log(doTheMath(2, "*", 4)); // => 8
console.log(doTheMath(2, "/", 4)); // => 0.5

/*
EXERCISE 2
- Create an arrow function named mixColor that takes two parameters as strings. Depending of the colors it should mix them to create a new one. Colors that it will take: "yellow", "red", "blue".
*/

const mixColor = (color1, color2) => {
  if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
  ) {
    return "violet";
  } else if (
    (color1 === "red" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "red")
  ) {
    return "orange";
  } else if (
    (color1 === "yellow" && color2 === "blue") ||
    (color1 === "blue" && color2 === "yellow")
  ) {
    return "green";
  } else {
    return color1; // case for same color
  }
};

// test for the function. Un-comment them once the function is created.
console.log(mixColor("red", "blue")); // => "violet"
console.log(mixColor("red", "yellow")); // => "orange"
console.log(mixColor("yellow", "blue")); // => "green"
console.log(mixColor("red", "red")); // => "red"
