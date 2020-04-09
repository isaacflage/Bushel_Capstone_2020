function validate(ticketsWeCreated, ticketsFromCentre){
    ERRORS = [];
    
    //ticket arrays
    ticketsArrayOrigin = ticketsWeCreated;
    ticketsArrayCentre = ticketsFromCentre;

    //checks id vs remote id
    ids = [];
    ticketsArrayOrigin.forEach(i => {
        ids.push(i["display_id"]);  
    });

    remoteIds = [];
    ticketsArrayCentre.forEach(i => {
        remoteIds.push(i["remote_id"]);
    });

    ids.forEach(i => {
        if(!remoteIds.includes(i)){
            ERRORS.push({
                id: i,
                message: 'Not found in centre db'});    
        }
    });

    return ERRORS;
}

function validateTicket(ticketWeCreated, ticketFromCentre){

}

module.exports.validate = function(ticketsWeCreated, ticketsFromCentre){
    return validate(ticketsWeCreated, ticketsFromCentre);
}