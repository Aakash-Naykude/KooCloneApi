const express = require("express");
const People = require("../models/people.model");
const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Allusers = await People.find().lean().exec();

    return res.send(Allusers);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const Allusers = await People.findById(req.params.id).lean().exec();

    return res.send(Allusers);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
router.post("/", async (req, res) => {
  try {
    const ucreate = await People.create(req.body);

    return res.status(201).send(ucreate);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    console.log(req);
    const upuser = await People.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(upuser);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});

module.exports = router;
