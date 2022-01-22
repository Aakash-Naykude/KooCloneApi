const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    username: { type: String },
    email: { type: String },
    mobilenumber: { type: Number },
    profile_pic: { type: String },
    followers: { type: Number },
    following: { type: Number },
    followingPeople: [{ type: String },],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("user", userSchema);
