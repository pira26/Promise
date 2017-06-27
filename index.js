'use strict';
/*
displayMovies()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })

displayMovieById(8)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })
*/

findFavoriteMoviesById()
    .then((datas => console.log('datas', datas)))
    .catch(err => console.error(err))