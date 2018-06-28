

// const request = require("request");

const geocode = require("./geocode/geocode");

const yargs = require("yargs");
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for.",
            string: true
        }
    })
    .help()
    .alias("help", 'h')
    .argv;
// console.log(argv);
// console.log(argv.a);
// console.log(encodeURIComponent(argv.a));
// var inputAddress = encodeURIComponent(argv.a);

geocode.geocodeAddress(argv.a);

/*
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/
/*
request({
    // url: "https://maps.googleapis.com/maps/api/geocode/json?address=503%20southwest%20pkwy",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}`,
    json: true
}, (error, response, body) => {
    
    // before print out info. we need to check for callback Errors first.
    if (error) {
        console.log("Error: unable to connect to Google servers.");
    } else if (body.status === "ZERO_RESULTS") { 
    // { results: [ ], status: "ZERO_RESULTS" } 
        console.log("Error: invalid address input.");
    } else if (body.status === "OK") {
    
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
    
    }
});

*/






