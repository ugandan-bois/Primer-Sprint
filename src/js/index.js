import RegisterUser from './components/registerUser'
import RegisterCourse from './components/registerCourse'
import UpdateCourseState from './components/updateCourseState'
import RegisterEnrollment from './components/registerEnrollment'

// const registerUser = new RegisterUser()
const registerCourse = new RegisterCourse();
const updateCourseState = new UpdateCourseState();
const registerEnrollment = new RegisterEnrollment();

var elem = document.querySelector('.collapsible');
var instance = new M.Collapsible(elem, {
  // inDuration: 1000,
  // outDuration: 1000
});
