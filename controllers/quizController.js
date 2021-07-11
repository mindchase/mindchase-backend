const Quiz = require('../models/QuizModel')
const createError = require("http-errors");

exports.getQuizes = async (req, res, next) => {
    try {
        const Quizes = await Quiz.find();
        res.status(200).send(Quizes);
    } catch (e) {
        next(e);
    }
};

exports.getQuiz = async (req, res, next) => {
    try {
      const Quiz = await Quiz.findById(req.params.id).populate('Quiz');
      if (!Quiz) throw new createError.NotFound();
      res.status(200).send(Quiz);
    } catch (e) {
      next(e);
    }
  };
  
  exports.deleteQuiz = async (req, res, next) => {
    try {
      const Quiz = await Quiz.findByIdAndDelete(req.params.id);
      if (!Quiz) throw new createError.NotFound();
      res.status(200).send(Quiz);
    } catch (e) {
      next(e);
    }
  };
  
  exports.updateQuiz = async (req, res, next) => {
    try {
      const Quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (!Quiz) throw new createError.NotFound();
      res.status(200).send(Quiz);
    } catch (e) {
      next(e);
    }
  };
  
  exports.addQuiz = async (req, res, next) => {
    try {
      const Quiz = new Quiz(req.body);
      await Quiz.save();
      res.status(200).send(Quiz);
    } catch (e) {
      next(e);
    }
  };
  
