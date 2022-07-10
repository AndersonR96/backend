const conection = require('../../database/conection')
const User = require('./user')

module.exports = {
    User
}

conection.sync({alter: true})