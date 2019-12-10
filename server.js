var express = require("express")
var app = express()
var port = 8080


app.get("/", function(req, res) {
    res.send("welcome to my homepage");
});


app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });


  