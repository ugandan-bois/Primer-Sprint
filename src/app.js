const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicsDIr = path.join(__dirname, '../public')
const partialsDir = path.join(__dirname, '../views/partials')
const nodeModulesDir = path.join(__dirname, '../node_modules')

app.use(express.static(publicsDIr))
app.set('view engine', 'hbs')
hbs.registerPartials(partialsDir)

app.use('/css/materialize', express.static(nodeModulesDir + '/materialize-css/dist/css/materialize.min.css'))
app.use('/js/materialize', express.static(nodeModulesDir + '/materialize-css/dist/js/materialize.min.js'))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/courses', (req, res) => {
    res.render('courses')
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
});