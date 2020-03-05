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

router.get('/getTickets/Elevator/:arg', (req, res) => {
  tickets = dataGen.getTickets(req.query.count,req.params.arg.toUpperCase());
  res.json(tickets);
  // restApi.sendTickets(tickets);
});

router.get('/getElevator', function (req, res) {
  elevators = dataGen.getUpdateElevators("GRAN")
  res.send(elevators);
});

router.get('/getElevator/:arg', function (req, res) {
  elevators = dataGen.getUpdateElevators("GRAN")
  elevators = dataGen.getUpdateElevators(req.params.arg.toUpperCase());
  res.send(elevators);
});


// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page  /getTickets/Elevator/:arg  /getElevator/:arg getCommodities?count=3');
});


module.exports = router;
