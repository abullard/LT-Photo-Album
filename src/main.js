// file: main.js
// author: austin bullard
// date: 03/16/2021
// purpose: entry point for photo-album api request.
// I made this file to demonstrate export knowledge of 
// other modules.

// freezing isn't necessary here. but if another developer tried to modify 
// album while adding functionaltiy to this file, they won't be able to.
const album = Object.freeze(require('./photo-album'));
const args = process.argv.slice(2);

// we only want one parameter passed in
// others can be provided, but they won't be utilized.
async function main() {
    const albumNum = args[0];
    const photos = await album.fetchPhotos(albumNum);
    
    if(photos.length === 0) {
        console.log("No photos found with the provided album number.");
        process.exit(0);
    }

    for(const photo of photos) {
        console.log(`[${photo.id}] ${photo.title}`);
    }

}

main();