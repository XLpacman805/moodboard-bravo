const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let imageOne = req.query.imageone;
    let imageTwo = req.query.imagetwo;
    let imageThree = req.query.imagethree;
    let imageFour = req.query.imagefour;
    let imageFive = req.query.imagefive;
    let imageSix = req.query.imagesix;
    let imageSeven = req.query.imageseven;
    let imageEight = req.query.imageeight;

    console.log(imageOne);

  res.render('index', {
    title: 'Moodboard Bravo',
    imageOne: imageOne,
    imageTwo: imageTwo,
    imageThree: imageThree,
    imageFour: imageFour,
    imageFive: imageFive,
    imageSix: imageSix,
    imageSeven: imageSeven,
    imageEight: imageEight

  });
});

module.exports = router;
