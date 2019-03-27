const express = require('express')
const UsersController = require('../controllers/users')

const api = express.Router()

api.get('/pruebas', UsersController.pruebas)

api.post('/login', (req, res) => {
    const isRegistered = users.find((user) => user.id === req.body.idNumber.toString() && user.password === req.body.password.toString())
    if (isRegistered) {
        res.redirect('/courses')
    } else {
        res.redirect(401, '/')
    }
})

module.exports = api
