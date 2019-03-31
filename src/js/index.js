import RegisterUser from './components/registerUser'
import RegisterCourse from './components/registerCourse'

// const registerUser = new RegisterUser()
const registerCourse = new RegisterCourse()

var elem = document.querySelector('.collapsible');
var instance = new M.Collapsible(elem, {
  // inDuration: 1000,
  // outDuration: 1000
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
