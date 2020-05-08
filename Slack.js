const { WebClient } = require('@slack/web-api');
require('dotenv').config({ path: './secrets.env' });
const dotenv = require('dotenv');

/**!----double check that you've created slack.env with the correct token stored----!**/
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

/**
 * Sends a message to Slack and outputs confirmation to console. To be called in func sendErrorMessage
 * @param {*} OneTicketMsg message to be sent
 */
function slackSendMsg(OneTicketMsg) {
    (async () => {
        try {
            await web.chat.postMessage(OneTicketMsg);
        } catch (error) {
            console.log(error);
        }
        console.log('Message posted');
    })();
}


/**
 * Formats a ticket to be a pretty-lookin' Slack message
 * @param {*} ticket ticket to be formatted 
 */
function formatTicket(ticket) {
    var formated = {
        channel: '#random', //put channel name here
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Error Id: `" + ticket.id + "`*\n Message: " + ticket.message
                }
            }
        ]
    }
    //format fields
    if (ticket.fields) {
        var k;
        for (k = 0; k < ticket.fields.length; k++) {
            formated.blocks.push({
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Field name: " + ticket.fields[k].field_name + "*\n>expected: `" + ticket.fields[k].expected + "`\n> recieved: `" + ticket.fields[k].recieved + "`"
                }
            });
        }
    }
    //add end thing
    formated.blocks.push(
        {
            "type": "divider"
        }
    );
    return formated;
}

/**
 * Sends error message to Slack for each error
 * @param {*} errors errors as a JSON 
 */
function sendErrorMsg(errors) {

    var i;
    for (i = 0; i < errors.length; i++) {
        slackSendMsg(formatTicket(errors[i]));
    }
}

//exports 
module.exports.slackSendMsg = function (id) {
    slackSendMsg(id);
}
module.exports.sendErrorMsg = function (errors) {
    sendErrorMsg(errors);
}