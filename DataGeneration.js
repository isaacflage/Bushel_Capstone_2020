//faker variable
let faker = require('faker');

/**
 * Generates a random ticket
 */
function generateTicket(){   
    remarkAmount = Math.floor(Math.random() * 10);
    originalRemarks = [];
    for (let i = 0; i < remarkAmount; i++) {
        originalRemarks[i] = {
            grade_factor: faker.hacker.noun(),
            grade_factor_code: faker.hacker.abbreviation(),
            grade_factor_value: 12.0 - ((Math.random() * 10) + 1).toFixed(2),
            dock_value: 10.0 + ((Math.random() * 10) + 1).toFixed(2),
            dock_unit: ((Math.random() * 10) + 1).toFixed(2)
        } 
    }
    
    let ticket = {      
        id: faker.random.uuid(), 
        version: Math.floor(Math.random() * 10) + "." + Math.floor(Math.random() * 10) + "." + Math.floor(Math.random() * 10), 
        commodity_id: faker.random.uuid(),
        elevator_id: faker.random.uuid(),
        display_id: faker.random.uuid(),
        identifier: faker.random.uuid(),
        user_id: faker.random.uuid(),
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
        deleted_at: faker.date.recent(),

        primary_dock_weight: ((Math.random() * 10) + 1).toFixed(2),
        primary_gross_weight: (495.67 - (Math.random() * 100) + 1).toFixed(2),
        primary_net_weight: (423.24 - (Math.random() * 100) + 1).toFixed(2),
        primary_shrink_weight: (67.47 - (Math.random() * 10) + 1).toFixed(2),
        primary_tare_weight: ((Math.random() * 100) + 1).toFixed(2),
        primary_weight_uom: faker.address.stateAbbr(),
        secondary_dock_weight: ((Math.random() * 10) + 1).toFixed(2),
        secondary_gross_weight: (42202.0 - (Math.random() * 100) + 1).toFixed(2),
        secondary_net_weight: (24199.0 - (Math.random() * 100) + 1).toFixed(2),
        secondary_shrink_weight: (12.75 - (Math.random() * 10) + 1).toFixed(2),
        secondary_tare_weight: (14711.0 - (Math.random() * 100) + 1).toFixed(2),
        secondary_weight_uom: (Math.random() < 0.5) ? "lbs":"kgs",

        remarks: originalRemarks,

        sample_id: faker.random.uuid(),
        truck_driver: faker.name.firstName() + " " + faker.name.lastName(),
        truck_license: faker.random.uuid(),
        truck_name: "Semi " + Math.floor((Math.random() * 10) + 1),
        weigh_in_at: faker.date.recent(),
        weigh_master: faker.name.firstName() + " " + faker.name.lastName(),
        weigh_out_at: faker.date.recent(),
        field_name: faker.random.word(),
        field_id: faker.random.uuid(),
        grader: faker.name.firstName() + " " + faker.name.lastName(),
        lot_id: faker.random.uuid()
    };
    return ticket;
}

/**
 * Generates a random split
 */
function generateSplit() {
    let today = new Date(); 
    let split = {
        id: faker.random.uuid(),
        ticket_id: faker.random.uuid(),
        position_id: faker.random.uuid(),
        contract_id: faker.random.uuid(),
        amount: (Math.floor((Math.random() * 100) + 1)), 
        amount_type: 'percentage',
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
        user_id: faker.random.uuid(),
        user_name: faker.name.findName()
    }
    return split;
}

//testing
console.log('\ngenerated ticket:\n');
console.log(generateTicket());
console.log('\ngenerated split:\n');
console.log(generateSplit());

