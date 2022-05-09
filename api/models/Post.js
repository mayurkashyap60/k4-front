var mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    featured: {
      type: String,
      required: false,
      default: "no",
    },
    trending: {
      type: String,
      required: false,
      default: "no",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
