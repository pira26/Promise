'use strict';

const movieURL = 'http://localhost:3000/movies';

const displayMovies = () => {
    return fetch(`${movieURL}`)
        .then(resp => resp.json())
};

const displayMovieById = (id) => {
    return fetch(`${movieURL}/${id}`)
        .then(resp => resp.json())
};

const findFavoriteMoviesById = () => {
    return getFavoriteMovieById().then((arrayIds) => {
        return Promise.all(arrayIds.map((id) => displayMovieById(id)))
    });
};

// const getId = (id) => {
//     return displayMovieById(id)
//         .then(data => {
//             let id = data.id;
//             console.log(id)
//         })
// };

