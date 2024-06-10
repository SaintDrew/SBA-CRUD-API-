const mongoose = require('mongoose');

const PostSchema= mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please list title"]
    },

    name: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: true
    },

    createdAt: {
      type: Date,
      default: Date.now
    },

    updatedAt: {
      type: Date,
      default: Date.now
    },
},
{
  timestamps: true
}
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

