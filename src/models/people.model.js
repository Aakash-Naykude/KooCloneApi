const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    profile_pic: { type: String },
    name: { type: String },
    username: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("people", userSchema);
