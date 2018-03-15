const express = require('express');
const router = express.Router();
const imgur = require('../imgur.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    let imgurAlbum = new Promise((resolve, reject) => { // I promise i'll get you a link
      resolve(req.query.albumlink.toString().replace('https://imgur.com/a/', ''));
      reject("Something went wrong");
    });

    imgurAlbum
        .then((albumHash) => {
            return albumHash;
        })
        .catch(reason => console.log(reason)); // If for some reason you catch an error, log the reason.


    res.render('index', {title: 'Moodboard Bravo', test: imgurAlbum});
});


module.exports = router;
