const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');

module.exports = function setup() {
	
	return scan(deviceSeen)
		.then(() => {
                	sails.log.info(`Configuration réussie`);
			console.log("Configuration réussie");
            });
	
};
