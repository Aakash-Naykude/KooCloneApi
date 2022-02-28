const express = require("express");
// const serverless = require("serverless-http");
const fs = require("fs");
const upload = require("../middleware/upload");
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

// router.patch("/:id", upload.single("profile_pic"), async (req, res) => {
//   try {
//     const profpic = await Users.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//         mobilenumber: req.body.mobilenumber,
//         profile_pic: req.file.path,
//       },
//       {
//         new: true,
//       }
//     )
//       .lean()
//       .exec();
//       console.log(profpic);
//     res.status(201).send(profpic);
//   } catch (e) {
//     res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

router.patch("/:id", async (req, res) => {
  try {
    const profpic = await Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        mobilenumber: req.body.mobilenumber,
      },
      {
        new: true,
      }
    )
      .lean()
      .exec();
    console.log(profpic);
    res.status(201).send(profpic);
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
