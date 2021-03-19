require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const { getAllResponses } = require('./utils/server-utils.js');
const { sendResponse } = require('./utils/response-utils.js');
const { makeRegex } = require('./utils/munge-utils.js');

let responses = [];

// get responses from server and start bot
client.once('ready', async () => {
	const unmappedResponses = await getAllResponses();
	responses = unmappedResponses.map(response => {
		response.prompt = makeRegex(response.prompt);
		return response;
	});

	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

// listen for a message and respond accordingly
client.on('message', message => {
	if (message.author.bot) return;

	responses.forEach(response => {
		if (message.content.match(response.prompt)) {
			sendResponse(message, response);
		}
	});
});