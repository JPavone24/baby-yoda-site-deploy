const express = require('express')
const mongoose = require('mongoose')
// const morgan = require('morgan')
const path = require('path')

const app = express()
const port = process.env.port || 3000;


var htmlroutes = require('./routes/htmlroutes');
var apiroutes = require('./routes/apiroutes');
      
require('dotenv').config();     
const uri = process.env.MONGODB_URI;
mongoose.connect( uri ||"mongodb://localhost/baby-yoda", {
   useNewUrlParser: true, 
   useCreateIndex: true ,  
   useUnifiedTopology: true }
)
mongoose.connection.on('connected', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// app.use(morgan('tiny'))
app.use('/', htmlroutes);
app.use('/api', apiroutes);


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening");
  });

  