// import superagent module to be used as 'request'
const request = require('superagent');

/* replace this address with the URL where the bot will direct its request - do not include a final/trailing slash */
const URL = 'https://bot-server-template.herokuapp.com';

// make a request to the server to get all available bot responses
async function getAllResponses() {
	const response = await request.get(`${URL}/responses`);

	return response.body;
}

// make this function available for import throughout the project
module.exports = { getAllResponses };