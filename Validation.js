

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


//testing
validateTicket({
    id: '5df5ff8d-c35a-4bab-9c53-6d74615b56a2',
    version: '1.1.0',
    commodity_id: 'H',
    elevator_id: 'GRAN06',
    identifier: '59aae118-f7e6-4c5a-ae22-a9aea17b9f99',
    user_id: null,
    created_at: '2020-04-15T00:30:44.521Z',
    updated_at: '2020-04-15T08:13:59.917Z',
    deleted_at: null,
    primary_dock_weight: '10.65',
    primary_gross_weight: '434.20',
    primary_shrink_weight: '62.07',
    primary_tare_weight: '59.72',
    primary_weight_uom: 'BU',
    primary_net_weight: '301.76',
    secondary_dock_weight: '4.52',
    secondary_gross_weight: '42136.64',
    secondary_shrink_weight: '9.60',
    secondary_tare_weight: '14675.40',
    secondary_weight_uom: 'kgs',
    secondary_net_weight: '27447.12',
    remarks: [ [Object], [Object] ],
    sample_id: 'b24d6ac4-81fb-4d08-aec5-53979f2b134e',
    truck_driver: 'Oda McKenzie',
    truck_license: '1696955f-8dc1-4d89-b9d0-ffee64667d4f',
    truck_name: 'Semi 4',
    weigh_in_at: '2020-04-15T08:09:19.891Z',
    weigh_master: 'Toy Bayer',
    weigh_out_at: '2020-04-14T21:38:33.287Z',
    field_name: 'Persistent',
    field_id: 'b706a635-0045-4ad9-9b07-84e6db244315',
    grader: 'Deonte Williamson',
    lot_id: '4c0a551a-1a9e-42a3-9bae-9289930d5d5c'
  },   {
    company_name: 'Capstone 2020',
    company_branding_image: null,
    contract_id: null,
    created_at: '2020-04-15T08:09:19+00:00',
    elevator_id: 2937,
    elevator_name: 'Capstone Elevator6',
    id: 8805150,
    remarks: [ [Object] ],
    remote_id: '5df5ff8d-c35a-4bab-9c53-6d74615b56a2',
    remote_user_id: '2020001',
    updated_at: '2020-04-15T08:13:59+00:00',
    weigh_in_at: '2020-04-15T08:09:19+00:00',
    weigh_out_at: '2020-04-14T21:38:33+00:00',
    configurable_field_label: null,
    crop_amount_uom: 'bu bu',
    crop_id: 0,
    crop_name: 'Ha',
    crop_primary_measure: 'amount',
    crop_weight_uom: 'kgs',
    gross_weight: '42,136.60',
    net_amount: '301.6',
    net_weight: '27,47.12',
    tare_weight: '4,675.4',
    configurable_field_value: ''
  })

//console.log(JSON.stringify(ERRORS, null, 2));

  








  
  
  
 