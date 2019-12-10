var express = require('express');
var router = express.Router();
var path = require("path")

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,  'index.html'));
});

router.get("/practice", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/practice.html'));
});

module.exports = router;