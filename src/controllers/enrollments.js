const coursesService = require('../services/coursesService')
const fs = require('fs')


const getEnrollments = (req, res) => {
    const courses = coursesService.getCourses()
    res.status(200).send(courses)
}

const createEnrollment = (req, res) => {
    const params = req.body
    const courses = coursesService.getCourses()
    let curso = courses.find(buscar => buscar.name == params.course)
    if (!curso.enrollments.find(e => e.id == params.id)) {
        curso.enrollments.push(params.id);
        fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
            if (err) throw err
            res.status(200).send(params)
        })
    } else {
        res.status(500).send({message: 'Id already exists'})
    }
}

module.exports = {
  getEnrollments,
  createEnrollment
}
