var express = require("express")
var app = express()
var path = require("path")  
var port = 8080
var mongoose = require("mongoose")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

require('dotenv').config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// serving routes
var htmlroutes = require('./routes/htmlroutes');

app.use('/', htmlroutes);

//deployment
app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });
   

  