const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const menteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provied a valid email"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  domain: {
    type: String,
    required: [true, "Please provide your Field"],
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
  college: {
    type: String,
    required: [true, "Please specify your college"],
  },
  year_of_study: {
    type: String,
    required: [true, "Please specify your year of study"],
  },
  Branch: {
    type: String,
    required: [true, "Please specify your branch"],
  },
  currentMentors: {
    type: String,
  },
  college: {
    type: String,
    required: [true, "Please specify your college"],
  },
  year_of_study: {
    type: String,
    required: [true, "Please specify your year of study"],
  },
  Branch: {
    type: String,
    required: [true, "Please specify your branch"],
  },
});

const Mentee = mongoose.model("Mentee", menteeSchema);

module.exports = Mentee;
