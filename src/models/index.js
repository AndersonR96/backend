import connection from '../../database/connection.js'
import Customer from './customer.js'
import Provider from './provider.js'
import User from './user.js'

export default {
    Customer,
    Provider,
    User
}

connection.sync({alter: true})