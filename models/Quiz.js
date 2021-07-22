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



// const mongoose = require('mongoose')

// const QuizSchema = new mongoose.Schema({
//     question: String,
//     chekcbox1: Boolean,
//     answer1: String,
//     chekcbox2: Boolean,
//     answer2: String,
//     chekcbox3: Boolean,
//     answer3: String
// })

// module.exports = mongoose.model('Quiz', QuizSchema)