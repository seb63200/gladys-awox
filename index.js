

module.exports = function(sails) {
    
    //var scan = require('./lib/scan.js');
    var exec = require('./lib/exec.js');
    //var setup = require('./lib/setup.js');
    //var deviceSeen = require('./lib/deviceSeen.js');
        
    return {
        //scan: scan,
        exec: exec,
        //setup: setup,
        //deviceSeen: deviceSeen        
    };
};
