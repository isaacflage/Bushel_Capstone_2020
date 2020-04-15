function validate(ticketsWeCreated, ticketsFromCentre){
    ERRORS = [];
    
    //ticket arrays
    ticketsArrayOrigin = ticketsWeCreated;
    ticketsArrayCentre = ticketsFromCentre;

    //checks id vs remote id
    // ids = [];
    // ticketsArrayOrigin.forEach(i => {
    //     ids.push(i["id"]);  
    // });

    // remoteIds = [];
    // ticketsArrayCentre.forEach(i => {
    //     remoteIds.push(i["remote_id"]);
    // });

    ticketsArrayOrigin.forEach(originTicket => {
        let foundTicket = ticketsArrayCentre.find(centreTicket => centreTicket.remote_id == originTicket.id)
        if(!foundTicket){
            ERRORS.push({
                id: originTicket.id,
                message: 'Not found in centre db'});  
            return;  
        }
        validateTicket(originTicket, foundTicket);
    });

    return ERRORS;
}

function validateTicket(ticketWeCreated, ticketFromCentre){

}

module.exports.validate = function(ticketsWeCreated, ticketsFromCentre){
    return validate(ticketsWeCreated, ticketsFromCentre);
}