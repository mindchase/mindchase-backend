const Quiz = require('../models/QuizModel')
const createError = require("http-errors");
const quizSchema = require('../models/QuizModel')


exports.getQuizes = async (req, res, next) => {
  try {
    const quizes = await Quiz.find();
    res.status(200).send(quizes);
  } catch (e) {
    next(e);
  }
};

exports.getQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('quiz');
    if (!quiz) throw new createError.NotFound();
    res.status(200).send(quiz);
  } catch (e) {
    next(e);
  }
};

exports.deleteQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) throw new createError.NotFound();
    res.status(200).send(quiz);
  } catch (e) {
    next(e);
  }
};

exports.updateQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!quiz) throw new createError.NotFound();
    res.status(200).send(quiz);
  } catch (e) {
    next(e);
  }
};



exports.addQuiz = async (req, res, next) => {
  try {
    const quiz = new Quiz(req.body);
    const newQuiz = new quizSchema(req.body)   /*explain the code : Re:001  */
    await newQuiz.save();
    res.status(200).send(quiz);
  } catch (e) {
    next(e);
  }
};

    /*Re:001 i didn't need to do that : const {question, checkbox1, answer1, checkbox2, answer2, checkbox3, answer3} = req.body;
      const newQuiz = new quizSchema({ question, checkbox1, answer1, checkbox2, answer2, checkbox3, answer3})
           i need only using that : const newQuiz = new quizSchema(req.body), becouse it can get all data from brwoser for this form
    */
