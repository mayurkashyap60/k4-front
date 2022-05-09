var mongoose = require("mongoose");

var PostSessionSchema = new mongoose.Schema(
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
    username: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
      unique: true,
    },
    enddate: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostSession", PostSessionSchema);
