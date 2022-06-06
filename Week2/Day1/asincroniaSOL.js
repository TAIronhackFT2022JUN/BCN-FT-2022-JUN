//-----------------------------------------------------------------------------------------------------------------------------
//Exercise 1: What is the expected output? And why?

function print() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
}

print();

//1,4,3,2

//-----------------------------------------------------------------------------------------------------------------------------
// Exercise 2:
// Write a function blast() that creates a timer variable that starts at 0 and will increase the timer value by 1 every second.
// It will also check every second for the value of "timer" and print as below:
// - For every value in timer divisible by 3 it prints BOOM!!
// - For every value in timer divisible by 5 it prints a BANG!!
// - Forevery value in timer divisible for 3 and 5 it prints BOOM BANG!!
// - Any other case it will print the current timer value
// - After the value in timer reaches 15 it should automatically stop

// output should be:

/*
1
2
"BOOM!!"
4
"BANG!!"
"BOOM!!"
7
8
"BOOM!!"
"BANG!!"
11
"BOOM!!"
13
14
"BOOM BANG!!"
*/
function blast() {
  let num = 0;
  let intervalId = setInterval(() => {
    num++;
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("BOOM BANG!!");
    } else if (num % 5 === 0) {
      console.log("BANG!!");
    } else if (num % 3 === 0) {
      console.log("BOOM!!");
    } else {
      console.log(num);
    }

    if (num === 15) {
      clearInterval(intervalId);
    }
  }, 1000);
}

blast();

//-----------------------------------------------------------------------------------------------------------------------------
// Exercise 3:
let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log("Pop!");
    clearInterval(intervalId);
  }

  i--;
}, 1000);
//-----------------------------------------------------------------------------------------------------------------------------
