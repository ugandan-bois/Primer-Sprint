const express = require('express')
const EnrollmentsController = require('../controllers/enrollments')

const api = express.Router()

api.get('/enrollments', EnrollmentsController.getEnrollments)
api.post('/enrollments/create', EnrollmentsController.createEnrollment)

module.exports = api
