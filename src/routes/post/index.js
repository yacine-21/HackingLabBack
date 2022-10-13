const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const exec = require("child_process").exec;
const { connectDB } = require("../../../db");
const { ipSchema } = require("../../../db/schema");
const mongoose = require("mongoose");

router.post("/getInfo", async (req, res) => {
	connectDB();
	const ip = mongoose.model("ip", ipSchema);
	const newIP = await ip.create({
		ip: req.body.ipAddress
	});
	// execute the shell script that is in the public folder
	const fileName = "results.txt";

	res.json({
		message: newIP
	});

	// exec(
	// 	`./public/./full-port-scan.sh ${req.body.ipAddress}`,
	// 	(error, stdout, stderr) => {
	// 		if (error) {
	// 			console.log(`error: ${error.message}`);
	// 			res.status(500).send("Internal Server Error");
	// 		} else {
	// 			res.status(200).download(path.resolve("public", fileName));

	// 			// read the results.txt file under the public folder
	// 			// fs.readFile(`./public/${fileName}`, "utf8", (err, data) => {
	// 			// 	if (err) {
	// 			// 		console.log(`error: ${err.message}`);
	// 			// 		res.status(500).send("Internal Server Error");
	// 			// 	} else {
	// 			// 		res.status(200).send(data);
	// 			// 	}
	// 			// });
	// 		}
	// 	}
	// );
});

// res.json({
// 	message:
// 		"POST request to the homepage from the client side, the data is: " +
// 		JSON.stringify(req.body)res.send("done");

// });

module.exports = router;
