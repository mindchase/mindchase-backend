const express= require('express')
const router = express.Router();
const auth = require('../middleware/auth')
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
    .post(/*auth ,*/addCourse)
    router
    .route('/:id')
    .get(getCourse)
    .delete(auth,deleteCourse)
    .put(auth,updateCourse)

module.exports = router