const express = require('express')
const UsersController = require('../controllers/users')

const api = express.Router()

api.get('/pruebas', UsersController.pruebas)

module.exports = api
