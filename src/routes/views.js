const express = require('express')
const courses = require('../../courses.json')
const session = require('express-session')
const {loginSuccessful} = require('../controllers/users')

const app = express()
app.use(session({
    secret: 'ugandan-bois',
    resave: true,
    saveUninitialized: true
}))

const authMiddleware = (req, res, next) => {
    if (req.session && req.session.isLoggedIn) {
        return next()
    } else {
        res.redirect('/login')
    }
}

app.get('/', authMiddleware, (req, res) => {
    res.render('welcome', {isLoggedIn: req.session.isLoggedIn})
})
app.get('/courses', (req, res) => {
    res.render('courses', { courses: courses.courses, isLoggedIn: req.session.isLoggedIn})
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/enrollments', (req, res) => {
    res.render('enrollments', { courses: courses.courses })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    if (loginSuccessful(req.body)) {
        req.session.isLoggedIn = true
        res.redirect('/')
    } else {
        res.redirect('/login')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

module.exports = app
