const express = require('express')
const session = require('express-session')

const coursesService = require('../services/coursesService')
const { loginSuccessful } = require('../controllers/users')
const { authMiddleware } = require('./middlewares')


const app = express()
app.use(session({
    secret: 'ugandan-bois',
    resave: true,
    saveUninitialized: true
}))

app.get('/', authMiddleware, (req, res) => {
    res.render('welcome', {isLoggedIn: req.session.isLoggedIn, user: req.session.user})
})

app.get('/courses', authMiddleware, (req, res) => {
    const courses = coursesService.getCourses()
    const isAdmin = req.session.user.role == 'Coordinador' ? true : false
    res.render('courses', {
      courses,
      isLoggedIn: req.session.isLoggedIn,
      isAdmin: isAdmin
    }
  )
})
app.get('/courses/:id/enrolled', (req, res) => {
    const course = coursesService.getCourseById(req.params.id)
    const enrolledUsers = coursesService.getEnrolledUsersById(req.params.id)
    res.render('enrolled', { course, enrolledUsers, isLoggedIn: req.session.isLoggedIn})
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/registercourse', (req, res) => {
    res.render('registerCourse', {isLoggedIn: req.session.isLoggedIn})
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
    const user = loginSuccessful(req.body)
    if (user) {
        req.session.isLoggedIn = true
        req.session.user = user
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
