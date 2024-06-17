const {REST, Routes} = require('discord.js');
const {clientId, guildId, token} = require('./config.json');
// Constants
const {getCommands} = require(`./consts.js`);
const fs = require('node:fs');
const path = require('node:path');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);
const commands = getCommands(false);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();