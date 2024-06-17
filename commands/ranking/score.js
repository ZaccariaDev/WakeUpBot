// Configs
const {language} = require('../../config.json');
// Language
const lang = require(`../../lang/${language}.json`);
// Constants
const {getClient, getRanking} = require(`../../consts.js`);
// SlashCommandBuilder
const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('score')
		.setDescription('View a user\'s score')
		.setDescriptionLocalizations({
			fr: 'Voir le score d\'un utilisateur',
		})
		.addUserOption(option =>
			option
				.setName('user')
				.setNameLocalizations({
					fr: 'utilisateur',
				})
				.setDescription('The user whose score you want to see (blank for your score)')
				.setDescriptionLocalizations({
					fr: 'L\'utilisateur dont vous voulez voir le score (vide pour votre score)',
				}),
		),
	// Function to execute in reply to interaction
	async execute(interaction) {
		// Getting the client
		const client = getClient();
		// Gettinf rankingTable from the JSON
		const rankingTable = getRanking();
		// Storing user id
		let userID = interaction.user.id
		// If an user is provided we change the user id stored
		if (interaction.options.getUser('user')) userID = interaction.options.getUser('user').id;

		// Setting message content to no score by default
		let content = `<@${userID}> ${lang.noScoreUser}`;
		// If User as a score we change the content of message wwith the user score
		if (rankingTable[userID.toString()] != undefined) content = `<@${userID}> ${lang.userScore} ${rankingTable[userID.toString()]}`;
		
		// Create Embed with score
		scoreEmbed = {
			color: 0x4298F5,
			title: lang.scoreTitle,
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL(),
			},
			description: content,
			timestamp: new Date().toISOString(),
		};
		// Reply to interaction
		await interaction.reply({embeds: [scoreEmbed]});
	}
};