// Discord.js
const {Client, Collection, GatewayIntentBits, Events} = require("discord.js");
// Configs
const {token, channelToCheck, botToCheck, timeBeforeBump} = require('./config.json');
// Constants
const {getCommands} = require(`./consts.js`);
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

// Collection for saving commands in Client
client.commands = new Collection();
// Get commands and save them in client.commands
getCommands(true);

// Event management 
client.on("messageCreate", message => onMessage.onMessage(message));
client.on("ready", c => onReady.onReady(c));
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});
// Bot Login
client.login(token);