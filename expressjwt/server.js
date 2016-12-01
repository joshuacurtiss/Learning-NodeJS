var config = require("config");
var express = require('express')
var app = express()

const port=config.get("port");

app.use(function(req,res,next){
  var d=new Date().toLocaleString();
  console.log(d + ": " + req.method + " " + req.url);
  next();
});

app.get('/', function (req, res) {
  res.send('Hello!')
})

app.listen(port, function () {
  console.log('Listening on port '+port+'!')
})
