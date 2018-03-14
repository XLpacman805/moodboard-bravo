const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let imgurAlbum = req.query.albumlink.toString().replace('https://imgur.com/a/', ''); //removes the URL part.
  console.log(imgurAlbum);


  res.render('index', {
    title: 'Moodboard Bravo'
  });
});

module.exports = router;
