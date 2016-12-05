var config      = require("config");
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var jwt         = require('jsonwebtoken');
var util        = require('util');
var User        = require("./model/user.js");

const port=config.get("port");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res)=>{
  var apiurl=`http://${req.headers.host}/api`;
  res.send(`Hello! Access the API at <a href="${apiurl}">${apiurl}</a>.`)
});

var apiRoutes=express.Router();

apiRoutes.get("/", (req, res)=>{
  res.json({message:"Welcome to my awesome API."});
});

apiRoutes.get("/users", (req, res)=>{
  var users=config.get("users");
  res.json(users);
});

apiRoutes.get("/users/:id", (req, res)=>{
  var users=config.get("users");
  var user=new User();
  var i=0;
  while( i<users.length ) {
    var u=new User(users[i++]);
    if( u.id.toLowerCase()==req.params.id.toLowerCase() ) {
      user=u;
      i=users.length;
    }
  }
  res.json(user);
});

app.use("/api", apiRoutes);

app.listen(port, ()=>{
  console.log('Listening on port '+port+'!')
});
