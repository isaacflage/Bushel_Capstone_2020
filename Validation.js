ERRORS = [];

function validate(ticketsWeCreated, ticketsFromCentre){
    //ticket arrays
    ticketsArrayOrigin = ticketsWeCreated;
    ticketsArrayCentre = ticketsFromCentre;

    //checks id vs remote id
    hasIds = true;
    
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
            hasIds = false; 
        }
    });

    return hasIds;

}

function validateTicket(ticketWeCreated, ticketFromCentre){

}

module.exports.validate = function(ticketsWeCreated, ticketsFromCentre){
    return validate(ticketsWeCreated, ticketsFromCentre);
}

