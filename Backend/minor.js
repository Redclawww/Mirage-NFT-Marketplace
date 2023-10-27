const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");

app.use(express.json());

const SECRET = process.env.jwtSecret; // This should be in an environment variable in a real application

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const nftSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const User = mongoose.model("User", userSchema);
const nft = mongoose.model("nft", nftSchema);

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

mongoose.connect(
  "mongodb+srv://Kush_patel2718:1mZOvvfxmjY5F79H@cluster0.dkmbpcu.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Minor",
  }
);
app.post(
  "/api/signup",
  [
    body("username", "Invalid Username").isLength({ min: 5 }),
    body("email", "Invalid Email").isEmail(),
    body("password", "Invalid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success });
    }

    const { username, email, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: "User already exists" });
    } else {
      const newUser = new User({ username, password, email });
      await newUser.save();
      const token = jwt.sign({ username }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "User created successfully", token, success: true });
    }
  }
);

app.post(
  "/api/login",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Invalid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: "user" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token, success: true });
    } else {
      res
        .status(403)
        .json({ message: "Invalid username or password", success: false });
    }
  }
);

app.listen(3000, () => console.log("Server running on port 3000"));
