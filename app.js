const express = require("express");
const morgan = require("morgan");
const connect_DB = require("./config/db");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.routes");
const scoreRouter = require("./routes/score.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors());

dotenv.config();
connect_DB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use("/api/score", scoreRouter);

app.get("/health", (req, res) => {
  res.send("health is ok");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running");
  console.log(`http://localhost:${PORT}`);
});
