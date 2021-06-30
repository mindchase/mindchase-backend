const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
var csurf = require('csurf')

/**Routing**/
const indexRouter = require("./routes/index");
const usersRouter = require('./routes/users');
const corsesRouter = require('./routes/courses')
//const chatRouter = require('./router/chatRouter')
//const ordersRouter = require("./routes/orders");
//const { setCors } = require("./middleware/security");
require('dotenv').config({path:"./.env.development.local"})

/** INIT */
const app = express();

/** LOGGING */
app.use(logger('dev'));

const { body } = require('express-validator');


/**CONNECT TO DB */
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`
console.log('mongoURI',mongoURI)
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('connected to DB thanks')
});


/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** ROUTES */
app.use("/", indexRouter);
app.use('/users', usersRouter);
app.use('/users', corsesRouter);
//app.use('/users', chatRouter);
//app.use('/users', ordersRouter);


/** ERROR HANDLING */
app.use(function(req, res, next) {
    const error = new Error("Looks like something broke...");
    error.status = 400;
    next(error);
  });

  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send({
      error: {
        message: err.message
      }
    });
  });
  
//app.use('/DigitalCampus', usersRouter);


module.exports = app;
