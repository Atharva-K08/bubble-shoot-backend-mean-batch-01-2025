const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema(
  {
    score: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true },
);

const scoreModel = mongoose.model("score", scoreSchema);
module.exports = scoreModel;
