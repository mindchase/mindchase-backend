const express = require('express');
const router = express.Router();
const { validateInputs } = require("../middleware/validator");
const { userValidationRules } = require("../lib/validation/userRules");
const auth = require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator");
const { body } = require("express-validator")
//const checkLogin = require("../middleware/checkLogin")

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  loginController
} = require("../controllers/usersController");

router
  .route("/")
  get(auth, isAdmin, getUsers)
  .post(validateInputs(userValidationRules), addUser);


router
  .route("/:id")
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .put(auth, updateUser);

  router
  .route("/login")
  .post(loginController)

  
  /*
  router
  .route("/register")
  .post(register)

  router
  .route("/forgotpassword")
  .post(forgotpassword)

  router
  .route("resetpassword/:resetToken")
  .put("resetpassword")

*/

module.exports = router;
