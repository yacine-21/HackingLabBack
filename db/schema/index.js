const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema({
	ip: String,
	nmapResults: String,
	level: Number
});

module.exports = {
	ipSchema
};
