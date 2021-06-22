//that to controller in all courses   
const courses = require('../dataSources/courses.js');

exports.getCourses = (req,res)=>{
    
    res.json(courses)

}