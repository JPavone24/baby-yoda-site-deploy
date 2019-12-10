var express = require("express")
var app = express()
var port = 8080
var path = require("path")

app.use(express.static(__dirname + "/public"));



app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });


