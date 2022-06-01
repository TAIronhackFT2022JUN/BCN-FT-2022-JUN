// variable declaration and initialization
let firsName = "jorge";
let lastName = "berrizbeitia";

// first letter in uppercase + the rest of the string (slice from index 1 to the end of the string)
let capFirstName = firsName[0].toUpperCase() + firsName.slice(1);
let capLastName = lastName[0].toUpperCase() + lastName.slice(1);

// same as above but with .chartAt() and .substring()
// let capFirstName = firsName.charAt(0).toUpperCase() + firsName.substring(1)
// let capLastName = lastName.charAt(0).toUpperCase() + lastName.substring(1)

// concatenating two string with a space in between
let fullName = capFirstName + " " + capLastName;

// same as above but with template literals
// let fullName = `${capFirstName} ${capLastName}`

console.log(`My name is ${fullName}`); // => 'My name is Jorge Berrizbeitia'
