console.log("starting app.js");

const fs = require('fs'); // the file system
const os = require('os');
const notes = require('./notes.js');
/*
// Create a file(if not already exists) & append the content to it:
// fs.appendFile(path, data[, options], callback)
fs.appendFile("greetings.txt", "Hi Brad.", function(err) {
    if (err) {
        console.log("unable to write to file!");
    }
});
*/
/*
var user = os.userInfo();
// console.log(user);
// fs.appendFile("greetings.txt", "Hi " + user.username + ".", function(err) {
// fs.appendFile("greetings.txt", `Hi ${user.username}.`, function(err) { // ES6.
fs.appendFile("greetings.txt", `Hi ${user.username}, you are of age ${notes.age}.`, function(err) { // ES6.
    if (err) {
        console.log("unable to write to file!");
    }
});
*/

// var res = notes.addNote();
// console.log(res); // "new note"

var sum = notes.add(3, 2); // 5;
console.log(sum);





