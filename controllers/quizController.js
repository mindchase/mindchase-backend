
const Course = require('../models/Course');
const createError = require("http-errors");
const Quiz = require("../models/Quiz")


// get all quiz quizs ------------------------------------------------
exports.getQuizes = async (req, res) => {
  try {
    const quizes = await quiz.find({}).exec()
    return res.status(200).json(quizes)
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

// get one quiz quiz ----------------------------------------------------
exports.getQuiz = async (req, res) => {
  try {
    const _id = req.params.id

    let quiz = await Quiz.findOne({ _id })


    return res.status(200).json(quiz)
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}






// create one quiz quiz ---------------------------------------------------

exports.addQuiz = async (req, res) => {
  try {

    const quiz = await Quiz.create(req.body)
    return res.status(201).json(quiz)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ "error": error })
  }
}






// update one quiz quiz ---------------------------------------------------
exports.updateQuiz = async (req, res) => {
  try {
    const _id = req.params.id
    const { description, alternatives } = req.body

    let quiz = await Quiz.findOne({ _id })

    if (!quiz) {
      quiz = await Quiz.create({
        description,
        alternatives
      })
      return res.status(201).json(quiz)
    } else {
      quiz.description = description
      quiz.alternatives = alternatives
      await quiz.save()
      return res.status(200).json(quiz)
    }
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}







// delete one quiz quiz ----------------------------------------------------

exports.deleteQuiz = async (req, res) => {
  try {
    const _id = req.params.id

    const quiz = await quiz.deleteOne({ _id })

    if (quiz.deletedCount === 0) {
      return res.status(404).json()
    } else {
      return res.status(204).json()
    }
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}