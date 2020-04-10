require('dotenv').config({path:'./slack.env'})
//must generate a new incoming webhook, cant figure out how to post from test app anymore
var webHook = process.env.WEB_HOOK;

var Slack = require('node-slack');
var slack = new Slack(webHook);

var channel = process.argv[2];
var message = process.argv[3];

console.log('Sending message to channel', channel);

slack.send({
    //message will be updated to send 
    text: 'it works!! (this is where error messages will go)',
    channel: '#' + channel
    //username: username
});
/**add to readme, fool!
 * 
 * TO RUN:
 * npm install node-slack
 * node SlackMessage <channel> <message>
 * where channel is desired channel. message must be one word
 * example: node SlackMessage general helloWorld!
 * should work with any existing channel
 * https://ajlopez.wordpress.com/2015/02/06/enviando-mensaje-a-slack-con-javascriptnode-js/
 * 
 * TODO/notes to self: figure out how i was able to send messages str8 from the 'test' slack app i created earlier
 * i swear i didnt change it and it just stopped working (something to do with token instead of webhook probably)
 * also figure out how to send a concatanated string instead of just one word (json formatting)
 */