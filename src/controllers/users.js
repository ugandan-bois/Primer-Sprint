const users = require('../../users.json') 
const fs = require('fs')

const pruebas = (req, res) => {
    res.status(200).send({
        message: 'pruebas'
    })
}

const loginSuccessful = (data) => {
    if (users.find((user) => user.id === data.idNumber && user.password === data.password)) {
        return true
    }
    
    return false
}

module.exports = {
    pruebas,
    loginSuccessful
}