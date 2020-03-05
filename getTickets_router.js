var express = require('express');
var router = express.Router();
const dataGen = require('./DataGeneration');
const restApi = require('./RestAPI');

//tracks total amount of tickets
let ticketCount = 0;

//query router
router.get('/getTickets', (req, res) => {
  tickets = dataGen.getTickets(req.query.count);
  res.json(tickets);
  restApi.sendTickets(tickets);
  
  ticketCount += req.query.count;
});

router.get('/status', (req, res) => {
  res.send('Number of tickets: ' + ticketCount)
});

// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page');
});


module.exports = router;
