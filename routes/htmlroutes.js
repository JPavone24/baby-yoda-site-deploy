var express = require('express');
var router = express.Router();
var path = require("path")

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/index.html'));
});

router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/login.html'));
});

router.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/register.html'));
});
 
router.get("/memes", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/memes.html'));
});

router.get("/videos", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/videos.html'));
});

router.get("/news", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/news.html'));
});

router.get("/sellers", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/sellers.html'));
});

router.get("/practice", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/practice.html'));
});

module.exports = router;