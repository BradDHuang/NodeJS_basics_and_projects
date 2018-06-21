
console.log("Starting the app...");

// setTimeout(callback, ms)
setTimeout(() => {
    console.log("Callback log...");
}, 2000);

setTimeout(() => {
    console.log("Callback log with 0ms...");
}, 0);

console.log("Finishing the app...");

/*
$ node playground/async_basics.js 
Starting the app...
Finishing the app...
Callback log with 0ms...
Callback log...
*/

// Reason:
// Call Stack
// Node APIs
// Callback Queue
// Event Loop

// => setTimeout() should wait until Call-Stack is empty.
// That's why "Finishing the app..." is printed before "Callback log with 0ms...".


