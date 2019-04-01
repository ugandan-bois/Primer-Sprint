const coursesService = require('../services/coursesService')

const getCourses = (req, res) => {
    const courses = coursesService.getCourses()
    res.status(200).send(courses)
}

const createCourse = (req, res) => {
    const newCourse = { ...req.body, state: true, enrollments: []}

    const courses = coursesService.getCourses()

    if (!courses.find(course => course.id == newCourse.id)) {
        const result = coursesService.createCourse(newCourse)
        result ?
            res.status(200).send({
                params: newCourse,
                success: true
            }) :
            res.status(500).send({
                message: 'Error inesperado agregando el curso',
                success: false
            })
    } else {
        res.status(409).send({
            message: 'Ya existe un curso con este id',
            success: false
        })
    }
}

const unenrollUser = (req, res) => {
    const { courseId, userId } = req.params
    const result = coursesService.removeEnrolledUser(courseId, userId)
        result ?
            res.status(200).send({
                message: 'Aspirante eliminado exitosamente',
                success: true
            }) :
            res.status(500).send({
                message: 'Error inesperado eliminando aspirante',
                success: false
            })
}

module.exports = {
    getCourses,
    createCourse,
    unenrollUser
}
