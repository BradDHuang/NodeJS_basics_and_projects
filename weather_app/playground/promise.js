
// ES6 Promises:

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("Args must be numbers.");
            }
        }, 2000);
    });
};

asyncAdd(5, 6).then((res) => {
    console.log("Result: " + res);
}, (err) => {
    console.log(err);
});


/*
var aPromise = new Promise((resolve, reject) => {
    // async
    // resolve("This is a Promise.");
    setTimeout(() => {
        resolve("This is a Promise.");
        // reject("The Promise was rejected."); // Unhandled Promise Rejection Warning.
    }, 3000); // delay 3s.
});

aPromise.then((msg) => {
    console.log("Success: " + msg);
}, (err) => {
    console.log("Error: " + err);
});
*/






