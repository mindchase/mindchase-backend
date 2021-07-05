const express = require("express");
const router = express.Router();
const { validateInputs } = require("../middleware/validator");
const { userValidationRules } = require("../lib/validation/userRules");
const { catchErrors } = require("../handlers/errorHandlers")
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  login,
  register
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs(userValidationRules), addUser);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);
router.post("/login", catchErrors(login));
router.post("/register", catchErrors(register));

module.exports = router;
