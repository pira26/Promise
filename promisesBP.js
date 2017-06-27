'use strict';

const movieURL = 'http://localhost:3000/movies';
const randomNumber = Math.floor((Math.random() * 9) + 1);
const randomMovieURL = `${movieURL}/${randomNumber}/`;
const urls = ['http://localhost:3000/movies/4/'];
urls.push(randomMovieURL);
const promise = [];

/*
 Promise.all(urls.map(url =>
 fetch(url)
 .then(resp => resp.json())))
 .then(data => {
 promise.push(data);
 console.log(promise);
 })
 .catch(err => console.error(err));
 */


const fetchMoviesById = id => {
    fetch(`${movieURL}/${id}`)
        .then(resp => resp.json())
        .then(data => console.log('data', data))
        .catch(err => console.error(err))
};

fetchMoviesById(1);


/*
 const fetchMovies = () => {
 fetch(movieURL, {
 method: 'get'
 })
 .then(resp => resp.json())
 .then(datas => {
 datas.map(data => console.log('data: ', data));
 console.log('datas: ', datas);
 })
 .catch(err => console.error(err));
 };
 */

const displayMovies = () => {
    return new Promise((resolve, reject) => {
        fetch(movieURL)
            .then(resp => resp.json())
            .then(datas => console.log(datas))
            .catch(err => console.error(err))
    })
};

//displayMovies();






// module.exports = {
//     displayMovieById
// }

function createPromise() {
    return new Promise((resolve, reject) => {
        //le milliard de traitement
        resolve(42);
        //autre
    });
}

function somePromises() {
    return createPromise().then((WhatHaveBeenResolved) => {
        return createPromise();
    })
}

somePromises().then((WhatHaveBeenResolved) => {
    return createPromise();
}).then((WhatHaveBeenResolved) => {
    return createPromise();
}).then((WhatHaveBeenResolved) => {
    return createPromise();
}).then((WhatHaveBeenResolved) => {
    return createPromise();
}).then((WhatHaveBeenResolved) => {
    return createPromise();
}).catch((err) => {
    console.log(err);
})
