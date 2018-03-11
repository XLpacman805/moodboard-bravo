const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let imageOne = req.query.imageone;
    console.log(imageOne);

  res.render('index', {
    title: 'Moodboard Bravo',
    something: imageOne
  });
});

module.exports = router;
