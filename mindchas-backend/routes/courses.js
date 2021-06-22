const {Router} = require('express')
const {getCourses}= require('../controllers/coursesController.js')

const router = Router()

router
    .route('/')
    .get(getCourses)

module.exports = router
