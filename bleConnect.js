var Cylon = require('cylon');

Cylon.robot({
  connections: {
    wiced: { adaptor: 'ble', uuid: 'e5:67:6d:b2:13:2f' }
  },

  devices: {
    battery: { driver: 'ble-battery-service' }
  },

  work: function(my) {
    every((1).second(), function() {
      my.battery.getBatteryLevel(function(err, data){
        if (err) {
          console.log(err);
        } else {
          console.log("BatteryLevel:", data);
        }
      });
    });
  }
}).start();