const { courses } = require('../../courses.json')
const fs = require('fs')

const getEnrollments = (req, res) => {
    res.status(200).send(courses)
}

const createEnrollment = (req, res) => {
    const params = req.body
    let curso = courses.find(buscar => buscar.name == params.course)

    if (!curso.enrollments.find(e => e.id == params.id)) {
        curso.enrollments.push(params);
        console.log(curso)
        fs.writeFile('courses.json', JSON.stringify({courses: courses}), (err) => {
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
