function makeRegex(string) {
	return new RegExp(string, 'gi');
}

module.exports = { makeRegex };