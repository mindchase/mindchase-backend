const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    checkbox1: {
        type: Boolean,
    },
    answer1: {
        type: String,
    },
    checkbox2: {
        type: Boolean,
    },
    answer2: {
        type: String,
    },
    checkbox3: {
        type: Boolean,
    },
    answer3: {
        type: String,
    }
})

module.exports = mongoose.model("Quiz",quizSchema )