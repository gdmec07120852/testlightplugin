cordova.define("cn.edu.gdmec.t00385.lightsensor.LightSensorLumen", function(require, exports, module) { var LightSensorLumen = function(lumen, timestamp) {
  this.value = lumen;
  this.timestamp = timestamp || new Date().getTime();
};

module.exports = LightSensorLumen;

});
