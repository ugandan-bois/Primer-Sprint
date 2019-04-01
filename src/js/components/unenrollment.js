class Unenrollment {
    constructor() {
        this.events()
    }

    events() {
        const removalButtons = document.getElementsByClassName('ub-btnRemoveUser')
        for (let index = 0; index < removalButtons.length; index++) {
            const button = removalButtons.item(index)
            button.addEventListener('click', this.removeUser)
        }
    }

    removeUser(e) {
        const { userId, courseId } = e.currentTarget.dataset

        fetch(`/api/courses/${courseId}/unenroll/${userId}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if (res.status != 200) {
                res.json()
                .then(() => {
                    M.toast({
                        html: `<i class="material-icons right">error</i> ${body.message}`,
                        classes: "red white-text"
                    })
                })
            } else {
                M.toast({
                    html: '<i class="material-icons right">check_circle</i> Aspirante eliminado exitosamente',
                    classes: "green white-text"
                })
            }
        })
    }
}

export default Unenrollment
