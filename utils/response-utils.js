// handles the possibility that a prompt may have more than one response available; picks one of the responses at random
function pickResponse(options) {
	if (options.length < 2) {
		return options[0];
	}

	else {
		const randomNumber = Math.floor(Math.random() * options.length);
		return options[randomNumber];
	}
}

function sendResponse(message, object) {
	message.channel.send(pickResponse(object.options));
}

module.exports = { sendResponse };