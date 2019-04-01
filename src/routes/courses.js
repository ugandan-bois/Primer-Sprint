const express = require('express')
const CoursesController = require('../controllers/courses')

const api = express.Router()

api.get('/courses', CoursesController.getCourses)
api.post('/course/register', CoursesController.createCourse)
api.delete('/courses/:courseId/unenroll/:userId', CoursesController.unenrollUser)

module.exports = api
