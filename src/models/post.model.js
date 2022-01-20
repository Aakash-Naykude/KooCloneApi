const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    postdata: { type: String },
    // like: {  type: Number },
    username: { type: String },
    imageupload: { type: String },
    // userid: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("userpost", userSchema);
