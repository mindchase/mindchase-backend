const mongoose = require("mongoose");
const {model,Schema} = require('mongoose')
const validator = require('validator')

const userSchema = new Schema({
    firstName : {
        type:String,
        required: [true,'Please provide your name!'],
    },
    lastName : {
        type:String,
        required: [true,'Please provide your name!'],
    },
    email : {
        type :String,
        required: [true,'Please provide your email'],
        unique : [true,'You have already registered with this email. Forgot your password?'],
        lowercase: true,
        validate :[validator.isEmail,'please provide a valid email']

    },
    password:{
        type:String,
        required  : [true,'please provide a password'],
        minlength : 8
    },
    passwordConfirm : {
        type : String,
        required:[true ,'Please confirm your password']
    },
          
})

module.exports = mongoose.model('User',userSchema)