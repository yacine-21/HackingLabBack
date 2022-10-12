const express = require("express");

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
const routerGet = require("./src/ROUTES/GET");
const routerPost = require("./src/ROUTES/POST");
const routerDelete = require("./src/ROUTES/DELETE");
const routerUpdate = require("./src/ROUTES/UPDATE");

app.use("/", router); // path must route to lambdarequire_once('./libraries/controllers/Article.php');

app.use("/get", routerGet);
app.use("/post", routerPost);
app.use("/delete", routerDelete);
app.use("/update", routerUpdate);

app.listen(process.env.PORT, () => {
	console.log("Server is running on port 3000");
});

// doc : https://paulreaney.medium.com/deploy-express-js-on-netlify-91cfaea39591
