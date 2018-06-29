
// ES6 Promises:

var aPromise = new Promise((resolve, reject) => {
    // async
    // resolve("This is a Promise.");
    setTimeout(() => {
        // resolve("This is a Promise.");
        reject("The Promise was rejected."); // Unhandled Promise Rejection Warning.
    }, 3000); // delay 3s.
});

aPromise.then((msg) => {
    console.log("Success: " + msg);
}, (err) => {
    console.log("Error: " + err);
});







