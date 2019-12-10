var express = require("express")
var app = express()
var path = require("path")  
var port = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));


// serving routes
var htmlroutes = require('./routes/htmlroutes');
app.use('/', htmlroutes);

   
//deployment
app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });
   

