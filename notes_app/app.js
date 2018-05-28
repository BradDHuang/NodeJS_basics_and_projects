console.log("starting app.js");

const fs = require('fs'); // the file system
// const os = require('os');
const notes = require('./notes.js');

// var _ = require('lodash');
const _ = require('lodash');
/*
console.log(_.isString(true)); // false
console.log(_.isString("str")); // true
*/
// Creates a duplicate-free version of an array:
// _.uniq(array)
// var dupFreeArr = _.uniq(["brad", 1, "brad", 1, 2, 3]);
// console.log(dupFreeArr); // [ 'brad', 1, 2, 3 ]
// var dupFreeArr = _.uniq(["brad"]);
// console.log(dupFreeArr);

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
/*
var sum = notes.add(3, 2); // 5;
console.log(sum);
*/

console.log(process.argv);
var command = process.argv[2];
console.log("Command:", command);

if (command === "add") {
    console.log("add notes");
} 
else if (command === "list") {
    console.log("list notes");
} 
else if (command === "read") {
    console.log("read notes");
} 
else if (command === "remove") {
    console.log("remove notes");
} 
else {
    console.log("Command not recognized");
}



