const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    post: { required: true, type: String },
    like: { required: true, type: Number },
    username: { required: true, type: String },
    
    userid: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("userpost", userSchema);
