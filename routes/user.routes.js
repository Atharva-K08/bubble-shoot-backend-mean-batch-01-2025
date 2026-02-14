const express = require("express");

const {
  register,
  getUsersDetails,
  updateUserDetails,
  login,
} = require("../controller/user.controller");
const { body } = require("express-validator");

const router = express.Router();

router.post("/register", [
  body('username').notEmpty().withMessage("name is required").isLength({min:6}).withMessage("name atleast have 6 characters"),
  body('email').notEmpty().withMessage("email is required").isEmail().withMessage("invalid email"),
  body('password').notEmpty().withMessage("password is required").isLength({min:8}).withMessage("name atleast have 8 characters"),
] ,register);
router.post("/login", login);

router.get("/", getUsersDetails);
router.put("/:id", updateUserDetails);

module.exports = router;