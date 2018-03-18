const express = require('express');
const router = express.Router();
const imgur = require('../imgur.js');

/* GET moodboard page. */

router.get('/', (req, res, next) => {
    let albumHash = req.query.albumlink.toString().replace("https://imgur.com/a/", "");
    res.end(albumHash);

});

module.exports = router;