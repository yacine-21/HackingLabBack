const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
cors({
	credentials: true,
	origin: "*",
	preflightContinue: true
});
app.use("/.netlify/functions/api", router); // path must route to lambda

router.get("/", (req, res) => {
	res.json("hello world");
});

router.get("/test", (req, res) => {
	res.json(["Hello", "Test"]);
});

router.post("/api", (req, res) => {
	res.json({
		hello: "hit the POST! fezohfezuhfuezhfu "
	});
});

router.post("/api/2", (req, res) => {
	res.json({
		hello: "hit the POST! fezohfezuhfuezhfu "
	});
});

// app.use(`/`, router, (req, res, next) => {
// 	// return statu code 200
// 	console.log("hit the route");
// });

module.exports = app;
module.exports.handler = serverless(app);

// doc : https://paulreaney.medium.com/deploy-express-js-on-netlify-91cfaea39591
