const express = require('express')
const UserController = require('../controllers/user')

const api = express.Router();

api.get('/pruebas', UserController.pruebas)

api.post('/login', (req, res) => {

  const isRegistered = users.find((user) => user.id === req.body.idNumber.toString() && user.password === req.body.password.toString())

  if (isRegistered) {
    res.redirect('/courses')
  } else {
    res.redirect(401, '/')
  }

})

module.exports = api;
