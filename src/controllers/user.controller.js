const express = require("express");
// const serverless = require("serverless-http");

// const connect = require("../config/db");
// const mongoose = require('mongoose');
const Users = require("../models/user.model");
const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Allusers = await Users.find().lean().exec();

    return res.send(Allusers);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
router.get("/email/:email", async (req, res) => {
  try {
    console.log(req.params.email);
    const spuser = await Users.find({ email: { $eq: req.params.email } });

    return res.send(spuser);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    console.log("user");
    console.log(req.params.id);
    const spuser = await Users.findById(req.params.id).lean().exec();

    return res.send(spuser);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});

router.post("/", async (req, res) => {
  try {
    const ucreate = await Users.create(req.body);

    return res.status(201).send(ucreate);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const upuser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(upuser);
  } catch (err) {
    return res.status(500).send({ message: err.message, status: "failed" });
  }
});

// app.use(`/.netlify/functions/api`, router);

// module.exports = app;
module.exports = router;
