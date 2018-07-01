

const express = require("express");

const hbs = require("hbs");

var app = express();

app.set("view engine", "hbs"); // key-val pair.

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    /*
    // res.send("Hi Brad!");
    // res.send("<h1>Hi Brad!</h1>");
    res.send({
        name: "Brad",
        likes: ["Pokemon Go", "Walking", "Coding"]
    });
    // Express will convert this Object into JSON.
    */
    
    res.render("home.hbs", {
        pageTitle: "Title of Homepage",
        currentDate: new Date()
    });
});

app.get("/about", (req, res) => {
    // res.send("About page.");
    
    // res.render("about.hbs");
    res.render("about.hbs", {
        pageTitle: "Dynamic title",
        currentYear: new Date().getFullYear()
    });
});

app.listen(8080, () => {
  console.log("Express app listening on port 8080 with Cloud9!");
  //call this app from https://<workspace name>-<user name>.c9users.io
});






