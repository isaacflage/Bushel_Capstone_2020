const {WebClient} = require('@slack/web-api');
require('dotenv').config({path:'./slack.env'});
const dotenv = require('dotenv');


const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);



function slackSendMsg(id){
    (async () => {
        try {
            await web.chat.postMessage({
                channel: '#random',
                text: 'error id is: '+id,
            }); 
        } catch (error) {
            console.log(error);
        }
        console.log('Message posted');
    })();
}


//export 
module.exports.slackSendMsg = function(id){
    slackSendMsg(id);
}