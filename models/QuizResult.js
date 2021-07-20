const userResult = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    numOfCorrectAnswer: {
        type: Number,
    },

    numOfInCorrectAnswer: {
        type: Number
    }, 
    totalOfQuestion: {
        type: Number
    }
})

module.exports = mongoose.model('result', userResult)



