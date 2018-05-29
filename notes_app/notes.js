console.log("starting notes.js");

// module
// console.log(module); // Module {...}
/*
// ******
// exports: {}
// console.log(module.exports); 
// add a property to it e.g.:
// module.exports.age = 24;
// module.exports.addNote = function() { // ES5
module.exports.addNote = () => { // Arrow func.
    console.log("addNote");
    return "new note";
};
// console.log(module.exports); 
// ******
*/
/*
module.exports.add = (a, b) => {
    return a + b;
};
*/

var addNote = (title, body) => {
    console.log("adding note", title, body);
};
var getAll = () => {
    console.log("listing all notes");
};
var getNote = (title) => {
    console.log("getting note with title: " + title);
};
var deleteNote = (title) => {
    console.log("removing note with title: " + title);
};

module.exports = {
    // addNote: addNote
    addNote, // ES6
    getAll,
    getNote,
    deleteNote
}





