const express = require("express");
const router = express.Router();
const Quiz = require('../models/Quiz')
const auth = require('../middleware/auth')
const {
    getQuizes,
    getQuiz,
    addQuiz,
    deleteQuiz,
    updateQuiz
} = require('../controllers/quizController')

router
    .route('/')
    .get(getQuizes)
    .post(/*auth ,*/addQuiz)
    router
    .route('/:id')
    .get(getQuiz)
    .delete(auth,deleteQuiz)
    .put(auth,updateQuiz)

module.exports = router
