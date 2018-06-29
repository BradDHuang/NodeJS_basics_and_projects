

// example of using Promises, instead of callbacks. 

const request = require("request");

var geocodeAddress = (address) => {
    
    return new Promise((resolve, reject) => {
        
        var inputAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                // callback("Error: unable to connect to Google servers.");
                reject("Error: unable to connect to Google servers.");
            } else if (body.status === "ZERO_RESULTS") { 
                // callback("Error: invalid address input.");
                reject("Error: invalid address input.");
            } else if (body.status === "OK") {
                // callback(undefined, {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
        
    });
    
};

geocodeAddress("77840").then((location) => {
    console.log(JSON.stringify(location, undefined, 4));
}, (err) => {
    console.log(err);
});









