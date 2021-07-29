const { body } = require("express-validator");

exports.userValidationRules = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Your email looks funky..."),
    body("password")
      .isLength({ min: 10 })
      .withMessage("Minimum password length is 10"),
    body("name")
      .exists()
      .trim()
      .escape()
      .withMessage("Please give us your name.")
  ];
  