

const request = require("request");

/*
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=503%20southwest%20pkwy",
    json: true
}, (error, response, body) => {
    // console.log(body);
    // console.log(JSON.stringify(body, undefined, 4)); // convert the body Objects into Strings.
    // the body here is some JSON information (data).
    // console.log(response);
    // console.log(JSON.stringify(response, undefined, 4)); // "statusCode": 200
    // response also contains info. about request.
    // console.log(JSON.stringify(error, undefined, 4)); // null, when there is no error.
    // console.log(body.results[0].formatted_address);
    console.log(`Address: ${body.results[0].formatted_address}`);
    // console.log(body.results[0].geometry.location);
    console.log(`Latitude/lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude/lng: ${body.results[0].geometry.location.lng}`);
});








