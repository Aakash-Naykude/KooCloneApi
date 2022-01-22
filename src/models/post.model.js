const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    profile_pic: { type: String },
    postdata: { type: String },
    name: { type: String },
    username: { type: String },
    imageupload: { type: String },
    likes: { type: Number },
    commentNo: { type: Number },
    comments: [{ type: String }],
    userid: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("userpost", userSchema);
