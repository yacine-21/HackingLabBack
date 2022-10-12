const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
	console.log("hit the route");
	console.log(req.url, "@", Date.now());
	next();
});

router.delete("/", (req, res) => {
	res.send("DELETE request to the homepage");
});

module.exports = router;
