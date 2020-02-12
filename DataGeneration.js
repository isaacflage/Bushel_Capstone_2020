let faker = require('faker');
/**
 * Generates a random split
 */
function generateSplit() {
    let today = new Date();
    //random generation of split
    let split = {
        id: (Math.floor((Math.random() * 9999999) +1)),
        ticket_id: (Math.floor((Math.random() * 9999999) +1)),
        position_id: (Math.floor((Math.random() * 9999999) +1)),
        contract_id: (Math.floor((Math.random() * 9999999) +1)),
        amount: 100, 
        amount_type: 'percentage',
        created_at: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + ':' + today.getHours() + ':' + today.getMinutes(),
        updated_at: null,
        user_id: (Math.floor((Math.random() * 9999999) +1)),
        user_name: faker.name.findName()
    }
    console.log(JSON.stringify(split));
}

//testing
generateSplit();


















