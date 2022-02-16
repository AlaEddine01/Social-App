const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("DB Connected");
});

// MiddleWares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.get("/users", (req, res) => {
  res.send("welcome to user page");
});

app.listen(8800, () => {
  console.log("Server is running ...");
});
