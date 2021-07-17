const express = require("express");
const menteeController = require("../controller/mentee");
const authController = require("../controller/authController");

const router = express.Router();
// router.post("/signup", authController.signup);
// router.post("/login", authController.login);

router
  .route("/")
  .get(menteeController.getAllMentees)
  .post(menteeController.createMentee);

router
  .route("/:id")
  .get(menteeController.getMentee)
  .delete(menteeController.deleteMentee);

module.exports = router;
