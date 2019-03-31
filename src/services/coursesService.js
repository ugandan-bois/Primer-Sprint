const fs = require('fs')
const courses = require('../../courses.json')

const getCourses = () => courses
const getCourseById = (id) => id && courses.find(course => course.id == id)
const getEnrolledUsersById = (id) => {
    const enrolledUsers = [{
            idNumber: "1",
            fullName: "Foo",
            email: "foo@ub.com",
            phoneNumber: "123456789"
        },
        {
            idNumber: "2",
            fullName: "Bar",
            email: "bar@ub.com",
            phoneNumber: "123456789"
        }
    ]
    return enrolledUsers
}
const createCourse = (course) => {
    courses.push(course)
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
    createCourse
}