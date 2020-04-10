require('dotenv').config({path:'./slack.env'})
//must generate a new incoming webhook, cant figure out how to post from test app anymore
var webHook = process.env.WEB_HOOK;

var Slack = require('node-slack');
var slack = new Slack(webHook);

var channel = process.argv[2];
var message = process.argv[3];

console.log('Sending message', message, 'to channel', channel);

slack.send({
    text: message,
    channel: '#' + channel
    //username: username
});
/**
 * TO RUN:
 * 
 * node SlackMessage <channel> <message>
 * 
 * where channel is desired channel. message must be one word
 * example: node SlackMessage general helloWorld!
 */