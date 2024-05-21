// Configs
const {language, channelToCheck, botToCheck} = require('../config.json');
// Language
const lang = require(`../lang/${language}.json`);
// Constants
const {timer, alert} = require(`../consts.js`);

// OnReady Function
async function onReady(client){
	// Getting channel to check
	const channel = client.channels.cache.get(channelToCheck);

	// Fetching messages from the channel to find last wanted message
	channel.messages.fetch().then(messages => {		
		// Var to store the last wanted message timestamp
		let timestamp = 0;

		// Message browsing for finding the last bot message
		for (message of messages){
			// If a Bot message is found storing the timestamp of the message and end of browsing
			if (message[1].author.id == botToCheck) {
				a = message[1].author.tag;
				timestamp = message[1].createdTimestamp;
				break;
			}
		}

		// If a message was found
		if (timestamp != 0) {
			// Calculation of next availability
			let diff = new Date().getTime() - (timestamp + timer)

			// If the timer is exceeded send alert
			if (diff > 0){alert(channel)}
			// Else set a timeout for sending alert
			else{
				console.log(`\n${new Date().toISOString()}\n-> ${lang.nextAlert}  : ${new Date(timestamp+timer).toString()}`);
				setTimeout(() => alert(channel), -diff)
			}
		}
	});
}

// Export of the function
module.exports = {onReady};