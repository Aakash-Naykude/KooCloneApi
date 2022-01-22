const express = require("express");
const Postdata = require("../models/polls.model");
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

module.exports = router;
