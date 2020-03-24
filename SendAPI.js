require('dotenv').config({path:'./secrets.env'});
const dotenv = require('dotenv');
const dataGen = require('./DataGeneration.js');
const axios = require('axios').default;

axios.defaults.headers.common['Authorization'] = process.env.SEND_AUTH_TOKEN;
axios.defaults.headers.common['X-Company-Slug'] = 'capstone';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function sendTickets(tickets){
    axios.post('https://router.translator.bushelops.com/api/v1/push', tickets)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports.sendTickets = function(numOfTickets){
    return sendTickets(numOfTickets);
}