class RegisterCourse {
    constructor() {
        this.registerButton = document.getElementById('submitCourseRegistration')
        this.events()
    }

    events() {
        this.registerButton && this.registerButton.addEventListener('click', this.register)
        document.addEventListener('DOMContentLoaded', this.initializeSelect)
    }

    initializeSelect() {
        const elems = document.querySelectorAll('select')
        elems.length > 0 && M.FormSelect.init(elems)
    }

    register(e) {
        // e.preventDefault()
        const form = document.getElementById('courseForm')
        const id = document.getElementById('id').value
        const name = document.getElementById('name').value
        const mode = document.getElementById('mode').value
        const intensity = document.getElementById('intensity').value
        const price = document.getElementById('price').value
        const description = document.getElementById('description').value

        const requestBody = { id, name, mode, intensity, price, description }

        if( id != "" && name != "" && mode != "" && intensity != "" && price != "" && description != ""){
            fetch('/api/course/register', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then((res) => {
                if (res.status != 200) {
                    M.toast({
                        html: '<i class="material-icons right">error</i> Ya existe un curso con este id',
                        classes: "red white-text"
                    })
                } else {
                    M.toast({
                        html: '<i class="material-icons right">check_circle</i> Curso creado satisfactoriamente',
                        classes: "green white-text"
                    })
                    form.reset()
                }
            })
        } else {
            M.toast({
                html: '<i class="material-icons right">warning</i> Hacen falta datos en el formulario',
                classes: "yellow black-text"
            })
        }
    }
}

export default RegisterCourse
