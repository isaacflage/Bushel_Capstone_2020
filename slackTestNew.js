const {WebClient} = require('@slack/web-api');
require('dotenv').config({path:'./slack.env'});
const dotenv = require('dotenv');


const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);


//send one tickets error one time
function slackSendMsg(OneTicketMsg){
    (async () => {
        try {
            await web.chat.postMessage(OneTicketMsg); 
        } catch (error) {
            console.log(error);
        }
        console.log('Message posted');
    })();
}


//format one ticket
function formatTicket(ticket){
    var formated = {
        channel: '#random',
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Error Id: `"+ticket.id+"`*\n Message: "+ ticket.message
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "emoji": true,
                        "text": "Checked"
                    },
                    "value": "click_me_123"
                }
            }
        ]
    }
    
    //format fields
    var k;
    for( k = 0; k<ticket.fields.length; k++){
        formated.blocks.push({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Field name: "+ticket.fields[k].field_name+"*\n>expected: `"+ticket.fields[k].expected+"`\n> recieved: `"+ticket.fields[k].recieved+"`"
            }
        });
    }

    //add end thing
    formated.blocks.push(
        {
            "type": "divider"
        },{
            "type": "context",
            "elements": [
                {
                    "type": "mrkdwn",
                    "text": "No votes"
                }
            ]
        }
    );

     return formated;       

}

//method that used in validation, argument is error json object
function sendErrorMsg(errors){
    var i;
    for (i=0; i<errors.length; i++) {
        slackSendMsg(formatTicket(errors[i]));
        
    }
    
}


//export 
module.exports.slackSendMsg = function(id){
    slackSendMsg(id);
}
module.exports.sendErrorMsg = function(errors){
    sendErrorMsg(errors);
}