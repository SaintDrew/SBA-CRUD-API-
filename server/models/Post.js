const mongoose = require("mongoose");

const Schema = mongoose.Schema
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post name required"],
    },


    body: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    },

    updatedAt: {
      type: Date,
      default: Date.now
    },
  },
);

module.exports = mongoose.model("Post", PostSchema);

