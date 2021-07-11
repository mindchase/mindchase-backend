const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')


router
    .route('/')
    .get(getquizes)
    .post(/*auth ,*/addquiz) // i didn't need the quizControllaer becouse, that if he don't answer , he can to go the next qution

router
    .router('/')
    .get(getQuizes)
    .post(addquiz)
    .delete(auth,deleteQuiz)
    .put(auth, updateQuiz)

module.exports = router