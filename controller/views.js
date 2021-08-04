const Mentor = require("../model/mentor");
const user = require("../model/users");
const authController = require("./authController");

exports.getOverview = async (req, res, next) => {
  try {
    // 1) Get tour data from collection
    const mentors = await Mentor.find();
    res.status(200).render("overview", {
      title: "All Mentors",
      mentors,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findOne({ slug: req.params.slug });

    if (!mentor) {
      console.log("Error");
      return;
    }

    // 2) Build template
    // 3) Render template using data from 1)
    res.status(200).render("mentor", {
      title: `${mentor.name}`,
      mentor,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your account",
  });
};

exports.getRecentChats = async (req, res) => {
  try {
    const mentors = await Mentor.find();

    res.status(200).render("chats", {
      title: "Chat with Mentors",
      mentors,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getSignUpForm = (req, res) => {
  res.status(200).render("signUp", {
    title: "Create your Account",
  });
};

exports.getPage = (req, res) => {
  res.status(200).render("page", {
    title: "Home",
  });
};

exports.getErrorPage = (req, res) => {
  res.status(200).render("error", {
    title: "Home",
  });
};
