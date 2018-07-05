

const express = require("express");

const hbs = require("hbs");

const fs = require("fs");

const port = process.env.PORT || 8080;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
    // return "test.";
    return new Date().getFullYear();
});
hbs.registerHelper("capitalize", (text) => {
    return text.toUpperCase();
});

app.set("view engine", "hbs"); // key-val pair.

// app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    var now = new Date().toString();
    // console.log(`${now}, ${req.method} ${req.url}`);
    var log = `${now}, ${req.method} ${req.url}`;
    console.log(log);
    
    fs.appendFile("server.log", log + "\n", (err) => {
        if (err) {
            console.log("Unable to append to server.log.");
        }
    });
    
    next();
});

// Express middleware
/*
app.use((req, res, next) => {
    res.render("maintenance.hbs");
});
// next() is not called here, so the code below won't be triggered.
*/
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
        pageTitle: "Homepage",
        // currentDate: new Date()
        // currentYear: new Date().getFullYear()
        msg: "Welcome!"
    });
});

app.get("/about", (req, res) => {
    // res.send("About page.");
    
    // res.render("about.hbs");
    res.render("about.hbs", {
        // pageTitle: "Dynamic title",
        pageTitle: "About page"
        // currentYear: new Date().getFullYear()
    });
});

// app.listen(8080, () => {

app.listen(port, () => {
    
//   console.log("Express app listening on port 8080 with Cloud9!");
  console.log(`Express app listening on port ${port} with Cloud9!`);
  //call this app from https://<workspace name>-<user name>.c9users.io
});






