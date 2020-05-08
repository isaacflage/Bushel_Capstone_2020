const express = require('express');
const app = express();
const createTickets = require('./DataGeneration');

//use router module
var router = require('./getTickets_router');

app.use('/', router);

app.listen(8001, () => {
    console.log('app listening on port 8001')
});