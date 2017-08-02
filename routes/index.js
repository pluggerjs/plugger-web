const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/modules', function(req, res) {
    request.get("http://localhost:3000").on('response', function(err, res){
        if(err) {
            res.status(200).json(err);
        } else {
            res.status(200).json(res);
        }
    });
    console.log("siijijsdidsjijsdijdsidcjns");
  
    
});

module.exports = router;