var express = require('express');
var router = express.Router();
const dataGen = require('./DataGeneration');
const restApi = require('./RestAPI');

//tracks total amount of tickets
let ticketCount = 0;
let responseCode = '';
let ticketRunCount = 0;
let statusRunCount = 0;

//query router
router.get('/getTickets', (req, res) => {
  tickets = dataGen.getTickets(req.query.count);
  res.json(tickets);
  //restApi.sendTickets(tickets);
  
  ticketRunCount++;
  responseCode += res.statusMessage;
  ticketCount += Number(req.query.count);
});

router.get('/status', (req, res) => {
  statusRunCount++;
  res.send('Number of Tickets: ' + ticketCount + '\n' +
  'Status Code: ' + responseCode + '\n' +
  'Number of Ticket Endpoint Runs: ' + ticketRunCount + '\n' +
  'Number of Status Endpoint Runs: ' + statusRunCount);
});

// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page');
});


module.exports = router;
