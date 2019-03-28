class RegisterUser {
    constructor() {
        this.registerButton = document.getElementById('submitUserRegistration')
        this.events()
    }

    events() {
        this.registerButton.addEventListener('click', this.ejemplo)
    }

    ejemplo() {
        const fullName = document.getElementById('fullName').value
        console.log(fullName)
    }
}

export default RegisterUser