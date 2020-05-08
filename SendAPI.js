require('dotenv').config({path:'./secrets.env'});
const dotenv = require('dotenv');
const dataGen = require('./DataGeneration.js');
const axios = require('axios').default;

const routerClient = axios.create({
    baseURL: 'https://router.translator.bushelops.com/api',
    headers: {'X-Company-Slug': 'capstone', 'Authorization': process.env.SEND_AUTH_TOKEN}
  });


function sendTickets(tickets){
    routerClient.post('/v1/push', tickets)
    .then(function (response) {
        //console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports.sendTickets = function(numOfTickets){
    return sendTickets(numOfTickets);
}