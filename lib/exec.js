const AwoxSmartLight = require('awox-smartlight');
var lib = AwoxSmartLight.lib;
// var src = AwoxSmartLight.src;
// var lib = src.lib;

module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            newState = lib.lightOn();
	    console.log("Allumage Lampe");
        } else {
            newState = lib.lightOff();
	    console.log("Extinction Lampe");
        }  
      break;
      case 'brightness': 
        newState = lib.lightBrightness(params.state.value);
	console.log("Changement intensité");
      break;
      case 'temperature': 
        newState = lib.lightWhite(params.state.value);
	console.log("Changement température");
      break;
    }
   
};
