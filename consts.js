// Configs
const {language, timeBeforeBump, roleToAlert, checkUpdate} = require('./config.json');
// Package infos
const {version, repository} = require('./package.json');
// Language
const lang = require(`./lang/${language}.json`);
// Conversion of timeBeforeBump to milliseconds
const timer = Number(timeBeforeBump.split(':')[0]) * 60 * 60 * 1000 + Number(timeBeforeBump.split(':')[1]) * 60 * 1000 + Number(timeBeforeBump.split(':')[2]) * 1000;
// File System
const fs = require('node:fs');
// Path
const path = require('node:path');

// Storing client
let client = null;

// Function for storing client
function setClient(c){client = c}
// Function for get the client
function getClient(){return client}

// Function for getting command liste
// forClient is boolean : true if commands need to be register in client.commands / false for return tab with data of commands
function getCommands(forClient){
	// Tab for return command list if not forClient
	const commands = [];
	// Getting path of the folder of commands
	const foldersPath = path.join(__dirname, 'commands');
	// Gettind the folder of commands
	const commandFolders = fs.readdirSync(foldersPath);

	// Browsing subfolders
	for (const folder of commandFolders) {
		// Getting path of the subfolder
		const commandsPath = path.join(foldersPath, folder);
		// Getting files ending with .js in this subfolder
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

		// Browsing files
		for (const file of commandFiles) {
			// Getting path of the file
			const filePath = path.join(commandsPath, file);
			// Require the command file
			const command = require(filePath);
			// If the command have data and execute saving it in client.commands or in the tab to return
			if ('data' in command && 'execute' in command)  forClient ? client.commands.set(command.data.name, command) : commands.push(command.data.toJSON());
			// If not warning that command miss data or execute
			else console.log(`\n${new Date().toISOString()}\n-> [WARNING]\n${lang.missingProperty} :\n${filePath}`);			
		}
	}
	// If datas are not stored in client.commands return them
	if (!forClient) return commands;
}

// Sending alert embed (and checking for update if set)
function alert(channel) {
	// If client is defined
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
		// Checking of roleToAlert is an everyone
		let toAlert = `<@&${roleToAlert}>`;
		if(roleToAlert == "everyone") toAlert = `${channel.guild.roles.everyone}`;
		// Sending the alert
		channel.send({content: toAlert, embeds: [alertEmbed], allowedMentions:{parse:["everyone"]}});
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

// Function for getting the ranking tab of the month
function getRanking(){
	return(JSON.parse(fs.readFileSync(`${__dirname}/ranking.json`)).score);
}

// Function for add 1 pts to user score, return new score
function addScore(userID){
	// Getting ranking table from Json
	let rankingTable = JSON.parse(fs.readFileSync(`${__dirname}/ranking.json`));
	// Var to stock new score
	let score = 1;
	// If user alredy has a score, append 1 to it
	if (rankingTable.score[userID.toString()] != undefined) score = rankingTable.score[userID.toString()]+1;
	// Registering score in table
	rankingTable.score[userID.toString()] = score;
	// Register new table in JSON
	fs.writeFileSync(`${__dirname}/ranking.json`, JSON.stringify(rankingTable));
	// Return new score
	return score;
}

// Function to check date of the score JSON
function checkDate(){
	// Getting ranking table from Json
	let scoreDate = JSON.parse(fs.readFileSync(`${__dirname}/ranking.json`).date);

}

function test(){
	//fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify({date : 23354, score : {555434 : 0, 45443 : 40}}));
	console.log(new Date().getMonth());
const options = {
  month: 'long',
};


console.log(new Date().toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012

}

// Contants export
module.exports = {getCommands, timer, alert, setClient, getClient, getRanking, addScore, checkDate, test};