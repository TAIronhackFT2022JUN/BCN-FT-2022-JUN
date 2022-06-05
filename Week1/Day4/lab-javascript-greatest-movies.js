// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  // a map that will return a new array of only the directors of each movie
  const directorsArr = movies.map(function (eachMovie) {
    return eachMovie.director;
  });

  // or... ES6 reduced syntax
  // const directorsArr = moviesArr.map(movie => movie.director)

  return directorsArr; // new array returned
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  // a filter that will "filter" the movies only with director "Steven Spielberg" and that INCLUDES "Drama" in its genres (genres is an array).
  filteredMovies = movies.filter(function (eachMovie) {
    if (
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
    ) {
      return true; // the filter method ALWAYS expects a boolean as a return
    } // indexOf could also work, however, .includes is more common in this cases.
  });

  return filteredMovies.length; // return the length of the array (how many movies)
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function scoresAverage(movies) {
  // to pass test in case there are no movies (0 is a falsy value so if movies.length is 0, then !movies.length is true)
  if (!movies.length) {
    return 0;
  }

  // a reduce to sum all the rates
  let totalAverage = movies.reduce((a, b) => {
    // conditional to sum only if they exist (if b.rate exists it returns true in the condition)
    if (b.score) {
      return a + b.score;
    } else {
      return a;
    }
  }, 0);

  return Number((totalAverage / movies.length).toFixed(2)); // return the average converted into a number and only two decimals
  // you can use Number(), parseInt() or simply plus + to convert a string into a number
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  // filter to "filter" only the movies that include drama
  let dramaMoviesArr = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes("Drama"); // indexOf could also work, however, .includes is more common as it returns a boolean.
  });

  // or... ES6 reduced syntax
  // let dramaMoviesArr = movies.filter(eachMovie => eachMovie.genre.includes('Drama'));

  // here we could run a similar code of the one in iteration 3 (to get average of array) or... we can reuse that same function with the dramaMoviesArr we just created and return its value!
  return scoresAverage(dramaMoviesArr); // return value of running ratesAverage with new array
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesArr = JSON.parse(JSON.stringify(movies)); // deep clone to not mutate original

  // sort method by year and in case year is the same, by title. You don't need to save in a variable, as sort method will mutate the moviesArr we created above.
  moviesArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });

  return moviesArr; // return the sorted array
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesArr = JSON.parse(JSON.stringify(movies)); // deep clone to not mutate original

  // example of chaining methods: .sort to sort only by title, then .map to get only the movie title (not the whole object), then .slice to get only the first 20 elements
  sortedMoviesArr = moviesArr
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((eachMovie) => eachMovie.title)
    .slice(0, 20);

  return sortedMoviesArr; // return the new array
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function to

function turnHoursToMinutes(movies) {
  // function that will take a string and will return the total minutes per hour as a number.
  function convertHours(hourString) {
    let calculateHour = hourString.split("h"); // split to divide the string in two. The first element will be the number as a string.
    return Number(calculateHour[0]) * 60; // return the hours in minutes
  }

  // function that will take a string and will return the minutes as a number.
  function convertMinutes(minuteString) {
    let calculateMinutes = minuteString.split("min"); // split to divide the string in two. The first element will be the number as a string.
    return Number(calculateMinutes[0]); // return the minutes
  }

  // function that will use both functions (convertHours & convertMinutes) to get the total amount of minutes
  function convertDuration(duration) {
    let timePieces = duration.split(" "); // split will divide the duration string into two strings (hours & minutes)

    // reduce to sum hours (in minutes) and minutes
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

    return minutes; // return total minutes
  }

  // map to add the newly found minutes amount as number to a new array
  let moviesHoursToMinArr = movies.map(function (eachMovie) {
    let fixedMovie = JSON.parse(JSON.stringify(eachMovie)); // deep clone to not mutate original
    fixedMovie.duration = convertDuration(fixedMovie.duration); // dot operator to change the value of the duration attribute with the result of calling the function convertDuration
    return fixedMovie;
  });

  return moviesHoursToMinArr; // return the new array
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  if (!movies.length) return null; // condition to pass test. 0 is a falsy value, so if the length is 0, then !0 is true.

  let masterObject = {}; // creating a new object with the years as keys and an array of movie objects as value.

  // a forEach that will iterate over movies and will add the atribute of the year
  movies.forEach((eachMovie) => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie]; // to create the array with the movie object if the atribute doesn't exist
    } else {
      masterObject[eachMovie.year].push(eachMovie); // to add the movie to the array if the year atribute and the array already exist
    }
  });

  let highest = 0; // variable for the highest average rate
  let theActualYear; // variable for the year of the highest average rate

  // iterating over the masterObject with for in loop. for every year it will use the ratesAverage function created in iteration 3.
  for (let theYear in masterObject) {
    // conditional, if the average of the current iteration is higher than the highest variable, it will update both variables (highest & theActualYear)
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`; // return the string as template literals
}
