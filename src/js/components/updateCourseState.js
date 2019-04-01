class UpdateCourseState {
    constructor() {
        this.registerButton = document.getElementById('submitCourseActualization')
        this.events()
    }

    events() {
        this.registerButton && this.registerButton.addEventListener('click', this.register)
    }

    register() {
        const course = document.getElementById('course').value
        const state = document.getElementById('state').value
        const requestBody = { course, state }

        fetch('/api/course/updatestate', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => console.log(res.json()))
    }
}

export default UpdateCourseState
