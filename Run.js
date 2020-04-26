const dataGen = require('./DataGeneration');
const restApi = require('./SendAPI');
const centreApi = require('./CentreAPI');
const validation = require('./Validation');

//big function that runs whole process
async function run(numOfTickets) {
    let ticketsWeCreated = [];

    tickets = dataGen.getTickets(numOfTickets);

    ticketArray = tickets.data[1]['update-tickets'].tickets;
    ticketArray.forEach(i => {
        ticketsWeCreated.push(i);
    });

    //restApi.sendTickets(tickets);



    await sleep(10000);



    let pageResponse = await centreApi.getData(1);
    let pages = pageResponse.data.meta.pagination['total_pages'];

    let ticketsFromCentre = [];

    for (let i = 1; i <= pages; i++) {
        let response = await centreApi.getData(i);
        ticketsFromCentre = ticketsFromCentre.concat(response.data.data);
    }

    let errors = validation.validate(ticketsWeCreated, ticketsFromCentre);

    if (errors.length == 0) {
        console.log('nice');
    }
    else {
        console.log(JSON.stringify(errors, null, 2));
    }


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports.run = function(numOfTickets){
    return run(numOfTickets);
}