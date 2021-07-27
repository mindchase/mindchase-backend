const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    partOfMangement: String,
    question: String,
    checkbox1: Boolean,
    answer1: String,
    checkbox2: Boolean,
    answer2: String,
    checkbox3: Boolean,
    answer3: String

})


module.exports = mongoose.model('Quiz', QuizSchema)

