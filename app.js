const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const app = express();
const usersRouter = require('./routes/users');


require('dotenv').config()


//connect to Db
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`

mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('connected to DB thanks')
});


//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/users', usersRouter);
app.use('/DigitalCampus', usersRouter);

module.exports = app;
