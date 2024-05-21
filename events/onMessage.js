// Configs
const {language, channelToCheck, botToCheck, command} = require('../config.json');
// Language
const lang = require(`../lang/${language}.json`);
// Constants
const {timer, alert} = require(`../consts.js`);

// onMessage Function
async function onMessage(message){
		// Getting message properties
		const {author, channel, createdTimestamp} = message;

		// Check if message is from the Bot in reaction of a good command and it send in the correct channel
		if (author.id == botToCheck && channel.id == channelToCheck && message.interaction.commandName == command){

			// Sending thanks message when an user use the command
			const thanksEmbed = {
				color: 0x00FF00,
				title: lang.thanks,
				description: `<@${message.interaction.user.id}>`,
				timestamp: new Date().toISOString(),
			};

			channel.send({embeds: [thanksEmbed]});
			// Sending alert
			console.log(`\n${new Date().toISOString()}\n->${lang.nextAlert}  : ${new Date(createdTimestamp+timer).toString()}`);
			setTimeout(() => alert(channel), timer);
		}
}

module.exports = {onMessage};