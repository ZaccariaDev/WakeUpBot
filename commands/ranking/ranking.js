const {SlashCommandBuilder} = require('discord.js');
// File System
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('top')
		.setDescription('Top Players'),
	async execute(interaction) {
		//const rankingTable = require('../../ranking.json');

		//res = '';
		/*for(d of rankingTable){
			console.log(d);
		}*/
		/*for(let i in rankingTable) { 
			console.log([i,rankingTable[i]]); 
		 };*/
		//console.log(Object.hasOwn(rankingTable, "test"));
		await interaction.reply("eee");
	}
};