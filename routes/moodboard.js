const express = require('express');
const router = express.Router();
const imgur = require('../imgur.js');

/* GET moodboard page. */

router.get('/', (req, res, next) => {
    // Parses the imgur album URL so that we just get the ending hash.
    let albumHash = req.query.albumlink.toString().replace("https://imgur.com/a/", "");

    console.log(imgur.getImagesFromAlbum(albumHash));

    res.end("dosdksdfk");

});

module.exports = router;