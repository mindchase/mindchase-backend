const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const chatroomRouter = require("./routes/chatrooms")
const userRouter = require("./routes/users")

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

//Setup Cross Origin
app.use(cors());

//Bring in the routes
app.use("/users", userRouter);
app.use("/chatrooms", chatroomRouter);

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}


module.exports = app;
