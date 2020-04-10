//require('dotenv').config({path:'./slack.env'})

//var domain = process.env.SLACK_DOMAIN;
//var token = process.env.SLACK_TOKEN;
//var token = xoxp-1042009124994-1042009125362-1052364235766-f26fe66ed8f89c22bf1f4c0dd9f97d01;


var webHookURL = 'https://hooks.slack.com/services/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';

var Slack = require('node-slack');
 
var slack = new Slack(webHookURL);

var channel = process.argv[2];
var message = process.argv[3];

console.log('Sending message', message, 'to channel', channel);

slack.send({
    text: message,
    channel: '#' + channel
    //username: username
});