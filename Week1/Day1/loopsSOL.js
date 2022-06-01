for (let i = 0; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/* 
  Output:
  'FizzBuzz'
  1
  2
  'Fizz'
  4
  'Buzz'
  'Fizz'
  7
  8
  'Fizz'
  'Buzz'
  11
  'Fizz'
  13
  14
  'FizzBuzz'
  */

// Reverse loop

for (let i = 15; i >= 0; i--) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*
  Output:
  'FizzBuzz'
  14
  13
  'Fizz'
  11
  'Buzz'
  'Fizz'
  8
  7
  'Fizz'
  'Buzz'
  4
  'Fizz'
  2
  1
  'FizzBuzz'*/
