const rp = require('request-promise');
const emojiStrip = require('emoji-strip')

module.exports = function deviceSeen(peripheral) {
    var deviceBluetooth = 'SML';
    // if the bluetooth device does not have a name, 
    // don't handle it
    if(!peripheral.advertisement.localName.startsWith(deviceBluetooth)) {
        console.log("Les appareils ne sont pas des lampes Awox");
    }
    
    var lightObj = {
		device: {
				name: emojiStrip(peripheral.advertisement.localName),
				protocol: 'bluetooth',
				service: 'awox',
				identifier: ''
		},
		types: [
			{
				type: 'binary',
				sensor: false,
				tag: peripheral.name,
				category: 'light',
				min: 0,
				max: 1
			},
			{
				type: 'brightness',
				sensor: false,
				category: 'light',
				min: 0,
				max: 255
			},
			{
				type: 'temperature',
				sensor: false,
				category: 'light',
				min: 0,
				max: 65535
			},
		]
	};
    if(peripheral.advertisement.localName.startsWith(deviceBluetooth)){
        device.identifier = peripheral.address;
    }
    
    
    console.log(`Found Bluetooth Awox Light, name = ${device.name}, id = ${peripheral.id}, address = ${peripheral.address}.`);

    return gladys.device.create(lightObj);
	
	console.log('Lampe créée avec succés');

};
