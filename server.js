var express = require("express")
var app = express()
var port = 8080
var path = require("path")  


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,  'public/index.html'));
});

app.get("/practice", function(req, res) {
  res.sendFile(path.join(__dirname,  'public/practice.html'));
});


app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });
   

