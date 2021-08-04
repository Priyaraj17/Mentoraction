const express = require("express");
const viewsController = require("../controller/views");
const authController = require("../controller/authController");

const router = express.Router();

router.get("/mentors", authController.isLoggedIn, viewsController.getOverview);
router.get("/", viewsController.getPage);
router.get(
  "/mentor/:slug",
  authController.isLoggedIn,
  viewsController.getMentor
);
router.get(
  "/recentChats",
  authController.isLoggedIn,
  viewsController.getRecentChats
);
router.get("/login", viewsController.getLoginForm);
router.get("/signup", viewsController.getSignUpForm);
router.get("/book", viewsController.getErrorPage);
router.get("/blogs", viewsController.getErrorPage);
module.exports = router;
