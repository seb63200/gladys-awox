var scan = require('./scan.js');
var deviceSeen = require('./deviceSeen.js');
const Promise = require('bluebird');

module.exports = function setup() {
	
	scan(deviceSeen);
	
	return Promise.resolve();
	
};
