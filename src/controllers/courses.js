const courses = require('../../courses.json')

const getCourses = (req, res) => {
    res.status(200).send(courses)
}

module.exports = {
    getCourses
}