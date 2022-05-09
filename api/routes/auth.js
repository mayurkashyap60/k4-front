const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//USER REGISTRATION

router.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);
  const password = hashPass;

  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashPass = await bcrypt.hash(req.body.password, salt);

    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser) {
      return res.json({
        success: false,
        message: "This email is already in use, use different email id...",
      });
    }

    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    const user = await newUser.save();
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER LOGIN

router.post("/login", async (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json({ code: 0, message: "Wrong Email!" });
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json({ code: 0, message: "Wrong Password!" });
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    // res.status(500).json(err);
  }
});

module.exports = router;
