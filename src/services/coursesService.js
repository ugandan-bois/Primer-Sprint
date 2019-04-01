const fs = require('fs')
const users = require('../../users.json')

const saveCourses = (courses) => {
    try {
        fs.writeFileSync('courses.json', JSON.stringify(courses))
        return true
    } catch (error) {
        return false
    }
}
const getCourses = () => {
    try {
        const courses = JSON.parse(fs.readFileSync('courses.json'))
        return courses
    } catch (error) {
        throw error
    }
}
const getCourseById = (id) => id && getCourses().find(course => course.id == id)
const createCourse = (course) => {
    const courses = getCourses()
    courses.push(course)
    return saveCourses(courses)
}
const getEnrolledUsersById = (id) => {
    const courses = getCourses()
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
    const courses = getCourses()
    const course = courses.find(course => course.id == courseId)
    const enrolledId = course.enrollments.find(id => id == userId)
    enrolledId && course.enrollments.splice(course.enrollments.indexOf(enrolledId), 1)
    return saveCourses(courses)
}

const updateCourseState = (courses) => {
  try {
      fs.writeFileSync('courses.json', JSON.stringify(courses))
      return true
  } catch (error) {
      return false
  }
}


module.exports = {
    getCourses,
    getCourseById,
    getEnrolledUsersById,
    createCourse,
    removeEnrolledUser,
    updateCourseState,
}
