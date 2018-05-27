console.log("starting the notes app...");

const fs = require('fs'); // the file system

// Create a file(if not already exists) & append the content to it:
// fs.appendFile(path, data[, options], callback)
fs.appendFile("greetings.txt", "Hi Brad.", function(err) {
    if (err) {
        console.log("unable to write to file!");
    }
});




