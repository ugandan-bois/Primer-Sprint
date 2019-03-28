const courses = require('../../courses.json')

const getCourses = (req, res) => {
    res.status(200).send(courses)
}

const createCourse = (req, res) => {
    const params = req.body
    console.log(params)
    res.status(200).send(params)
}

module.exports = {
    getCourses,
    createCourse
}