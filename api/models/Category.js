var mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

module.exports = mongoose.model("Category", CategorySchema);
