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

    if (ticketFromCentre.net_amount != ticketWeCreated.primary_net_weight){
        FIELD_ERRORS.push({
            field_name: 'net_weight',
             expected: ticketWeCreated.primary_net_weight, 
             recieved: ticketFromCentre.net_amount
        });
            
    }   




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
    net_amount: '30',
    net_weight: '27,447.12',
    tare_weight: '14,675.4',
    configurable_field_value: ''
  })

  console.log(JSON.stringify(ERRORS));
 