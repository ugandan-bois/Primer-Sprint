const express = require('express')
const CoursesController = require('../controllers/courses')

const api = express.Router();

api.get('/courses', CoursesController.getCourses)

module.exports = api;