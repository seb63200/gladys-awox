const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');
var Promise = require('bluebird');

module.exports = function() {
	
	scan(peripheral);
	
	sails.log.info('Awox : Module configured');
	
	return Promise.resolve();
	 
};
