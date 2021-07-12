const Quiz = require('../models/QuizModel')
const createError = require("http-errors");

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
      await quiz.save();
      res.status(200).send(quiz);
    } catch (e) {
      next(e);
    }
  };
  
