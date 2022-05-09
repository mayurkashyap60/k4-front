var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

UserSchema.statics.isThisEmailInUse = async function (email) {
  if (!email) throw new Error("Invalid Email");

  try {
    const user = await this.findOne({ email });
    if (user) return false;

    return true;
  } catch (error) {
    console.log("Email Error from User.js UserSchema", error.message);
    return false;
  }
};

module.exports = mongoose.model("User", UserSchema);
