const express = require("express")
const app = express()
app.use(express.json())

const userController = require("./controllers/user.controller")
app.use("/user",userController)


const postController = require("./controllers/post.controller")
app.use("/userid/post", postController)

module.exports = app