console.log("starting the notes app...");

const fs = require('fs'); // the file system
const os = require('os');
/*
// Create a file(if not already exists) & append the content to it:
// fs.appendFile(path, data[, options], callback)
fs.appendFile("greetings.txt", "Hi Brad.", function(err) {
    if (err) {
        console.log("unable to write to file!");
    }
});
*/

var user = os.userInfo();
// console.log(user);
// fs.appendFile("greetings.txt", "Hi " + user.username + ".", function(err) {
fs.appendFile("greetings.txt", `Hi ${user.username}.`, function(err) { // ES6.
    if (err) {
        console.log("unable to write to file!");
    }
});






