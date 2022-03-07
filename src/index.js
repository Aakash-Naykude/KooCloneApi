const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "5000mb",
    extended: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
//app.use(express.json());
app.use(cors());
const userController = require("./controllers/user.controller");
app.use("/user", userController);

const postController = require("./controllers/post.controller");
app.use("/userid/post", postController);

const trendingController = require("./controllers/trending.controller");
app.use("/trending", trendingController);
const exclusiveController = require("./controllers/exclusive.controller");
app.use("/exclusive", exclusiveController);
const followingController = require("./controllers/following.controller");
app.use("/following", followingController);
const newController = require("./controllers/new.controller");
app.use("/new", newController);
const pollsController = require("./controllers/polls.controller");
app.use("/polls", pollsController);
const sportsController = require("./controllers/sports.controller");
app.use("/sports", sportsController);
const upelectionController = require("./controllers/upelections.controller");
app.use("/upelections", upelectionController);
const videosController = require("./controllers/videos.controller");
app.use("/videos", videosController);

const peopleController = require("./controllers/people.controller");
app.use("/people", peopleController);

module.exports = app;
