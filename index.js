'use strict';
const movieURL = 'http://localhost:3000/movies';
const randomNumber = Math.floor((Math.random() * 9) + 1);
const randomMovieURL = `${movieURL}/${randomNumber}/`;
const urls = ['http://localhost:3000/movies/4/'];
urls.push(randomMovieURL);
const promise = [];

/*
fetch(movieURL, {
    method: 'get'
    }).then(resp => resp.json()
    ).then(datas => {
        datas.map(data => console.log('data: ', data));
        console.log('datas: ', datas);
    }).catch(err => console.error(err));
*/

/*
fetch(randomMovieURL, {
    method: 'get'
    }).then(resp => resp.json()
    ).then(datas => console.log('datas: ', datas)
    ).catch(err => console.error(err));
*/

Promise.all(urls.map(url =>
    fetch(url)
        .then(resp => resp.json())))
        .then(data => {
            promise.push(data);
            console.log(promise);
        })
        .catch(err => console.error(err));