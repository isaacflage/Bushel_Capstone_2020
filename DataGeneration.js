let faker = require('faker');
let today = new Date();
/**
 * Generates a random split
 */
function generateSplit() {
    //random generation of split
    let split = {
        id: (Math.floor((Math.random() * 9999999) +1)),
        ticket_id: (Math.floor((Math.random() * 9999999) +1)),
        position_id: (Math.floor((Math.random() * 9999999) +1)),
        contract_id: (Math.floor((Math.random() * 9999999) +1)),
        amount: (Math.floor((Math.random() * 100) + 1)), 
        amount_type: 'percentage',
        created_at: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ':' + today.getHours() + ':' + today.getMinutes(),
        updated_at: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ':' + today.getHours() + ':' + today.getMinutes(),
        user_id: (Math.floor((Math.random() * 9999999) +1)),
        user_name: faker.name.findName()
    }
    console.log(JSON.stringify(split));
}

//testing
generateSplit();
