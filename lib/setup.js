const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');

module.exports = function() {
	
	return scan(deviceSeen)
	  .then(function(peripheral){
		if(peripheral.length === 0){
			return Promise.reject(new Error('No peripheral found'));
		}
		else {
			return Promise.resolve();
	}
	});
};
