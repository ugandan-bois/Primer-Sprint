const courses = require('../../courses.json')
const fs = require('fs')

const getCourses = (req, res) => {
    res.status(200).send(courses)
}

const createCourse = (req, res) => {
    const params = req.body
    params.state = "Disponible";
    params.enrollments = [];
    
    if (!courses.find(course => course.id == params.id)) {
        courses.push(params)
        fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
            if (err) throw err
            res.status(200).send({params: params, success: true})
        })
    } else {
        res.status(409).send({message: 'Ya existe un curso con este id', success: false})
    }
}

const updateCourse = (req, res) => {
    const params = req.body
    let curso = courses.find(buscar => buscar.name == params.course)
    curso['state'] = params.state
    courses[params.course] = params.state;
    fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
        if (err) throw err
        res.status(200).send(params)
    })
}

module.exports = {
    getCourses,
    createCourse,
    updateCourse
}
