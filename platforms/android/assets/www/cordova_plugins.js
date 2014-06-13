cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cn.edu.gdmec.t00385.lightsensor/www/LightSensorError.js",
        "id": "cn.edu.gdmec.t00385.lightsensor.LightSensorError",
        "clobbers": [
            "LightSenorError"
        ]
    },
    {
        "file": "plugins/cn.edu.gdmec.t00385.lightsensor/www/LightSensorLumen.js",
        "id": "cn.edu.gdmec.t00385.lightsensor.LightSensorLumen",
        "clobbers": [
            "LightSensorLumen"
        ]
    },
    {
        "file": "plugins/cn.edu.gdmec.t00385.lightsensor/www/LightSensor.js",
        "id": "cn.edu.gdmec.t00385.lightsensor.LightSensor",
        "clobbers": [
            "navigator.LightSensor"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cn.edu.gdmec.t00385.lightsensor": "0.0.1"
}
// BOTTOM OF METADATA
});