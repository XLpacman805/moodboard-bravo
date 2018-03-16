const express = require('express');
const router = express.Router();
const imgur = require('../imgur.js');

/* GET moodboard page. */

router.get('/', (req, res, next) => {
    res.end('HELLO WORLD');

});

module.exports = router;