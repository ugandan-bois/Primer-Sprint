const fs = require('fs')
const courses = require('../../courses.json')

const saveCourses = () => {
    try {
        fs.writeFileSync('courses.json', JSON.stringify(courses))
        return true
    } catch (error) {
        return false
    }
}
const getCourses = () => courses
const getCourseById = (id) => id && courses.find(course => course.id == id)
const createCourse = (course) => {
    courses.push(course)
    return saveCourses()
}
const getEnrolledUsersById = (id) => {
    const enrolledUsers = [{
            idNumber: 0000,
            fullName: "Foo",
            email: "foo@ub.com",
            phoneNumber: "123456789"
        },
        {
            idNumber: 1037,
            fullName: "Bar",
            email: "bar@ub.com",
            phoneNumber: "123456789"
        }
    ]
    return enrolledUsers
}
const removeEnrolledUser = (courseId, userId) => {
    const course = courses.find(course => course.id == courseId)
    const enrolledId = course.enrollments.find(id => id == userId)
    enrolledId && course.enrollments.splice(course.enrollments.indexOf(enrolledId), 1)
    return saveCourses()
}

module.exports = {
    getCourses,
    getCourseById,
    getEnrolledUsersById,
    createCourse,
    removeEnrolledUser
}