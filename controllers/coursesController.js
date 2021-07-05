//that to controller in all courses   
const Course = require('../models/Course');
const createError = require("http-errors");


exports.getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find();
        res.status(200).send(courses);
    } catch (e) {
        next(e);
    }
};

exports.getCourse = async (req, res, next) => {
    try {
      const course = await Course.findById(req.params.id).populate('course');
      if (!course) throw new createError.NotFound();
      res.status(200).send(course);
    } catch (e) {
      next(e);
    }
  };
  
  exports.deleteCourse = async (req, res, next) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      if (!course) throw new createError.NotFound();
      res.status(200).send(course);
    } catch (e) {
      next(e);
    }
  };
  
  exports.updateCourse = async (req, res, next) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (!course) throw new createError.NotFound();
      res.status(200).send(course);
    } catch (e) {
      next(e);
    }
  };
  
  exports.addCourse = async (req, res, next) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(200).send(course);
    } catch (e) {
      next(e);
    }
  };