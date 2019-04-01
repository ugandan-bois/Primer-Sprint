const fs = require('fs')
const courses = require('../../courses.json')
const users = require('../../users.json')

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
    const course = courses.find(course => course.id == id)
    const enrolledUsers = users.filter(user => course.enrollments.includes(user.idNumber)).map(user => ({
        idNumber: user.idNumber,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber
    }))
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