//faker variable
let faker = require('faker');

/**
 * Generates a random ticket
 */
function generateTicket(ElePrefix = "GRAN", CommodityID = null){   
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

    //set situation if there is or not  Commodity in argument
    if(CommodityID == null){
        commodityIdList = ["SB", "CO", "P", "W", "CA", "DP", "H", "FV", "O", "S"];
    }else{
        commodityIdList = [CommodityID];
    }
    
    // elevatorIdList = ["GRAN01", "GRAN02", "GRAN03", "GRAN04", "GRAN05", "GRAN06", "GRAN07", "GRAN08", "GRAN09", "GRAN10"];
    userIdList = ["K3523", "S1109", "Q4393", "L1432", "I8035", "Y4589", "H9653", "A3165", "C9487", "O6234"];

    //combine prefix and number
    elevatorIdList = [];
    for(i=1; i<11;i++){
        elevatorIdList[i-1] = ElePrefix+"0"+i.toString()
        
    };
    
    
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
        commodity_id: commodityIdList[Math.floor(Math.random() * commodityIdList.length)],//changed to use comodity list length in random 
        elevator_id: elevatorIdList[Math.floor(Math.random() * 10)],
        display_id: faker.random.uuid(),
        identifier: faker.random.uuid(),
        user_id: (Math.random() < 0.1) ? userIdList[Math.floor(Math.random() * 10)] : null,
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
        deleted_at: null,

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
    splits[0].user_id = '2020001';
    splits[0].user_name = 'Capstone Team';
    // if(userId != null){
    //     splits[0].user_id = userId;
    // } 
    return splits;
}

//default generate elevator without argument
function generateElevator(){
    elevators = [];
    elevatorIdList = ["GRAN01", "GRAN02", "GRAN03", "GRAN04", "GRAN05", "GRAN06", "GRAN07", "GRAN08", "GRAN09", "GRAN10"];
    for (i = 0; i < elevatorIdList.length; i++){
        elevators[i] = {
            id: elevatorIdList[i],
            name: "Capstone Elevator" + i.toString(),
            address_line_1: null,
            address_line_2: null,
            city: "Fargo",
            state: "ND",
            zip_code: 58102,
            phone: null,
            fax: null,
            email: null,
            website: null
        }
    }
    return elevators;
}

//generage elevator
function generateElevator(ElePrefix){
    elevators = [];
    
    for (i = 1; i < 11; i++){
        elevators[i-1] = {
            id: ElePrefix+"0"+i.toString(),
            name: "Capstone Elevator" + i.toString(),
            address_line_1: null,
            address_line_2: null,
            city: "Fargo",
            state: "ND",
            zip_code: 58102,
            phone: null,
            fax: null,
            email: null,
            website: null
        }
    }
    return elevators;
}



//generate comodity
function generateCommodity(num = 10 , ElePrefix = "GRAN" ){
    
    commodity = [];
    commodityIdList = ["SB", "CO", "P", "W", "CA", "DP", "H", "FV", "O", "S"];
    displayName = [""];

    elevatorIdList = [];
    for(i=1; i<11;i++){
        elevatorIdList[i-1] = ElePrefix+"0"+i.toString()
        
    };

    for (k = 1; k < num+1; k++){
        commodity[k-1] = {
            id:commodityIdList[k-1],
            display_Name:commodityIdList[k-1]+"_FullName",
            elevator_id: elevatorIdList[Math.floor(Math.random() * 10)]//qusetion for binding elevator id and commodity id in tickets and commodity amd elevator data
        }
    };

    return commodity;

}

//package commodity to data
function package_commodity(num, ElePrefix){
    updateCom = {
        'commodity': generateCommodity(num, ElePrefix)
    };
    
    dataPackage = {
        'data': [{"update-commodities":updateCom}]
    };
    
    return dataPackage
}

//package elevator to data
function package_update_elevators(ElePrefix){
    updateElevators = {
        'elevators': generateElevator(ElePrefix)
    };
    
    dataPackage = {
        'data': [{"update-elevators":updateElevators}]
    };
    
    return dataPackage
}


/**
 * Generates json object of specified number of tickets and their splits
 */

function createTickets(numOfTickets, ElePrefix,CommodityID)
{   
    tickets = [];
    allSplits = []; 
    elevatorList = generateElevator(); 
    for (let i = 0; i < numOfTickets; i++){
        ticket = generateTicket(ElePrefix, CommodityID);
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
    
    updateElevators = {
        'elevators': generateElevator(ElePrefix)
    };

    // updateCommodities = {
    //     'commodity': generateCommodity(ElePrefix)
    // };


    updateSplitsPackage = {
        'update-splits': updateSplits,      
    };
    updateTicketsPackage = {
        'update-tickets': updateTickets
    };
    updateElevatorsPackage = {
        'update-elevators': updateElevators
    };

    // updataCommoditysPackage = {
    //     "update-commodities":updateCommodities
    // };
    // ,updataCommoditysPackage
    data = [updateSplitsPackage, updateTicketsPackage, updateElevatorsPackage];
    dataPackage = {
        'data': data
    };

    //return JSON.stringify(dataPackage), for some reason you have to stringify for it to appear correctly in the console window, but the line below makes it appear correctly for the browser ヽ(ﾟдﾟ)ノ
    return dataPackage;
}






module.exports.getTickets = function(numOfTickets,ElePrefix = "GRAN",CommodityID = null){
    return createTickets(numOfTickets, ElePrefix, CommodityID );
}

module.exports.getUpdateElevators = function(ElePrefix){
    return package_update_elevators(ElePrefix);
}

module.exports.getUpdateCommodities = function(num = 10){
    return package_commodity(num);
}


//testing
//console.log((createTickets(3)));

