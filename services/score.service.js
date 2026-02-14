const scoreModel = require("../models/score.model");

module.exports.createScoreSrv = async (data) => {
  return await scoreModel.create(data);
};

module.exports.fetchScoreSrv = async (userId) => {
  return await scoreModel.findOne({ userId });
};

module.exports.updateScoreSrv = async (newScore) => {
  return await scoreModel.findByIdAndUpdate(newScore._id, newScore, {
    new: true,
  });
};
