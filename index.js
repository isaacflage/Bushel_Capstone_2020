const express = require('express');
const app = express();
const createTickets = require('./DataGeneration');

var router = require('./getTickets_router');

app.use('/', router);

// app.get('/', (req, res) => {
//     // res.send('Hello World')
//     res.json(createTickets(2))
// });

app.listen(8001, () => {
    console.log('app listening on port 8000')
});