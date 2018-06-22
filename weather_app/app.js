

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
    console.log(body);
    
});