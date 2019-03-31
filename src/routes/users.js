const express = require('express')
const UsersController = require('../controllers/users')

const api = express.Router()

api.get('/users', UsersController.fetch)
api.post('/users/create', UsersController.create)

module.exports = api
