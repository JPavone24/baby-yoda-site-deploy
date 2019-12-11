// var express = require('express'); 
// var router = express.Router();
// let user = require('../models/user.model.js');
// let merch = require('../models/merch.model.js');


// router.get("/users", function(req, res) {
//    user.find({}).then(function(users){
//        res.send(users)
//    })
// });
// router.post("/users", function(req, res) {
//     console.log(req.body)
//     user.create(req.body).then(function(user){
//         res.send(user.firstName + "has been added")
//     })
// });   


// router.get("/merch", function(req, res) {
//     merch.find({}).then(function(merches){
//         res.send(merches)
//     })
//  });

//  router.post("/merch", function(req, res) {
//      console.log(req.body)
//      merch.create(req.body).then(function(data){
//          res.send(data.nameOfSeller + "has added a new product")
//      })
//  });   
 
    
// module.exports = router;