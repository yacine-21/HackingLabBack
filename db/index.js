const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
	await mongoose
		.connect("mongodb://localhost:27017/test")
		.then(() => {
			console.log("Connected to MongoDB");
		})
		.catch(err => {
			console.log("Error connecting to MongoDB", err);
		});

	// use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
};

module.exports = {connectDB};
