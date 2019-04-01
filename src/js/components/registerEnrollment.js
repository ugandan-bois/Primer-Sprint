class RegisterEnrollment {
    constructor() {
        this.registerButton = document.getElementById('registerEnrollments')
        this.events()
    }

    events() {
        this.registerButton && this.registerButton.addEventListener('click', this.registerenroll)
    }

    registerenroll() {
        const id = document.getElementById('id').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const name = document.getElementById('name').value
        const course = document.getElementById('course').value

        const requestBody = { id, email, phone, name, course }
        console.log(requestBody)
        fetch('/api/enrollments/create', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => console.log(res.json()))
    }
}

export default RegisterEnrollment
