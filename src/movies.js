//const {movies} = require("./data.js")
require("./data.js").movies;

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {    
    const listOfDirectors = moviesArray.map((item) => {
        return item.director;
    })

    return listOfDirectors;
}
//getAllDirectors(movies);



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getUniqDirectors(directors) {
    const allUniqDirectors = [...new Set(directors)];
    return allUniqDirectors;
}
//getUniqDirectors(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesOfDirector = moviesArray.filter((item) => {
        return item.director === "Steven Spielberg" && item.genre.includes("Drama") ;
    })

    return moviesOfDirector.length;
}
//howManyMovies();



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0;
    }     
    
    let soma = 0;
    moviesArray.forEach(el => {if(el.score)
        soma += el.score
    });    

    const avgScore = Math.round((soma/moviesArray.length)*100)/100;    
    return avgScore;
}
//const movies = [];
//console.log(scoresAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {            
    const dramaMovies = moviesArray.filter(el => el.genre.includes("Drama"));    
    return scoresAverage(dramaMovies);
}
//dramaMoviesScore(movies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesByYear = [...moviesArray]
    
    moviesByYear.sort((a, b) => {
        const titleA = a.title;
        const titleB = b.title;
        const chkYear = (a.year - b.year);
        
        if (chkYear < 0) { return -1; }
        if (chkYear > 0) { return 1; }
        if (titleA < titleB) { return -1; }
        if (titleA > titleB) { return 1; }        
    })
    
    return moviesByYear;
}
//orderByYear(movies);



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const alphaOrder = moviesArray.map((el) => {
        return el.title;
    })
    
    alphaOrder.sort()
    firstTwenty = alphaOrder.slice(0, 20);
    return firstTwenty;
}
//orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
