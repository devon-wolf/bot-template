// handles the possibility that a prompt may have more than one response available; picks one of the responses at random
function pickResponse(options) {
	// if there are fewer than two responses, just return the first (and, implicitly, only) item in the array
	if (options.length < 2) {
		return options[0];
	}

	// otherwise return a randomly chosen item
	else {
		const randomNumber = Math.floor(Math.random() * options.length);
		return options[randomNumber];
	}
}

function sendResponse(message, object) {
	// send the result of pickResponse to the same channel where the triggering message appeared
	message.channel.send(pickResponse(object.options));
}

// make this function available for import throughout the project
module.exports = { sendResponse };