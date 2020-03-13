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

router.get('/getCommodities', (req, res) => {
  commos = dataGen.getUpdateCommodities(10);//parseInt(req.query.count)
  res.json(commos);
  // restApi.sendTickets(commos);
});

router.get('/getTickets/:ElePrefix', (req, res) => {
  tickets = dataGen.getTickets(req.query.count, req.params.ElePrefix.toUpperCase());
  res.json(tickets);
  // restApi.sendTickets(tickets);
});

router.get('/getTickets/:ElePrefix/:CommodityID', (req, res) => {
  tickets = dataGen.getTickets(req.query.count, req.params.ElePrefix.toUpperCase(), req.params.CommodityID);
  res.json(tickets);
  // restApi.sendTickets(tickets);
});

router.get('/getElevator', function (req, res) {
  elevators = dataGen.getUpdateElevators("GRAN")
  res.send(elevators);
  // restApi.sendTickets(elevators);
});

router.get('/getElevator/:ElePrefix', function (req, res) {
  //elevators = dataGen.getUpdateElevators("GRAN")
  elevators = dataGen.getUpdateElevators(req.params.ElePrefix.toUpperCase());
  res.send(elevators);
  // restApi.sendTickets(elevators);
});


// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page <br/><br/>/getTickets/:ElePrefix<br/><br/> /getTickets/:ElePrefix/:CommodityID?count=x <br/><br/>/getElevator <br/><br/>/getElevator/:ElePrefix <br/><br/> getCommodities');
});


module.exports = router;
