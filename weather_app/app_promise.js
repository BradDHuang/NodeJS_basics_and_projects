
const axios = require("axios");

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

var inputAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB0KExagcP-Efn368DLyBuhb4_R9tUiQXg&address=${inputAddress}`;


// axios.get() returns a Promise.
axios.get(geocodeUrl).then((response) => {
    
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error("Invalid address.");
    }
    
    // console.log(response.data.results[0].geometry);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var getWeatherUrl = `https://api.darksky.net/forecast/85292f37ecd8788d8a23251465fd4a43/${lat},${lng}`;
    
    // console.log(response.data);
    console.log(response.data.results[0].formatted_address);
    
    return axios.get(getWeatherUrl);
    
}).then((res) => {
    // console.log(res.data);
    var temperature = res.data.currently.temperature;
    var apparentTemperature = res.data.currently.apparentTemperature;
    console.log(`Now the temp is ${temperature}, and it feels like ${apparentTemperature}.`);
    
}).catch((err) => {
    // console.log(err);
    if (err.code == "ENOTFOUND") {
        console.log("Unable to connect to API servers.");
    } else {
        
        console.log(err.message); // throw new Error("Invalid address.");
        
    }
});

      






