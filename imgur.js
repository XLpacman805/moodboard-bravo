const request = require('request');

exports.test = (x) => x + " HELLO WORLD";

exports.getImagesFromAlbum = (albumHash) => {
    return request('https://api.imgur.com/3/album/' + albumHash +'/images/?client_id=' + process.env.IMGUR_CLIENT_ID, (err, res, body) =>{
        if (err) throw err;

        return JSON.parse(body);
    });
};