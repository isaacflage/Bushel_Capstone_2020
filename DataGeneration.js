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
    
    commodityIdList = ["SB", "CO", "P", "W", "CA", "DP", "H", "FV", "O", "S"];
    elevatorIdList = ["GRAN01", "GRAN02", "GRAN03", "GRAN04", "GRAN05", "GRAN06", "GRAN07", "GRAN08", "GRAN09", "GRAN10"];
    userIdList = ["K3523", "S1109", "Q4393", "L1432", "I8035", "Y4589", "H9653", "A3165", "C9487", "O6234"];
    
    primaryGrossWeight = (495.67 - (Math.random() * 100) + 1).toFixed(2);
    primaryTareWeight = ((Math.random() * 100) + 1).toFixed(2);
    primaryShrinkWeight = (Math.random() < 0.1) ? 0 : (67.47 - (Math.random() * 10) + 1).toFixed(2);
    primaryDockWeight = (Math.random() < 0.1) ? 0 : ((Math.random() * 10) + 1).toFixed(2);

    secondaryGrossWeight = (42202.0 - (Math.random() * 100) + 1).toFixed(2);
    secondaryTareWeight = (14711.0 - (Math.random() * 100) + 1).toFixed(2);
    secondaryShrinkWeight = (Math.random() < 0.1) ? 0 : (12.75 - (Math.random() * 10) + 1).toFixed(2);
    secondaryDockWeight = (Math.random() < 0.1) ? 0 : ((Math.random() * 10) + 1).toFixed(2);

    let ticket = {      
        id: faker.random.uuid(), 
        version: "1.1.0", 
        commodity_id: commodityIdList[Math.floor(Math.random() * 10)],
        elevator_id: elevatorIdList[Math.floor(Math.random() * 10)],
        display_id: faker.random.uuid(),
        identifier: faker.random.uuid(),
        user_id: (Math.random() < 0.1) ? userIdList[Math.floor(Math.random() * 10)] : null,
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
        deleted_at: faker.date.recent(),

        primary_dock_weight: primaryDockWeight,
        primary_gross_weight: primaryGrossWeight,      
        primary_shrink_weight: primaryShrinkWeight,
        primary_tare_weight: primaryTareWeight,
        primary_weight_uom: "BU",
        primary_net_weight: (primaryGrossWeight - primaryTareWeight - primaryShrinkWeight - primaryDockWeight).toFixed(2),
        
        secondary_dock_weight: secondaryDockWeight,
        secondary_gross_weight: secondaryGrossWeight, 
        secondary_shrink_weight: secondaryShrinkWeight,
        secondary_tare_weight: secondaryTareWeight,
        secondary_weight_uom: (Math.random() < 0.5) ? "lbs" : "kgs",
        secondary_net_weight: (secondaryGrossWeight - secondaryTareWeight - secondaryShrinkWeight - secondaryDockWeight).toFixed(2),

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
 * Generates a random split corresponding to a ticket
 */
function generateSplit(ticketId, userId) {
    userIdList = ["K3523", "S1109", "Q4393", "L1432", "I8035", "Y4589", "H9653", "A3165", "C9487", "O6234"];
    
    splits = []
    numOfSplits = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
    for (let i = 0; i < numOfSplits; i++){
        splits[i] = {
            id: faker.random.uuid(),
            ticket_id: ticketId,
            position_id: faker.random.uuid(),
            contract_id: faker.random.uuid(),
            amount: 100 / numOfSplits, 
            amount_type: 'percentage',
            created_at: faker.date.recent(),
            updated_at: faker.date.recent(),
            user_id: userIdList[Math.floor(Math.random() * 10)],
            user_name: faker.name.findName()
        }
    }
    if(userId != null){
        splits[0].user_id = userId;
    } 
    return splits;
}

/**
 * Generates json object of specified number of tickets and their splits
 */

//function createTickets(numOfTickets)
module.exports = function(numOfTickets)
{   
    tickets = [];
    allSplits = [];  
    for (let i = 0; i < numOfTickets; i++){
        ticket = generateTicket();
        splits = generateSplit(ticket.id, ticket.user_id);
        tickets.push(ticket);
        splits.forEach(s => {
            allSplits.push(s);
        });
    }

    updateSplits = {
        'splits': allSplits
    };
    updateTickets = {
        'tickets': tickets
    };

    updateSplitsPackage = {
        'update-splits': updateSplits,      
    };
    updateTicketsPackage = {
        'update-tickets': updateTickets
    };

    data = [updateSplitsPackage, updateTicketsPackage];
    dataPackage = {
        'data': data
    };

    //return JSON.stringify(dataPackage), for some reason you have to stringify for it to appear correctly in the console window, but the line below makes it appear correctly for the browser ヽ(ﾟдﾟ)ノ
    return dataPackage;
}

//testing
//console.log((createTickets(3)));

