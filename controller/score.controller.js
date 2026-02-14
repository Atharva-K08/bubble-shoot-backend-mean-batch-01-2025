const {
  createScoreSrv,
  fetchScoreSrv,
  updateScoreSrv,
} = require("../services/score.service");

module.exports.addNewScore = async (req, res, next) => {
  try {
    const db_res = await createScoreSrv(req.body);
    res.status(200).json({
      message: "new score created",
      success: true,
      data: db_res,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal server error",
      success: false,
    });
  }
};
module.exports.getScore = async (req, res, next) => {
  try {
    const db_res = await fetchScoreSrv(req.params.userId);
    if (!db_res) {
      throw new Error("score for given user not found");
    }
    res.status(200).json({
      message: "score found",
      success: true,
      data: db_res,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal server error",
      success: false,
    });
  }
};
module.exports.updateScore = async (req, res, next) => {
  try {
    const db_res = await updateScoreSrv(req.body);
    res.status(200).json({
      message: "new score updated",
      success: true,
      data: db_res,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal server error",
      success: false,
    });
  }
};
