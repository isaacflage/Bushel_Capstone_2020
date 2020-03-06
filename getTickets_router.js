var express = require('express');
var router = express.Router();
const dataGen = require('./DataGeneration');
const restApi = require('./RestAPI');


//query router
router.get('/getTickets', (req, res) => {
  tickets = dataGen.getTickets(req.query.count);
  res.json(tickets);
  // restApi.sendTickets(tickets);
});

router.get('/getCommodities', (req, res) => {
  commos = dataGen.getUpdateCommodities(parseInt(req.query.count));
  res.json(commos);
  // restApi.sendTickets(tickets);
});

router.get('/getTickets/Elevator/:ElePrefix', (req, res) => {
  tickets = dataGen.getTickets(req.query.count,req.params.ElePrefix.toUpperCase());
  res.json(tickets);
  // restApi.sendTickets(tickets);
});

router.get('/getElevator', function (req, res) {
  elevators = dataGen.getUpdateElevators("GRAN")
  res.send(elevators);
  // restApi.sendTickets(tickets);
});

router.get('/getElevator/:ElePrefix', function (req, res) {
  elevators = dataGen.getUpdateElevators("GRAN")
  elevators = dataGen.getUpdateElevators(req.params.ElePrefix.toUpperCase());
  res.send(elevators);
  // restApi.sendTickets(tickets);
});


// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page <br/> /getTickets/Elevator/:arg <br/> /getElevator/:arg <br/> getCommodities?count=x');
});


module.exports = router;
