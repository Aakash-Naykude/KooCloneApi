const express = require("express");
const Postdata = require("../models/post.model");
const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Allusers = await Postdata.find().lean().exec();

    return res.send(Allusers);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
router.post("/", async (req, res) => {
  try {
    const ucreate = await Postdata.create(req.body);

    return res.status(201).send(ucreate);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
module.exports = router;
