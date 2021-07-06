const express= require('express')
const router = express.Router();
const auth = require('../middleware/authenticator.js')
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
    .post(auth ,isAdmin,addCourse)
    router
    .route('/:id')
    .get(getCourse)
    .delete(auth,isAdmin,deleteCourse)
    .put(auth,isAdmin,updateCourse)

module.exports = router
