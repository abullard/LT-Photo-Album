const assert = require('assert');
const album = Object.freeze(require('../src/photo-album'));

describe('Valid albumId', () => {
    it('albumId = 1, should return photos from that album only', async () => {
        const albumId = 1;
        const photos = await album.fetchPhotos(albumId);

        let photosAlbumIdOff= false;
        for(const photo of photos) {
            if(photo.albumId !== albumId) {
                photosAlbumIdOff = true;
            }
        }

        assert.strictEqual(photosAlbumIdOff, false);
    });

    it('a valid albumId should return photos', async () => {
        const albumId = 1;
        const photos = await album.fetchPhotos(albumId);
        assert.ok(photos.length !== 0);
    });
});

describe('Invalid albumId', () => {
    it('albumId = %, should return no photos', async () => {
        const albumId = '%';
        const photos = await album.fetchPhotos(albumId);
        assert.strictEqual(photos.length, 0);
    });

    it('albumId = -1, should return no photos', async () => {
        const albumId = -1;
        const photos = await album.fetchPhotos(albumId);
        assert.strictEqual(photos.length, 0);
    });
    it('albumId = %, should return no photos', async () => {
        const albumId = 'a';
        const photos = await album.fetchPhotos(albumId);
        assert.strictEqual(photos.length, 0);
    });
});