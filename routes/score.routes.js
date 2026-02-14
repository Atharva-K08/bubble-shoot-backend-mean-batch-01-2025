const express = require("express");
const {
  getScore,
  addNewScore,
  updateScore,
} = require("../controller/score.controller");

const router = express.Router();

router.get("/:userId", getScore);
router.post("/", addNewScore);
router.put("/", updateScore);

module.exports = router;
