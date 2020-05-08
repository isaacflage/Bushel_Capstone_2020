

ERRORS = [];

/**
 * Checks to see which created tickets exist within centre tickets. If they exist, func validateTicket is called on each ticket
 * @param {*} ticketsWeCreated local tickets  
 * @param {*} ticketsFromCentre centre tickets
 */
function validate(ticketsWeCreated, ticketsFromCentre){
    ERRORS = [];
    
    //ticket arrays
    ticketsArrayOrigin = ticketsWeCreated;
    ticketsArrayCentre = ticketsFromCentre;

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

//transformation methods for each of the fields below
const remove_comma = (value) => {
    return value.replace(",", "");
}
const parse_float = (value) => {
    return parseFloat(value);
}
const to_uppercase = (value) => {
    return value.toUpperCase();
}

//list of each of the field pairs and any transformations they need
let validationSchema = [
    {
        sourceFieldName: "secondary_net_weight",
        centreFieldName: "net_weight",
        sourceTransform: parse_float,
        centreFieldTransform: remove_comma

    },
    {
        sourceFieldName: "secondary_tare_weight",
        centreFieldName: "tare_weight",
        sourceTransform: parse_float,
        centreFieldTransform: remove_comma

    },
    {
        sourceFieldName: "secondary_gross_weight",
        centreFieldName: "gross_weight",
        sourceTransform: parse_float,
        centreFieldTransform: remove_comma

    },
    {
        sourceFieldName: "primary_net_weight",
        centreFieldName: "net_amount",
        sourceTransform: parse_float,
        centreFieldTransform: remove_comma

    },
    {
        sourceFieldName: "commodity_id",
        centreFieldName: "crop_name"
    },
    {
        sourceFieldName: "primary_weight_uom",
        centreFieldName: "crop_amount_uom",
        centreFieldTransform: to_uppercase
    }
];
/**
 * Checks that local ticket's values match the centre ticket's values
 * @param {*} ticketWeCreated local ticket
 * @param {*} ticketFromCentre centre ticket
 */
function validateTicket(ticketWeCreated, ticketFromCentre){
    
    FIELD_ERRORS = [];

    validationSchema.forEach(rule => {
        let sourceValue = rule.sourceTransform ? rule.sourceTransform(ticketWeCreated[rule.sourceFieldName]) : ticketWeCreated[rule.sourceFieldName] 
        let centreValue = rule.centreFieldTransform ? rule.centreFieldTransform(ticketFromCentre[rule.centreFieldName]) : ticketFromCentre[rule.centreFieldName]
        if (sourceValue != centreValue){
            FIELD_ERRORS.push({
                field_name: rule.sourceFieldName,
                expected: sourceValue,
                recieved: centreValue
            })
        }
    })
    //pushing errors to our ERRORS array
    if (FIELD_ERRORS.length != 0){
        ERRORS.push({
            id: ticketWeCreated.id,
            message: 'Field mismatches found',
            fields: FIELD_ERRORS
        });
    }
}

module.exports.validate = function(ticketsWeCreated, ticketsFromCentre){
    return validate(ticketsWeCreated, ticketsFromCentre);
}




  








  
  
  
 