const express = require("express");
const viewsController = require("../controller/views");
const authController = require("../controller/authController");

const router = express.Router();

router.get("/", viewsController.getOverview);
router.get("/mentor/:slug", viewsController.getMentor);
router.get("/recentChats", viewsController.getRecentChats);
router.get("/login", viewsController.getLoginForm);
router.get("/me", authController.protect, viewsController.getAccount);

// router.post(
//   "/submit-user-data",
//   authController.protect,
//   viewsController.updateUserData
// );

module.exports = router;
