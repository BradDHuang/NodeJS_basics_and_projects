

const express = require("express");

var app = express();

app.get("/", (req, res) => {
    // res.send("Hi Brad!");
    // res.send("<h1>Hi Brad!</h1>");
    res.send({
        name: "Brad",
        likes: ["Pokemon Go", "Walking", "Coding"]
    });
    // Express will convert this Object into JSON.
});

app.get("/about", (req, res) => {
    res.send("About page.");
});

app.listen(8080, () => {
  console.log("Express app listening on port 8080 with Cloud9!");
  //call this app from https://<workspace name>-<user name>.c9users.io
});






