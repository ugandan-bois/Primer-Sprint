const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/courses', (req, res) => {
    res.render('courses')
})
app.get('/register', (req, res) => {
    res.render('register')
})

module.exports = app
