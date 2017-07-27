const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/modules', function(req, res) {
    const modules = {
        name: 'modulo22'
    };
    res.json(modules);
});

module.exports = router;