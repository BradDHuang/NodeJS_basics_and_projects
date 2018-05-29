/*
var obj = {
    name: "Brad"
};
var strObj = JSON.stringify(obj);
console.log(typeof strObj);
console.log(strObj);
*/
/*
var personStr = '{"name": "Brad", "age": 24}';
var person = JSON.parse(personStr); // object
console.log(typeof person);
console.log(person);
*/

const fs = require('fs'); // the file system

var originNote = {
    title: "test title",
    body: "test body"
};
var originNoteStr = JSON.stringify(originNote);

fs.writeFileSync("notes.json", originNoteStr);
var noteStr = fs.readFileSync("notes.json");

var note = JSON.parse(noteStr);
console.log(typeof note);
console.log(note.title);





