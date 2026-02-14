const userModel = require("../models/user.model");

module.exports.createSrvUser = async (data) => {
  return await userModel.create(data);
};

module.exports.fetchSrvUsers = async () => {
  return await userModel.find();
};

module.exports.fetchSrv = async (username) => {
  return await userModel.findOne({username});
};

module.exports.updateSrvUser = async (id, data) => {
  return await userModel.findByIdAndUpdate(id, data, {new: true})
}