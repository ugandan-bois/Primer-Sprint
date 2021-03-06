const express = require('express')
const path = require('path')
const hbs = require('hbs')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const publicsDir = path.join(__dirname, '../public')
const partialsDir = path.join(__dirname, '../views/partials')
const nodeModulesDir = path.join(__dirname, '../node_modules')

const viewsRoutes = require('./routes/views')
const usersRoutes = require('./routes/users')
const coursesRoutes = require('./routes/courses')
const enrollmentsRoutes = require('./routes/enrollments')

require("./helpers")

app.use(morgan('dev'))

app.use(express.static(publicsDir))
app.set('view engine', 'hbs')
hbs.registerPartials(partialsDir)

app.use('/css/materialize', express.static(nodeModulesDir + '/materialize-css/dist/css/materialize.min.css'))
app.use('/js/materialize', express.static(nodeModulesDir + '/materialize-css/dist/js/materialize.min.js'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', viewsRoutes)
app.use('/api', usersRoutes)
app.use('/api', coursesRoutes)
app.use('/api', enrollmentsRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port 3000')
})
