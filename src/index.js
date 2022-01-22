const express = require("express");
const app = express();
app.use(express.json());

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

module.exports = app;
