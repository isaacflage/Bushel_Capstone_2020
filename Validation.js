ERRORS = [];
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

const remove_comma = (value) => {
    return value.replace(",", "");
}
const parse_float = (value) => {
    return parseFloat(value);
}
const to_uppercase = (value) => {
    return value.toUpperCase();
}
let validationSchema = [
    {
        sourceFieldName: "net_weight",
        apiFieldName: "secondary_net_weight",
        sourceTransform: remove_comma,
        apiFieldTransfrom: parse_float

    },
    {
        sourceFieldName: "tare_weight",
        apiFieldName: "secondary_tare_weight",
        sourceTransform: remove_comma,
        apiFieldTransfrom: parse_float

    },
    {
        sourceFieldName: "gross_weight",
        apiFieldName: "secondary_gross_weight",
        sourceTransform: remove_comma,
        apiFieldTransfrom: parse_float

    },
    {
        sourceFieldName: "net_amount",
        apiFieldName: "primary_net_weight",
        sourceTransform: remove_comma,
        apiFieldTransfrom: parse_float

    },
    {
        sourceFieldName: "crop_name",
        apiFieldName: "commodity_id",
    },
    {
        sourceFieldName: "crop_amount_uom",
        apiFieldName: "primary_weight_uom",
        sourceTransform: to_uppercase
    }
];

function validateTicket(ticketWeCreated, ticketFromCentre){
    
    FIELD_ERRORS = [];
/*
    if(ticketFromCentre.net_amount == null){
         ERRORS.push({
             id: ticketWeCreated.id,
             message: 'Net Amount is null'
         });       
    }
    */
    validationSchema.forEach(rule => {
        let sourceValue = rule.sourceTransform ? rule.sourceTransform(ticketFromCentre[rule.sourceFieldName]): ticketFromCentre[rule.sourceFieldName] 
        let apiValue = rule.apiFieldTransfrom ? rule.apiFieldTransfrom(ticketWeCreated[rule.apiFieldName]): ticketWeCreated[rule.apiFieldName]
        if (sourceValue != apiValue){
            FIELD_ERRORS.push({
                field_name: rule.sourceFieldName,
                expected: sourceValue,
                recieved: apiValue
            })
        }
    })

    /*
    //creating strings to prevent false errors due to commas or trailing zeros
    var net_weight = ticketFromCentre.net_weight.replace(",", "");
    var tare_weight = ticketFromCentre.tare_weight.replace(",", "");
    var gross_weight = ticketFromCentre.gross_weight.replace(",", "");
    var net_amount = ticketFromCentre.net_amount.replace(",", "");
    var crop_amount_uom = ticketFromCentre.crop_amount_uom.toUpperCase();
    var secondary_tare_weight = parseFloat(ticketWeCreated.secondary_tare_weight);
    var primary_net_weight = parseFloat(ticketWeCreated.primary_net_weight);
    var secondary_net_weight = parseFloat(ticketWeCreated.secondary_net_weight);
    var secondary_gross_weight = parseFloat(ticketWeCreated.secondary_gross_weight);


    //------------------------comparing weights------------------------------
    //net amount
    if (net_amount != primary_net_weight){
        FIELD_ERRORS.push({
            field_name: 'primary_net_weight' ,
             expected: primary_net_weight, 
             recieved: net_amount
        });
            
    }   
    //net weight
    if (net_weight != secondary_net_weight){
        FIELD_ERRORS.push({
            field_name: 'secondary_net_weight',
             expected: secondary_net_weight, 
             recieved: net_weight
        });
            
    }  
    //tare weight
    if (tare_weight != secondary_tare_weight){
        FIELD_ERRORS.push({
            field_name: 'secondary_tare_weight',
             expected: secondary_tare_weight, 
             recieved: tare_weight
        });
            
    }  
    //gross weight
    if (gross_weight != secondary_gross_weight){
        FIELD_ERRORS.push({
            field_name: 'secondary_gross_weight',
             expected: secondary_gross_weight, 
             recieved: gross_weight
        });
            
    }  

    //--------------------------comparing anything else---------------------------------
    //crop name
    if (ticketFromCentre.crop_name != ticketWeCreated.commodity_id){
        FIELD_ERRORS.push({
            field_name: 'commodity_id',
             expected: ticketWeCreated.commodity_id, 
             recieved: ticketFromCentre.crop_name
        });
            
    }  

    //crop amount uom
    if (crop_amount_uom != ticketWeCreated.primary_weight_uom){
        FIELD_ERRORS.push({
            field_name: 'primary_weight_uom',
             expected: ticketWeCreated.primary_weight_uom, 
             recieved: crop_amount_uom
        });
            
    }  

    */

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
    crop_amount_uom: 'bu',
    crop_id: 0,
    crop_name: 'H',
    crop_primary_measure: 'amount',
    crop_weight_uom: 'kgs',
    gross_weight: '42,136.64',
    net_amount: '301.6',
    net_weight: '27,447.12',
    tare_weight: '14,675.4',
    configurable_field_value: ''
  })

  console.log(JSON.stringify(ERRORS, null, 2));
 