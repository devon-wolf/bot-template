/* This is where you can add more string-parsing to cut out unwanted triggering behavior or otherwise fine-tune what the bot considers a "prompt," if you feel inclined to research and work with regular expressions (which are beyond the scope of this template); currently the only additional parsing done here is to make the prompt case-insensitive. These changes are applied on line 15 of index.js, after the response objects have been retrieved from the server. */

function makeRegex(string) {
	return new RegExp(string, 'gi');
}

// make this function available for import throughout the project
module.exports = { makeRegex };