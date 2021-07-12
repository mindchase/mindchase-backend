const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')
const {
    getQuiz,
    getQuizes,
    addQuiz,
    deleteQuiz,
    updateQuiz
} = require('../controllers/quizController')



router
    .route('/')
    .get(getQuizes)
    .post(addQuiz) // i didn't need the quizControllaer becouse, that if he don't answer , he can to go the next qution

router
    .route("/:id")
    .get(getQuiz)
    .delete(auth,deleteQuiz)
    .put(auth, updateQuiz)

module.exports = router