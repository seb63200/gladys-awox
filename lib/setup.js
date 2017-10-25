const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');

module.exports = function() {
	
	return scan(deviceSeen);
	console.log("Configuration réussie");
	
};
