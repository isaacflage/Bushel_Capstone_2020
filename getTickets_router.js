var express = require('express');
var router = express.Router();
const dataGen = require('./DataGeneration');
const restApi = require('./RestAPI');


//query router
router.get('/getTickets', (req, res) => {
  tickets = dataGen.getTickets(req.query.count);
  res.json(tickets);
  restApi.sendTickets(tickets);
});

// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page');
});


module.exports = router;
