const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const postSessionRoute = require("./routes/postsession");
const multer = require("multer");
const path = require("path");
const port = process.env.PORT || 7000;

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors());

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Mongo Connected"))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded..");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/postsession", postSessionRoute);

app.use("/", (req, res) => {
  res.send("<h1>Running index url...</h1>");
});

app.listen(port, () => {
  console.log(`Api index js is running...${port}`);
});
