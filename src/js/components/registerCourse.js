class RegisterCourse {
    constructor() {
        this.registerButton = document.getElementById('submitCourseRegistration')
        this.events()
    }

    events() {
        this.registerButton.addEventListener('click', this.register)
    }

    register() {
        const id = document.getElementById('id').value
        const name = document.getElementById('name').value
        const modality = document.getElementById('modality').value
        const intensity = document.getElementById('intensity').value
        const price = document.getElementById('price').value
        const description = document.getElementById('description').value

        const requestBody = { id, name, modality, intensity, price, description }

        fetch('/api/course/register', {
            method: 'POST',
            body: JSON.stringify({"Hola": "hola"}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => console.log(res.json()))
    }
}

export default RegisterCourse