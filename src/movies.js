// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredMovies = moviesArray.filter(
    (director) =>
      director.director == "Steven Spielberg" &&
      director.genre.includes("Drama")
  );
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return moviesArray.length === 0
    ? 0
    : Number(
        (
          moviesArray
            .filter((el) => el.score)
            .reduce((acc, cur) => acc + cur.score, 0) / moviesArray.length
        ).toFixed(2)
      );
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return moviesArray.length === 0
    ? 0
    : Number(
        (
          moviesArray
            .filter((element) => element.genre.includes("Drama"))
            .reduce((acc, cur) => acc + cur.score, 0) / moviesArray.length
        ).toFixed(2)
      );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((element) => element.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
