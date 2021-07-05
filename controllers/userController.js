const mongoose = require("mongoose");
const User = require("../models/User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");
const bcrypt= require("bcryptjs")

exports.register = async (req, res) => {

  const { name, email, password } = req.body;

  const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

  if (!emailRegex.test(email)) throw Error("Email is not supported from your domain.");
  if (password.length < 6) throw Error ("Password must be atleast 6 characters long.");

  const userExists = await User.findOne({
    email,
  });

  if (userExists) throw Error ("User with same email already exits.");

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  res.json({
    message: "User [" + name + "] registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
   
  });

  if (!user) throw Error("Email and Password did not match.");

  const match = bcrypt.compareSync(password, user.password);

  if (!match){
    return res.status(403).json({
      message: "Incorrect password"
    });
  }

  


  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully!",
    token,
  });
};
