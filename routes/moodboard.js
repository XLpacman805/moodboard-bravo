const express = require('express');
const router = express.Router();
const imgur = require('../imgur.js');

/* GET moodboard page. */

router.get('/', (req, res, next) => {
    // Parses the imgur album URL so that we just get the ending hash.
    let albumHash = req.query.albumlink.toString().replace("https://imgur.com/a/", "");
    // Gets an Array of all images from the album.
    imgur.getImagesFromAlbum(albumHash, images => {
        console.log(images);
        res.render('moodboard', {images: images});
    });
});

module.exports = router;