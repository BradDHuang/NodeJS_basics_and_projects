// console.log("starting app.js");

const fs = require('fs'); // the file system
// const os = require('os');
const notes = require('./notes.js');

// var _ = require('lodash');
const _ = require('lodash');
const yargs = require('yargs');
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

// const argv = yargs.argv;
const aNote = {
    title: {
        describle: "Title of note",
        demand: true,
        alias: "t" // -t vs. --title
    },
    body: {
        describle: "Body of note",
        demand: true,
        alias: "b" // -b vs. --body
    }
};
const argv = yargs
    .command("add", "Add a new note", {
        title: aNote.title,
        body: aNote.body
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title: aNote.title
    })
    .command("remove", "Remove a note", {
        title: aNote.title
    })
    .help()
    .argv;
// console.log("Yargs", argv);

// console.log("Process", process.argv);
// var command = process.argv[2];
var command = argv._[0]; // yargs
// console.log("Command:", command);

if (command === "add") {
    // console.log("add notes");
    // notes.addNote(argv.title, argv.body);
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log("Note created.");
        // console.log("--");
        // console.log(`title: ${note.title}`);
        // console.log(`body: ${note.body}`);
        // DRY
        notes.logNote(note);
    } else {
        console.log("Note title taken!");
    }
} 
else if (command === "list") {
    // console.log("list notes");
    // notes.getAll();
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    // allNotes.forEach((note) => {
    //     notes.logNote(note);
    // });
    allNotes.forEach((note) => notes.logNote(note));
} 
else if (command === "read") {
    // console.log("read notes");
    // notes.getNote(argv.title);
    var noteFound = notes.getNote(argv.title);
    if (noteFound) {
        console.log("Note found.");
        notes.logNote(noteFound);
    } else {
        console.log("No such note!");
    }
} 
else if (command === "remove") {
    // console.log("remove notes");
    // notes.deleteNote(argv.title);
    var noteDeleted = notes.deleteNote(argv.title);
    var msg = noteDeleted ? "Note was deleted." : "Note not found!";
    console.log(msg);
} 
else {
    console.log("Command not recognized");
}



