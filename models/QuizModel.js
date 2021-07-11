const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    checkbox1: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    checkbox2: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    checkbox3: {
        type: String,
        required: true
    },
    answer3: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Quiz",quizSchema )