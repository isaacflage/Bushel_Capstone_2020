//split gen stuff to eventually go into a json
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

/**
 * Generates a random name w/ length 4 to 8
 * takes no paramaters
 * names will not always make sense
 */
function nameGenerator() {
    let result = '';
    let charactersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    //generated length bewteen 3(but 4 actually for some reason) and 8 inclusive
    let max = 8;
    let min = 3;
    let firstNameLength = ((Math.random() * (max - min)) + min);
    result += charactersUppercase.charAt((Math.random() * 25) + 1);
    for (var i = 0; i < firstNameLength; i++) {
        result += charactersLowerCase.charAt((Math.random() * 25) + 1);
    }
    return result;
}

/**
 * adds the two randomly generated names together
 */
function fullNameGenerator() {
    let result = '';
    let firstName = nameGenerator();
    let lastName = nameGenerator();
    result = firstName + ' ' + lastName;
    return result;
}