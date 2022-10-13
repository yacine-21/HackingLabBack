const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const routerGet = require("./src/routes/get");
const routerPost = require("./src/routes/post");
const routerDelete = require("./src/routes/delete");
const routerUpdate = require("./src/routes/update");

app.use("/", router);

app.use("/get", routerGet);
app.use("/post", routerPost);
app.use("/delete", routerDelete);
app.use("/update", routerUpdate);

app.listen(process.env.PORT, () => {
	console.log("Server is running on port " + process.env.PORT);
});

module.exports = app;
// doc : https://paulreaney.medium.com/deploy-express-js-on-netlify-91cfaea39591
