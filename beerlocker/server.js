// Set up Express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Connect to the beerlocker MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beerlocker');

// Model
var Beer = require('./models/beer');

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on beer!' });
});

// Create a new route with the prefix /beers
var beersRoute = router.route('/beers');

// Create endpoint /api/beers for POSTS
beersRoute.post(function(req, res) {
  var beer = new Beer();
  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;
  beer.save(function(err) {
    if (err) res.send(err);
    res.json({ message: 'Beer added to the locker!', data: beer });
  });
});

// Create endpoint /api/beers for GET
beersRoute.get(function(req, res) {
  Beer.find(function(err, beers) {
    if (err) res.send(err);
    res.json(beers);
  });
});

// Create a new route with the /beers/:beer_id prefix
var beerRoute = router.route('/beers/:beer_id');

// Create endpoint /api/beers/:beer_id for GET
beerRoute.get(function(req, res) {
  Beer.findById(req.params.beer_id, function(err, beer) {
    if (err) res.send(err);
    res.json(beer);
  });
});

// Create endpoint /api/beers/:beer_id for PUT
beerRoute.put(function(req, res) {
  Beer.findById(req.params.beer_id, function(err, beer) {
    if (err) res.send(err);
    beer.quantity = req.body.quantity;
    beer.save(function(err) {
      if (err) res.send(err);
      res.json(beer);
    });
  });
});

// Create endpoint /api/beers/:beer_id for DELETE
beerRoute.delete(function(req, res) {
  Beer.findByIdAndRemove(req.params.beer_id, function(err) {
    if (err) res.send(err);
    res.json({ message: 'Beer removed from the locker!' });
  });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);