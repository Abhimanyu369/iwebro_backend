const express = require("express");
const session = require("express-session");
const cors = require("cors");
require("./config/mongoose");
require("./config/passLocal");
const passport = require("passport");
const app = express();
const cookie = require("cookie-parser");
const dotenv = require("dotenv");
const path = require('path');

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie());
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  session({
    name: "user",
    secret: "USER",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 100 * 453 * 433,
    },
  })
);
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);

app.use(express.static("src/assets"));
// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req, res) => {
  return res.json("api working.");
});

app.use("/api", require("./routes/api"));

app.listen(process.env.PORT || 8081, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`Server run ${process.env.PORT}`);
});
