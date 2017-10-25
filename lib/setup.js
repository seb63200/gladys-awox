const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');

module.exports = function() {
	
	return scan(deviceSeen)
		.then(() => {
                	sails.log.info(`Yeelight : New Yeelight Lamp added with success`);
            });
	
};
