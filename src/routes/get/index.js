const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
	console.log("hit the route");
	console.log(req.url, "@", Date.now());
	next();
});

router.get("/", (req, res) => {
	res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

module.exports = router;
