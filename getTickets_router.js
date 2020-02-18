var express = require('express');
var router = express.Router();
const createTickets = require('./DataGeneration');



router.get('/getTickets', (req, res) => {
    // res.send('Hello World')
    res.json(createTickets(req.query.count));
});

// define the home page route
router.get('/', function(req, res) {
  res.send('heyheyhey home page');
});


module.exports = router;
