
const request = require("request");

// var geocodeAddress = (address) => {
var geocodeAddress = (address, callback) => {
    var inputAddress = encodeURIComponent(address);
    
    request({
        // url: "https://maps.googleapis.com/maps/api/geocode/json?address=503%20southwest%20pkwy",
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}`,
        json: true
    }, (error, response, body) => {
        
        // before print out info. we need to check for callback Errors first.
        if (error) {
            // console.log("Error: unable to connect to Google servers.");
            callback("Error: unable to connect to Google servers.");
        } else if (body.status === "ZERO_RESULTS") { 
        // { results: [ ], status: "ZERO_RESULTS" } 
            // console.log("Error: invalid address input.");
            callback("Error: invalid address input.");
        } else if (body.status === "OK") {
        
        // the body here is some JSON information (data).
        
        // response also contains info. about request.
        
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
        /*
        console.log(`Address: ${body.results[0].formatted_address}`);
        // console.log(body.results[0].geometry.location);
        console.log(`Latitude/lat: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude/lng: ${body.results[0].geometry.location.lng}`);
        */
        }
    });
};
// /*
// module.export = {
module.exports = {
    // geocodeAddress: geocodeAddress
    geocodeAddress //ES6
};
// */
// module.exports.geocodeAddress = geocodeAddress;

