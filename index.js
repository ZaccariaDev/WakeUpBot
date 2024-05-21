// Discord.js
const {Client, Collection, Routes, REST, GatewayIntentBits} = require("discord.js");
// Configs
const {token, channelToCheck, botToCheck, timeBeforeBump} = require('./config.json');
// REST
const rest = new REST().setToken(token);
// Events
const onReady = require("./events/onReady.js");
const onMessage = require("./events/onMessage.js");
// Client creation
const client = new Client({intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
],});

// Set Client in Consts
require('./consts.js').setClient(client);

// Event management 
client.on("messageCreate", message => onMessage.onMessage(message));
client.on("ready", c => onReady.onReady(c));

// Bot Login
client.login(token);