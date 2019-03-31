class RegisterUser {
    constructor() {
        this.form = document.getElementById('formUserRegistration')
        this.registerButton = document.getElementById('submitUserRegistration')
        this.events()
    }

    events() {
        this.registerButton && this.registerButton.addEventListener('click', this.submitUser)
    }

    submitUser(e) {
        e.preventDefault()

        const formData = {
            fullName: this.form.fullName.value,
            idNumber: this.form.idNumber.value,
            password: this.form.password.value,
            confirmPassword: this.form.confirmPassword.value,
            email: this.form.email.value,
            phoneNumber: this.form.phoneNumber.value,
        }

        formData.password !== formData.confirmPassword ?
            this.form.confirmPassword.setCustomValidity('Las contraseñas no coinciden') :
            this.form.confirmPassword.setCustomValidity('')

        const validForm = this.form.checkValidity()
        if (!validForm) return

        fetch('/api/users/create', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(res => console.log(res.json()))
    }
}

export default RegisterUser