const http = require("http");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");

const mentorRouter = require("./routes/mentors");
const menteeRouter = require("./routes/mentee");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use("/api/v1/mentors", mentorRouter);
app.use("/api/v1/mentees", menteeRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
module.exports = app;
