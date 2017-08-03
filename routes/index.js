const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/modules', function(req, res) {
    var options = {
        url: 'http://localhost:3000',
        method: 'GET',
        headers: {'cache-control': 'no-cache', 'content-type': 'application/json' }
    };
    request.get(options, function (error, response, body) {
        if (!error && body !== '') {
            res.status(200).json(body);
        } else if (!error && body === '') {
            res.status(400);
        } else {
            res.status(500).json({
                err: error
            });
        }
    });
    
});

module.exports = router;