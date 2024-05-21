// Configs
const {language, timeBeforeBump, roleToAlert, checkUpdate} = require('./config.json');
// Package infos
const {version, repository} = require('./package.json');
// Language
const lang = require(`./lang/${language}.json`);
// Conversion of timeBeforeBump to milliseconds
const timer = Number(timeBeforeBump.split(':')[0]) * 60 * 60 * 1000 + Number(timeBeforeBump.split(':')[1]) * 60 * 1000 + Number(timeBeforeBump.split(':')[2]) * 1000;

// Storing client
let client = null;

// Function for storing client
function setClient(c){client = c}

// Sending alert embed (and checking for update if set)
function alert(channel) {
	// If client is define
	if (client != null){
		// Embed to send
		const alertEmbed = {
			color: 0xFA3B2D,
			title: lang.alertTitle,
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL(),
			},
			description: lang.alertText,
			timestamp: new Date().toISOString(),
		};
		// Sending the alert
		channel.send({content:`<@&${roleToAlert}>`, embeds: [alertEmbed]});
		// Logging alert is send
		console.log(`\n${new Date().toISOString()}\n-> ${lang.alertSend}`);
	}

	// Checking for update
	if (checkUpdate == 'yes') {		
		fetch('https://raw.githubusercontent.com/ZaccariaDev/WakeUpBot/main/package.json')
		.then(res => res.json())
		.then(data => {
			if (data.version != version) { 
				console.log(`\n${new Date().toISOString()}\n-> ${lang.updateAvailable}\n${repository.url}\n${version} == > ${data.version}`);
			}
		})
		.catch(error => console.log(error));
	}
}

// Contants export
module.exports = {timer, alert, setClient};