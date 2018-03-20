const https = require('https');

exports.test = (x) => x + " HELLO WORLD";

// Sends GET request to imgur api for our album. A callback must be passed into this function to use the GET response.
exports.getAlbum = (albumHash, cb) => {
   https.get('https://api.imgur.com/3/album/' + albumHash + '/?client_id=' + process.env.IMGUR_CLIENT_ID,
       res =>{
            let body = '';
            res.on('data', data => {
                body += data;
            });

            res.on('end', () => {
                body = JSON.parse(body);
                cb(body.data);
            });
       });
};
