const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    mobilenumber: { type: Number },
    profile_pic: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("user", userSchema);
