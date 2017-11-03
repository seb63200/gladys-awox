var AwoxSmartLight = require('./awox.js');
var lamp = new AwoxSmartLight('d03972bcab23');
//var lamp = new AwoxSmartLight('gladys.get...');

module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            newState = lamp.lightOn();
	    console.log("Allumage Lampe");
        } else {
            newState = lamp.lightOff();
	    console.log("Extinction Lampe");
        }  
      break;
      case 'brightness': 
        newState = lamp.lightBrightness(params.state.value);
	console.log("Changement intensité");
      break;
      case 'temperature': 
        newState = lamp.lightWhite(params.state.value);
	console.log("Changement température");
      break;
    }
   
};
