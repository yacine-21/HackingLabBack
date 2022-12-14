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

	// delete all collection in the database
	// execute the shell script that is in the public folder
	const fileName = "results.txt";

	try {
		exec(
			`bash public/./full-port-scan.sh ${req.body.ipAddress}`,
			(error, stdout, stderr) => {
				if (error) {
					res.status(500).json({ error_exec: error });
				} else {
					// res.status(200).download(path.resolve("public", fileName));

					// read the results.txt file under the public folder
					fs.readFile(`./public/${fileName}`, "utf8", async (err, data) => {
						if (err) {
							res.status(500).json({ error_readFile: err });
						} else {
							const newIP = await ip.create({
								ip: req.body.ipAddress,
								nmapResults: data,
								level: req.body.level
							});
							res.status(200).send(newIP);
						}
					});
				}
			}
		);
	} catch (error) {
		res.status(500).json({ error_tryCatch: error });
	}
});

module.exports = router;
