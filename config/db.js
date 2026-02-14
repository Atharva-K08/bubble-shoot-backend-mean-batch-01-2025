const { mongoose } = require("mongoose");

const connect_DB = () => {
  mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() => {
      console.log("db connect jala");
    })
    .catch((err) => {
      console.log("error aala", err);
    });
};

module.exports = connect_DB;