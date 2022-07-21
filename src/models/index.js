const conection = require('../../database/conection')
const User = require('./user')
const Provider = require('./provider')

module.exports = {
    User,
    Provider
}

conection.sync({alter: true})