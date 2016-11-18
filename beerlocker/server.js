// Set up Express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Controllers 
var beerController = require('./controllers/beer');

// Connect to the beerlocker MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beerlocker');

// Model
var Beer = require('./models/beer');

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/beers')
  .post(beerController.postBeers)
  .get(beerController.getBeers);

// Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
  .get(beerController.getBeer)
  .put(beerController.putBeer)
  .delete(beerController.deleteBeer);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);