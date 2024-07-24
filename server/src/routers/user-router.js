const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/signup", userController.signup);
router.post("/login", userController.login);


module.exports = router;