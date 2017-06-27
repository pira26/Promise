'use strict';

const database = firebase.database();

const addMovieToFavorites = (id) => {
    database.ref(`favorites/${id}`).set(true)
};

const getFavoriteMovieById = () => {
    return database.ref('favorites/').once('value')
        .then((snap) => {
            let arrayIds = Object.keys(snap.val());
            return arrayIds;
        });
};

