var express = require('express'); 
var router = express.Router();
let user = require('../models/user.model');
let merch = require('../models/merch.model');


router.get('/', (req, res)=> {
    user.find({})
        .then((data) =>{
            console.log('data: ', data)
            res.json(data)
        })
        .catch((error)=>{
            console.log('error: ', error)
        })
})

router.get('/merch', (req, res)=> {
    merch.find({})
        .then((data) =>{
            console.log('data: ', data)
            res.json(data)
        })
        .catch((error)=>{
            console.log('error: ', error)
        })
})

router.get('/merch/:department', (req, res)=> {
    merch.find({department: req.params.department})
        .then((data) =>{
            // console.log('data: ', data)
            res.json(data)
        })
        .catch((error)=>{
            console.log('error: ', error)
        })
})
router.get('/merch/:department', (req, res)=> {
    merch.find({department: req.params.department})
        .then((data) =>{
            console.log('data: ', data)
            res.json(data)
        })
        .catch((error)=>{
            console.log('error: ', error)
        })
})
var Cart = [

];
  
router.get('/cart', (req, res)=> {
    res.json(Cart)
})  
router.post('/cart', (req, res)=> {
        merch.find({"_id": req.body.id})
        .then((data) =>{
            console.log(data)
            Cart.push(data[0])
        })
        .catch((error)=>{
            console.log('error: ', error)
        })
  res.send("merch sent to cart")
})



router.get('/sellers/:seller', (req, res)=> {
    merch.find({nameOfSeller: req.params.seller})
        .then((data) =>{
            console.log('data: ', data)
            res.json(data)
        })
        .catch((error)=>{
            console.log('error: ', error)
        })
})

module.exports = router;