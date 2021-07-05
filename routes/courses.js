const express= require('express')
const router = express.Router();
const {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse,
}= require('../controllers/coursesController')

router
    .route('/')
    .get(getCourses)
    .post(addCourse)
    router
    .route('/:id')
    .get(getCourse)
    .delete(deleteCourse)
    .put(updateCourse)

module.exports = router