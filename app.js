const http = require("http");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const morgan = require("morgan");

const mentorRouter = require("./routes/mentors");
const menteeRouter = require("./routes/mentee");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const viewRouter = require("./routes/views");
const reviewRouter = require("./routes/review");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 1) GLOBAL MIDDLEWARES
// Serving static files

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test Middleware:
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' cdnjs.cloudflare.com"
  );
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

// Routes:
app.use("/", viewRouter);
app.get("/hi", function (req, res) {
  console.log("hi page");
  res.send("hi");
});
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/mentors", mentorRouter);
app.use("/api/v1/mentees", menteeRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
module.exports = app;
