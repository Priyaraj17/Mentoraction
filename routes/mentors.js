const express = require("express");
const mentorController = require("../controller/mentor");
const authController = require("../controller/authController");

const router = express.Router();
// router.post("/signup", authController.signup);
// router.post("/login", authController.login);

router
  .route("/")
  .get(mentorController.getAllMentors)
  .post(mentorController.createMentor);

router
  .route("/:id")
  .get(mentorController.getMentor)
  .delete(mentorController.deleteMentor);

module.exports = router;
