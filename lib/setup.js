const scan = require('./lib/scan.js');
const deviceSeen = require('./lib/deviceSeen.js');

module.exports = function() {
	
	scan(deviceSeen);
	console.log("Configuration réussie");
	
};
