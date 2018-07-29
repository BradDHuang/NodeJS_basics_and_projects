
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id: Number,
	name: String,
	age: Number,
	sex: String,
	title: String,
	startDate: String
});

module.exports = mongoose.model("User", UserSchema);





