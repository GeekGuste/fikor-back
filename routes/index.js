var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.json({
        status: 'WORKING',
        message: 'This is the / route of Fikor!'
    });
});

module.exports = router;