var express = require("express")
var app = express()
var port = 8080
var path = require("path")  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/index.html'));
});


// var mongoose = require("mongoose")



// require('dotenv').config();
// const uri = process.env.ATLAS_URI;

// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// // serving routes
// var htmlroutes = require('./routes/htmlroutes');

// app.use('/', htmlroutes);

//deployment
app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });
   

  