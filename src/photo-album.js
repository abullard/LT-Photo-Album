// file: photo-album.js
// author: austin bullard
// date: 03/16/2021
// purpose: Create a console application that 
// displays photo ids and titles in an album.

const fetch = require('node-fetch');

const photoAlbum = {
    photoAlbumUrl: "https://jsonplaceholder.typicode.com/photos",

    async fetchPhotos(album) {
        try {
            const urlPlusQueryParams = `${this.photoAlbumUrl}?albumId=${album}`; 
            const res = await fetch(urlPlusQueryParams);
            const json = await res.json();

            return json;
        } catch(e) {
            console.log(`ERROR FETCHING PHOTO DATA: ${e}`);
        }
    }
}

module.exports = photoAlbum;