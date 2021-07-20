const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    question: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model('Quiz', QuizSchema)



