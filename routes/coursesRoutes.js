const express=require('express');
const router=express.Router();
const coursesController=require('../controllers/courseController');

router.post('/addcourses',coursesController.addCourse);
router.get('/addStudentCourses',coursesController.addStudentsToCourses)

module.exports=router;