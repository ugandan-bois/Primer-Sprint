const fs = require('fs')
const courses = require('../../courses.json')

const getCourses = () => courses
const getCourseById = (id) => id && courses.find(course => course.id == id)
const createCourse = (course) => {
    courses.push(course)
    try {
        fs.writeFileSync('courses.json', JSON.stringify(courses))
        return true
    } catch (error) {
        return false
    }
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
    createCourse,
    updateCourseState,
}
