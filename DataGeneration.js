
console.log("Hello World!");
console.log('its a me, Sam. This is my first commit');

//split gen stuff   
let id = ((Math.random() * 9999999) +1);
let ticket_id = ((Math.random() * 9999999) +1);
let position_id = ((Math.random() * 9999999) +1);
let contract_id = ((Math.random() * 9999999) +1);
let amount = ((Math.random() * 200) +1); //temporary max is 200
let amount_type = ((Math.random() * 100) +1); //percentage
let today = new Date();
let created_at = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + ':' + today.getHours() + ':' + today.getMinutes();
let updated_at = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + ':' + today.getHours() + ':' + today.getMinutes();
let user_id = ((Math.random() * 9999999) +1);
//let user_name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

function firstNameGenerator() {
    let result = '';
    let charactersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    //generated length bewteen 3 and 8 inclusive
    let firstNameLength = ((Math.random() * (8 - 3 + 1)) + 3);
    for (var i = 0; i < firstNameLength; i++) {
        result += charactersUppercase.charAt(Math.floor(Math.random()));
        result += charactersUppercase.charAt(Math.floor() * firstNameLength);
    }
    return result;
}

console.log(firstNameGenerator());