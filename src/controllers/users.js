const users = require('../../users.json')
const fs = require('fs')

const fetch = (req, res) => {
    res.status(200).send(users)
}

const create = (req, res) => {
    const params = req.body
    const userAlreadyExists = users.find(user => user.idNumber === params.idNumber)

    if (userAlreadyExists) {
        res.status(400).send({
            message: 'Ya existe un usuario con el mismo número de cédula'
        })
    } else {
        const newUser = {
            idNumber: params.idNumber,
            fullName: params.fullName,
            password: params.password,
            email: params.email,
            phoneNumber: params.phoneNumber,
            role: 'Aspirante'
        }
        users.push(newUser)
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) throw err
            res.status(200).send({
                message: 'Usuario registrado exitosamente'
            })
        })
    }
}

const loginSuccessful = (data) => {
  const user = users.find((user) => user.idNumber === data.idNumber && user.password === data.password)

  return user || false
}

module.exports = {
    fetch,
    create,
    loginSuccessful
}
