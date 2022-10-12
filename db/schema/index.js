const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema({
	ip: String
});

module.exports = {
	ipSchema
};
