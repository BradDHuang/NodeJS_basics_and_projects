
const express = require("express");
const bodyParser = require("body-parser");
// const http = require("http");
const port = 8080;

const mongoose = require("mongoose");

const User = require("./user");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://testuser:testuser1@ds119598.mlab.com:19598/hwoneusers");

// const userServer = http.createServer((req, res) => {
	// if (req.method === "GET" && req.url === "/app/users/getall") {
	// app.get("/app/users/getall", (req, res) => {
	// Change it into RESTful API routing
	app.get("/api/users", (req, res) => {
		// get all
		User.find((err, users) => {
			if (err) {
				// console.log(err);
				res.writeHead(500, {"Content-Type": "text/plain"});
				res.end(err.toString);
			} else {
				// console.log(users);
				let result = "";
				users.map(user => result += user.toString() + "\n");
				// The map() method creates a new array.
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(result);
			}
		});
	});
		
	// } else if (req.method === "GET" && req.url === "/app/users/getone/:id") {
	// app.get("/app/users/getone/:id", (req, res) => {
	app.get("/api/users/:id", (req, res) => {
		// get one by id
		// let id = 2;
		// let id = "5b5cfa57d56c6c1de0b73caa"; // _id
		let id = req.params.id;
		// _id is the primary key on elements in a collection; 
		// with it, records can be differentiated by default.
		User.findById(id, (err, user) => {
			if (err) {
				res.writeHead(500, {"Content-Type": "text/plain"});
				res.end(err.toString);
			} else {
				let result = "";
				result += user.toString() + "\n";
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(result);
				// console.log(user.id); // 2
				// console.log(user._id); // ObjectID
			}
		});
	});

	// } else if (req.method === "POST" && req.url === "/app/users/insertone") {
	// app.post("/app/users/insertone", (req, res) => {
	app.post("/api/users", (req, res) => {
		// create a new instance, insert one.
		let userone = new User();
		// console.log(req.body);
		// let userone;
		
		userone.id = req.body.id;
		userone.name = req.body.name;
		userone.age = req.body.age;
		userone.sex = req.body.sex;
		userone.title = req.body.title;
		userone.startDate = req.body.startDate;
		
		userone.save((err) => {
			if (err) {
				res.writeHead(500, {"Content-Type": "text/plain"});
				res.end(err.toString);
			} else {
				console.log("a new user created.");
				let result = "";
				result += userone.toString() + "\n";
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end(result);
			}
		});
		
	});

	// } else if (req.method === "DELETE" && req.url === "/app/users/deleteone/:id") {
	// app.delete("/app/users/deleteone/:id", (req, res) => {
	app.delete("/api/users/:id", (req, res) => {
		// get all
		User.find((err, users) => {
			if (err) {
				res.writeHead(500, {"Content-Type": "text/plain"});
				res.end(err.toString);
			} else {
				// console.log(users);

				// delete one
				// let id = "5b5d0f3979a664095cf2a60e"; // 6
				let id = req.params.id;
				User.remove({_id: id}, (err) => {
					if (err) {
						res.writeHead(500, {"Content-Type": "text/plain"});
						res.end(err.toString);
					} else {
						console.log("one user was deleted.");
						User.findById(id, (err, user) => {
							if (err) {
								res.writeHead(500, {"Content-Type": "text/plain"});
								res.end(err.toString);
							} else {
								// console.log("User 6 found? " + user);
								// let result = "";
								// result += user.toString() + "\n";
								// Cannot read property 'toString' of null
								// result += user + "\n";
								res.writeHead(200, {"Content-Type": "text/plain"});
								res.end(`The deleted user can still be found? ${user}`);
							}
						});
					}
				});
			}
		});
	});

	// } else {
	app.all("*", (req, res) => {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("The page you requested is not found.");
	});
// });

// userServer.listen(port, () => {
app.listen(port, () => {
	console.log(`The userServer has started on port ${port}.`);
});




