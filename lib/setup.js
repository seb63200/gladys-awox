var scan = require('./scan.js');
var deviceSeen = require('./deviceSeen.js');
const Promise = require('bluebird');

module.exports = function() {
	return console.log("Début de la configuration");
	scan(deviceSeen);
	
	return console.log("Scan reussi");
	
	return Promise.resolve();
	
};
