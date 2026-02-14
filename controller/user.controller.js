const {
  createSrvUser,
  fetchSrvUsers,
  fetchSrv,
  updateSrvUser,
} = require("../services/user.service");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await fetchSrv(username);
    if (!user) {
      res.json({
        message: "username or password is wrong",
        success: false,
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.json({
        message: "username or password is wrong",
        success: false,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.privateKey);
    res.cookie("token", token);
    res.json({
      message: "login successfull",
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || "user can't login",
      success: false,
    });
  }
};

module.exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({
        error: errors.array(),
        success: false,
      });
    }
    const { username, email, password } = req.body;
    const user = await fetchSrv(username);
    if (user) {
      res.json({
        message: "user already exists",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const db_res = await createSrvUser({
      username,
      email,
      password: hashPassword,
    });
    res.json({
      message: "user create successfull",
      success: true,
      user: db_res,
    });
  } catch (err) {
    res.json({
      message: "user can't create",
      success: false,
    });
  }
};

module.exports.getUsersDetails = async (req, res) => {
  try {
    const db_res = await fetchSrvUsers();
    res.json({
      message: "users found",
      success: true,
      users: db_res,
    });
  } catch (err) {
    res.json({
      message: "users can't fetch",
      success: false,
    });
  }
};

module.exports.updateUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const db_res = await updateSrvUser(id, req.body);
    res.json({
      message: "user updated successfully",
      success: true,
      updated_user: db_res,
    });
  } catch (err) {
    res.json({
      message: err.message || "can't update user data",
      success: false,
    });
  }
};
