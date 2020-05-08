require('dotenv').config({path:'./secrets.env'});
const dotenv = require('dotenv');
const axios = require('axios').default;

axios.defaults.headers.common['Authorization'] = 'Token ' + process.env.CENTRE_AUTH_TOKEN;
axios.defaults.headers.common['App-Installation-Id'] = '2182addf-fa28-408f-8cfe-0c55701c44b6';
axios.defaults.headers.common['App-Name'] = 'http://capstone-web-dev.bw.localhost:8001';
axios.defaults.headers.common['App-Company'] = 'capstone';
axios.defaults.headers.common['App-Version'] = '1.0.0a';
axios.defaults.headers.common['Accept'] = 'application/json';

//this method gets the response from centre 
function getData(pageNum){
    return axios.post(`https://centre-r3.scaleticket.net/api/v3/tickets?page=${pageNum}`);
};

module.exports.getData = function(pageNum){
    return getData(pageNum);
}