const { courses } = require('../../courses.json')
const fs = require('fs')

const getCourses = (req, res) => {
    res.status(200).send(courses)
}

const createCourse = (req, res) => {
    const params = req.body
    if (!courses.find(course => course.id == params.id)) {
        courses.push(params)
        fs.writeFile('courses.json', JSON.stringify({courses: courses}), (err) => {
            if (err) throw err
            res.status(200).send(params)
        })
    } else {
        res.status(500).send({message: 'Id already exists'})
    }
}

module.exports = {
    getCourses,
    createCourse
}
