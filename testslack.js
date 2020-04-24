const slack = require('./slackTestNew.js');
//could be array or json
id = {
    channel: '#random',
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Error Id: `5df5ff8d-c35a-4bab-9c53-6d74615b56a2`*\n Message: Field mismatches found "
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
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*field_name: secondary_net_weight*\n>expected: `27447.12`\n> recieved: `2747.12`"
			}
		},
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
	]
}
slack.slackSendMsg(id);