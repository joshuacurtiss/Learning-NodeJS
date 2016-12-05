var config      = require("config");
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var util        = require('util');
var User        = require("./model/user.js");

var passport    = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt  = require('passport-jwt').ExtractJwt;

passport.use(new JwtStrategy({
  secretOrKey: config.get("secret"),
  issuer: config.get("tokenurl"),
  audience: config.get("tokenaudience"),
  jwtFromRequest: ExtractJwt.fromAuthHeader()
}, (jwt_payload,done)=>{
  var users=config.get("users");
  var user=users.find((u)=>{return (u.id.toLowerCase()==jwt_payload.usertype.toLowerCase()+jwt_payload.id)});
  if( user ) {
    done(null, jwt_payload);
  } else {
    done(null, false);
  }
}));

const port=config.get("port");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res)=>{
  var apiurl=`http://${req.headers.host}/api`;
  var tokurl=config.get("tokenurl");
  res.send(`
    <p>Hello!</p>
    </p>Access the API at <a href="${apiurl}">${apiurl}</a>.</p>
    <p>Get a token: <a href="${tokurl}">${tokurl}</a>.</p>
  `);
});

app.get("/token/:tok", (req,res)=>{
  res.send(`
  <style>code {display:block; width: 60%; word-wrap: break-word;}</style>
  <p>Congratulations! You've got a token!</p>
  <code>${req.params.tok}</code>
  `);
});

var apiRoutes=express.Router();

apiRoutes.get("/", (req, res)=>{
  res.json({message:"Welcome to my awesome API."});
});

apiRoutes.get("/users", passport.authenticate('jwt',{session:false}), (req, res)=>{
  var users=config.get("users");
  var loginUser=new User(req.user);
  console.log(`This page is being requested by ${loginUser}.`);
  res.json(users);
});

apiRoutes.get("/users/:id", passport.authenticate('jwt',{session:false}), (req, res)=>{
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
