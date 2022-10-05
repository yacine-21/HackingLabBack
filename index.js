const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
require("dotenv").config();

express.json();
app.use(cors());

app.get("/", (req, res) => {
	res.send({
		message: "Hello World"
	});
});

app.listen(process.env.PORT || PORT, () => {
	console.log(
		`Example app listening at http://localhost:${process.env.PORT || PORT}`
	);
});
