const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const csurf = require("csurf");
require("crypto").randomBytes(64).toString("hex");

/**Routing**/
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const chatroomRouter = require("./routes/chatrooms");
const userRouter = require("./routes/users");
const quizRouter = require("./routes/quiz");
const { body } = require("express-validator");
const cors = require("cors");

require("dotenv").config();

/**CONNECT TO DB */
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;
console.log("mongoURI", mongoURI);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to DB thanks");
});

/** INIT */
const app = express();
/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({});
})
//Setup Cross Origin
app.use(
  cors({
    origin: [process.env.NODE_ENV === 'production' ? process.env.DOMAIN : "http://localhost:3000"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
//Bring in the routes
app.use("/users", userRouter);
app.use("/chatrooms", chatroomRouter);
app.use("/courses", coursesRouter);
app.use("/quiz", quizRouter);

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.NODE_ENV === "development") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
