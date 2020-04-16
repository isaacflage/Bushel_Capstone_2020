const {WebClient} = require('@slack/web-api');

const web = new WebClient('xoxb-1042009124994-1052346428198-ia1cbMsNH3JlMD0XdOs0xWDv');

(async () => {
    try {
        await web.chat.postMessage({
            channel: '#random',
            text: 'Hello World once again',
        }); 
    } catch (error) {
        console.log(error);
    }
    console.log('Message posted');
})();

