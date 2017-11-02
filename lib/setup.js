const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');
var Promise = require('bluebird');

module.exports = function() {
	
	scan(deviceSeen);
	
	sails.log.info('Awox : Module configured');
	
	return Promise.resolve();
	 
};
