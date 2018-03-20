const express = require('express');
const router = express.Router();
const imgur = require('../imgur.js');

/* GET moodboard page. */

router.get('/', (req, res, next) => {
    // Parses the imgur album URL so that we just get the ending hash.
    let albumHash = req.query.albumlink.toString().replace("https://imgur.com/a/", "");
    // Gets an Array of all images from the album.
    imgur.getAlbum(albumHash, album => {
        res.render('moodboard', {
            albumTitle: album.title,
            albumDescription: album.description,
            images: album.images

        });
    });
});

module.exports = router;