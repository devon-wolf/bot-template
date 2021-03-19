/* the same content as index.js, but with detailed comments */

// require dotenv module for this project to run; this allows access to the .env file
require('dotenv').config();

// import discord.js library and identify "client" as a new instance of that library's "Client" class
const Discord = require('discord.js');
const client = new Discord.Client();

// import functions from the project's utils folder
const { getAllResponses } = require('../utils/server-utils.js');
const { sendResponse } = require('../utils/response-utils.js');
const { makeRegex } = require('../utils/munge-utils.js');

// initialize 'responses' variable, currently empty since we have not yet asked the server for the responses
let responses = [];

// get responses from server and start bot
client.once('ready', async () => {
	/* if you do not want to convert the prompt strings to regular expressions these extra steps can be eliminated - replace line 13 down to the console log with 'responses = await getAllResponses();' */
	const unmappedResponses = await getAllResponses();
	responses = unmappedResponses.map(response => {
		response.prompt = makeRegex(response.prompt);
		return response;
	});

	// confirmation that startup processes have completed successfully and the bot is running
	console.log('Ready!');
});

// use token (saved in .env) to log in to Discord
client.login(process.env.BOT_TOKEN);

// listen for a message and respond accordingly
client.on('message', message => {
	// do nothing if the message author is a bot (including this bot, which triggers itself without a condition like this)
	if (message.author.bot) return;

	// otherwise, if the message content contains a match for any of the response prompts, execute the 'sendResponse' function for that prompt (see response-utils.js)
	responses.forEach(response => {
		if (message.content.match(response.prompt)) {
			sendResponse(message, response);
		}
	});
});