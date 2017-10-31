const scan = require('./scan.js');
const deviceSeen = require('./deviceSeen.js');

module.exports = function setup() {
	
	return scan(deviceSeen)
	  .then(function(){
           sails.log.info(`Configuration réussie`);
	   return console.log("Configuration réussie");
            });
	
};
