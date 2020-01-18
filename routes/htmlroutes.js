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

router.get("/practice", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/practice.html'));
});

//Merch Routes
router.get("/merch", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/merch.html'));
});

router.get("/merch2", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/merch2.html'));
});

router.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/checkout.html'));
});

router.get("/merch/mugs", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/mugs.html'));
});

module.exports = router;