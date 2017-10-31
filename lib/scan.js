const noble = require('noble');


module.exports = function scan(callback) {
  var bluetoothOn = true;
  var scanTimeout = 30000;

  function start() {
    if (bluetoothOn) {
      console.log(`Starting Bluetooth Scan for ${scanTimeout/1000} seconds !`);
      noble.startScanning();
      setTimeout(stop, scanTimeout);
    }
  }

  function stop(){
    console.log(`Stopping Bluetooth Scan `);
    noble.stopScanning();
    //setTimeout(start, config.scanInterval);
  }

  noble.on('stateChange', function (state) {
    if (state === 'poweredOn') {
      bluetoothOn = true;
      start();
    }

    if (state === 'poweredOff') {
      bluetoothOn = false;
      noble.stopScanning();
    }
  });

  noble.on('discover', function (peripheral) {
    callback(peripheral);
  });

  noble.on('scanStop', function () {
    console.log('Bluetooth Scan stopped');
  });
};
