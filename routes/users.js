const express = require('express');
const { signup } = require('../controllers/usersController');
const router = express.Router();
//const userController = require()

/* GET users listing. */
router
.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',signup)



module.exports = router;
