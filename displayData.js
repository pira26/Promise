'use strict';

//const movieToFetch = require('./index');
//const movieToFetch = require('./firebase');

let movies, favorite;

window.onload = () => {
    movies = document.querySelector('#movies');
    //movies.innerHTML = movieToFetch;
};

favorite = document.createElement('button');
favorite.setAttribute('onclick', 'console.log()');

