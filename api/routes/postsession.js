const router = require("express").Router();
const PostSession = require("../models/PostSession");

//CREATE POST SESSION
router.post("/", async (req, res) => {
  const newPostSession = new PostSession(req.body);
  try {
    const savePostSession = await newPostSession.save();
    res.status(200).json(savePostSession);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET POST SESSION
router.get("/", async (req, res) => {
  try {
    const postSessions = await PostSession.find();
    res.status(200).json(postSessions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
