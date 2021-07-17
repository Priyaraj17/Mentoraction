const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const mentorSchema = new mongoose.Schema({
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
  currentMentees: {
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
  rating: Number,
});

// const menteeSchema = new mongoose.Schema({
//   currentMentors: {
//     type: Array,
//   },
//   college: {
//     type: String,
//     required: [true, "Please specify your college"],
//   },
//   year_of_study: {
//     type: String,
//     required: [true, "Please specify your year of study"],
//   },
//   Branch: {
//     type: String,
//     required: [true, "Please specify your branch"],
//   },
// });

// const mentorSchema = new mongoose.Schema({
//   currentMentees: {
//     type: Array,
//   },
//   college: {
//     type: String,
//     required: [true, "Please specify your college"],
//   },
//   year_of_study: {
//     type: String,
//     required: [true, "Please specify your year of study"],
//   },
//   Branch: {
//     type: String,
//     required: [true, "Please specify your branch"],
//   },
//   rating: Number,
// });

// const User = mongoose.model("User", usersSchema, "users");
// User.Mentee = mongoose.model("Mentee", menteesSchema, "users");
// User.Mentor = mongoose.model("Mentor", mentorsSchema, "users");

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
