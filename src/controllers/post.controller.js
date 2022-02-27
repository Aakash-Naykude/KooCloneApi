const express = require("express");
const Postdata = require("../models/post.model");
const router = express.Router();
const redis = require("../configs/redis");
router.get("/", async (req, res) => {
  try {
    redis.get("userposts", async function (err, userposts) {
      if (err) console.log(err);
      if (userposts) return res.status(200).send(JSON.parse(userposts));
      const Allusers = await Postdata.find().lean().exec();
      redis.set("userposts", JSON.stringify(Allusers));
      return res.status(200).send(JSON.stringify(Allusers));
    });
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const Allusers = await Postdata.findById(req.params.id).lean().exec();

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

router.patch("/:id", async (req, res) => {
  try {
    console.log(req);
    const upuser = await Postdata.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(upuser);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});

module.exports = router;
