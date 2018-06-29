
const request = require("request");

var getWeatherTemp = (lat, lng, callback) => {
    
    var inputLat = encodeURIComponent(lat);
    var inputLng = encodeURIComponent(lng);
    
    request({
        // url: "https://api.darksky.net/forecast/85292f37ecd8788d8a23251465fd4a43/37.2374847,-121.8277925",
        url: `https://api.darksky.net/forecast/85292f37ecd8788d8a23251465fd4a43/${inputLat},${inputLng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            // console.log("Error: unable to connect to Forecast.io servers.");
            callback("Error: unable to connect to Forecast.io servers.");
        } else if (response.statusCode === 400) {
            // console.log(`The given location (or time) is invalid, statusCode: ${response.statusCode}`);
            callback(`The given location (or time) is invalid, statusCode: ${response.statusCode}`);
        } else if (response.statusCode === 200) {
            // console.log(`Current temperature: ${body.currently.temperature}`);
            // callback(undefined, `Current temperature: ${body.currently.temperature}`);
            callback(undefined, {
                currentTemperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            // console.log("Unable to fetch weather.");
            callback("Unable to fetch weather.");
        }
    });
};

module.exports = {
    getWeatherTemp
};





