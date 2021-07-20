
const Course = require('../models/Course');
const createError = require("http-errors");


// get all quiz questions ------------------------------------------------
exports.getQuizes = async (req, res) => {
  try {
    const quizes = await Question.find({}).exec()
    return res.status(200).json(quizes)
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}

// get one quiz question ----------------------------------------------------
exports.getQuiz = async (req, res) => {
  try {
    const _id = req.params.id
    const { description, alternatives } = req.body

    let question = await Question.findOne({ _id })

    if (!question) {
      question = await Question.create({
        description,
        alternatives
      })
      return res.status(201).json(question)
    } else {
      question.description = description
      question.alternatives = alternatives
      await question.save()
      return res.status(200).json(question)
    }
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}






// create one quiz question ---------------------------------------------------

 exports.addQuiz = async (req, res) => {
  try {
    const { description } = req.body
    const { alternatives } = req.body

    const question = await Question.create({
      description,
      alternatives
    })

    return res.status(201).json(question)
  } catch (error) {
    return res.status(500).json({ "error": error })
  }
}






// update one quiz question ---------------------------------------------------
exports.updateQuiz = async (req, res) => {
  try {
      const _id = req.params.id 
      const { description, alternatives } = req.body

      let question = await Question.findOne({_id})

      if(!question){
          question = await Question.create({
              description,
              alternatives
          })    
          return res.status(201).json(question)
      }else{
          question.description = description
          question.alternatives = alternatives
          await question.save()
          return res.status(200).json(question)
      }
  } catch (error) {
      return res.status(500).json({"error":error})
  }
}







// delete one quiz question ----------------------------------------------------

exports.deleteQuiz =  async (req, res) => {
  try {
      const _id = req.params.id 

      const question = await Question.deleteOne({_id})

      if(question.deletedCount === 0){
          return res.status(404).json()
      }else{
          return res.status(204).json()
      }
  } catch (error) {
      return res.status(500).json({"error":error})
  }
}












// the old one

// const Quiz = reuire('../models/Quiz')
// const createError = require("http-errors");


// exports.getQuizes = async (req, res, next) => {
//   try {
//     const quizes = await Quiz.find();
//     res.status(200).send(quizes);
//   } catch (e) {
//     next(e);
//   }
// };

// exports.getQuiz = async (req, res, next) => {
//   try {
//     const quiz = await Quiz.findById(req.params.id);
//     if (!quiz) throw new createError.NotFound();
//     res.status(200).send(quiz);
//   } catch (e) {
//     console.log(e)
//     next(e);
//   }
// };


// exports.deleteQuiz = async (req, res, next) => {
//   try {
//     const quiz = await Quiz.findByIdAndDelete(req.params.id);
//     if (!quiz) throw new createError.NotFound();
//     res.status(200).send(quiz);
//   } catch (e) {
//     next(e);
//   }
// };




// exports.updateQuiz = async (req, res, next) => {
//   try {
//     const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });
//     if (!quiz) throw new createError.NotFound();
//     res.status(200).send(quiz);
//   } catch (e) {
//     next(e);
//   }
// };


// exports.addQuiz = async (req, res, next) => {
//   try {
//     const quiz = new Quiz(req.body);
//     await quiz.save();
//     res.status(200).send(quiz);
//   } catch (e) {
//     next(e);
//   }
// };



// // I don't know if that is true, but it's for testing
// exports.specificQuiz = async (req, res, next) => {
//   try {
//     const specificQuiz = await Quiz.findByIndex(req.params.index);
//     if (!quiz) throw new createError.NotFound();
//     res.status(200).send(quiz);
//   } catch (e) {
//     console.log(e)
//     next(e);
//   }
// };




